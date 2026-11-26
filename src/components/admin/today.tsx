import Link from "next/link";
import type { SupabaseClient } from "@supabase/supabase-js";
import { aiSpend, osloDayStart } from "@/lib/crm/budget";
import { loadSettings } from "@/lib/crm/settings";
import { isOutreachSendingEnabled } from "@/lib/crm/config";
import { Badge, Card, dateTime } from "@/components/admin/ui";

/**
 * «I dag»: the 15-minute routine on one card. Replies first (a person must
 * answer them), then the approval queue, then the health of the autopilot.
 */
export async function TodayPanel({ supabase }: { supabase: SupabaseClient }) {
  const settings = await loadSettings(supabase);
  if (!settings) {
    return (
      <Card title="I dag" className="mb-4">
        <p className="text-sm text-charcoal/70">
          Autopiloten er ikke installert. Kjør migreringen <code>20261127000000_crm_autopilot.sql</code> i Supabase.
        </p>
      </Card>
    );
  }
  const dayStart = osloDayStart().toISOString();
  const [review, drafts, followDrafts, approved, sentToday, lastRun, spent] = await Promise.all([
    supabase.from("companies").select("id, name, replied_at").eq("needs_review", true).order("replied_at", { ascending: false }).limit(5),
    supabase.from("outreach_messages").select("id", { count: "exact", head: true }).eq("status", "draft"),
    supabase.from("outreach_messages").select("id", { count: "exact", head: true }).eq("status", "draft").gt("sequence_step", 1),
    supabase.from("outreach_messages").select("id", { count: "exact", head: true }).eq("status", "approved"),
    supabase.from("outreach_messages").select("id", { count: "exact", head: true }).eq("status", "sent").gte("sent_at", dayStart),
    supabase.from("worker_runs").select("status, started_at, error").order("started_at", { ascending: false }).limit(1),
    aiSpend(supabase).catch(() => ({ today: 0, month: 0 })),
  ]);
  const run = lastRun.data?.[0];
  const reviewList = review.data ?? [];
  const sending = isOutreachSendingEnabled();

  const step = "flex items-center justify-between gap-3 rounded-md border border-charcoal/10 px-3 py-2.5 text-sm hover:border-charcoal/30";
  return (
    <Card title="I dag" className="mb-4">
      <ol className="grid gap-2 md:grid-cols-3">
        <li>
          <Link href="/admin/prospects?review=1" className={step}>
            <span>
              <span className="block font-medium">1. Svar som venter</span>
              <span className="text-xs text-charcoal/60">Svar personlig, registrer utfall</span>
            </span>
            <Badge color={reviewList.length ? "amber" : "gray"}>{reviewList.length}</Badge>
          </Link>
        </li>
        <li>
          <Link href="/admin/outreach?tab=draft" className={step}>
            <span>
              <span className="block font-medium">2. Godkjenn meldinger</span>
              <span className="text-xs text-charcoal/60">{followDrafts.count ? `${followDrafts.count} oppfølginger` : "Les og kryss av"}</span>
            </span>
            <Badge color={drafts.count ? "blue" : "gray"}>{drafts.count ?? 0}</Badge>
          </Link>
        </li>
        <li>
          <Link href="/admin/outreach?tab=approved" className={step}>
            <span>
              <span className="block font-medium">3. Send</span>
              <span className="text-xs text-charcoal/60">
                {sending ? `Sendt i dag ${sentToday.count ?? 0} av ${settings.daily_send_cap}` : "Utsending er av"}
              </span>
            </span>
            <Badge color={approved.count ? "green" : "gray"}>{approved.count ?? 0}</Badge>
          </Link>
        </li>
      </ol>
      {reviewList.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {reviewList.map((c) => (
            <li key={c.id}>
              <Link href={`/admin/prospects/${c.id}`} className="underline">{c.name}</Link>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-3 text-xs text-charcoal/60">
        Autopilot {settings.autopilot_enabled ? "på" : "av"} · AI i dag {spent.today.toFixed(2)} / {Number(settings.ai_daily_budget_nok)} kr · måned{" "}
        {Math.round(spent.month)} / {Number(settings.ai_monthly_budget_nok)} kr · Siste kjøring{" "}
        {run ? `${dateTime(run.started_at)} (${run.status})` : "ingen ennå"}
        {run?.error ? ` – ${run.error}` : ""}
      </p>
    </Card>
  );
}
