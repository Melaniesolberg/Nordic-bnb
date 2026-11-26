import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/crm/auth";
import { loadSettings } from "@/lib/crm/settings";
import { osloWeekStart } from "@/lib/crm/budget";
import { computeWeeklyReport, type Row } from "@/lib/crm/report";
import { CHANNELS } from "@/lib/crm/constants";
import { saveChannelCost } from "@/lib/crm/actions";
import { Card, Flash, PageHeader, Stat, btnPrimary, btnSecondary, input, label, nok, sp } from "@/components/admin/ui";

export const metadata = { title: "Rapporter" };

const shiftWeek = (week: string, days: number) => {
  const [y, m, d] = week.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
};

export default async function ReportsPage({ searchParams }: PageProps<"/admin/reports">) {
  const params = await searchParams;
  const session = await requireAdmin();
  const supabase = await createSupabaseServerClient();
  const thisWeek = osloWeekStart();
  const requested = sp(params, "week") ?? "";
  const week = /^\d{4}-\d{2}-\d{2}$/.test(requested) ? osloWeekStart(new Date(`${requested}T12:00:00Z`)) : shiftWeek(thisWeek, -7);

  const settings = await loadSettings(supabase);
  if (!settings)
    return (
      <>
        <PageHeader title="Rapporter" />
        <Flash error="migration" />
      </>
    );

  const [report, { data: costs }] = await Promise.all([
    computeWeeklyReport(supabase, week, settings),
    supabase.from("channel_costs").select("channel, amount_nok, hours, note").eq("week_start", week),
  ]);
  const t = report.totals;

  return (
    <>
      <PageHeader
        title="Ukerapport"
        description={`Uke ${report.week_start} – ${report.week_end}. Hva gir mest fortjeneste per arbeidstime?`}
        actions={
          <>
            <Link className={btnSecondary} href={`/admin/reports?week=${shiftWeek(week, -7)}`}>← Forrige</Link>
            {week < thisWeek && <Link className={btnSecondary} href={`/admin/reports?week=${shiftWeek(week, 7)}`}>Neste →</Link>}
          </>
        }
      />
      <Flash ok={sp(params, "ok")} error={sp(params, "error")} detail={sp(params, "detail")} />

      <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Omsetning" value={nok(t.revenue)} hint={`${t.deals} salg`} />
        <Stat label="Fortjeneste" value={nok(t.profit)} hint={`Kostnader ${nok(t.costs)}`} />
        <Stat label="Timer" value={t.hours.toLocaleString("nb-NO")} hint="Arbeid + levering" />
        <Stat label="Per time" value={t.profit_per_hour !== null ? nok(t.profit_per_hour) : "–"} hint={`AI ${nok(report.ai_cost_nok)}`} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Per kanal / aktivitet" className="lg:col-span-2">
          <Table rows={report.by_channel} />
          <p className="mt-2 text-xs text-charcoal/55">
            Outreach: sendt {report.outreach.sent}, svar {report.outreach.replies}, nei/avmeldt {report.outreach.opt_outs}, retur {report.outreach.bounces}, manuelle godkjenninger {report.outreach.approvals}.
          </p>
        </Card>
        <Card title="Per kundetype">
          <Table rows={report.by_segment} empty="Ingen salg denne uken." />
        </Card>
        <Card title="Per tjeneste">
          <Table rows={report.by_service} empty="Ingen salg denne uken." />
        </Card>
        <Card title="Salgsmeldinger som gir kunder (siste 180 dager)" className="lg:col-span-2">
          {report.by_message.length ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm">
                <thead className="text-left text-xs uppercase tracking-wide text-charcoal/55">
                  <tr>
                    <th className="py-1.5 pr-3 font-medium">Melding</th>
                    <th className="py-1.5 pr-3 text-right font-medium">Sendt</th>
                    <th className="py-1.5 pr-3 text-right font-medium">Svar</th>
                    <th className="py-1.5 pr-3 text-right font-medium">Kunder</th>
                    <th className="py-1.5 text-right font-medium">Omsetning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/5 tabular-nums">
                  {report.by_message.map((v) => (
                    <tr key={v.key}>
                      <td className="py-1.5 pr-3">{v.label}</td>
                      <td className="py-1.5 pr-3 text-right">{v.sent}</td>
                      <td className="py-1.5 pr-3 text-right">{v.replies} {v.sent ? <span className="text-charcoal/50">({Math.round((v.replies / v.sent) * 100)} %)</span> : null}</td>
                      <td className="py-1.5 pr-3 text-right">{v.customers}</td>
                      <td className="py-1.5 text-right">{nok(v.revenue)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-charcoal/60">Ingen sendte meldinger ennå.</p>
          )}
          <p className="mt-2 text-xs text-charcoal/55">Et salg knyttes til siste e-post vi sendte selskapet før salget ble registrert.</p>
        </Card>

        <Card title="Markedsføring og timer denne uken" className="lg:col-span-2">
          <p className="mb-3 text-sm text-charcoal/70">
            Legg inn annonsekostnad (f.eks. Google Ads) og timer brukt per kanal, så blir fortjeneste per time riktig.
          </p>
          {costs?.length ? (
            <ul className="mb-3 text-sm">
              {costs.map((c) => (
                <li key={c.channel}>
                  {CHANNELS[c.channel as keyof typeof CHANNELS] ?? c.channel}: {nok(c.amount_nok)}, {Number(c.hours).toLocaleString("nb-NO")} t{c.note ? ` – ${c.note}` : ""}
                </li>
              ))}
            </ul>
          ) : null}
          {session.canWrite && (
            <form action={saveChannelCost} className="grid gap-3 sm:grid-cols-5">
              <input type="hidden" name="week_start" value={week} />
              <div className="sm:col-span-2">
                <label className={label} htmlFor="channel">Kanal</label>
                <select id="channel" name="channel" className={input}>
                  {Object.entries(CHANNELS).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="amount_nok">Kostnad (kr)</label>
                <input id="amount_nok" name="amount_nok" inputMode="decimal" className={input} placeholder="0" />
              </div>
              <div>
                <label className={label} htmlFor="hours">Timer</label>
                <input id="hours" name="hours" inputMode="decimal" className={input} placeholder="0" />
              </div>
              <div className="flex items-end">
                <button type="submit" className={`${btnPrimary} w-full`}>Lagre</button>
              </div>
              <div className="sm:col-span-5">
                <label className={label} htmlFor="note">Notat</label>
                <input id="note" name="note" className={input} placeholder="Valgfritt" />
              </div>
            </form>
          )}
          <p className="mt-3 text-xs text-charcoal/55">
            Leveringstid og direkte kostnad per ordre er anslag fra Innstillinger når et salg ikke har egne tall. AI-kostnaden føres på e-post-outreach.
          </p>
        </Card>
      </div>
    </>
  );
}

function Table({ rows, empty = "Ingen data denne uken." }: { rows: Row[]; empty?: string }) {
  const visible = rows.filter((r) => r.revenue || r.costs || r.hours);
  if (!visible.length) return <p className="text-sm text-charcoal/60">{empty}</p>;
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] text-sm">
        <thead className="text-left text-xs uppercase tracking-wide text-charcoal/55">
          <tr>
            <th className="py-1.5 pr-3 font-medium">Navn</th>
            <th className="py-1.5 pr-3 text-right font-medium">Omsetning</th>
            <th className="py-1.5 pr-3 text-right font-medium">Fortjeneste</th>
            <th className="py-1.5 pr-3 text-right font-medium">Timer</th>
            <th className="py-1.5 text-right font-medium">Per time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-charcoal/5 tabular-nums">
          {visible.map((r) => (
            <tr key={r.key}>
              <td className="py-1.5 pr-3">{r.label}{r.deals ? <span className="text-charcoal/50"> · {r.deals}</span> : null}</td>
              <td className="py-1.5 pr-3 text-right">{nok(r.revenue)}</td>
              <td className={`py-1.5 pr-3 text-right ${r.profit < 0 ? "text-red-700" : ""}`}>{nok(r.profit)}</td>
              <td className="py-1.5 pr-3 text-right">{r.hours.toLocaleString("nb-NO")}</td>
              <td className="py-1.5 text-right font-medium">{r.profit_per_hour !== null ? nok(r.profit_per_hour) : "–"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
