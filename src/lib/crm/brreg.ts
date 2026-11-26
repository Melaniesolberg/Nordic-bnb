import { SEGMENT_NACE, type Segment } from "@/lib/crm/constants";
import { isGenericEmail, normalizeDomain, normalizeEmail, normalizeName, normalizeWebsite } from "@/lib/crm/normalize";

/**
 * Brønnøysundregistrene (Enhetsregisteret) open API. Public, free, no key.
 * Licence: NLOD. Only data the register itself returns is stored.
 */
const BRREG = "https://data.brreg.no/enhetsregisteret/api";

interface BrregEnhet {
  organisasjonsnummer: string;
  navn: string;
  hjemmeside?: string;
  epostadresse?: string;
  telefon?: string;
  mobil?: string;
  antallAnsatte?: number;
  konkurs?: boolean;
  underAvvikling?: boolean;
  underTvangsavviklingEllerTvangsopplosning?: boolean;
  slettedato?: string;
  naeringskode1?: { kode: string; beskrivelse: string };
  forretningsadresse?: {
    adresse?: string[];
    postnummer?: string;
    poststed?: string;
    kommune?: string;
  };
}

export interface ProspectCandidate {
  name: string;
  name_normalized: string;
  org_number: string;
  segment: Segment;
  website: string | null;
  domain: string | null;
  general_email: string | null;
  email_is_generic: boolean | null;
  phone: string | null;
  address: string | null;
  postal_code: string | null;
  city: string | null;
  municipality: string | null;
  nace_code: string | null;
  nace_description: string | null;
  employees: number | null;
  source: "brreg";
  source_url: string;
  source_ref: string;
}

export function mapEnhet(e: BrregEnhet, segment: Segment): ProspectCandidate {
  const email = normalizeEmail(e.epostadresse);
  const website = normalizeWebsite(e.hjemmeside);
  const addr = e.forretningsadresse;
  return {
    name: e.navn,
    name_normalized: normalizeName(e.navn),
    org_number: e.organisasjonsnummer,
    segment,
    website,
    domain: normalizeDomain(e.hjemmeside) ?? (email && isGenericEmail(email) ? normalizeDomain(email) : null),
    general_email: email,
    email_is_generic: email ? isGenericEmail(email) : null,
    phone: e.telefon ?? e.mobil ?? null,
    address: addr?.adresse?.filter(Boolean).join(", ") || null,
    postal_code: addr?.postnummer ?? null,
    city: addr?.poststed ?? null,
    municipality: addr?.kommune ?? null,
    nace_code: e.naeringskode1?.kode ?? null,
    nace_description: e.naeringskode1?.beskrivelse ?? null,
    employees: typeof e.antallAnsatte === "number" ? e.antallAnsatte : null,
    source: "brreg",
    source_url: `https://virksomhet.brreg.no/nb/oppslag/enheter/${e.organisasjonsnummer}`,
    source_ref: e.organisasjonsnummer,
  };
}

export interface BrregSearch {
  segment: Exclude<Segment, "other">;
  municipalities: string[];
  size?: number;
  page?: number;
  requireWebsite?: boolean;
}

export async function searchBrreg(params: BrregSearch): Promise<{ candidates: ProspectCandidate[]; total: number }> {
  const spec = SEGMENT_NACE[params.segment];
  const qs = new URLSearchParams({
    naeringskode: spec.codes.join(","),
    konkurs: "false",
    underAvvikling: "false",
    underTvangsavviklingEllerTvangsopplosning: "false",
    size: String(Math.min(Math.max(params.size ?? 50, 1), 200)),
    page: String(params.page ?? 0),
  });
  if (params.municipalities.length) qs.set("kommunenummer", params.municipalities.join(","));
  if (spec.minEmployees) qs.set("fraAntallAnsatte", String(spec.minEmployees));

  const res = await fetch(`${BRREG}/enheter?${qs}`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`Brønnøysundregistrene svarte ${res.status}`);
  const json = (await res.json()) as {
    _embedded?: { enheter?: BrregEnhet[] };
    page?: { totalElements?: number };
  };
  const enheter = (json._embedded?.enheter ?? []).filter(
    (e) => !e.konkurs && !e.underAvvikling && !e.underTvangsavviklingEllerTvangsopplosning && !e.slettedato,
  );
  let candidates = enheter.map((e) => mapEnhet(e, params.segment));
  if (params.requireWebsite) candidates = candidates.filter((c) => c.website);
  return { candidates, total: json.page?.totalElements ?? candidates.length };
}
