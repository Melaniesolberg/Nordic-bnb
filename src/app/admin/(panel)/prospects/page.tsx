import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { BatchAnalyzer } from "@/components/admin/batch-analyzer";
import { configStatus } from "@/lib/crm/config";
import { SEGMENTS, SERVICES, STATUSES } from "@/lib/crm/constants";
import type { CompanyRow } from "@/lib/crm/types";
import { Badge, Flash, PageHeader, ScoreBadge, StatusBadge, btnPrimary, btnSecondary, input, sp } from "@/components/admin/ui";

export const metadata = { title: "Kunder" };
const PAGE_SIZE = 50;

export default async function ProspectsPage({ searchParams }: PageProps<"/admin/prospects">) {
  const params = await searchParams;
  const q = sp(params, "q")?.trim() ?? "";
  const segment = sp(params, "segment") ?? "";
  const status = sp(params, "status") ?? "";
  const minScore = Number(sp(params, "min") ?? "");
  const sortParam = sp(params, "sort");
  const sort = sortParam === "score" || sortParam === "priority" ? sortParam : "created";
  const review = sp(params, "review") === "1";
  const page = Math.max(0, Number(sp(params, "page") ?? 0) || 0);

  const supabase = await createSupabaseServerClient();
  let query = supabase
    .from("companies")
    .select("id, name, segment, city, status, score, recommended_service, general_email, website, do_not_contact, contact_basis, source", { count: "exact" });
  if (q) {
    const safe = q.replace(/[%,()*]/g, " ");
    query = query.or(`name.ilike.%${safe}%,org_number.eq.${safe.replace(/\D/g, "") || "0"},domain.ilike.%${safe}%,city.ilike.%${safe}%`);
  }
  if (segment in SEGMENTS) query = query.eq("segment", segment);
  if (status in STATUSES) query = query.eq("status", status);
  if (Number.isFinite(minScore) && minScore > 0) query = query.gte("score", minScore);
  if (review) query = query.eq("needs_review", true);
  query =
    sort === "score"
      ? query.order("score", { ascending: false, nullsFirst: false })
      : sort === "priority"
        ? query.order("priority", { ascending: false, nullsFirst: false })
        : query.order("created_at", { ascending: false });
  const { data, count } = await query.range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1);
  const rows = (data ?? []) as CompanyRow[];
  const total = count ?? 0;
  const qs = (patch: Record<string, string | number>) =>
    "?" + new URLSearchParams({ ...(q && { q }), ...(segment && { segment }), ...(status && { status }), ...(minScore > 0 && { min: String(minScore) }), ...(review && { review: "1" }), sort, page: String(page), ...Object.fromEntries(Object.entries(patch).map(([k, v]) => [k, String(v)])) }).toString();

  return (
    <>
      <PageHeader
        title="Kunder og potensielle kunder"
        description={review ? `${total} selskaper har svart og venter på deg.` : `${total} treff. Velg selskaper for AI-analyse, eller åpne et selskap for detaljer.`}
        actions={
          <>
            <Link href="/admin/prospects/new" className={btnSecondary}>Legg til manuelt</Link>
            <Link href="/admin/research" className={btnPrimary}>Finn nye</Link>
          </>
        }
      />
      <Flash ok={sp(params, "ok")} error={sp(params, "error")} />

      <form className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-6" method="get">
        <input name="q" defaultValue={q} placeholder="Søk navn, org.nr., domene, sted" className={`${input} col-span-2`} />
        <select name="segment" defaultValue={segment} className={input} aria-label="Segment">
          <option value="">Alle segmenter</option>
          {Object.entries(SEGMENTS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <select name="status" defaultValue={status} className={input} aria-label="Status">
          <option value="">Alle statuser</option>
          {Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <select name="min" defaultValue={minScore > 0 ? String(minScore) : ""} className={input} aria-label="Minste score">
          <option value="">Alle scorer</option>
          <option value="50">Score ≥ 50</option>
          <option value="60">Score ≥ 60</option>
          <option value="70">Score ≥ 70</option>
        </select>
        <div className="flex gap-2">
          <select name="sort" defaultValue={sort} className={input} aria-label="Sortering">
            <option value="created">Nyeste</option>
            <option value="score">Høyest score</option>
            <option value="priority">Høyest prioritet</option>
          </select>
          <button type="submit" className={btnSecondary}>Filtrer</button>
        </div>
      </form>

      <div className="mb-2">
        <BatchAnalyzer formId="prospect-list" disabled={!configStatus().ai} />
      </div>
      <form id="prospect-list">

        {/* Desktop table */}
        <div className="hidden overflow-x-auto rounded-lg border border-charcoal/10 bg-white md:block">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-charcoal/10 bg-charcoal/[0.03] text-xs uppercase tracking-wide text-charcoal/60">
              <tr>
                <th className="w-8 px-3 py-2"><span className="sr-only">Velg</span></th>
                <th className="px-3 py-2">Selskap</th>
                <th className="px-3 py-2">Segment</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Score</th>
                <th className="px-3 py-2">Anbefalt</th>
                <th className="px-3 py-2">Kontakt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/5">
              {rows.map((c) => (
                <tr key={c.id} className="hover:bg-charcoal/[0.02]">
                  <td className="px-3 py-2"><input type="checkbox" name="id" value={c.id} aria-label={`Velg ${c.name}`} /></td>
                  <td className="px-3 py-2">
                    <Link href={`/admin/prospects/${c.id}`} className="font-medium hover:underline">{c.name}</Link>
                    <p className="text-xs text-charcoal/55">{[c.city, c.website?.replace(/^https?:\/\//, "")].filter(Boolean).join(" · ")}</p>
                  </td>
                  <td className="px-3 py-2 text-charcoal/75">{SEGMENTS[c.segment]}</td>
                  <td className="px-3 py-2"><StatusBadge status={c.status} text={STATUSES[c.status]} /></td>
                  <td className="px-3 py-2"><ScoreBadge score={c.score} /></td>
                  <td className="px-3 py-2 text-charcoal/75">{c.recommended_service ? SERVICES[c.recommended_service] : "–"}</td>
                  <td className="px-3 py-2">
                    {c.do_not_contact ? <Badge color="red">Ikke kontakt</Badge> : c.general_email ? <span className="text-xs text-charcoal/70">{c.general_email}</span> : <span className="text-xs text-charcoal/45">Mangler e-post</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <ul className="space-y-2 md:hidden">
          {rows.map((c) => (
            <li key={c.id} className="flex gap-3 rounded-lg border border-charcoal/10 bg-white p-3">
              <input type="checkbox" name="id" value={c.id} aria-label={`Velg ${c.name}`} className="mt-1" />
              <Link href={`/admin/prospects/${c.id}`} className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium">{c.name}</p>
                  <ScoreBadge score={c.score} />
                </div>
                <p className="text-xs text-charcoal/60">{SEGMENTS[c.segment]}{c.city ? ` · ${c.city}` : ""}</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  <StatusBadge status={c.status} text={STATUSES[c.status]} />
                  {c.do_not_contact && <Badge color="red">Ikke kontakt</Badge>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {!rows.length && <p className="rounded-lg border border-dashed border-charcoal/20 bg-white p-6 text-center text-sm text-charcoal/60">Ingen treff.</p>}
      </form>

      {total > PAGE_SIZE && (
        <div className="mt-4 flex items-center justify-between text-sm">
          {page > 0 ? <Link className={btnSecondary} href={qs({ page: page - 1 })}>Forrige</Link> : <span />}
          <span className="text-charcoal/60">Side {page + 1} av {Math.ceil(total / PAGE_SIZE)}</span>
          {(page + 1) * PAGE_SIZE < total ? <Link className={btnSecondary} href={qs({ page: page + 1 })}>Neste</Link> : <span />}
        </div>
      )}
    </>
  );
}
