import { createSupabaseServerClient } from "@/lib/supabase/server";
import { addSuppression, importCsv } from "@/lib/crm/actions";
import { Card, Flash, PageHeader, btnPrimary, btnSecondary, dateTime, input, label, sp } from "@/components/admin/ui";

export const metadata = { title: "Import og eksport" };

export default async function ImportPage({ searchParams }: PageProps<"/admin/import">) {
  const params = await searchParams;
  const supabase = await createSupabaseServerClient();
  const { data: suppression } = await supabase.from("suppression_list").select("*").order("created_at", { ascending: false }).limit(50);

  return (
    <>
      <PageHeader title="Import og eksport" />
      <Flash ok={sp(params, "ok")} error={sp(params, "error")} />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Importer CSV">
          <p className="mb-3 text-sm text-charcoal/70">
            Kolonner (norske eller engelske navn): <code>navn</code>, <code>orgnr</code>, <code>segment</code>, <code>nettside</code>, <code>e-post</code>,{" "}
            <code>telefon</code>, <code>sted</code>, <code>postnummer</code>, <code>kilde</code>, <code>notat</code>. Komma eller semikolon. Duplikater hoppes over.
            Importer bare data du har lov til å bruke, og fyll inn kilde.
          </p>
          <form action={importCsv} className="flex flex-wrap items-end gap-2">
            <div className="min-w-0 flex-1">
              <label className={label} htmlFor="file">CSV-fil (maks 2 MB)</label>
              <input id="file" name="file" type="file" accept=".csv,text/csv" required className={input} />
            </div>
            <button type="submit" className={btnPrimary}>Importer</button>
          </form>
        </Card>

        <Card title="Eksporter CSV">
          <p className="mb-3 text-sm text-charcoal/70">Åpnes riktig i Excel og Numbers.</p>
          <div className="flex flex-wrap gap-2">
            <a href="/admin/export?type=companies" className={btnSecondary}>Selskaper</a>
            <a href="/admin/export?type=deals" className={btnSecondary}>Salg og avtaler</a>
            <a href="/admin/export?type=activities" className={btnSecondary}>Aktiviteter</a>
            <a href="/admin/export?type=messages" className={btnSecondary}>Meldinger</a>
          </div>
        </Card>

        <Card title="Stoppliste (reservasjoner)" className="lg:col-span-2">
          <p className="mb-3 text-sm text-charcoal/70">
            Adresser og domener her får aldri e-post. Avmeldingslenken og «nei takk»-svar legges inn automatisk. Matchende selskaper merkes «ikke kontakt».
          </p>
          <form action={addSuppression} className="mb-4 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
            <input name="value" required placeholder="post@firma.no eller firma.no" className={input} aria-label="E-post eller domene" />
            <input name="reason" placeholder="Grunn (valgfritt)" className={input} aria-label="Grunn" />
            <button type="submit" className={btnSecondary}>Legg til</button>
          </form>
          <ul className="divide-y divide-charcoal/5 text-sm">
            {(suppression ?? []).map((s) => (
              <li key={s.id as string} className="flex flex-wrap justify-between gap-2 py-1.5">
                <span>{s.value as string}</span>
                <span className="text-xs text-charcoal/55">{s.reason as string} · {dateTime(s.created_at as string)}</span>
              </li>
            ))}
            {!suppression?.length && <li className="py-1.5 text-charcoal/55">Ingen reservasjoner.</li>}
          </ul>
        </Card>
      </div>
    </>
  );
}
