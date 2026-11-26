import type { SupabaseClient } from "@supabase/supabase-js";
import { ANALYSIS_MAX_TOKENS, PROMPT_VERSION, analyzeLead } from "@/lib/crm/ai";
import { assertAiBudget, computePriority, recordAiUsage } from "@/lib/crm/budget";
import { crmEnv } from "@/lib/crm/config";
import { snapshotWebsite } from "@/lib/crm/website";
import { isGenericEmail, normalizeEmail } from "@/lib/crm/normalize";
import { SERVICES, SERVICE_PRICE_NOK } from "@/lib/crm/constants";
import type { CompanyRow } from "@/lib/crm/types";
import { emitEvent } from "@/lib/crm/n8n";

export const QUALIFIED_SCORE = 60;

/**
 * Research one company: read its public website, ask Claude for an
 * assessment, store the result and an outreach draft (status «draft», which
 * a person must approve). Contact data is only taken from the register or
 * from text that literally appears on the company's own website.
 */
export async function analyzeCompany(
  supabase: SupabaseClient,
  companyId: string,
  userId: string | null,
  triggeredBy: "admin" | "worker" = "admin",
) {
  const { data: company, error } = await supabase.from("companies").select("*").eq("id", companyId).single<CompanyRow>();
  if (error || !company) throw new Error("Fant ikke selskapet.");

  // Cost cap first: no website fetch and no AI call when the budget is spent.
  // 14 000 chars covers the longest prompt we build (12 000 chars of site text).
  const settings = await assertAiBudget(supabase, crmEnv.anthropicModel, 14_000, ANALYSIS_MAX_TOKENS);

  const site = company.website ? await snapshotWebsite(company.website) : null;

  const result = await analyzeLead({
    name: company.name,
    segment: company.segment,
    city: company.city,
    naceDescription: company.nace_description,
    employees: company.employees,
    website: company.website,
    websiteTitle: site?.title ?? null,
    websiteText: site?.ok ? site.text : "",
  });
  if (result.usage)
    await recordAiUsage(supabase, result.usage, {
      companyId: company.id,
      purpose: "analysis",
      triggeredBy,
      usdNokRate: Number(settings.usd_nok_rate),
    });
  if (!result.ok) throw new Error(result.error);
  const { analysis } = result;
  const model = result.usage.model;

  // E-mail: keep the register address; otherwise use a shared address found
  // on the company's own pages. Never anything the model wrote.
  let email = normalizeEmail(company.general_email);
  let emailSource: string | null = email ? "register" : null;
  if (!email && site?.ok) {
    const generic = site.emails.find(isGenericEmail);
    if (generic) {
      email = generic;
      emailSource = "website";
    }
  }
  const generic = email ? isGenericEmail(email) : null;

  const qualified = analysis.is_relevant && analysis.score >= QUALIFIED_SCORE;
  const status = !analysis.is_relevant
    ? "unqualified"
    : ["new", "researched", "qualified"].includes(company.status)
      ? qualified
        ? "qualified"
        : "researched"
      : company.status;

  const priority = computePriority({
    score: analysis.is_relevant ? analysis.score : 0,
    recurring: analysis.recurring_potential,
    segment: company.segment,
    hasGenericEmail: Boolean(email && generic),
  });

  const update: Partial<CompanyRow> & Record<string, unknown> = {
    score: analysis.score,
    recurring_potential: analysis.recurring_potential,
    priority,
    recommended_service: analysis.recommended_service,
    needs_summary: analysis.needs.join("\n"),
    score_reason: analysis.score_reason,
    analysis: {
      ...analysis,
      model,
      prompt_version: PROMPT_VERSION,
      website_checked: site ? { url: site.url, ok: site.ok, robots_blocked: site.blockedByRobots, pages: site.pagesFetched, error: site.error ?? null } : null,
      email_source: emailSource,
    },
    analyzed_at: new Date().toISOString(),
    status,
    estimated_value_nok: company.estimated_value_nok ?? SERVICE_PRICE_NOK[analysis.recommended_service],
  };
  if (email && !company.general_email) {
    update.general_email = email;
    update.email_is_generic = generic;
  }
  // A shared company address from an official or own source is a valid
  // B2B basis. Personal addresses stay «none» until a person decides.
  if (company.contact_basis === "none" && email && generic) {
    update.contact_basis = "b2b_generic_address";
    update.contact_basis_note = emailSource === "website"
      ? `Felles adresse funnet på ${site?.url ?? "nettsiden"}`
      : "Felles adresse registrert i Brønnøysundregistrene";
    update.contact_basis_checked_at = new Date().toISOString();
  }

  const { error: upErr } = await supabase.from("companies").update(update).eq("id", company.id);
  if (upErr) throw new Error(upErr.message);

  await supabase.from("activities").insert({
    company_id: company.id,
    type: "ai_analysis",
    summary: `AI-analyse: score ${analysis.score}, gjentakende ${analysis.recurring_potential}, anbefalt ${SERVICES[analysis.recommended_service]}`,
    details: { model, prompt_version: PROMPT_VERSION, priority, triggered_by: triggeredBy, website: site?.url ?? null, website_ok: site?.ok ?? false },
    created_by: userId,
  });

  // A fresh draft for approval, unless the company must not be contacted or
  // already has a message waiting.
  if (analysis.is_relevant && !company.do_not_contact) {
    const { count } = await supabase
      .from("outreach_messages")
      .select("id", { count: "exact", head: true })
      .eq("company_id", company.id)
      .in("status", ["draft", "approved"]);
    if (!count) {
      await supabase.from("outreach_messages").insert({
        company_id: company.id,
        to_email: email && generic ? email : null,
        subject: analysis.outreach_subject.slice(0, 120),
        body: analysis.outreach_body,
        status: "draft",
        generated_by: "ai",
        prompt_version: PROMPT_VERSION,
        created_by: userId,
      });
    }
  }

  if (qualified) await emitEvent("prospect.qualified", { company_id: company.id, name: company.name, score: analysis.score });
  return { score: analysis.score, status, priority };
}
