import { createSupabaseServerClient } from "@/lib/supabase/server";
import { importFromBrreg } from "@/lib/crm/actions";
import { searchBrreg, type ProspectCandidate } from "@/lib/crm/brreg";
import { MUNICIPALITIES, SEGMENTS, SEGMENT_NACE, type Segment } from "@/lib/crm/constants";
import { Badge, Card, Flash, PageHeader, btnPrimary, btnSecondary, input, label, sp } from "@/components/admin/ui";

export const metadata = { title: "Research" };

type SearchSegment = Exclude<Segment, "other">;

export default async function ResearchPage({ searchParams }: PageProps<"/admin/research">) {
  const params = await searchParams;
  const segment = sp(params, "segment") as SearchSegment | undefined;
  const raw = params.kommune;
  const kommuner = (Array.isArray(raw) ? raw : raw ? [raw] : []).filter((k) => MUNICIPALITIES.some((m) => m.code === k));
  const requireWebsite = sp(params, "web") === "1";
  const page = Math.max(0, Number(sp(params, "page") ?? 0) || 0);

  let results: { candidates: ProspectCandidate[]; total: number } | null = null;
  let error: string | null = null;
  const existing = new Map<string, string>();

  if (segment && segment in SEGMENT_NACE) {
    try {
      results = await searchBrreg({ segment, municipalities: kommuner, size: 50, page, requireWebsite });
      const orgs = results.candidates.map((c) => c.org_number);
      if (orgs.length) {
        const supabase = await createSupabaseServerClient();
        const { data } = await supabase.from("companies").select("id, org_number").in("org_number", orgs);
        for (const r of data ?? []) existing.set(r.org_number as string, r.id as string);
      }
    } catch (e) {
      error = e instanceof Error ? e.message : "Søket feilet";
    }
  }

  const nextQs = new URLSearchParams({ segment: segment ?? "", ...(requireWebsite && { web: "1" }), page: String(page + 1) });
  kommuner.forEach((k) => nextQs.append("kommune", k));

  return (
    <>
      <PageHeader
        title="Research"
        description="Finn bedrifter i Brønnøysundregistrene (offentlig, åpent register). Bare opplysninger registeret selv oppgir lagres. Etter import kan du kjøre AI-analyse, som også leser selskapets egen nettside."
      />
      <Flash ok={sp(params, "ok")} error={sp(params, "error")} />

      <Card className="mb-4">
        <form method="get" className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className={label} htmlFor="segment">Segment</label>
            <select id="segment" name="segment" defaultValue={segment ?? ""} required className={input}>
              <option value="" disabled>Velg segment</option>
              {Object.keys(SEGMENT_NACE).map((k) => <option key={k} value={k}>{SEGMENTS[k as SearchSegment]}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={label} htmlFor="kommune">Kommuner (hold Ctrl/⌘ for flere, tomt = hele landet)</label>
            <select id="kommune" name="kommune" multiple defaultValue={kommuner} className={`${input} h-28`}>
              {MUNICIPALITIES.map((m) => <option key={m.code} value={m.code}>{m.name}</option>)}
            </select>
          </div>
          <label className="flex items-center gap-2 text-sm sm:col-span-2">
            <input type="checkbox" name="web" value="1" defaultChecked={requireWebsite} /> Bare selskaper med registrert nettside (gir bedre AI-analyse)
          </label>
          <div><button type="submit" className={btnPrimary}>Søk</button></div>
        </form>
      </Card>

      {error && <p className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>}

      {results && (
        <form action={importFromBrreg}>
          <input type="hidden" name="segment" value={segment} />
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-charcoal/70">
              {results.total.toLocaleString("nb-NO")} treff i registeret · viser {results.candidates.length} (side {page + 1}). Selskaper som allerede finnes, er merket og hoppes over.
            </p>
            <button type="submit" className={btnPrimary}>Importer valgte</button>
          </div>
          <ul className="grid gap-2 md:grid-cols-2">
            {results.candidates.map((c) => {
              const dup = existing.has(c.org_number);
              return (
                <li key={c.org_number} className={`flex gap-3 rounded-lg border bg-white p-3 text-sm ${dup ? "border-charcoal/10 opacity-60" : "border-charcoal/15"}`}>
                  <input type="checkbox" name="org" value={c.org_number} disabled={dup} defaultChecked={!dup && Boolean(c.website)} className="mt-1" aria-label={`Velg ${c.name}`} />
                  <div className="min-w-0">
                    <p className="font-medium">{c.name}</p>
                    <p className="text-xs text-charcoal/60">
                      {c.org_number} · {c.city ?? "–"}{c.employees !== null ? ` · ${c.employees} ansatte` : ""}
                    </p>
                    <p className="truncate text-xs text-charcoal/60">{c.nace_description}</p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {c.website ? <Badge color="blue">{c.domain ?? "nettside"}</Badge> : <Badge>Ingen nettside</Badge>}
                      {c.general_email ? <Badge color={c.email_is_generic ? "green" : "amber"}>{c.email_is_generic ? "Felles e-post" : "Personlig e-post"}</Badge> : <Badge>Ingen e-post</Badge>}
                      {dup && <Badge color="gray">Finnes allerede</Badge>}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <button type="submit" className={btnPrimary}>Importer valgte</button>
            {(page + 1) * 50 < results.total && <a href={`?${nextQs}`} className={btnSecondary}>Neste side</a>}
          </div>
        </form>
      )}
    </>
  );
}
