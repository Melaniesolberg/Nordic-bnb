import { createCompany } from "@/lib/crm/actions";
import { SEGMENTS } from "@/lib/crm/constants";
import { Card, Flash, PageHeader, btnPrimary, input, label, sp } from "@/components/admin/ui";

export const metadata = { title: "Legg til selskap" };

export default async function NewProspectPage({ searchParams }: PageProps<"/admin/prospects/new">) {
  const params = await searchParams;
  return (
    <>
      <PageHeader title="Legg til selskap" description="Skriv bare inn opplysninger du har fra en kilde du kan vise til." />
      <Flash error={sp(params, "error")} />
      <Card>
        <form action={createCompany} className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={label} htmlFor="name">Navn *</label>
            <input id="name" name="name" required className={input} />
          </div>
          <div>
            <label className={label} htmlFor="org_number">Org.nr.</label>
            <input id="org_number" name="org_number" inputMode="numeric" pattern="[0-9 ]{9,11}" className={input} />
          </div>
          <div>
            <label className={label} htmlFor="segment">Segment</label>
            <select id="segment" name="segment" className={input} defaultValue="other">
              {Object.entries(SEGMENTS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className={label} htmlFor="website">Nettside</label>
            <input id="website" name="website" placeholder="eksempel.no" className={input} />
          </div>
          <div>
            <label className={label} htmlFor="general_email">Generell e-post</label>
            <input id="general_email" name="general_email" type="email" placeholder="post@eksempel.no" className={input} />
          </div>
          <div>
            <label className={label} htmlFor="phone">Telefon</label>
            <input id="phone" name="phone" className={input} />
          </div>
          <div>
            <label className={label} htmlFor="city">Sted</label>
            <input id="city" name="city" className={input} />
          </div>
          <div className="sm:col-span-2">
            <label className={label} htmlFor="source_url">Kilde (lenke)</label>
            <input id="source_url" name="source_url" type="url" placeholder="https://…" className={input} />
          </div>
          <div className="sm:col-span-2">
            <label className={label} htmlFor="notes">Notat</label>
            <textarea id="notes" name="notes" rows={3} className={input} />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className={btnPrimary}>Lagre</button>
          </div>
        </form>
      </Card>
    </>
  );
}
