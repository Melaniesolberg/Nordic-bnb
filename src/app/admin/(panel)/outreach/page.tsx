import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { CONTACT_BASIS, MESSAGE_STATUSES, SEGMENTS } from "@/lib/crm/constants";
import type { MessageRow } from "@/lib/crm/types";
import { crmEnv, isOutreachSendingEnabled, isSmtpConfigured } from "@/lib/crm/config";
import { approvalBlockers, sendBlockers, suppressionKeys } from "@/lib/crm/outreach";
import { isGenericEmail } from "@/lib/crm/normalize";
import { approveMany, requestSend } from "@/lib/crm/actions";
import { MessageActions } from "@/components/admin/message-actions";
import { BulkBar } from "@/components/admin/bulk-bar";
import { Badge, Flash, PageHeader, ScoreBadge, btnAccent, btnPrimary, dateTime, sp } from "@/components/admin/ui";

export const metadata = { title: "Outreach" };

const TABS = ["draft", "approved", "sent", "failed", "cancelled"] as const;
const COMPANY_FIELDS = "id, name, segment, score, contact_basis, contact_basis_note, do_not_contact, status, priority, recurring_potential, general_email, website";

export default async function OutreachPage({ searchParams }: PageProps<"/admin/outreach">) {
  const params = await searchParams;
  const tab = (TABS as readonly string[]).includes(sp(params, "tab") ?? "") ? (sp(params, "tab") as (typeof TABS)[number]) : "draft";
  const supabase = await createSupabaseServerClient();

  const [{ data }, counts] = await Promise.all([
    supabase
      .from("outreach_messages")
      .select(`*, companies(${COMPANY_FIELDS})`)
      .eq("status", tab)
      .order(tab === "sent" ? "sent_at" : "created_at", { ascending: false })
      .limit(200),
    Promise.all(TABS.map((t) => supabase.from("outreach_messages").select("id", { count: "exact", head: true }).eq("status", t))),
  ]);
  const messages = (data ?? []) as MessageRow[];
  // The queue is worked from the top: highest priority (score × recurring
  // potential × segment) first.
  if (tab === "draft" || tab === "approved")
    messages.sort((a, b) => (b.companies?.priority ?? -1) - (a.companies?.priority ?? -1));

  const keys = messages.flatMap((m) => suppressionKeys(m.to_email));
  const { data: suppressed } = keys.length ? await supabase.from("suppression_list").select("value").in("value", keys) : { data: [] };
  const suppressedSet = new Set((suppressed ?? []).map((s) => s.value as string));
  const sending = isOutreachSendingEnabled();
  const smtp = isSmtpConfigured();
  const workerReady = Boolean(crmEnv.workerSecret);
  const returnTo = `/admin/outreach?tab=${tab}`;
  const bulkForm = tab === "draft" ? "bulk-approve" : tab === "approved" ? "bulk-send" : null;
  const pending = messages.filter((m) => m.send_requested_at).length;

  return (
    <div className={bulkForm ? "pb-24" : undefined}>
      <PageHeader
        title="Outreach"
        description={
          tab === "draft"
            ? "Godkjenningskø, viktigste først. Kryss av meldingene du har lest, og godkjenn dem samlet. Hver melding kontrolleres for seg."
            : "Svar, avslag og avmeldinger stopper alle usendte meldinger til selskapet automatisk."
        }
      />
      <Flash ok={sp(params, "ok")} error={sp(params, "error")} detail={sp(params, "detail")} />
      {!sending && (
        <p className="mb-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Utsending er slått av. Du kan godkjenne, men ingen e-post sendes før <code>OUTREACH_SENDING_ENABLED=true</code> er satt i Netlify etter at testene i dokumentasjonen er gjort.
        </p>
      )}

      <nav className="mb-4 flex gap-1 overflow-x-auto border-b border-charcoal/10 text-sm" aria-label="Meldingsstatus">
        {TABS.map((t, i) => (
          <Link
            key={t}
            href={`/admin/outreach?tab=${t}`}
            className={`whitespace-nowrap border-b-2 px-3 py-2 ${tab === t ? "border-coral font-medium text-charcoal" : "border-transparent text-charcoal/60 hover:text-charcoal"}`}
          >
            {MESSAGE_STATUSES[t]} ({counts[i].count ?? 0})
          </Link>
        ))}
      </nav>

      {tab === "approved" && pending > 0 && (
        <p className="mb-3 text-sm text-charcoal/70">{pending} melding(er) står i sendekø og sendes av bakgrunnsjobben, med 20–45 sekunder mellom hver.</p>
      )}

      <ul className="space-y-3">
        {messages.map((m) => {
          const c = m.companies;
          const suppressedHit = suppressionKeys(m.to_email).some((k) => suppressedSet.has(k));
          const contact = c
            ? {
                toEmail: m.to_email,
                companyDoNotContact: c.do_not_contact,
                companyStatus: c.status,
                contactBasis: c.contact_basis,
                suppressed: suppressedHit,
              }
            : null;
          const blockers = contact
            ? m.status === "draft"
              ? approvalBlockers({ ...contact, messageStatus: m.status })
              : sendBlockers({ ...contact, messageStatus: m.status, sendingEnabled: sending, smtpConfigured: smtp })
            : ["Selskapet finnes ikke"];
          const selectable =
            bulkForm !== null && (m.status === "draft" ? blockers.length === 0 : contact !== null && approvalBlockers({ ...contact, messageStatus: "draft" }).length === 0);
          const generic = m.to_email ? isGenericEmail(m.to_email) : null;
          return (
            <li key={m.id} className="rounded-lg border border-charcoal/10 bg-white p-4">
              <div className="flex items-start gap-3">
                {bulkForm && (
                  <input
                    type="checkbox"
                    name="ids"
                    value={m.id}
                    form={bulkForm}
                    disabled={!selectable}
                    aria-label={`Velg ${c?.name ?? "melding"}`}
                    className="mt-1 h-6 w-6 shrink-0 accent-charcoal disabled:opacity-30"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <Link href={`/admin/prospects/${m.company_id}`} className="font-medium hover:underline">
                        {c?.name ?? "Selskap"}
                      </Link>
                      <p className="text-xs text-charcoal/60">
                        {c ? SEGMENTS[c.segment] : ""} · {dateTime(m.sent_at ?? m.created_at)}
                        {(m.sequence_step ?? 1) > 1 && ` · oppfølging ${(m.sequence_step ?? 1) - 1}`}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {c?.priority !== null && c?.priority !== undefined && <Badge color={c.priority >= 60 ? "green" : "gray"}>Prioritet {c.priority}</Badge>}
                      {c?.recurring_potential !== null && c?.recurring_potential !== undefined && <Badge color="blue">Gjentakende {c.recurring_potential}</Badge>}
                      <ScoreBadge score={c?.score ?? null} />
                    </div>
                  </div>

                  {/* Contact basis, stated for each message so it is checked one by one. */}
                  <dl className="mt-2 grid gap-x-3 gap-y-0.5 rounded-md bg-charcoal/[0.03] px-3 py-2 text-xs sm:grid-cols-[auto_1fr]">
                    <dt className="text-charcoal/55">Til</dt>
                    <dd className="break-all">
                      {m.to_email ?? <span className="text-red-700">mangler</span>}
                      {generic === true && <span className="ml-1 text-emerald-700">· felles adresse</span>}
                      {generic === false && <span className="ml-1 text-red-700">· ser personlig ut</span>}
                    </dd>
                    <dt className="text-charcoal/55">Grunnlag</dt>
                    <dd>
                      {c ? CONTACT_BASIS[c.contact_basis] : "–"}
                      {c?.contact_basis_note && <span className="text-charcoal/60"> · {c.contact_basis_note}</span>}
                    </dd>
                  </dl>

                  <p className="mt-2 text-sm font-medium">{m.subject}</p>
                  <details className="group mt-1">
                    <summary className="cursor-pointer list-none text-sm text-charcoal/80">
                      <span className="line-clamp-3 whitespace-pre-line group-open:hidden">{m.body}</span>
                      <span className="mt-1 inline-block text-xs text-charcoal/55 underline group-open:hidden">Les hele</span>
                      <span className="hidden text-xs text-charcoal/55 underline group-open:inline">Skjul</span>
                    </summary>
                    <p className="whitespace-pre-line text-sm text-charcoal/80">{m.body}</p>
                  </details>
                  {m.error && <p className="mt-2 text-xs text-red-700">{m.error}</p>}
                  {m.send_requested_at && m.status === "approved" && <p className="mt-2 text-xs text-sky-800">I sendekø siden {dateTime(m.send_requested_at)}</p>}
                  <MessageActions id={m.id} status={m.status} blockers={blockers} returnTo={returnTo} companyId={m.company_id} />
                </div>
              </div>
            </li>
          );
        })}
        {!messages.length && (
          <li className="rounded-lg border border-dashed border-charcoal/20 bg-white p-6 text-center text-sm text-charcoal/60">Ingen meldinger her.</li>
        )}
      </ul>

      {bulkForm === "bulk-approve" && (
        <form id="bulk-approve" action={approveMany}>
          <input type="hidden" name="return_to" value={returnTo} />
          <BulkBar formId="bulk-approve" label="Godkjenn valgte" className={btnPrimary} />
        </form>
      )}
      {bulkForm === "bulk-send" && (
        <form id="bulk-send" action={requestSend}>
          <input type="hidden" name="return_to" value={returnTo} />
          <BulkBar
            formId="bulk-send"
            label={sending ? (workerReady ? "Send valgte" : "Send valgte (kø)") : "Utsending er av"}
            confirmText="Sende {n} e-poster nå? De sendes én og én i bakgrunnen."
            className={btnAccent}
            disabled={!sending || !smtp}
          />
        </form>
      )}
    </div>
  );
}
