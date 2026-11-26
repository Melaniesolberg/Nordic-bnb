import type { SupabaseClient } from "@supabase/supabase-js";
import { osloMidnight } from "@/lib/crm/budget";
import { CHANNELS, SEGMENTS, SERVICES, type Service } from "@/lib/crm/constants";
import type { CrmSettings } from "@/lib/crm/settings";

/**
 * Weekly money-per-hour report. Revenue is won deals closed in the week.
 * Costs are direct delivery costs, AI usage and the marketing spend typed in
 * under Rapporter. Hours are logged activity minutes, delivery time per
 * order and hours typed in per channel. Estimates come from Innstillinger
 * wherever a deal has no own figure.
 */

export interface Row {
  key: string;
  label: string;
  revenue: number;
  costs: number;
  hours: number;
  deals: number;
  profit: number;
  profit_per_hour: number | null;
}

export interface VariantRow {
  key: string;
  label: string;
  sent: number;
  replies: number;
  customers: number;
  revenue: number;
}

export interface WeeklyReport {
  week_start: string;
  week_end: string;
  totals: Row;
  by_channel: Row[];
  by_segment: Row[];
  by_service: Row[];
  /** Last 180 days, so small numbers add up to something readable. */
  by_message: VariantRow[];
  ai_cost_nok: number;
  outreach: { sent: number; replies: number; opt_outs: number; bounces: number; approvals: number };
}

type Acc = { revenue: number; costs: number; hours: number; deals: number };
const empty = (): Acc => ({ revenue: 0, costs: 0, hours: 0, deals: 0 });

function finish(key: string, label: string, a: Acc): Row {
  const profit = a.revenue - a.costs;
  return {
    key,
    label,
    revenue: Math.round(a.revenue),
    costs: Math.round(a.costs),
    hours: Math.round(a.hours * 10) / 10,
    deals: a.deals,
    profit: Math.round(profit),
    profit_per_hour: a.hours > 0 ? Math.round(profit / a.hours) : null,
  };
}

async function all<T>(build: (from: number, to: number) => PromiseLike<{ data: unknown; error: { message: string } | null }>): Promise<T[]> {
  const out: T[] = [];
  for (let from = 0; from < 20000; from += 1000) {
    const res = await build(from, from + 999);
    if (res.error) throw new Error(res.error.message);
    const data = res.data as T[] | null;
    out.push(...(data ?? []));
    if (!data || data.length < 1000) break;
  }
  return out;
}

export function weekRange(weekStart: string) {
  const [y, m, d] = weekStart.split("-").map(Number);
  const start = osloMidnight(y, m, d);
  const endDate = new Date(Date.UTC(y, m - 1, d + 7));
  const end = osloMidnight(endDate.getUTCFullYear(), endDate.getUTCMonth() + 1, endDate.getUTCDate());
  return { start, end, endDate: new Date(Date.UTC(y, m - 1, d + 6)).toISOString().slice(0, 10) };
}

export async function computeWeeklyReport(supabase: SupabaseClient, weekStart: string, settings: CrmSettings): Promise<WeeklyReport> {
  const { start, end, endDate } = weekRange(weekStart);
  const s = start.toISOString();
  const e = end.toISOString();
  const since180 = new Date(end.getTime() - 180 * 24 * 3600 * 1000).toISOString();

  const [deals, activities, aiRows, spend, approvals, sentAll, deals180] = await Promise.all([
    all<{ company_id: string; service: Service; channel: string; amount_nok: number; segment: string | null; delivery_minutes: number | null; direct_cost_nok: number | null; companies: { segment: string } | null }>((f, t) =>
      supabase
        .from("deals")
        .select("company_id, service, channel, amount_nok, segment, delivery_minutes, direct_cost_nok, companies(segment)")
        .eq("status", "won")
        .gte("closed_at", s)
        .lt("closed_at", e)
        .range(f, t),
    ),
    all<{ type: string; minutes: number | null; companies: { acquisition_channel: string | null } | null }>((f, t) =>
      supabase.from("activities").select("type, minutes, companies(acquisition_channel)").gte("occurred_at", s).lt("occurred_at", e).range(f, t),
    ),
    all<{ cost_nok: number }>((f, t) => supabase.from("ai_usage").select("cost_nok").gte("created_at", s).lt("created_at", e).range(f, t)),
    all<{ channel: string; amount_nok: number; hours: number }>((f, t) => supabase.from("channel_costs").select("channel, amount_nok, hours").eq("week_start", weekStart).range(f, t)),
    supabase.from("outreach_messages").select("id", { count: "exact", head: true }).eq("auto_approved", false).gte("approved_at", s).lt("approved_at", e),
    all<{ id: string; company_id: string; prompt_version: string | null; sequence_step: number | null; replied_at: string | null }>((f, t) =>
      supabase.from("outreach_messages").select("id, company_id, prompt_version, sequence_step, replied_at").not("sent_at", "is", null).gte("sent_at", since180).range(f, t),
    ),
    all<{ company_id: string; amount_nok: number; source_message_id: string | null }>((f, t) =>
      supabase.from("deals").select("company_id, amount_nok, source_message_id").eq("status", "won").gte("closed_at", since180).lt("closed_at", e).range(f, t),
    ),
  ]);

  const byChannel = new Map<string, Acc>();
  const bySegment = new Map<string, Acc>();
  const byService = new Map<string, Acc>();
  const get = (m: Map<string, Acc>, k: string) => (m.get(k) ?? m.set(k, empty()).get(k))!;
  const totals = empty();

  for (const d of deals) {
    const amount = Number(d.amount_nok) || 0;
    const minutes = d.delivery_minutes ?? settings.delivery_minutes[d.service] ?? 0;
    const cost = d.direct_cost_nok !== null && d.direct_cost_nok !== undefined ? Number(d.direct_cost_nok) : settings.direct_cost_nok[d.service] ?? 0;
    const seg = d.segment ?? d.companies?.segment ?? "other";
    for (const acc of [get(byChannel, d.channel), get(bySegment, seg), get(byService, d.service), totals]) {
      acc.revenue += amount;
      acc.costs += cost;
      acc.hours += minutes / 60;
      acc.deals += 1;
    }
  }

  const counts = { sent: 0, replies: 0, opt_outs: 0, bounces: 0 };
  for (const a of activities) {
    if (a.type === "email_sent") counts.sent++;
    if (a.type === "reply") counts.replies++;
    if (a.type === "opt_out") counts.opt_outs++;
    if (a.type === "bounce") counts.bounces++;
    // Automatic entries cost no working time.
    if (["email_sent", "ai_analysis", "import", "bounce", "status_change"].includes(a.type)) continue;
    const minutes = a.minutes ?? settings.minutes_per_activity[a.type] ?? 0;
    const ch = a.companies?.acquisition_channel ?? "outreach";
    get(byChannel, ch).hours += minutes / 60;
    totals.hours += minutes / 60;
  }

  const approvalHours = ((approvals.count ?? 0) * (settings.minutes_per_activity.approve ?? 1)) / 60;
  get(byChannel, "outreach").hours += approvalHours;
  totals.hours += approvalHours;

  const aiCost = aiRows.reduce((sum, r) => sum + (Number(r.cost_nok) || 0), 0);
  get(byChannel, "outreach").costs += aiCost;
  totals.costs += aiCost;

  for (const c of spend) {
    const acc = get(byChannel, c.channel);
    acc.costs += Number(c.amount_nok) || 0;
    acc.hours += Number(c.hours) || 0;
    totals.costs += Number(c.amount_nok) || 0;
    totals.hours += Number(c.hours) || 0;
  }

  // Message variants: which first mail / follow-up step leads to paying customers.
  const variant = (m: { prompt_version: string | null; sequence_step: number | null }) => {
    const step = m.sequence_step ?? 1;
    return `${m.prompt_version ?? "manuell"}|${step}`;
  };
  const variants = new Map<string, VariantRow>();
  const msgById = new Map(sentAll.map((m) => [m.id, m]));
  for (const m of sentAll) {
    const k = variant(m);
    const [pv, step] = k.split("|");
    const row = variants.get(k) ?? { key: k, label: `${pv} · ${Number(step) > 1 ? `oppfølging ${Number(step) - 1}` : "første e-post"}`, sent: 0, replies: 0, customers: 0, revenue: 0 };
    row.sent++;
    if (m.replied_at) row.replies++;
    variants.set(k, row);
  }
  const counted = new Set<string>();
  for (const d of deals180) {
    const m = d.source_message_id ? msgById.get(d.source_message_id) : undefined;
    if (!m) continue;
    const row = variants.get(variant(m));
    if (!row) continue;
    row.revenue += Number(d.amount_nok) || 0;
    const ck = `${row.key}|${d.company_id}`;
    if (!counted.has(ck)) {
      counted.add(ck);
      row.customers++;
    }
  }

  const rows = (m: Map<string, Acc>, labels: Record<string, string>) =>
    [...m.entries()].map(([k, a]) => finish(k, labels[k] ?? k, a)).sort((a, b) => b.profit - a.profit);

  return {
    week_start: weekStart,
    week_end: endDate,
    totals: finish("total", "Totalt", totals),
    by_channel: rows(byChannel, CHANNELS),
    by_segment: rows(bySegment, SEGMENTS),
    by_service: rows(byService, SERVICES),
    by_message: [...variants.values()].sort((a, b) => b.customers - a.customers || b.replies - a.replies),
    ai_cost_nok: Math.round(aiCost * 100) / 100,
    outreach: { ...counts, approvals: approvals.count ?? 0 },
  };
}

const kr = (n: number) => `${Math.round(n).toLocaleString("nb-NO")} kr`;

export function reportAsText(r: WeeklyReport, adminUrl: string): string {
  const line = (x: Row) =>
    `- ${x.label}: ${kr(x.revenue)} omsetning, ${kr(x.profit)} fortjeneste, ${x.hours} t${x.profit_per_hour !== null ? `, ${kr(x.profit_per_hour)}/t` : ""}`;
  return [
    `Ukerapport Eiendomly ${r.week_start} – ${r.week_end}`,
    "",
    `Omsetning: ${kr(r.totals.revenue)}  ·  Fortjeneste: ${kr(r.totals.profit)}  ·  Timer: ${r.totals.hours}${r.totals.profit_per_hour !== null ? `  ·  ${kr(r.totals.profit_per_hour)} per time` : ""}`,
    `AI-kostnad: ${kr(r.ai_cost_nok)}  ·  Sendt: ${r.outreach.sent}  ·  Svar: ${r.outreach.replies}  ·  Avmeldt: ${r.outreach.opt_outs}  ·  Retur: ${r.outreach.bounces}`,
    "",
    "Per kanal (best først):",
    ...(r.by_channel.length ? r.by_channel.map(line) : ["- ingen data"]),
    "",
    "Per kundetype:",
    ...(r.by_segment.length ? r.by_segment.map(line) : ["- ingen salg denne uken"]),
    "",
    "Per tjeneste:",
    ...(r.by_service.length ? r.by_service.map(line) : ["- ingen salg denne uken"]),
    "",
    "Salgsmeldinger siste 180 dager (kunder / svar / sendt):",
    ...(r.by_message.length ? r.by_message.slice(0, 8).map((v) => `- ${v.label}: ${v.customers} / ${v.replies} / ${v.sent}`) : ["- ingen sendte meldinger ennå"]),
    "",
    `Hele rapporten: ${adminUrl}/admin/reports?week=${r.week_start}`,
  ].join("\n");
}
