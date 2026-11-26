"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireWriter } from "@/lib/crm/auth";
import { crmEnv, isOutreachSendingEnabled, isSmtpConfigured, isSupabaseConfigured } from "@/lib/crm/config";
import {
  ACTIVITY_TYPES,
  CHANNELS,
  CONTACT_BASIS,
  SEGMENTS,
  SERVICES,
  STATUSES,
  type ContactBasis,
  type Segment,
} from "@/lib/crm/constants";
import { importCompanies, type CompanyInput } from "@/lib/crm/import";
import { mapEnhet } from "@/lib/crm/brreg";
import { analyzeCompany } from "@/lib/crm/research";
import { parseCsv } from "@/lib/crm/csv";
import { normalizeDomain, normalizeEmail, isGenericEmail, normalizeWebsite } from "@/lib/crm/normalize";
import { sendBlockers, suppressionKeys, withFooter } from "@/lib/crm/outreach";
import { sendMail } from "@/lib/crm/mailer";
import { unsubscribeToken } from "@/lib/crm/signing";
import { emitEvent } from "@/lib/crm/n8n";
import type { CompanyRow, MessageRow } from "@/lib/crm/types";

const str = (fd: FormData, k: string) => {
  const v = fd.get(k);
  return typeof v === "string" ? v.trim() : "";
};
const oneOf = <T extends string>(value: string, allowed: Record<T, unknown>, fallback: T): T =>
  value in allowed ? (value as T) : fallback;

function back(path: string, params: Record<string, string>): never {
  const q = new URLSearchParams(params).toString();
  redirect(q ? `${path}?${q}` : path);
}

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------

export async function signIn(formData: FormData) {
  if (!isSupabaseConfigured()) back("/admin/login", { error: "config" });
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: str(formData, "email"),
    password: str(formData, "password"),
  });
  if (error) back("/admin/login", { error: "credentials" });
  redirect("/admin");
}

export async function signOut() {
  if (isSupabaseConfigured()) {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  }
  redirect("/admin/login");
}

// ---------------------------------------------------------------------------
// Companies
// ---------------------------------------------------------------------------

export async function createCompany(formData: FormData) {
  const session = await requireWriter();
  const supabase = await createSupabaseServerClient();
  const input: CompanyInput = {
    name: str(formData, "name"),
    org_number: str(formData, "org_number") || null,
    segment: oneOf<Segment>(str(formData, "segment"), SEGMENTS, "other"),
    website: str(formData, "website") || null,
    general_email: str(formData, "general_email") || null,
    phone: str(formData, "phone") || null,
    city: str(formData, "city") || null,
    source: "manual",
    source_url: str(formData, "source_url") || null,
    notes: str(formData, "notes") || null,
  };
  const res = await importCompanies(supabase, [input], session.userId);
  if (res.duplicates) back("/admin/prospects/new", { error: "duplicate" });
  if (!res.ids[0]) back("/admin/prospects/new", { error: "invalid" });
  redirect(`/admin/prospects/${res.ids[0]}?ok=created`);
}

export async function updateCompany(formData: FormData) {
  const session = await requireWriter();
  const supabase = await createSupabaseServerClient();
  const id = str(formData, "id");
  const { data: before } = await supabase.from("companies").select("status, contact_basis").eq("id", id).single<Pick<CompanyRow, "status" | "contact_basis">>();
  if (!before) back("/admin/prospects", { error: "notfound" });

  const email = normalizeEmail(str(formData, "general_email"));
  const website = str(formData, "website");
  const status = oneOf(str(formData, "status"), STATUSES, before.status);
  const contactBasis = oneOf<ContactBasis>(str(formData, "contact_basis"), CONTACT_BASIS, before.contact_basis);
  const value = Number(str(formData, "estimated_value_nok").replace(/\s/g, "").replace(",", "."));
  const channel = str(formData, "acquisition_channel");

  const update: Record<string, unknown> = {
    name: str(formData, "name") || undefined,
    segment: oneOf<Segment>(str(formData, "segment"), SEGMENTS, "other"),
    status,
    website: normalizeWebsite(website),
    domain: normalizeDomain(website) ?? (email && isGenericEmail(email) ? normalizeDomain(email) : null),
    general_email: email,
    email_is_generic: email ? isGenericEmail(email) : null,
    phone: str(formData, "phone") || null,
    city: str(formData, "city") || null,
    contact_basis: contactBasis,
    contact_basis_note: str(formData, "contact_basis_note") || null,
    estimated_value_nok: Number.isFinite(value) && value > 0 ? value : null,
    acquisition_channel: channel in CHANNELS ? channel : null,
    notes: str(formData, "notes") || null,
    do_not_contact: formData.get("do_not_contact") === "on" || status === "not_interested",
  };
  if (contactBasis !== before.contact_basis) update.contact_basis_checked_at = new Date().toISOString();

  const { error } = await supabase.from("companies").update(update).eq("id", id);
  if (error) back(`/admin/prospects/${id}`, { error: error.code === "23505" ? "duplicate" : "save" });

  if (status !== before.status) {
    await supabase.from("activities").insert({
      company_id: id,
      type: "status_change",
      summary: `Status: ${STATUSES[before.status]} → ${STATUSES[status]}`,
      created_by: session.userId,
    });
    await emitEvent("prospect.status_changed", { company_id: id, from: before.status, to: status });
  }
  revalidatePath("/admin", "layout");
  back(`/admin/prospects/${id}`, { ok: "saved" });
}

export async function deleteCompany(formData: FormData) {
  await requireWriter();
  const supabase = await createSupabaseServerClient();
  await supabase.from("companies").delete().eq("id", str(formData, "id"));
  revalidatePath("/admin", "layout");
  back("/admin/prospects", { ok: "deleted" });
}

/** Records a reply, call, meeting or note. A decline stops all outreach. */
export async function addActivity(formData: FormData) {
  const session = await requireWriter();
  const supabase = await createSupabaseServerClient();
  const id = str(formData, "company_id");
  const type = oneOf(str(formData, "type"), ACTIVITY_TYPES, "note");
  const outcome = str(formData, "outcome");
  const followUp = str(formData, "follow_up_at");

  await supabase.from("activities").insert({
    company_id: id,
    type,
    summary: str(formData, "summary") || ACTIVITY_TYPES[type],
    details: outcome ? { outcome } : null,
    follow_up_at: followUp ? new Date(followUp).toISOString() : null,
    created_by: session.userId,
  });

  if (outcome === "interested") {
    await supabase.from("companies").update({ status: "interested" }).eq("id", id).not("status", "eq", "customer");
    await emitEvent("prospect.interested", { company_id: id });
  } else if (outcome === "not_interested" || outcome === "unsubscribe") {
    // The database trigger sets do_not_contact and cancels unsent messages.
    await supabase
      .from("companies")
      .update({ status: "not_interested", opt_out_reason: outcome === "unsubscribe" ? "Reservert seg" : "Takket nei" })
      .eq("id", id);
    if (outcome === "unsubscribe") {
      const { data: c } = await supabase.from("companies").select("general_email").eq("id", id).single<{ general_email: string | null }>();
      const email = normalizeEmail(c?.general_email);
      if (email) await supabase.from("suppression_list").upsert({ value: email, kind: "email", reason: "unsubscribe" }, { onConflict: "value" });
    }
  }
  revalidatePath("/admin", "layout");
  back(`/admin/prospects/${id}`, { ok: "activity" });
}

// ---------------------------------------------------------------------------
// Deals and sales
// ---------------------------------------------------------------------------

export async function addDeal(formData: FormData) {
  const session = await requireWriter();
  const supabase = await createSupabaseServerClient();
  const id = str(formData, "company_id");
  const service = oneOf(str(formData, "service"), SERVICES, "other");
  const channel = oneOf(str(formData, "channel"), CHANNELS, "other");
  const status = (["open", "won", "lost"] as const).find((s) => s === str(formData, "status")) ?? "open";
  const amount = Number(str(formData, "amount_nok").replace(/\s/g, "").replace(",", "."));
  if (!Number.isFinite(amount) || amount < 0) back(`/admin/prospects/${id}`, { error: "amount" });
  const probability = status === "won" ? 100 : status === "lost" ? 0 : Math.min(100, Math.max(0, Number(str(formData, "probability") || 50)));

  await supabase.from("deals").insert({
    company_id: id,
    service,
    channel,
    amount_nok: amount,
    status,
    probability,
    expected_close: str(formData, "expected_close") || null,
    closed_at: status === "won" || status === "lost" ? new Date().toISOString() : null,
    note: str(formData, "note") || null,
    created_by: session.userId,
  });
  if (status === "won") {
    await supabase.from("companies").update({ status: "customer", contact_basis: "existing_customer" }).eq("id", id);
    await supabase.from("activities").insert({
      company_id: id,
      type: "sale",
      summary: `Salg: ${SERVICES[service]} ${amount.toLocaleString("nb-NO")} kr (${CHANNELS[channel]})`,
      created_by: session.userId,
    });
    await emitEvent("deal.won", { company_id: id, service, channel, amount_nok: amount });
  }
  revalidatePath("/admin", "layout");
  back(`/admin/prospects/${id}`, { ok: "deal" });
}

export async function setDealStatus(formData: FormData) {
  const session = await requireWriter();
  const supabase = await createSupabaseServerClient();
  const dealId = str(formData, "deal_id");
  const status = (["open", "won", "lost"] as const).find((s) => s === str(formData, "status")) ?? "open";
  const { data: deal } = await supabase.from("deals").select("company_id, service, amount_nok, channel").eq("id", dealId).single();
  if (!deal) back("/admin/prospects", { error: "notfound" });
  await supabase
    .from("deals")
    .update({ status, probability: status === "won" ? 100 : status === "lost" ? 0 : 50, closed_at: status === "open" ? null : new Date().toISOString() })
    .eq("id", dealId);
  if (status === "won") {
    await supabase.from("companies").update({ status: "customer", contact_basis: "existing_customer" }).eq("id", deal.company_id);
    await supabase.from("activities").insert({
      company_id: deal.company_id,
      type: "sale",
      summary: `Salg vunnet: ${SERVICES[deal.service as keyof typeof SERVICES] ?? deal.service} ${Number(deal.amount_nok).toLocaleString("nb-NO")} kr`,
      created_by: session.userId,
    });
  }
  revalidatePath("/admin", "layout");
  back(`/admin/prospects/${deal.company_id}`, { ok: "deal" });
}

// ---------------------------------------------------------------------------
// Research (Brønnøysund + AI)
// ---------------------------------------------------------------------------

export async function importFromBrreg(formData: FormData) {
  const session = await requireWriter();
  const supabase = await createSupabaseServerClient();
  const segment = oneOf<Segment>(str(formData, "segment"), SEGMENTS, "other");
  const orgs = formData.getAll("org").map(String).filter((o) => /^[0-9]{9}$/.test(o)).slice(0, 100);
  if (!orgs.length) back("/admin/research", { error: "none" });

  const { data: run } = await supabase
    .from("research_runs")
    .insert({ params: { segment, orgs: orgs.length }, created_by: session.userId })
    .select("id")
    .single();

  // Re-read each unit from the register rather than trusting form fields.
  const res = await fetch(
    `https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer=${orgs.join(",")}&size=${orgs.length}`,
    { headers: { Accept: "application/json" }, cache: "no-store", signal: AbortSignal.timeout(15000) },
  );
  if (!res.ok) {
    if (run) await supabase.from("research_runs").update({ status: "failed", error: `brreg ${res.status}`, finished_at: new Date().toISOString() }).eq("id", run.id);
    back("/admin/research", { error: "brreg" });
  }
  const json = await res.json();
  const candidates = (json._embedded?.enheter ?? []).map((e: Parameters<typeof mapEnhet>[0]) => mapEnhet(e, segment));
  const result = await importCompanies(supabase, candidates, session.userId);

  if (run)
    await supabase
      .from("research_runs")
      .update({ status: "done", found: candidates.length, imported: result.imported, duplicates: result.duplicates, finished_at: new Date().toISOString() })
      .eq("id", run.id);
  for (const cid of result.ids)
    await supabase.from("activities").insert({ company_id: cid, type: "import", summary: "Importert fra Brønnøysundregistrene", created_by: session.userId });

  revalidatePath("/admin", "layout");
  back("/admin/prospects", { ok: `imported:${result.imported}:${result.duplicates}`, status: "new" });
}

export async function analyzeOne(formData: FormData) {
  const session = await requireWriter();
  const supabase = await createSupabaseServerClient();
  const id = str(formData, "id");
  try {
    await analyzeCompany(supabase, id, session.userId);
  } catch (err) {
    back(`/admin/prospects/${id}`, { error: "ai", detail: err instanceof Error ? err.message.slice(0, 160) : "" });
  }
  revalidatePath("/admin", "layout");
  back(`/admin/prospects/${id}`, { ok: "analyzed" });
}

/**
 * Analyses one company and returns the result instead of redirecting. The
 * batch button calls this once per company from the browser, so each request
 * stays short enough for serverless time limits.
 */
export async function analyzeForBatch(id: string): Promise<{ ok: boolean; score?: number; error?: string }> {
  const session = await requireWriter();
  if (!/^[0-9a-f-]{36}$/i.test(id)) return { ok: false, error: "Ugyldig id" };
  const supabase = await createSupabaseServerClient();
  try {
    const r = await analyzeCompany(supabase, id, session.userId);
    return { ok: true, score: r.score };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message.slice(0, 160) : "Feilet" };
  }
}

/** The 10 newest companies that haven't been analysed, for «analyse next 10». */
export async function nextUnanalysedIds(): Promise<string[]> {
  await requireWriter();
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("companies")
    .select("id")
    .is("analyzed_at", null)
    .eq("do_not_contact", false)
    .neq("status", "unqualified")
    .order("created_at", { ascending: false })
    .limit(10);
  return (data ?? []).map((r) => r.id as string);
}

// ---------------------------------------------------------------------------
// Outreach: edit → approve → send (manual, one at a time)
// ---------------------------------------------------------------------------

export async function saveMessage(formData: FormData) {
  const session = await requireWriter();
  const supabase = await createSupabaseServerClient();
  const id = str(formData, "id");
  const companyId = str(formData, "company_id");
  const fields = {
    subject: str(formData, "subject").slice(0, 160),
    body: str(formData, "body"),
    to_email: normalizeEmail(str(formData, "to_email")),
  };
  if (!fields.subject || !fields.body) back(`/admin/prospects/${companyId}`, { error: "message" });
  if (id) {
    // Editing an approved message sends it back for approval.
    await supabase.from("outreach_messages").update({ ...fields, status: "draft", approved_at: null, approved_by: null }).eq("id", id).in("status", ["draft", "approved", "failed"]);
  } else {
    await supabase.from("outreach_messages").insert({ ...fields, company_id: companyId, status: "draft", generated_by: "manual", created_by: session.userId });
  }
  revalidatePath("/admin", "layout");
  back(`/admin/prospects/${companyId}`, { ok: "message" });
}

export async function approveMessage(formData: FormData) {
  const session = await requireWriter();
  const supabase = await createSupabaseServerClient();
  const id = str(formData, "id");
  const { data: m } = await supabase
    .from("outreach_messages")
    .select("id, company_id, to_email, status, companies(do_not_contact, contact_basis)")
    .eq("id", id)
    .single();
  const company = m?.companies as unknown as { do_not_contact: boolean; contact_basis: ContactBasis } | null;
  const returnTo = str(formData, "return_to") || "/admin/outreach";
  if (!m || m.status !== "draft") back(returnTo, { error: "state" });
  if (!normalizeEmail(m.to_email)) back(returnTo, { error: "noemail" });
  if (company?.do_not_contact) back(returnTo, { error: "dnc" });
  if (!company || company.contact_basis === "none") back(returnTo, { error: "basis" });
  await supabase
    .from("outreach_messages")
    .update({ status: "approved", approved_by: session.userId, approved_at: new Date().toISOString() })
    .eq("id", id)
    .eq("status", "draft");
  await emitEvent("message.approved", { message_id: id, company_id: m.company_id });
  revalidatePath("/admin", "layout");
  back(returnTo, { ok: "approved" });
}

export async function cancelMessage(formData: FormData) {
  await requireWriter();
  const supabase = await createSupabaseServerClient();
  await supabase.from("outreach_messages").update({ status: "cancelled" }).eq("id", str(formData, "id")).in("status", ["draft", "approved", "failed"]);
  revalidatePath("/admin", "layout");
  back(str(formData, "return_to") || "/admin/outreach", { ok: "cancelled" });
}

/** Manual send of one approved message. Every rule is checked again here. */
export async function sendMessage(formData: FormData) {
  const session = await requireWriter();
  const supabase = await createSupabaseServerClient();
  const id = str(formData, "id");
  const returnTo = str(formData, "return_to") || "/admin/outreach";

  const { data: m } = await supabase
    .from("outreach_messages")
    .select("*, companies(id, name, status, do_not_contact, contact_basis)")
    .eq("id", id)
    .single<MessageRow & { companies: Pick<CompanyRow, "id" | "name" | "status" | "do_not_contact" | "contact_basis"> }>();
  if (!m?.companies) back(returnTo, { error: "notfound" });

  const keys = suppressionKeys(m.to_email);
  const { count: suppressedCount } = keys.length
    ? await supabase.from("suppression_list").select("id", { count: "exact", head: true }).in("value", keys)
    : { count: 0 };

  const blockers = sendBlockers({
    messageStatus: m.status,
    toEmail: m.to_email,
    companyDoNotContact: m.companies.do_not_contact,
    companyStatus: m.companies.status,
    contactBasis: m.companies.contact_basis,
    suppressed: Boolean(suppressedCount),
    sendingEnabled: isOutreachSendingEnabled(),
    smtpConfigured: isSmtpConfigured(),
  });
  if (blockers.length) back(returnTo, { error: "blocked", detail: blockers[0] });

  const to = normalizeEmail(m.to_email)!;
  const unsubscribeUrl = crmEnv.unsubscribeSecret
    ? `${crmEnv.siteUrl}/api/crm/unsubscribe?t=${encodeURIComponent(unsubscribeToken(crmEnv.unsubscribeSecret, to))}`
    : null;

  // Claim the message first so a double click can't send it twice.
  const { data: claimed } = await supabase
    .from("outreach_messages")
    .update({ status: "sent", sent_at: new Date().toISOString() })
    .eq("id", id)
    .eq("status", "approved")
    .select("id");
  if (!claimed?.length) back(returnTo, { error: "state" });

  try {
    const { messageId } = await sendMail({ to, subject: m.subject, text: withFooter(m.body, unsubscribeUrl), unsubscribeUrl });
    await supabase.from("outreach_messages").update({ provider_message_id: messageId }).eq("id", id);
    await supabase.from("activities").insert({
      company_id: m.company_id,
      type: "email_sent",
      summary: `E-post sendt: ${m.subject}`,
      details: { to, message_id: id },
      follow_up_at: new Date(Date.now() + 4 * 24 * 3600 * 1000).toISOString(),
      created_by: session.userId,
    });
    if (["new", "researched", "qualified"].includes(m.companies.status))
      await supabase.from("companies").update({ status: "contacted", acquisition_channel: "outreach" }).eq("id", m.company_id);
    await emitEvent("message.sent", { message_id: id, company_id: m.company_id });
  } catch (err) {
    await supabase
      .from("outreach_messages")
      .update({ status: "failed", sent_at: null, error: err instanceof Error ? err.message.slice(0, 300) : "Ukjent feil" })
      .eq("id", id);
    back(returnTo, { error: "send" });
  }
  revalidatePath("/admin", "layout");
  back(returnTo, { ok: "sent" });
}

// ---------------------------------------------------------------------------
// Stop list and CSV import
// ---------------------------------------------------------------------------

export async function addSuppression(formData: FormData) {
  await requireWriter();
  const supabase = await createSupabaseServerClient();
  const raw = str(formData, "value").toLowerCase();
  const email = normalizeEmail(raw);
  const domain = email ? null : normalizeDomain(raw);
  if (!email && !domain) back("/admin/import", { error: "suppression" });
  await supabase
    .from("suppression_list")
    .upsert({ value: email ?? domain, kind: email ? "email" : "domain", reason: str(formData, "reason") || "manuell" }, { onConflict: "value" });
  revalidatePath("/admin", "layout");
  back("/admin/import", { ok: "suppressed" });
}

const CSV_ALIASES: Record<string, string[]> = {
  name: ["name", "navn", "firma", "selskap", "company"],
  org_number: ["org_number", "orgnr", "organisasjonsnummer", "org.nr"],
  segment: ["segment", "type", "kategori"],
  website: ["website", "nettside", "hjemmeside", "url"],
  general_email: ["general_email", "email", "e-post", "epost"],
  phone: ["phone", "telefon", "tlf"],
  city: ["city", "sted", "poststed", "by"],
  postal_code: ["postal_code", "postnummer"],
  source_url: ["source_url", "kilde"],
  notes: ["notes", "notat", "kommentar"],
};

export async function importCsv(formData: FormData) {
  const session = await requireWriter();
  const supabase = await createSupabaseServerClient();
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) back("/admin/import", { error: "nofile" });
  if (file.size > 2_000_000) back("/admin/import", { error: "toolarge" });
  const rows = parseCsv(await file.text()).slice(0, 2000);
  const pick = (r: Record<string, string>, key: string) => {
    for (const alias of CSV_ALIASES[key]) if (r[alias]) return r[alias];
    return "";
  };
  const segmentByLabel = Object.fromEntries(Object.entries(SEGMENTS).map(([k, v]) => [v.toLowerCase(), k]));
  const inputs: CompanyInput[] = rows.map((r) => {
    const seg = pick(r, "segment").toLowerCase();
    return {
      name: pick(r, "name"),
      org_number: pick(r, "org_number") || null,
      segment: (seg in SEGMENTS ? seg : segmentByLabel[seg] ?? "other") as Segment,
      website: pick(r, "website") || null,
      general_email: pick(r, "general_email") || null,
      phone: pick(r, "phone") || null,
      city: pick(r, "city") || null,
      postal_code: pick(r, "postal_code") || null,
      source: "csv",
      source_url: pick(r, "source_url") || null,
      notes: pick(r, "notes") || null,
    };
  });
  const result = await importCompanies(supabase, inputs, session.userId);
  revalidatePath("/admin", "layout");
  back("/admin/import", { ok: `csv:${result.imported}:${result.duplicates}:${result.invalid}` });
}
