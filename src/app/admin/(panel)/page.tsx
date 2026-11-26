import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isoDaysFromNow } from "@/lib/crm/time";
import { CHANNELS, SEGMENTS, SERVICES, STATUSES } from "@/lib/crm/constants";
import type { ActivityRow, CompanyRow, DashboardStats } from "@/lib/crm/types";
import { Card, PageHeader, ScoreBadge, Stat, StatusBadge, btnPrimary, btnSecondary, dateTime, nok } from "@/components/admin/ui";

export const metadata = { title: "Oversikt" };

function Bars({ data, labels, money = false }: { data: Record<string, number>; labels: Record<string, string>; money?: boolean }) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const max = Math.max(1, ...entries.map(([, v]) => Number(v)));
  if (!entries.length) return <p className="text-sm text-charcoal/55">Ingen data ennå.</p>;
  return (
    <ul className="space-y-2">
      {entries.map(([k, v]) => (
        <li key={k} className="text-sm">
          <div className="flex justify-between gap-2">
            <span className="text-charcoal/80">{labels[k] ?? k}</span>
            <span className="tabular-nums text-charcoal">{money ? nok(v) : v}</span>
          </div>
          <div className="mt-1 h-1.5 rounded-full bg-charcoal/5">
            <div className="h-1.5 rounded-full bg-coral" style={{ width: `${(Number(v) / max) * 100}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const [{ data: stats }, { data: top }, { data: followUps }] = await Promise.all([
    supabase.rpc("crm_dashboard"),
    supabase
      .from("companies")
      .select("id, name, segment, score, status, recommended_service, city")
      .eq("do_not_contact", false)
      .in("status", ["qualified", "researched", "interested"])
      .order("score", { ascending: false, nullsFirst: false })
      .limit(8),
    supabase
      .from("activities")
      .select("id, company_id, summary, follow_up_at, companies(name)")
      .not("follow_up_at", "is", null)
      .lte("follow_up_at", isoDaysFromNow(2))
      .order("follow_up_at")
      .limit(8),
  ]);
  const s = (stats ?? {}) as Partial<DashboardStats>;
  const conversion = s.contacted ? Math.round(((s.customers ?? 0) / s.contacted) * 1000) / 10 : 0;

  return (
    <>
      <PageHeader
        title="Oversikt"
        description="Potensielle kunder, pipeline og salg. Ingenting sendes automatisk."
        actions={
          <>
            <Link href="/admin/research" className={btnPrimary}>Finn nye kunder</Link>
            <Link href="/admin/outreach" className={btnSecondary}>
              Til godkjenning ({s.awaiting_approval ?? 0})
            </Link>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        <Stat label="Potensielle kunder" value={s.prospects ?? 0} href="/admin/prospects" />
        <Stat label="Kvalifiserte leads" value={s.qualified ?? 0} hint="Score ≥ 60 eller videre" href="/admin/prospects?status=qualified" />
        <Stat label="Kontaktet" value={s.contacted ?? 0} href="/admin/prospects?status=contacted" />
        <Stat label="Interesserte" value={s.interested ?? 0} href="/admin/prospects?status=interested" />
        <Stat label="Konvertering" value={`${conversion.toLocaleString("nb-NO")} %`} hint="Kunder / kontaktet" />
        <Stat label="Pipeline (vektet)" value={nok(s.pipeline_value)} hint={`Uvektet ${nok(s.pipeline_unweighted)}`} />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card title={`Omsetning per tjeneste – totalt ${nok(s.revenue_total)}`}>
          <Bars data={s.revenue_by_service ?? {}} labels={SERVICES} money />
        </Card>
        <Card title="Omsetning per markedsføringskanal">
          <Bars data={s.revenue_by_channel ?? {}} labels={CHANNELS} money />
        </Card>
        <Card title="Kunder per segment">
          <Bars data={s.by_segment ?? {}} labels={SEGMENTS} />
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card title="Beste leads akkurat nå" actions={<Link href="/admin/prospects?sort=score" className="text-sm text-coral-deep hover:underline">Se alle</Link>}>
          {!top?.length ? (
            <p className="text-sm text-charcoal/55">Ingen analyserte leads ennå. Start under Research.</p>
          ) : (
            <ul className="divide-y divide-charcoal/5">
              {(top as Pick<CompanyRow, "id" | "name" | "segment" | "score" | "status" | "recommended_service" | "city">[]).map((c) => (
                <li key={c.id} className="flex items-center justify-between gap-3 py-2">
                  <Link href={`/admin/prospects/${c.id}`} className="min-w-0">
                    <p className="truncate text-sm font-medium hover:underline">{c.name}</p>
                    <p className="truncate text-xs text-charcoal/60">
                      {SEGMENTS[c.segment]}{c.city ? ` · ${c.city}` : ""}{c.recommended_service ? ` · ${SERVICES[c.recommended_service]}` : ""}
                    </p>
                  </Link>
                  <div className="flex shrink-0 items-center gap-2">
                    <StatusBadge status={c.status} text={STATUSES[c.status]} />
                    <ScoreBadge score={c.score} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
        <Card title={`Oppfølging (${s.follow_ups_due ?? 0} forfaller)`}>
          {!followUps?.length ? (
            <p className="text-sm text-charcoal/55">Ingen oppfølginger de neste to dagene.</p>
          ) : (
            <ul className="divide-y divide-charcoal/5">
              {(followUps as unknown as (ActivityRow & { companies: { name: string } | null })[]).map((a) => (
                <li key={a.id} className="py-2 text-sm">
                  <Link href={`/admin/prospects/${a.company_id}`} className="font-medium hover:underline">{a.companies?.name ?? "Selskap"}</Link>
                  <p className="text-xs text-charcoal/60">{dateTime(a.follow_up_at)} · {a.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </>
  );
}
