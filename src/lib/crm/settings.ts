import type { SupabaseClient } from "@supabase/supabase-js";
import type { Segment, Service } from "@/lib/crm/constants";

/** The single `crm_settings` row (see migration 20261127000000). */
export interface CrmSettings {
  autopilot_enabled: boolean;
  daily_target: number;
  discovery_segments: Segment[];
  discovery_municipalities: string[];
  require_website: boolean;
  ai_daily_budget_nok: number;
  ai_monthly_budget_nok: number;
  usd_nok_rate: number;
  followup_enabled: boolean;
  followup_after_days: number;
  followup_max_steps: number;
  followup_auto_approve: boolean;
  auto_send_enabled: boolean;
  daily_send_cap: number;
  send_window_start: number;
  send_window_end: number;
  report_email: string | null;
  minutes_per_activity: Record<string, number>;
  delivery_minutes: Partial<Record<Service, number>>;
  direct_cost_nok: Partial<Record<Service, number>>;
  updated_at: string;
}

export async function loadSettings(supabase: SupabaseClient): Promise<CrmSettings | null> {
  const { data } = await supabase.from("crm_settings").select("*").eq("id", 1).maybeSingle<CrmSettings>();
  if (!data) return null;
  // numeric columns arrive as strings from PostgREST
  return {
    ...data,
    ai_daily_budget_nok: Number(data.ai_daily_budget_nok),
    ai_monthly_budget_nok: Number(data.ai_monthly_budget_nok),
    usd_nok_rate: Number(data.usd_nok_rate),
  };
}
