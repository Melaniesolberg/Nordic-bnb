import type { SupabaseClient } from "@supabase/supabase-js";
import type { AnalysisUsage } from "@/lib/crm/ai";
import type { Segment } from "@/lib/crm/constants";

/**
 * AI cost control. Before every Claude call (manual or background) the
 * worst-case cost of that call is checked against what is already spent
 * today and this month (Oslo time). After the call the real token usage is
 * written to `ai_usage`, so the caps are based on actual spend.
 */

/** USD per million tokens. Unknown models are priced high on purpose. */
const PRICES: Record<string, { input: number; output: number }> = {
  "claude-opus-5-5": { input: 4, output: 20 },
  "claude-opus-5": { input: 5, output: 25 },
  "claude-opus-4-8": { input: 5, output: 25 },
  "claude-sonnet-5-5": { input: 2, output: 10 },
  "claude-haiku-5-5": { input: 0.1, output: 0.5 },
  "claude-fable-5-2": { input: 8, output: 40 },
};
const UNKNOWN_PRICE = { input: 10, output: 50 };

export function priceFor(model: string) {
  const base = Object.keys(PRICES)
    .sort((a, b) => b.length - a.length)
    .find((k) => model === k || model.startsWith(`${k}-`));
  return base ? PRICES[base] : UNKNOWN_PRICE;
}

export function costUsd(u: Omit<AnalysisUsage, "model"> & { model: string }): number {
  const p = priceFor(u.model);
  return (
    (u.input_tokens * p.input +
      u.output_tokens * p.output +
      u.cache_read_tokens * p.input * 0.1 +
      u.cache_write_tokens * p.input * 1.25) /
    1_000_000
  );
}

/** Rough upper bound for one analysis: prompt + website text in, max_tokens out. */
export function worstCaseUsd(model: string, inputChars: number, maxTokens: number): number {
  const inputTokens = Math.ceil(inputChars / 3) + 2000;
  return costUsd({ model, input_tokens: inputTokens, output_tokens: maxTokens, cache_read_tokens: 0, cache_write_tokens: 0 });
}

export interface BudgetSettings {
  ai_daily_budget_nok: number;
  ai_monthly_budget_nok: number;
  usd_nok_rate: number;
}

export function budgetDecision(i: {
  spentTodayNok: number;
  spentMonthNok: number;
  nextCallNok: number;
  settings: BudgetSettings;
}): { ok: true } | { ok: false; reason: string } {
  const { spentTodayNok, spentMonthNok, nextCallNok, settings } = i;
  if (spentTodayNok + nextCallNok > Number(settings.ai_daily_budget_nok))
    return {
      ok: false,
      reason: `Dagens AI-budsjett er brukt opp (${spentTodayNok.toFixed(2)} av ${Number(settings.ai_daily_budget_nok)} kr).`,
    };
  if (spentMonthNok + nextCallNok > Number(settings.ai_monthly_budget_nok))
    return {
      ok: false,
      reason: `Månedens AI-budsjett er brukt opp (${spentMonthNok.toFixed(2)} av ${Number(settings.ai_monthly_budget_nok)} kr).`,
    };
  return { ok: true };
}

// --- Oslo calendar helpers -------------------------------------------------

function osloOffsetMs(at: Date): number {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Oslo",
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
      .formatToParts(at)
      .map((x) => [x.type, x.value]),
  );
  const asUtc = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second);
  return asUtc - Math.floor(at.getTime() / 1000) * 1000;
}

/** Local Oslo calendar fields for a moment in time. */
export function osloNow(at = new Date()) {
  const local = new Date(at.getTime() + osloOffsetMs(at));
  return {
    year: local.getUTCFullYear(),
    month: local.getUTCMonth() + 1,
    day: local.getUTCDate(),
    hour: local.getUTCHours(),
    weekday: local.getUTCDay(), // 0 = Sunday
    date: local.toISOString().slice(0, 10),
  };
}

/** UTC instant of 00:00 Oslo time on the given local date. */
export function osloMidnight(year: number, month: number, day: number): Date {
  const guess = new Date(Date.UTC(year, month - 1, day));
  const first = new Date(guess.getTime() - osloOffsetMs(guess));
  // Correct once more around DST changes.
  return new Date(guess.getTime() - osloOffsetMs(first));
}

export function osloDayStart(at = new Date()): Date {
  const n = osloNow(at);
  return osloMidnight(n.year, n.month, n.day);
}

export function osloMonthStart(at = new Date()): Date {
  const n = osloNow(at);
  return osloMidnight(n.year, n.month, 1);
}

/** Monday (local date string) of the week containing `at`. */
export function osloWeekStart(at = new Date()): string {
  const n = osloNow(at);
  const back = (n.weekday + 6) % 7;
  const d = new Date(Date.UTC(n.year, n.month - 1, n.day - back));
  return d.toISOString().slice(0, 10);
}

// --- Database --------------------------------------------------------------

async function sumCostSince(supabase: SupabaseClient, since: Date): Promise<number> {
  let total = 0;
  for (let from = 0; ; from += 1000) {
    const { data, error } = await supabase
      .from("ai_usage")
      .select("cost_nok")
      .gte("created_at", since.toISOString())
      .range(from, from + 999);
    if (error) throw new Error(`Kunne ikke lese AI-forbruk: ${error.message}`);
    for (const r of data ?? []) total += Number(r.cost_nok) || 0;
    if (!data || data.length < 1000) return total;
  }
}

export async function loadBudgetSettings(supabase: SupabaseClient): Promise<BudgetSettings> {
  const { data, error } = await supabase
    .from("crm_settings")
    .select("ai_daily_budget_nok, ai_monthly_budget_nok, usd_nok_rate")
    .eq("id", 1)
    .maybeSingle<BudgetSettings>();
  if (error || !data)
    throw new Error("Fant ikke CRM-innstillingene. Kjør databasemigreringen 20261127000000_crm_autopilot.sql.");
  return data;
}

export async function aiSpend(supabase: SupabaseClient, at = new Date()) {
  const [today, month] = await Promise.all([sumCostSince(supabase, osloDayStart(at)), sumCostSince(supabase, osloMonthStart(at))]);
  return { today, month };
}

/** Throws with a Norwegian message if the next call would break a cap. */
export async function assertAiBudget(supabase: SupabaseClient, model: string, inputChars: number, maxTokens: number) {
  const settings = await loadBudgetSettings(supabase);
  const spent = await aiSpend(supabase);
  const decision = budgetDecision({
    spentTodayNok: spent.today,
    spentMonthNok: spent.month,
    nextCallNok: worstCaseUsd(model, inputChars, maxTokens) * Number(settings.usd_nok_rate),
    settings,
  });
  if (!decision.ok) throw new BudgetExceededError(decision.reason);
  return settings;
}

export class BudgetExceededError extends Error {
  readonly budgetExceeded = true;
}

export async function recordAiUsage(
  supabase: SupabaseClient,
  usage: AnalysisUsage,
  opts: { companyId: string | null; purpose: string; triggeredBy: "admin" | "worker"; usdNokRate: number },
) {
  const usd = costUsd(usage);
  const { error } = await supabase.from("ai_usage").insert({
    company_id: opts.companyId,
    purpose: opts.purpose,
    model: usage.model,
    input_tokens: usage.input_tokens,
    output_tokens: usage.output_tokens,
    cache_read_tokens: usage.cache_read_tokens,
    cache_write_tokens: usage.cache_write_tokens,
    cost_usd: Number(usd.toFixed(5)),
    cost_nok: Number((usd * opts.usdNokRate).toFixed(3)),
    triggered_by: opts.triggeredBy,
  });
  if (error) console.error("ai_usage insert failed", error.message);
}

// --- Prioritising ----------------------------------------------------------

/** How likely each segment is to become a repeat customer, all else equal. */
export const SEGMENT_WEIGHT: Record<Segment, number> = {
  real_estate_agent: 1,
  airbnb_manager: 1,
  professional_landlord: 0.95,
  hotel: 0.85,
  developer: 0.8,
  photographer: 0.65,
  stylist: 0.65,
  other: 0.5,
};

/**
 * Priority 0–100 for the approval queue: purchase likelihood and recurring
 * potential, weighted by segment. Companies we cannot lawfully e-mail
 * (no shared address) are pushed down, not hidden.
 */
export function computePriority(i: { score: number; recurring: number; segment: Segment; hasGenericEmail: boolean }): number {
  const base = 0.55 * i.score + 0.45 * i.recurring;
  const p = base * (SEGMENT_WEIGHT[i.segment] ?? 0.5) * (i.hasGenericEmail ? 1 : 0.7);
  return Math.max(0, Math.min(100, Math.round(p)));
}
