import "server-only";
import type { SupabaseClient } from "@supabase/supabase-js";
import { SEGMENTS, type Segment } from "@/lib/crm/constants";
import {
  isGenericEmail,
  isValidOrgNumber,
  normalizeDomain,
  normalizeEmail,
  normalizeName,
  normalizeWebsite,
} from "@/lib/crm/normalize";

export interface CompanyInput {
  name: string;
  org_number?: string | null;
  segment?: Segment;
  website?: string | null;
  general_email?: string | null;
  phone?: string | null;
  address?: string | null;
  postal_code?: string | null;
  city?: string | null;
  municipality?: string | null;
  nace_code?: string | null;
  nace_description?: string | null;
  employees?: number | null;
  source: "brreg" | "manual" | "csv" | "n8n" | "website" | "inbound";
  source_url?: string | null;
  source_ref?: string | null;
  notes?: string | null;
}

export function prepareCompany(input: CompanyInput) {
  const email = normalizeEmail(input.general_email);
  const org = input.org_number?.replace(/\s/g, "") || null;
  return {
    name: input.name.trim(),
    name_normalized: normalizeName(input.name),
    org_number: org && isValidOrgNumber(org) ? org : null,
    segment: input.segment && input.segment in SEGMENTS ? input.segment : "other",
    website: normalizeWebsite(input.website),
    domain: normalizeDomain(input.website) ?? (email && isGenericEmail(email) ? normalizeDomain(email) : null),
    general_email: email,
    email_is_generic: email ? isGenericEmail(email) : null,
    phone: input.phone?.trim() || null,
    address: input.address?.trim() || null,
    postal_code: input.postal_code?.trim() || null,
    city: input.city?.trim() || null,
    municipality: input.municipality?.trim() || null,
    nace_code: input.nace_code ?? null,
    nace_description: input.nace_description ?? null,
    employees: input.employees ?? null,
    source: input.source,
    source_url: input.source_url ?? null,
    source_ref: input.source_ref ?? null,
    notes: input.notes ?? null,
  };
}

export type PreparedCompany = ReturnType<typeof prepareCompany>;

/**
 * Finds an existing company that is the same as `c`: same org number, same
 * domain, same shared e-mail, or same normalised name + postal code.
 */
export async function findDuplicate(supabase: SupabaseClient, c: PreparedCompany): Promise<string | null> {
  const checks: Promise<{ data: { id: string }[] | null }>[] = [];
  if (c.org_number) checks.push(Promise.resolve(supabase.from("companies").select("id").eq("org_number", c.org_number).limit(1)));
  if (c.domain) checks.push(Promise.resolve(supabase.from("companies").select("id").eq("domain", c.domain).limit(1)));
  if (c.general_email)
    checks.push(Promise.resolve(supabase.from("companies").select("id").eq("general_email", c.general_email).limit(1)));
  if (c.name_normalized && c.postal_code)
    checks.push(
      Promise.resolve(
        supabase.from("companies").select("id").eq("name_normalized", c.name_normalized).eq("postal_code", c.postal_code).limit(1),
      ),
    );
  for (const r of await Promise.all(checks)) if (r.data?.length) return r.data[0].id;
  return null;
}

export interface ImportResult {
  imported: number;
  duplicates: number;
  invalid: number;
  ids: string[];
}

/** Inserts companies, skipping duplicates (against the database and within the batch). */
export async function importCompanies(
  supabase: SupabaseClient,
  inputs: CompanyInput[],
  createdBy: string | null,
): Promise<ImportResult> {
  const result: ImportResult = { imported: 0, duplicates: 0, invalid: 0, ids: [] };
  const seen = new Set<string>();
  for (const input of inputs) {
    if (!input.name?.trim()) {
      result.invalid++;
      continue;
    }
    const c = prepareCompany(input);
    const keys = [c.org_number, c.domain, c.general_email, `${c.name_normalized}|${c.postal_code ?? ""}`].filter(Boolean) as string[];
    if (keys.some((k) => seen.has(k)) || (await findDuplicate(supabase, c))) {
      result.duplicates++;
      continue;
    }
    keys.forEach((k) => seen.add(k));
    const { data, error } = await supabase
      .from("companies")
      .insert({ ...c, created_by: createdBy })
      .select("id")
      .single();
    if (error) {
      // A unique index (org_number / domain) caught a race: count as duplicate.
      if (error.code === "23505") result.duplicates++;
      else result.invalid++;
      continue;
    }
    result.imported++;
    result.ids.push(data.id);
  }
  return result;
}
