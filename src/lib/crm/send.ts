import type { SupabaseClient } from "@supabase/supabase-js";
import { crmEnv, isOutreachSendingEnabled, isSmtpConfigured } from "@/lib/crm/config";
import { normalizeEmail } from "@/lib/crm/normalize";
import { approvalBlockers, sendBlockers, suppressionKeys, withFooter } from "@/lib/crm/outreach";
import { sendMail } from "@/lib/crm/mailer";
import { unsubscribeToken } from "@/lib/crm/signing";
import { emitEvent } from "@/lib/crm/n8n";
import type { CompanyRow, MessageRow } from "@/lib/crm/types";

/**
 * The one place a sales e-mail leaves the system, used by the «Send» button
 * and by the background worker. Every rule is checked again right before
 * sending, against fresh data, whoever asked for the send.
 */

type CompanyBits = Pick<CompanyRow, "id" | "name" | "status" | "do_not_contact" | "contact_basis">;
type MessageWithCompany = MessageRow & { companies: CompanyBits | null };

export async function isSuppressed(supabase: SupabaseClient, email: string | null): Promise<boolean> {
  const keys = suppressionKeys(email);
  if (!keys.length) return false;
  const { count } = await supabase.from("suppression_list").select("id", { count: "exact", head: true }).in("value", keys);
  return Boolean(count);
}

export function unsubscribeUrlFor(email: string): string | null {
  return crmEnv.unsubscribeSecret
    ? `${crmEnv.siteUrl}/api/crm/unsubscribe?t=${encodeURIComponent(unsubscribeToken(crmEnv.unsubscribeSecret, email))}`
    : null;
}

export type DeliverResult =
  | { ok: true }
  | { ok: false; code: "notfound" | "blocked" | "state" | "send"; reason: string };

export async function deliverMessage(
  supabase: SupabaseClient,
  id: string,
  actor: { userId: string | null; via: "admin" | "worker" },
): Promise<DeliverResult> {
  const { data: m } = await supabase
    .from("outreach_messages")
    .select("*, companies(id, name, status, do_not_contact, contact_basis)")
    .eq("id", id)
    .maybeSingle<MessageWithCompany>();
  if (!m?.companies) return { ok: false, code: "notfound", reason: "Fant ikke meldingen." };

  const blockers = sendBlockers({
    messageStatus: m.status,
    toEmail: m.to_email,
    companyDoNotContact: m.companies.do_not_contact,
    companyStatus: m.companies.status,
    contactBasis: m.companies.contact_basis,
    suppressed: await isSuppressed(supabase, m.to_email),
    sendingEnabled: isOutreachSendingEnabled(),
    smtpConfigured: isSmtpConfigured(),
  });
  if (blockers.length) return { ok: false, code: "blocked", reason: blockers[0] };

  // A follow-up is only sent while the company has not answered.
  let inReplyTo: string | null = null;
  if (m.parent_message_id) {
    const { data: parent } = await supabase
      .from("outreach_messages")
      .select("status, provider_message_id, replied_at, bounced_at")
      .eq("id", m.parent_message_id)
      .maybeSingle();
    if (!parent || parent.status !== "sent" || parent.replied_at || parent.bounced_at)
      return { ok: false, code: "blocked", reason: "Oppfølgingen stoppes: første e-post er besvart, i retur eller ikke sendt." };
    const { data: co } = await supabase.from("companies").select("replied_at").eq("id", m.company_id).maybeSingle();
    if (co?.replied_at) return { ok: false, code: "blocked", reason: "Oppfølgingen stoppes: selskapet har svart." };
    inReplyTo = parent.provider_message_id ?? null;
  }

  const to = normalizeEmail(m.to_email)!;
  const unsubscribeUrl = unsubscribeUrlFor(to);

  // Claim first, so a double click or two workers can't send it twice.
  const sentAt = new Date().toISOString();
  const { data: claimed } = await supabase
    .from("outreach_messages")
    .update({ status: "sent", sent_at: sentAt })
    .eq("id", id)
    .eq("status", "approved")
    .select("id");
  if (!claimed?.length) return { ok: false, code: "state", reason: "Meldingen er allerede sendt eller endret." };

  try {
    const { messageId } = await sendMail({
      to,
      subject: m.subject,
      text: withFooter(m.body, unsubscribeUrl),
      unsubscribeUrl,
      inReplyTo,
    });
    await supabase.from("outreach_messages").update({ provider_message_id: messageId, send_requested_at: null }).eq("id", id);
    await supabase.from("activities").insert({
      company_id: m.company_id,
      type: "email_sent",
      summary: `${m.parent_message_id ? "Oppfølging" : "E-post"} sendt: ${m.subject}`,
      details: { to, message_id: id, via: actor.via, step: m.sequence_step ?? 0 },
      created_by: actor.userId,
    });
    const companyUpdate: Record<string, unknown> = { last_contacted_at: sentAt };
    if (["new", "researched", "qualified"].includes(m.companies.status)) {
      companyUpdate.status = "contacted";
      companyUpdate.acquisition_channel = "outreach";
    }
    await supabase.from("companies").update(companyUpdate).eq("id", m.company_id);
    await emitEvent("message.sent", { message_id: id, company_id: m.company_id });
    return { ok: true };
  } catch (err) {
    await supabase
      .from("outreach_messages")
      .update({ status: "failed", sent_at: null, error: err instanceof Error ? err.message.slice(0, 300) : "Ukjent feil" })
      .eq("id", id);
    return { ok: false, code: "send", reason: "E-postserveren avviste sendingen." };
  }
}

export type ApproveResult = { id: string; ok: true } | { id: string; ok: false; reason: string };

/**
 * Approves drafts one by one. Each message is checked on its own: e-mail,
 * contact basis, stop list and status. One failure never blocks the rest.
 */
export async function approveMessages(
  supabase: SupabaseClient,
  ids: string[],
  userId: string | null,
  opts: { auto?: boolean } = {},
): Promise<ApproveResult[]> {
  const out: ApproveResult[] = [];
  for (const id of ids) {
    const { data: m } = await supabase
      .from("outreach_messages")
      .select("id, company_id, to_email, status, companies(id, name, status, do_not_contact, contact_basis)")
      .eq("id", id)
      .maybeSingle<Pick<MessageRow, "id" | "company_id" | "to_email" | "status"> & { companies: CompanyBits | null }>();
    if (!m?.companies) {
      out.push({ id, ok: false, reason: "Fant ikke meldingen." });
      continue;
    }
    const blockers = approvalBlockers({
      messageStatus: m.status,
      toEmail: m.to_email,
      companyDoNotContact: m.companies.do_not_contact,
      companyStatus: m.companies.status,
      contactBasis: m.companies.contact_basis,
      suppressed: await isSuppressed(supabase, m.to_email),
    });
    if (blockers.length) {
      out.push({ id, ok: false, reason: `${m.companies.name}: ${blockers[0]}` });
      continue;
    }
    const { data: done } = await supabase
      .from("outreach_messages")
      .update({ status: "approved", approved_by: userId, approved_at: new Date().toISOString(), auto_approved: Boolean(opts.auto) })
      .eq("id", id)
      .eq("status", "draft")
      .select("id");
    if (!done?.length) {
      out.push({ id, ok: false, reason: `${m.companies.name}: meldingen ble endret i mellomtiden.` });
      continue;
    }
    await emitEvent("message.approved", { message_id: id, company_id: m.company_id, auto: Boolean(opts.auto) });
    out.push({ id, ok: true });
  }
  return out;
}
