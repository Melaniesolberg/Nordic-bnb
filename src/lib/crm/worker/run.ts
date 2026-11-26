import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { crmEnv, isOutreachSendingEnabled, isSmtpConfigured } from "@/lib/crm/config";
import { BudgetExceededError, osloDayStart, osloNow, osloWeekStart } from "@/lib/crm/budget";
import { searchBrreg } from "@/lib/crm/brreg";
import { SEGMENTS, type Segment, type Service } from "@/lib/crm/constants";
import { importCompanies } from "@/lib/crm/import";
import { sendMail } from "@/lib/crm/mailer";
import { computeWeeklyReport, reportAsText } from "@/lib/crm/report";
import { analyzeCompany } from "@/lib/crm/research";
import { approveMessages, deliverMessage } from "@/lib/crm/send";
import { loadSettings, type CrmSettings } from "@/lib/crm/settings";
import { syncInbox, type InboxStats } from "@/lib/crm/worker/inbox";
import { followUpDraft, followUpDue, inSendWindow } from "@/lib/crm/worker/rules";

/**
 * One background run. Order matters: read the inbox first, so a reply that
 * arrived since the last run stops any send or follow-up planned below.
 *
 *   1. inbox    – replies, opt-outs and bounces (always, if IMAP is set)
 *   2. send     – approved messages (only if sending is switched on)
 *   3. follow-ups – drafts, approved only if that setting is on
 *   4. research – find and analyse new companies up to the daily target
 *   5. report   – Monday: last week's report
 */

export type WorkerMode = "all" | "send";

export interface WorkerStats {
  inbox?: InboxStats | { error: string };
  sent?: number;
  send_skipped?: string;
  send_errors?: string[];
  followups_drafted?: number;
  followups_approved?: number;
  discovered?: number;
  analyzed?: number;
  analysis_failed?: number;
  research_skipped?: string;
  report?: string;
}

export function workerClient(): SupabaseClient {
  if (!crmEnv.supabaseUrl || !crmEnv.supabaseServiceRoleKey) throw new Error("SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY mangler.");
  return createClient(crmEnv.supabaseUrl, crmEnv.supabaseServiceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const errMsg = (e: unknown) => (e instanceof Error ? e.message : String(e)).slice(0, 300);

export async function runWorker(opts: { trigger: "schedule" | "manual" | "send"; mode: WorkerMode; deadline: number }) {
  const supabase = workerClient();
  const settings = await loadSettings(supabase);
  if (!settings) throw new Error("crm_settings mangler. Kjør migreringen 20261127000000_crm_autopilot.sql.");

  // Simple lock: skip if another run started in the last 16 minutes.
  const { data: run, error: runErr } = await supabase.from("worker_runs").insert({ trigger: opts.trigger }).select("id, started_at").single();
  if (runErr || !run) throw new Error(runErr?.message ?? "Kunne ikke starte kjøring");
  const { data: others } = await supabase
    .from("worker_runs")
    .select("id")
    .eq("status", "running")
    .neq("id", run.id)
    .gte("started_at", new Date(Date.now() - 16 * 60 * 1000).toISOString())
    .lte("started_at", run.started_at)
    .limit(1);
  if (others?.length) {
    await supabase.from("worker_runs").update({ status: "skipped", finished_at: new Date().toISOString(), error: "En annen kjøring pågår" }).eq("id", run.id);
    return { skipped: true };
  }

  const stats: WorkerStats = {};
  try {
    try {
      stats.inbox = await syncInbox(supabase, Math.min(opts.deadline, Date.now() + 3 * 60 * 1000));
    } catch (e) {
      stats.inbox = { error: errMsg(e) };
    }

    await sendStep(supabase, settings, opts.deadline, stats);
    if (opts.mode === "all") {
      await followUpStep(supabase, settings, stats);
      await researchStep(supabase, settings, opts.deadline, stats);
      await reportStep(supabase, settings, stats);
    }
    await supabase.from("worker_runs").update({ status: "done", stats, finished_at: new Date().toISOString() }).eq("id", run.id);
    return { skipped: false, stats };
  } catch (e) {
    await supabase.from("worker_runs").update({ status: "failed", stats, error: errMsg(e), finished_at: new Date().toISOString() }).eq("id", run.id);
    throw e;
  }
}

// --- 2. Sending ------------------------------------------------------------

async function sendStep(supabase: SupabaseClient, settings: CrmSettings, deadline: number, stats: WorkerStats) {
  if (!isOutreachSendingEnabled() || !isSmtpConfigured()) {
    stats.send_skipped = "Utsending er slått av eller SMTP mangler";
    return;
  }
  const { count: sentToday } = await supabase
    .from("outreach_messages")
    .select("id", { count: "exact", head: true })
    .eq("status", "sent")
    .gte("sent_at", osloDayStart().toISOString());
  let remaining = settings.daily_send_cap - (sentToday ?? 0);
  if (remaining <= 0) {
    stats.send_skipped = "Dagens sendegrense er nådd";
    return;
  }

  // «Send nå» from the approval queue: an explicit request by a person.
  const { data: requested } = await supabase
    .from("outreach_messages")
    .select("id")
    .eq("status", "approved")
    .not("send_requested_at", "is", null)
    .order("send_requested_at")
    .limit(remaining);
  const ids = (requested ?? []).map((r) => r.id as string);

  // Automatic sending of approved messages, only inside the window.
  if (settings.auto_send_enabled && inSendWindow(settings) && ids.length < remaining) {
    const { data: auto } = await supabase
      .from("outreach_messages")
      .select("id")
      .eq("status", "approved")
      .is("send_requested_at", null)
      .order("approved_at")
      .limit(remaining - ids.length);
    ids.push(...(auto ?? []).map((r) => r.id as string));
  }
  if (!ids.length) return;

  stats.sent = 0;
  stats.send_errors = [];
  for (const [i, id] of ids.entries()) {
    if (remaining <= 0 || Date.now() > deadline - 60_000) break;
    const r = await deliverMessage(supabase, id, { userId: null, via: "worker" });
    if (r.ok) {
      stats.sent++;
      remaining--;
    } else {
      stats.send_errors.push(r.reason);
      // A blocked message must not stay in the «send now» queue.
      if (r.code === "blocked") await supabase.from("outreach_messages").update({ send_requested_at: null, error: r.reason }).eq("id", id);
    }
    // Spread sends out (20–45 s) – looks like a person, protects the domain.
    if (i < ids.length - 1) await sleep(20_000 + Math.floor(Math.random() * 25_000));
  }
}

// --- 3. Follow-ups ---------------------------------------------------------

async function followUpStep(supabase: SupabaseClient, settings: CrmSettings, stats: WorkerStats) {
  if (!settings.followup_enabled || settings.followup_max_steps <= 0) return;
  const cutoff = new Date(Date.now() - settings.followup_after_days * 24 * 3600 * 1000).toISOString();
  const { data: due } = await supabase
    .from("outreach_messages")
    .select("id, company_id, to_email, subject, sequence_step, sent_at, companies(status, do_not_contact, replied_at, recommended_service)")
    .eq("status", "sent")
    .is("replied_at", null)
    .is("bounced_at", null)
    .lte("sent_at", cutoff)
    .lt("sequence_step", 1 + settings.followup_max_steps)
    .order("sent_at")
    .limit(100);

  stats.followups_drafted = 0;
  stats.followups_approved = 0;
  for (const m of due ?? []) {
    const c = m.companies as unknown as { status: string; do_not_contact: boolean; replied_at: string | null; recommended_service: Service | null } | null;
    if (!c || c.do_not_contact || c.replied_at || !["contacted", "qualified", "researched"].includes(c.status)) continue;
    if (!m.sent_at || !followUpDue(m.sent_at, settings.followup_after_days)) continue;
    // Only one follow-up per message, and never if a newer mail went out.
    const { count: children } = await supabase.from("outreach_messages").select("id", { count: "exact", head: true }).eq("parent_message_id", m.id);
    if (children) continue;
    const { count: newer } = await supabase
      .from("outreach_messages")
      .select("id", { count: "exact", head: true })
      .eq("company_id", m.company_id)
      .gt("created_at", m.sent_at)
      .in("status", ["draft", "approved", "sent"]);
    if (newer) continue;

    const step = (m.sequence_step ?? 1) + 1;
    const draft = followUpDraft({ subject: m.subject, step, service: c.recommended_service });
    const { data: created } = await supabase
      .from("outreach_messages")
      .insert({
        company_id: m.company_id,
        to_email: m.to_email,
        subject: draft.subject,
        body: draft.body,
        status: "draft",
        generated_by: "template",
        sequence_step: step,
        parent_message_id: m.id,
        prompt_version: `followup-v1`,
      })
      .select("id")
      .single();
    if (!created) continue;
    stats.followups_drafted++;
    if (settings.followup_auto_approve) {
      const [r] = await approveMessages(supabase, [created.id], null, { auto: true });
      if (r?.ok) stats.followups_approved++;
    }
  }
}

// --- 4. Research -----------------------------------------------------------

interface DiscoveryCursor {
  segment: number;
  page: Record<string, number>;
}

async function researchStep(supabase: SupabaseClient, settings: CrmSettings, deadline: number, stats: WorkerStats) {
  if (!settings.autopilot_enabled) {
    stats.research_skipped = "Autopilot er slått av";
    return;
  }
  if (!crmEnv.anthropicConfigured) {
    stats.research_skipped = "ANTHROPIC_API_KEY mangler";
    return;
  }
  const { count: doneToday } = await supabase
    .from("ai_usage")
    .select("id", { count: "exact", head: true })
    .eq("triggered_by", "worker")
    .eq("purpose", "analysis")
    .gte("created_at", osloDayStart().toISOString());
  let remaining = Math.min(50, settings.daily_target) - (doneToday ?? 0);
  if (remaining <= 0) {
    stats.research_skipped = "Dagens mål er nådd";
    return;
  }

  // Backlog first: companies already imported but never analysed.
  const backlog = async (n: number) => {
    const { data } = await supabase
      .from("companies")
      .select("id")
      .eq("status", "new")
      .eq("do_not_contact", false)
      .is("analyzed_at", null)
      .order("created_at")
      .limit(n);
    return (data ?? []).map((r) => r.id as string);
  };
  let queue = await backlog(remaining);

  if (queue.length < remaining) {
    stats.discovered = await discover(supabase, settings, remaining - queue.length, deadline);
    queue = await backlog(remaining);
  }

  stats.analyzed = 0;
  stats.analysis_failed = 0;
  for (const id of queue) {
    if (remaining <= 0 || Date.now() > deadline - 90_000) break;
    try {
      await analyzeCompany(supabase, id, null, "worker");
      stats.analyzed++;
    } catch (e) {
      if (e instanceof BudgetExceededError) {
        stats.research_skipped = e.message;
        break;
      }
      stats.analysis_failed++;
      // Park it so the same company isn't retried (and paid for) every run.
      await supabase.from("companies").update({ analyzed_at: new Date().toISOString(), analysis: { error: errMsg(e) } }).eq("id", id);
    }
    remaining--;
  }
}

async function discover(supabase: SupabaseClient, settings: CrmSettings, wanted: number, deadline: number): Promise<number> {
  const segments = settings.discovery_segments.filter((s): s is Exclude<Segment, "other"> => s in SEGMENTS && s !== "other");
  if (!segments.length) return 0;
  const { data: row } = await supabase.from("worker_state").select("value").eq("key", "discovery").maybeSingle();
  const cursor: DiscoveryCursor = (row?.value as DiscoveryCursor | undefined) ?? { segment: 0, page: {} };

  let imported = 0;
  for (let tries = 0; tries < segments.length * 3 && imported < wanted; tries++) {
    if (Date.now() > deadline - 5 * 60_000) break;
    const segment = segments[cursor.segment % segments.length];
    const page = cursor.page[segment] ?? 0;
    try {
      const { candidates, total } = await searchBrreg({
        segment,
        municipalities: settings.discovery_municipalities,
        size: 50,
        page,
        requireWebsite: settings.require_website,
      });
      const result = await importCompanies(supabase, candidates, null);
      imported += result.imported;
      for (const cid of result.ids)
        await supabase.from("activities").insert({ company_id: cid, type: "import", summary: "Funnet automatisk i Brønnøysundregistrene" });
      // Next page of this segment next time; wrap around at the end.
      cursor.page[segment] = (page + 1) * 50 >= Math.min(total, 10_000) ? 0 : page + 1;
    } catch (e) {
      console.error("discovery failed", segment, errMsg(e));
    }
    cursor.segment = (cursor.segment + 1) % segments.length;
  }
  await supabase.from("worker_state").upsert({ key: "discovery", value: cursor, updated_at: new Date().toISOString() });
  return imported;
}

// --- 5. Weekly report ------------------------------------------------------

async function reportStep(supabase: SupabaseClient, settings: CrmSettings, stats: WorkerStats) {
  const now = osloNow();
  if (now.weekday !== 1) return; // Mondays: report for last week
  const thisWeek = osloWeekStart();
  const [y, m, d] = thisWeek.split("-").map(Number);
  const lastWeek = new Date(Date.UTC(y, m - 1, d - 7)).toISOString().slice(0, 10);
  const { data: existing } = await supabase.from("weekly_reports").select("week_start, emailed_at").eq("week_start", lastWeek).maybeSingle();
  if (existing?.emailed_at || (existing && (!settings.report_email || !isSmtpConfigured()))) return;

  const report = await computeWeeklyReport(supabase, lastWeek, settings);
  await supabase.from("weekly_reports").upsert({ week_start: lastWeek, data: report });
  stats.report = lastWeek;

  if (settings.report_email && isSmtpConfigured()) {
    try {
      await sendMail({
        to: settings.report_email,
        subject: `Ukerapport Eiendomly ${report.week_start}`,
        text: reportAsText(report, crmEnv.siteUrl),
        unsubscribeUrl: null,
      });
      await supabase.from("weekly_reports").update({ emailed_at: new Date().toISOString() }).eq("week_start", lastWeek);
    } catch (e) {
      console.error("report mail failed", errMsg(e));
    }
  }
}
