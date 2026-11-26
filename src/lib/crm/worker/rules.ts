import { osloNow } from "@/lib/crm/budget";
import { SERVICES, type Service } from "@/lib/crm/constants";

/**
 * Pure rules for the background worker, kept free of I/O so they can be
 * unit-tested: when sending is allowed, when a follow-up is due, and how an
 * incoming e-mail is classified.
 */

export interface WindowSettings {
  send_window_start: number;
  send_window_end: number;
}

/** Weekdays only, inside the configured hours (Oslo time). */
export function inSendWindow(s: WindowSettings, at = new Date()): boolean {
  const n = osloNow(at);
  if (n.weekday === 0 || n.weekday === 6) return false;
  return n.hour >= s.send_window_start && n.hour < s.send_window_end;
}

export function followUpDue(sentAt: string | Date, afterDays: number, at = new Date()): boolean {
  const sent = typeof sentAt === "string" ? new Date(sentAt) : sentAt;
  return at.getTime() - sent.getTime() >= afterDays * 24 * 3600 * 1000;
}

/** Follow-up text: short, no new claims, same free-sample offer. */
export function followUpDraft(i: { subject: string; step: number; service: Service | null }) {
  const subject = /^re:/i.test(i.subject) ? i.subject : `Re: ${i.subject}`;
  const what = i.service && i.service !== "other" ? SERVICES[i.service].toLowerCase() : "bilderedigering";
  const body =
    i.step <= 2
      ? [
          "Hei igjen,",
          "",
          `Jeg sendte en kort e-post om ${what} for boligannonser for noen dager siden, og ville bare høre om den kom fram.`,
          "",
          "Tilbudet om et gratis prøvebilde står fortsatt: send oss ett bilde, så får dere det tilbake redigert, helt uforpliktende.",
        ].join("\n")
      : [
          "Hei,",
          "",
          "Dette er siste melding fra meg om dette. Hvis gratis prøvebilde blir aktuelt senere, er det bare å svare på denne e-posten.",
        ].join("\n");
  return { subject: subject.slice(0, 120), body };
}

// --- Incoming mail ---------------------------------------------------------

export type InboundKind = "auto_reply" | "bounce" | "unsubscribe" | "reply";

/** Removes quoted history and our own footer, so only the new text is read. */
export function stripQuoted(text: string): string {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith(">")) break;
    // «tor. 26. nov. 2026 kl. 10:00 skrev Eiendomly <post@…>:» / «On …, X wrote:»
    if (t.length < 300 && t.endsWith(":") && /\b(wrote|skrev)\b/i.test(t)) break;
    if (/^-{2,}\s*(original message|opprinnelig melding|videresendt melding|forwarded message)/i.test(t)) break;
    if (/^(from|fra):\s/i.test(t) && out.length > 0) break;
    out.push(line);
  }
  return out
    .join("\n")
    .replace(/Vil du ikke få flere e-poster fra oss\?[^\n]*/gi, "")
    .trim();
}

const UNSUBSCRIBE_PATTERNS = [
  /\bnei,? takk\b/i,
  /\bikke interessert\b/i,
  /\bikke aktuelt\b/i,
  /\bmeld (meg|oss) av\b/i,
  /\bavmeld/i,
  /\breserver(er)? (meg|oss)\b/i,
  /\bfjern (meg|oss|adressen)\b/i,
  /\b(ikke|slutt å) (kontakt|send|skriv)/i,
  /\bunsubscribe\b/i,
  /\bremove (me|us)\b/i,
  /\bnot interested\b/i,
  /^\s*(stop|stopp)\s*[.!]?\s*$/im,
];

export function classifyInbound(m: {
  from: string;
  subject: string;
  headers: Record<string, string>;
  text: string;
  contentType?: string;
}): InboundKind {
  const h = (k: string) => (m.headers[k.toLowerCase()] ?? "").toLowerCase();
  const from = m.from.toLowerCase();
  const subject = m.subject.toLowerCase();

  if (
    /^(mailer-daemon|postmaster|mail-daemon)@/.test(from) ||
    (m.contentType ?? "").toLowerCase().includes("delivery-status") ||
    h("content-type").includes("report-type=delivery-status") ||
    /(undeliver|delivery status notification|delivery failure|returned mail|mail delivery failed|kan ikke leveres|ikke levert|levering mislyktes)/.test(subject)
  )
    return "bounce";

  const autoSubmitted = h("auto-submitted");
  if (
    (autoSubmitted && autoSubmitted !== "no") ||
    h("x-autoreply") ||
    h("x-autorespond") ||
    /auto_reply|auto-reply/.test(h("precedence")) ||
    /^(automatisk svar|autosvar|auto(matic)? reply|out of office|fraværende|fravær|ferie)/.test(subject.replace(/^(re|sv|aw):\s*/, ""))
  )
    return "auto_reply";

  const fresh = stripQuoted(m.text);
  if (UNSUBSCRIBE_PATTERNS.some((p) => p.test(fresh))) return "unsubscribe";
  return "reply";
}

/** Address a bounce was about, from the DSN text (Final-Recipient / Original-Recipient). */
export function bouncedRecipient(text: string): string | null {
  const m = /(?:final|original)-recipient:\s*rfc822;\s*<?([^\s>]+@[^\s>]+)>?/i.exec(text);
  return m ? m[1].toLowerCase() : null;
}
