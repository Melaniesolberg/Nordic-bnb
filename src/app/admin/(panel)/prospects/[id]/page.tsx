import Link from "next/link";
import { notFound } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  addActivity,
  addDeal,
  analyzeOne,
  deleteCompany,
  saveMessage,
  setDealStatus,
  updateCompany,
} from "@/lib/crm/actions";
import { ACTIVITY_TYPES, CHANNELS, CONTACT_BASIS, SEGMENTS, SERVICES, SERVICE_PRICE_NOK, STATUSES } from "@/lib/crm/constants";
import type { ActivityRow, CompanyRow, DealRow, MessageRow } from "@/lib/crm/types";
import { isOutreachSendingEnabled, isSmtpConfigured, configStatus } from "@/lib/crm/config";
import { sendBlockers, suppressionKeys } from "@/lib/crm/outreach";
import { MessageActions } from "@/components/admin/message-actions";
import {
  Badge,
  Card,
  Flash,
  ScoreBadge,
  StatusBadge,
  btnDanger,
  btnPrimary,
  btnSecondary,
  dateTime,
  input,
  label,
  nok,
  sp,
} from "@/components/admin/ui";

export default async function ProspectPage({ params, searchParams }: PageProps<"/admin/prospects/[id]">) {
  const { id } = await params;
  const query = await searchParams;
  if (!/^[0-9a-f-]{36}$/i.test(id)) notFound();

  const supabase = await createSupabaseServerClient();
  const [{ data: company }, { data: messages }, { data: activities }, { data: deals }] = await Promise.all([
    supabase.from("companies").select("*").eq("id", id).maybeSingle<CompanyRow>(),
    supabase.from("outreach_messages").select("*").eq("company_id", id).order("created_at", { ascending: false }),
    supabase.from("activities").select("*").eq("company_id", id).order("occurred_at", { ascending: false }).limit(50),
    supabase.from("deals").select("*").eq("company_id", id).order("created_at", { ascending: false }),
  ]);
  if (!company) notFound();

  const keys = (messages ?? []).flatMap((m) => suppressionKeys((m as MessageRow).to_email));
  const { data: suppressed } = keys.length
    ? await supabase.from("suppression_list").select("value").in("value", keys)
    : { data: [] as { value: string }[] };
  const suppressedSet = new Set((suppressed ?? []).map((s) => s.value));
  const cfg = configStatus();
  const analysis = company.analysis as { website_checked?: { url?: string; ok?: boolean; robots_blocked?: boolean; error?: string | null } | null; email_source?: string | null; model?: string; recurring_reason?: string; error?: string } | null;
  const returnTo = `/admin/prospects/${id}`;

  return (
    <>
      <div className="mb-4 text-sm">
        <Link href="/admin/prospects" className="text-charcoal/60 hover:underline">← Alle kunder</Link>
      </div>
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold sm:text-2xl">{company.name}</h1>
          <p className="mt-1 text-sm text-charcoal/65">
            {SEGMENTS[company.segment]}
            {company.org_number ? ` · Org.nr. ${company.org_number}` : ""}
            {company.city ? ` · ${company.city}` : ""}
            {company.employees !== null ? ` · ${company.employees} ansatte` : ""}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <StatusBadge status={company.status} text={STATUSES[company.status]} />
            <ScoreBadge score={company.score} />
            {company.recommended_service && <Badge color="blue">{SERVICES[company.recommended_service]}</Badge>}
            {company.do_not_contact && <Badge color="red">Ikke kontakt{company.opt_out_reason ? `: ${company.opt_out_reason}` : ""}</Badge>}
          </div>
        </div>
        <form action={analyzeOne}>
          <input type="hidden" name="id" value={company.id} />
          <button type="submit" className={btnPrimary} disabled={!cfg.ai}>
            {company.analyzed_at ? "Kjør AI-analyse på nytt" : "Kjør AI-analyse"}
          </button>
          {!cfg.ai && <p className="mt-1 text-xs text-charcoal/55">ANTHROPIC_API_KEY mangler</p>}
        </form>
      </div>

      <Flash ok={sp(query, "ok")} error={sp(query, "error")} detail={sp(query, "detail")} />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <Card title="AI-vurdering">
            {!company.analyzed_at ? (
              <p className="text-sm text-charcoal/60">Ikke analysert ennå.</p>
            ) : (
              <div className="space-y-3 text-sm">
                {company.needs_summary && (
                  <ul className="list-disc space-y-1 pl-5 text-charcoal/85">
                    {company.needs_summary.split("\n").map((n, i) => <li key={i}>{n}</li>)}
                  </ul>
                )}
                {company.score_reason && <p className="text-charcoal/75"><span className="font-medium">Score {company.score}:</span> {company.score_reason}</p>}
                {company.recurring_potential !== null && (
                  <p className="text-charcoal/75">
                    <span className="font-medium">Gjentakende potensial {company.recurring_potential}:</span>{" "}
                    {typeof analysis?.recurring_reason === "string" ? analysis.recurring_reason : ""}
                    {company.priority !== null && <span className="text-charcoal/55"> · prioritet {company.priority}</span>}
                  </p>
                )}
                <p className="text-xs text-charcoal/55">
                  Analysert {dateTime(company.analyzed_at)}
                  {analysis?.model ? ` · ${analysis.model}` : ""}
                  {analysis?.website_checked
                    ? analysis.website_checked.ok
                      ? ` · Nettside lest: ${analysis.website_checked.url}`
                      : ` · Nettside ikke lest${analysis.website_checked.error ? ` (${analysis.website_checked.error})` : ""}`
                    : " · Ingen nettside"}
                  {analysis?.email_source ? ` · E-post fra ${analysis.email_source === "website" ? "nettsiden" : "Brønnøysund"}` : ""}
                </p>
              </div>
            )}
          </Card>

          <Card title="Outreach">
            {!cfg.sending && (
              <p className="mb-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
                Utsending er slått av. Meldinger kan skrives og godkjennes, men ikke sendes før <code>OUTREACH_SENDING_ENABLED=true</code> er satt etter test.
              </p>
            )}
            <div className="space-y-4">
              {(messages as MessageRow[] | null)?.map((m) => {
                const blockers = sendBlockers({
                  messageStatus: m.status,
                  toEmail: m.to_email,
                  companyDoNotContact: company.do_not_contact,
                  companyStatus: company.status,
                  contactBasis: company.contact_basis,
                  suppressed: suppressionKeys(m.to_email).some((k) => suppressedSet.has(k)),
                  sendingEnabled: isOutreachSendingEnabled(),
                  smtpConfigured: isSmtpConfigured(),
                });
                const editable = ["draft", "approved", "failed"].includes(m.status);
                return (
                  <div key={m.id} className="rounded-md border border-charcoal/10 p-3">
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-charcoal/60">
                      <Badge color={m.status === "sent" ? "green" : m.status === "approved" ? "blue" : m.status === "cancelled" || m.status === "failed" ? "red" : "amber"}>
                        {{ draft: "Utkast – venter på godkjenning", approved: "Godkjent", sent: "Sendt", failed: "Feilet", cancelled: "Stoppet" }[m.status]}
                      </Badge>
                      <span>{m.generated_by === "ai" ? "Skrevet av AI" : "Manuell"} · {dateTime(m.created_at)}</span>
                      {m.sent_at && <span>· Sendt {dateTime(m.sent_at)}</span>}
                    </div>
                    {editable ? (
                      <form action={saveMessage} className="space-y-2">
                        <input type="hidden" name="id" value={m.id} />
                        <input type="hidden" name="company_id" value={company.id} />
                        <input name="to_email" defaultValue={m.to_email ?? ""} placeholder="Til (felles e-post)" className={input} aria-label="Til" />
                        <input name="subject" defaultValue={m.subject} className={input} aria-label="Emne" />
                        <textarea name="body" defaultValue={m.body} rows={8} className={input} aria-label="Tekst" />
                        <p className="text-xs text-charcoal/55">Signatur og avmeldingslenke legges til automatisk ved sending.</p>
                        <button type="submit" className={btnSecondary}>Lagre endringer</button>
                      </form>
                    ) : (
                      <div className="text-sm">
                        <p className="text-xs text-charcoal/60">Til: {m.to_email ?? "–"}</p>
                        <p className="font-medium">{m.subject}</p>
                        <p className="mt-1 whitespace-pre-line text-charcoal/80">{m.body}</p>
                      </div>
                    )}
                    {m.error && <p className="mt-2 text-xs text-red-700">{m.error}</p>}
                    <MessageActions id={m.id} status={m.status} blockers={blockers} returnTo={returnTo} />
                  </div>
                );
              })}
              {!messages?.length && <p className="text-sm text-charcoal/60">Ingen meldinger ennå. Kjør AI-analyse for et utkast, eller skriv selv under.</p>}
              {!company.do_not_contact && (
                <details className="rounded-md border border-dashed border-charcoal/20 p-3">
                  <summary className="cursor-pointer text-sm font-medium">Skriv ny melding</summary>
                  <form action={saveMessage} className="mt-3 space-y-2">
                    <input type="hidden" name="company_id" value={company.id} />
                    <input name="to_email" defaultValue={company.email_is_generic ? company.general_email ?? "" : ""} placeholder="Til" className={input} aria-label="Til" />
                    <input name="subject" required placeholder="Emne" className={input} aria-label="Emne" />
                    <textarea name="body" required rows={6} placeholder="Tekst" className={input} aria-label="Tekst" />
                    <button type="submit" className={btnSecondary}>Lagre som utkast</button>
                  </form>
                </details>
              )}
            </div>
          </Card>

          <Card title="Aktivitet og oppfølging">
            <form action={addActivity} className="mb-4 grid gap-2 sm:grid-cols-4">
              <input type="hidden" name="company_id" value={company.id} />
              <select name="type" className={input} aria-label="Type" defaultValue="note">
                {(["note", "reply", "call", "meeting", "follow_up"] as const).map((t) => <option key={t} value={t}>{ACTIVITY_TYPES[t]}</option>)}
              </select>
              <select name="outcome" className={input} aria-label="Utfall" defaultValue="">
                <option value="">Utfall: ingen endring</option>
                <option value="interested">Interessert</option>
                <option value="not_interested">Takket nei (stopper outreach)</option>
                <option value="unsubscribe">Reservert seg (stoppliste)</option>
              </select>
              <input type="datetime-local" name="follow_up_at" className={input} aria-label="Følg opp" />
              <button type="submit" className={btnSecondary}>Registrer</button>
              <textarea name="summary" rows={2} placeholder="Hva skjedde?" className={`${input} sm:col-span-3`} aria-label="Beskrivelse" />
              <input name="minutes" type="number" min={0} max={600} placeholder="Minutter brukt" className={input} aria-label="Minutter brukt" />
            </form>
            <ul className="divide-y divide-charcoal/5 text-sm">
              {(activities as ActivityRow[] | null)?.map((a) => (
                <li key={a.id} className="py-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{ACTIVITY_TYPES[a.type as keyof typeof ACTIVITY_TYPES] ?? a.type}</Badge>
                    <span className="text-xs text-charcoal/55">{dateTime(a.occurred_at)}</span>
                    {a.follow_up_at && <Badge color="amber">Følg opp {dateTime(a.follow_up_at)}</Badge>}
                  </div>
                  <p className="mt-1 text-charcoal/85">{a.summary}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="space-y-4">
          <Card title="Salg og pipeline">
            <ul className="mb-3 space-y-2 text-sm">
              {(deals as DealRow[] | null)?.map((d) => (
                <li key={d.id} className="rounded-md border border-charcoal/10 p-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{SERVICES[d.service]}</span>
                    <span className="tabular-nums">{nok(d.amount_nok)}</span>
                  </div>
                  <p className="text-xs text-charcoal/60">{CHANNELS[d.channel]} · {d.status === "open" ? `Åpen (${d.probability} %)` : d.status === "won" ? "Vunnet" : "Tapt"}</p>
                  {d.status === "open" && (
                    <div className="mt-2 flex gap-2">
                      {(["won", "lost"] as const).map((s) => (
                        <form key={s} action={setDealStatus}>
                          <input type="hidden" name="deal_id" value={d.id} />
                          <input type="hidden" name="status" value={s} />
                          <button type="submit" className={`${btnSecondary} px-2 py-1 text-xs`}>{s === "won" ? "Vunnet" : "Tapt"}</button>
                        </form>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <form action={addDeal} className="grid gap-2">
              <input type="hidden" name="company_id" value={company.id} />
              <select name="service" className={input} defaultValue={company.recommended_service ?? "photo_boost"} aria-label="Tjeneste">
                {Object.entries(SERVICES).map(([k, v]) => <option key={k} value={k}>{v} {SERVICE_PRICE_NOK[k as keyof typeof SERVICE_PRICE_NOK] ? `(${nok(SERVICE_PRICE_NOK[k as keyof typeof SERVICE_PRICE_NOK])})` : ""}</option>)}
              </select>
              <select name="channel" className={input} defaultValue={company.acquisition_channel ?? "outreach"} aria-label="Kanal">
                {Object.entries(CHANNELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
              </select>
              <div className="grid grid-cols-2 gap-2">
                <input name="amount_nok" inputMode="decimal" required placeholder="Beløp kr" className={input} aria-label="Beløp" />
                <select name="status" className={input} defaultValue="open" aria-label="Status">
                  <option value="open">Åpen</option>
                  <option value="won">Vunnet (salg)</option>
                  <option value="lost">Tapt</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input name="probability" type="number" min={0} max={100} placeholder="Sannsynlighet %" className={input} aria-label="Sannsynlighet" />
                <input name="expected_close" type="date" className={input} aria-label="Forventet dato" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input name="delivery_minutes" type="number" min={0} placeholder="Leveringstid min (valgfritt)" className={input} aria-label="Leveringstid i minutter" />
                <input name="direct_cost_nok" inputMode="decimal" placeholder="Direkte kostnad kr (valgfritt)" className={input} aria-label="Direkte kostnad" />
              </div>
              <button type="submit" className={btnSecondary}>Registrer avtale / salg</button>
            </form>
          </Card>

          <Card title="Selskapsinfo">
            <form action={updateCompany} className="grid gap-3 text-sm">
              <input type="hidden" name="id" value={company.id} />
              <div><label className={label} htmlFor="f-name">Navn</label><input id="f-name" name="name" defaultValue={company.name} className={input} /></div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className={label} htmlFor="f-status">Status</label>
                  <select id="f-status" name="status" defaultValue={company.status} className={input}>
                    {Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="f-segment">Segment</label>
                  <select id="f-segment" name="segment" defaultValue={company.segment} className={input}>
                    {Object.entries(SEGMENTS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                  </select>
                </div>
              </div>
              <div><label className={label} htmlFor="f-web">Nettside</label><input id="f-web" name="website" defaultValue={company.website ?? ""} className={input} /></div>
              <div>
                <label className={label} htmlFor="f-email">Generell e-post</label>
                <input id="f-email" name="general_email" defaultValue={company.general_email ?? ""} className={input} />
                {company.general_email && company.email_is_generic === false && (
                  <p className="mt-1 text-xs text-amber-800">Ser ut som en personlig adresse. Krever samtykke eller kundeforhold.</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div><label className={label} htmlFor="f-phone">Telefon</label><input id="f-phone" name="phone" defaultValue={company.phone ?? ""} className={input} /></div>
                <div><label className={label} htmlFor="f-city">Sted</label><input id="f-city" name="city" defaultValue={company.city ?? ""} className={input} /></div>
              </div>
              <div>
                <label className={label} htmlFor="f-basis">Kontaktgrunnlag</label>
                <select id="f-basis" name="contact_basis" defaultValue={company.contact_basis} className={input}>
                  {Object.entries(CONTACT_BASIS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
                <input name="contact_basis_note" defaultValue={company.contact_basis_note ?? ""} placeholder="Begrunnelse / kilde" className={`${input} mt-2`} aria-label="Begrunnelse" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div><label className={label} htmlFor="f-val">Estimert verdi (kr)</label><input id="f-val" name="estimated_value_nok" defaultValue={company.estimated_value_nok ?? ""} className={input} /></div>
                <div>
                  <label className={label} htmlFor="f-ch">Kanal</label>
                  <select id="f-ch" name="acquisition_channel" defaultValue={company.acquisition_channel ?? ""} className={input}>
                    <option value="">–</option>
                    {Object.entries(CHANNELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                  </select>
                </div>
              </div>
              <div><label className={label} htmlFor="f-notes">Notater</label><textarea id="f-notes" name="notes" rows={3} defaultValue={company.notes ?? ""} className={input} /></div>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="do_not_contact" defaultChecked={company.do_not_contact} /> Ikke kontakt (stopper all outreach)</label>
              <button type="submit" className={btnPrimary}>Lagre</button>
            </form>
            <div className="mt-3 border-t border-charcoal/10 pt-3 text-xs text-charcoal/60">
              <p>Kilde: {company.source}{company.source_url ? <> · <a href={company.source_url} target="_blank" rel="noopener noreferrer" className="underline">vis kilde</a></> : null}</p>
              {company.nace_description && <p>Bransje: {company.nace_code} {company.nace_description}</p>}
              {company.address && <p>Adresse: {company.address}, {company.postal_code} {company.city}</p>}
              <p>Opprettet {dateTime(company.created_at)}</p>
            </div>
          </Card>

          <details className="rounded-lg border border-red-200 bg-white p-4 text-sm">
            <summary className="cursor-pointer font-medium text-red-700">Slett selskap</summary>
            <p className="my-2 text-charcoal/70">Sletter selskapet med meldinger, aktiviteter og avtaler. Kan ikke angres. Vil du bare stoppe kontakt, bruk «Ikke kontakt».</p>
            <form action={deleteCompany}>
              <input type="hidden" name="id" value={company.id} />
              <button type="submit" className={btnDanger}>Slett permanent</button>
            </form>
          </details>
        </div>
      </div>
    </>
  );
}
