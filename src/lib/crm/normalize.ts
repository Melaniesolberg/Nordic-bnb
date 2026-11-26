/** Pure helpers for de-duplication and contact checks. No I/O. */

const LEGAL_SUFFIXES = /\b(as|asa|ans|da|enk|ba|sa|nuf|ltd|ab|aps|gmbh)\b\.?/g;

export function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " og ")
    .replace(LEGAL_SUFFIXES, " ")
    .replace(/[^a-z0-9æøå ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** "https://www.Example.no/kontakt" → "example.no". Returns null for junk. */
export function normalizeDomain(input: string | null | undefined): string | null {
  if (!input) return null;
  let s = input.trim().toLowerCase();
  if (!s) return null;
  if (s.includes("@")) s = s.split("@").pop() ?? "";
  if (!/^https?:\/\//.test(s)) s = `https://${s}`;
  try {
    const host = new URL(s).hostname.replace(/^www\./, "");
    if (!host.includes(".") || host.length < 4) return null;
    return host;
  } catch {
    return null;
  }
}

export function normalizeWebsite(input: string | null | undefined): string | null {
  const domain = normalizeDomain(input);
  if (!domain) return null;
  const raw = (input ?? "").trim();
  return /^https?:\/\//i.test(raw) ? raw : `https://${raw.replace(/^\/+/, "")}`;
}

const EMAIL_RE = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

export function normalizeEmail(input: string | null | undefined): string | null {
  if (!input) return null;
  const s = input.trim().toLowerCase().replace(/^mailto:/, "");
  return EMAIL_RE.test(s) ? s : null;
}

/** Shared mailbox names. Anything else is treated as a personal address. */
const GENERIC_LOCAL_PARTS = new Set([
  "post", "postmottak", "kontakt", "contact", "info", "firmapost", "mail", "epost", "e-post",
  "hei", "hallo", "hello", "hi", "booking", "bestilling", "resepsjon", "reception", "frontdesk",
  "hotel", "hotell", "salg", "sales", "utleie", "rental", "rentals", "service", "kundeservice",
  "support", "office", "kontor", "admin", "foto", "photo", "studio", "megler", "eiendom",
  "forvaltning", "drift", "styling", "interior", "interiør", "design", "marked", "marketing",
  "ordre", "order", "faktura", "regnskap", "felles", "team", "oslo", "bergen", "trondheim",
  "stavanger",
]);

export function isGenericEmail(email: string): boolean {
  const local = email.split("@")[0]?.toLowerCase() ?? "";
  return GENERIC_LOCAL_PARTS.has(local) || GENERIC_LOCAL_PARTS.has(local.replace(/[0-9.-]+$/, ""));
}

/** All e-mail addresses that literally appear in a piece of text/HTML. */
export function extractEmails(text: string): string[] {
  const found = text.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) ?? [];
  const out = new Set<string>();
  for (const raw of found) {
    const e = normalizeEmail(raw);
    // Skip image/asset false positives such as logo@2x.png.
    if (e && !/\.(png|jpe?g|gif|svg|webp)$/i.test(e)) out.add(e);
  }
  return [...out];
}

export function isValidOrgNumber(org: string | null | undefined): boolean {
  if (!org || !/^[0-9]{9}$/.test(org)) return false;
  const weights = [3, 2, 7, 6, 5, 4, 3, 2];
  const sum = weights.reduce((acc, w, i) => acc + w * Number(org[i]), 0);
  const rest = sum % 11;
  const check = rest === 0 ? 0 : 11 - rest;
  return check !== 10 && check === Number(org[8]);
}
