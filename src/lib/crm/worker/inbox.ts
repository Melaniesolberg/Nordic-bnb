import type { SupabaseClient } from "@supabase/supabase-js";
import { ImapFlow } from "imapflow";
import { simpleParser, type ParsedMail } from "mailparser";
import { normalizeDomain, normalizeEmail } from "@/lib/crm/normalize";
import { emitEvent } from "@/lib/crm/n8n";
import { bouncedRecipient, classifyInbound, stripQuoted, type InboundKind } from "@/lib/crm/worker/rules";

/**
 * Reads the outreach mailbox over IMAP (read-only: nothing is moved,
 * deleted or marked as read) and registers replies, opt-outs and bounces.
 * Registering an activity fires the database trigger that cancels every
 * unsent message to that company immediately.
 */

export const imapEnv = {
  host: process.env.IMAP_HOST ?? "",
  port: Number(process.env.IMAP_PORT ?? 993),
  user: process.env.IMAP_USER ?? process.env.SMTP_USER ?? "",
  password: process.env.IMAP_PASSWORD ?? process.env.SMTP_PASSWORD ?? "",
};
export const isImapConfigured = () => Boolean(imapEnv.host && imapEnv.user && imapEnv.password);

interface InboxState {
  uidValidity: string;
  lastUid: number;
}

export interface InboxStats {
  checked: number;
  replies: number;
  unsubscribes: number;
  bounces: number;
  auto_replies: number;
  unmatched: number;
}

const MAX_PER_RUN = 100;
const MAX_SIZE = 2_000_000;

export async function syncInbox(supabase: SupabaseClient, deadline: number): Promise<InboxStats> {
  const stats: InboxStats = { checked: 0, replies: 0, unsubscribes: 0, bounces: 0, auto_replies: 0, unmatched: 0 };
  if (!isImapConfigured()) return stats;

  const { data: row } = await supabase.from("worker_state").select("value").eq("key", "imap").maybeSingle();
  const state = (row?.value ?? null) as InboxState | null;

  const client = new ImapFlow({
    host: imapEnv.host,
    port: imapEnv.port,
    secure: imapEnv.port === 993,
    auth: { user: imapEnv.user, pass: imapEnv.password },
    logger: false,
  });
  const raw: { uid: number; source: Buffer }[] = [];
  let uidValidity = "";
  let maxUid = state?.lastUid ?? 0;

  await client.connect();
  try {
    const lock = await client.getMailboxLock("INBOX", { readOnly: true });
    try {
      const box = client.mailbox;
      uidValidity = box ? String(box.uidValidity) : "";
      const fresh = !state || state.uidValidity !== uidValidity;
      let uids: number[];
      if (fresh) {
        // First run (or mailbox recreated): only look at the last 14 days.
        const found = await client.search({ since: new Date(Date.now() - 14 * 24 * 3600 * 1000) }, { uid: true });
        uids = found || [];
        maxUid = 0;
      } else {
        const found = await client.search({ uid: `${state.lastUid + 1}:*` }, { uid: true });
        uids = (found || []).filter((u) => u > state.lastUid);
      }
      uids = uids.sort((a, b) => a - b).slice(0, MAX_PER_RUN);
      if (uids.length) {
        for await (const msg of client.fetch(uids, { uid: true, size: true, source: true }, { uid: true })) {
          if (msg.uid > maxUid) maxUid = msg.uid;
          if (!msg.source || (msg.size ?? 0) > MAX_SIZE) continue;
          raw.push({ uid: msg.uid, source: msg.source });
        }
      }
    } finally {
      lock.release();
    }
  } finally {
    await client.logout().catch(() => undefined);
  }

  for (const r of raw.sort((a, b) => a.uid - b.uid)) {
    if (Date.now() > deadline) break;
    stats.checked++;
    try {
      const mail = await simpleParser(r.source);
      const kind = await handleMail(supabase, mail, r.source.toString("latin1"));
      if (kind === "reply") stats.replies++;
      else if (kind === "unsubscribe") stats.unsubscribes++;
      else if (kind === "bounce") stats.bounces++;
      else if (kind === "auto_reply") stats.auto_replies++;
      else stats.unmatched++;
    } catch (err) {
      console.error("inbox message failed", r.uid, err instanceof Error ? err.message : err);
    }
    maxUid = Math.max(maxUid, r.uid);
  }

  await supabase
    .from("worker_state")
    .upsert({ key: "imap", value: { uidValidity, lastUid: maxUid }, updated_at: new Date().toISOString() });
  return stats;
}

function headerMap(mail: ParsedMail): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of mail.headers) out[k.toLowerCase()] = typeof v === "string" ? v : JSON.stringify(v);
  return out;
}

async function handleMail(supabase: SupabaseClient, mail: ParsedMail, rawText: string): Promise<InboundKind | "unmatched"> {
  const from = normalizeEmail(mail.from?.value?.[0]?.address ?? "") ?? "";
  const subject = mail.subject ?? "";
  const text = mail.text ?? "";
  const kind = classifyInbound({
    from,
    subject,
    headers: headerMap(mail),
    text,
    contentType: mail.headers.get("content-type") ? JSON.stringify(mail.headers.get("content-type")) : "",
  });
  if (kind === "auto_reply") return kind;

  const inboundId = mail.messageId ?? `${from}|${mail.date?.toISOString() ?? ""}|${subject}`;
  const { count: seen } = await supabase
    .from("activities")
    .select("id", { count: "exact", head: true })
    .eq("details->>inbound_id", inboundId);
  if (seen) return "unmatched";

  // Which of our e-mails is this about? Threading headers first; for
  // bounces, the Message-IDs quoted in the returned original.
  const refs = new Set<string>();
  if (mail.inReplyTo) refs.add(mail.inReplyTo.trim());
  for (const r of Array.isArray(mail.references) ? mail.references : mail.references ? [mail.references] : []) refs.add(r.trim());
  if (kind === "bounce") for (const m of rawText.matchAll(/message-id:\s*(<[^>\s]+>)/gi)) refs.add(m[1]);

  let message: { id: string; company_id: string; to_email: string | null } | null = null;
  if (refs.size) {
    const { data } = await supabase
      .from("outreach_messages")
      .select("id, company_id, to_email")
      .in("provider_message_id", [...refs].slice(0, 50))
      .order("sent_at", { ascending: false })
      .limit(1);
    message = data?.[0] ?? null;
  }

  const address = kind === "bounce" ? bouncedRecipient(text) ?? bouncedRecipient(rawText) ?? message?.to_email ?? null : from;
  let companyId = message?.company_id ?? null;
  if (!companyId && address && kind !== "bounce") companyId = await companyForAddress(supabase, address);
  if (!companyId) return "unmatched";

  const fresh = stripQuoted(text).slice(0, 1000);
  const details = { inbound_id: inboundId, from, subject: subject.slice(0, 200), message_id: message?.id ?? null, excerpt: fresh.slice(0, 500) };

  if (kind === "bounce") {
    await supabase.from("activities").insert({ company_id: companyId, type: "bounce", summary: `E-post i retur${address ? `: ${address}` : ""}`, details });
    if (message) await supabase.from("outreach_messages").update({ bounced_at: new Date().toISOString() }).eq("id", message.id);
    const bad = normalizeEmail(address);
    if (bad) await supabase.from("suppression_list").upsert({ value: bad, kind: "email", reason: "bounce" }, { onConflict: "value" });
    return kind;
  }

  if (kind === "unsubscribe") {
    await supabase.from("activities").insert({ company_id: companyId, type: "opt_out", summary: `Takket nei / avmeldt på e-post: ${subject}`.slice(0, 300), details });
    // Always stop marketing; existing customers keep their customer status.
    const now = new Date().toISOString();
    await supabase.from("companies").update({ do_not_contact: true, opted_out_at: now, opt_out_reason: "Svarte nei på e-post" }).eq("id", companyId);
    await supabase.from("companies").update({ status: "not_interested" }).eq("id", companyId).neq("status", "customer");
    const { data: c } = await supabase.from("companies").select("general_email").eq("id", companyId).maybeSingle();
    for (const e of new Set([normalizeEmail(from), normalizeEmail(c?.general_email ?? null)]))
      if (e) await supabase.from("suppression_list").upsert({ value: e, kind: "email", reason: "unsubscribe" }, { onConflict: "value" });
    if (message) await supabase.from("outreach_messages").update({ replied_at: new Date().toISOString() }).eq("id", message.id);
    await emitEvent("prospect.unsubscribed", { company_id: companyId });
    return kind;
  }

  await supabase.from("activities").insert({ company_id: companyId, type: "reply", summary: `Svar mottatt: ${subject}`.slice(0, 300), details });
  if (message) await supabase.from("outreach_messages").update({ replied_at: new Date().toISOString() }).eq("id", message.id);
  await emitEvent("prospect.replied", { company_id: companyId });
  return kind;
}

async function companyForAddress(supabase: SupabaseClient, address: string): Promise<string | null> {
  const email = normalizeEmail(address);
  if (!email) return null;
  const { data: byEmail } = await supabase.from("companies").select("id").eq("general_email", email).limit(1);
  if (byEmail?.length) return byEmail[0].id;
  const { data: byContact } = await supabase.from("contacts").select("company_id").ilike("email", email).limit(1);
  if (byContact?.length) return byContact[0].company_id;
  const domain = normalizeDomain(email);
  if (!domain) return null;
  // Only companies we have actually written to, so a random mail from a
  // shared domain (gmail.com etc. are never stored as company domains).
  const { data: byDomain } = await supabase.from("companies").select("id").eq("domain", domain).not("last_contacted_at", "is", null).limit(1);
  return byDomain?.[0]?.id ?? null;
}
