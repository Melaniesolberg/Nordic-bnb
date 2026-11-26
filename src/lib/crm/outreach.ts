import { normalizeDomain, normalizeEmail, isGenericEmail } from "@/lib/crm/normalize";
import type { ContactBasis } from "@/lib/crm/constants";

/**
 * Rules that decide whether a message may be sent. Kept pure so they can be
 * tested and reused by the UI (to explain why «Send» is disabled).
 *
 * Norwegian marketing law (markedsføringsloven § 15) and GDPR: e-mail
 * marketing to a business's shared address is allowed with an easy opt-out;
 * personal addresses need consent or an existing customer relationship.
 */
export interface SendCheckInput {
  messageStatus: string;
  toEmail: string | null;
  companyDoNotContact: boolean;
  companyStatus: string;
  contactBasis: ContactBasis;
  suppressed: boolean;
  sendingEnabled: boolean;
  smtpConfigured: boolean;
}

export function sendBlockers(i: SendCheckInput): string[] {
  const out: string[] = [];
  if (!i.sendingEnabled) out.push("Utsending er slått av (OUTREACH_SENDING_ENABLED er ikke «true»).");
  if (!i.smtpConfigured) out.push("E-postserveren (SMTP) er ikke satt opp.");
  if (i.messageStatus !== "approved") out.push("Meldingen er ikke godkjent.");
  return [...out, ...contactBlockers(i)];
}

export type ContactCheckInput = Pick<
  SendCheckInput,
  "toEmail" | "companyDoNotContact" | "companyStatus" | "contactBasis" | "suppressed"
>;

/** Rules for approving a draft: same contact rules as sending. */
export function approvalBlockers(i: ContactCheckInput & { messageStatus: string }): string[] {
  const out: string[] = [];
  if (i.messageStatus !== "draft") out.push("Meldingen venter ikke på godkjenning.");
  return [...out, ...contactBlockers(i)];
}

/** Whether this recipient may receive marketing e-mail at all. */
export function contactBlockers(i: ContactCheckInput): string[] {
  const out: string[] = [];
  const email = normalizeEmail(i.toEmail);
  if (!email) out.push("Mangler gyldig e-postadresse.");
  if (i.companyDoNotContact) out.push("Selskapet har reservert seg eller takket nei.");
  if (["not_interested", "unqualified", "customer"].includes(i.companyStatus))
    out.push("Selskapet har en status som ikke skal få salgs-e-post.");
  if (i.suppressed) out.push("Adressen eller domenet står på stopplisten.");
  if (i.contactBasis === "none") out.push("Kontaktgrunnlag er ikke vurdert.");
  if (email && i.contactBasis === "b2b_generic_address" && !isGenericEmail(email))
    out.push("Adressen ser personlig ut. Personlige adresser krever samtykke eller kundeforhold.");
  return out;
}

export function suppressionKeys(email: string | null): string[] {
  const e = normalizeEmail(email);
  if (!e) return [];
  const domain = normalizeDomain(e);
  return domain ? [e, domain] : [e];
}

export function withFooter(body: string, unsubscribeUrl: string | null): string {
  const lines = [
    body.trim(),
    "",
    "Med vennlig hilsen",
    "Eiendomly",
    "eiendomly.no | Org.nr. 930 895 008",
    "",
    unsubscribeUrl
      ? `Vil du ikke få flere e-poster fra oss? Svar «nei takk», eller reserver deg her: ${unsubscribeUrl}`
      : "Vil du ikke få flere e-poster fra oss? Svar «nei takk», så hører du ikke fra oss igjen.",
  ];
  return lines.join("\n");
}
