import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { MESSAGE_STATUSES, SEGMENTS } from "@/lib/crm/constants";
import type { MessageRow } from "@/lib/crm/types";
import { isOutreachSendingEnabled, isSmtpConfigured } from "@/lib/crm/config";
import { sendBlockers, suppressionKeys } from "@/lib/crm/outreach";
import { MessageActions } from "@/components/admin/message-actions";
import { Badge, Flash, PageHeader, ScoreBadge, dateTime, sp } from "@/components/admin/ui";

export const metadata = { title: "Outreach" };

const TABS = ["draft", "approved", "sent", "failed", "cancelled"] as const;

export default async function OutreachPage({ searchParams }: PageProps<"/admin/outreach">) {
  const params = await searchParams;
  const tab = (TABS as readonly string[]).includes(sp(params, "tab") ?? "") ? (sp(params, "tab") as (typeof TABS)[number]) : "draft";
  const supabase = await createSupabaseServerClient();

  const [{ data }, counts] = await Promise.all([
    supabase
      .from("outreach_messages")
      .select("*, companies(id, name, segment, score, contact_basis, do_not_contact, status)")
      .eq("status", tab)
      .order(tab === "sent" ? "sent_at" : "created_at", { ascending: false })
      .limit(100),
    Promise.all(TABS.map((t) => supabase.from("outreach_messages").select("id", { count: "exact", head: true }).eq("status", t))),
  ]);
  const messages = (data ?? []) as MessageRow[];

  const keys = messages.flatMap((m) => suppressionKeys(m.to_email));
  const { data: suppressed } = keys.length ? await supabase.from("suppression_list").select("value").in("value", keys) : { data: [] };
  const suppressedSet = new Set((suppressed ?? []).map((s) => s.value as string));
  const sending = isOutreachSendingEnabled();
  const smtp = isSmtpConfigured();

  return (
    <>
      <PageHeader
        title="Outreach"
        description="Hver melding må godkjennes og sendes manuelt, én og én. Avslag og reservasjoner stopper alle meldinger til selskapet automatisk."
      />
      <Flash ok={sp(params, "ok")} error={sp(params, "error")} detail={sp(params, "detail")} />
      {!sending && (
        <p className="mb-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Utsending er slått av. Du kan teste godkjenning, men ingen e-post sendes før <code>OUTREACH_SENDING_ENABLED=true</code> er satt i Netlify etter at systemet er testet.
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

      <ul className="space-y-3">
        {messages.map((m) => {
          const c = m.companies;
          const blockers = c
            ? sendBlockers({
                messageStatus: m.status,
                toEmail: m.to_email,
                companyDoNotContact: c.do_not_contact,
                companyStatus: c.status,
                contactBasis: c.contact_basis,
                suppressed: suppressionKeys(m.to_email).some((k) => suppressedSet.has(k)),
                sendingEnabled: sending,
                smtpConfigured: smtp,
              })
            : ["Selskapet finnes ikke"];
          return (
            <li key={m.id} className="rounded-lg border border-charcoal/10 bg-white p-4">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <div className="min-w-0">
                  <Link href={`/admin/prospects/${m.company_id}`} className="font-medium hover:underline">{c?.name ?? "Selskap"}</Link>
                  <p className="text-xs text-charcoal/60">
                    {c ? SEGMENTS[c.segment] : ""} · Til: {m.to_email ?? <span className="text-red-700">mangler</span>} · {dateTime(m.sent_at ?? m.created_at)}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  {m.generated_by === "ai" && <Badge color="blue">AI-utkast</Badge>}
                  <ScoreBadge score={c?.score ?? null} />
                </div>
              </div>
              <p className="text-sm font-medium">{m.subject}</p>
              <p className="mt-1 line-clamp-6 whitespace-pre-line text-sm text-charcoal/80">{m.body}</p>
              {m.error && <p className="mt-2 text-xs text-red-700">{m.error}</p>}
              <p className="mt-2 text-xs text-charcoal/55">
                Vil du endre teksten? <Link href={`/admin/prospects/${m.company_id}`} className="underline">Åpne selskapet</Link>.
              </p>
              <MessageActions id={m.id} status={m.status} blockers={blockers} returnTo={`/admin/outreach?tab=${tab}`} />
            </li>
          );
        })}
        {!messages.length && <li className="rounded-lg border border-dashed border-charcoal/20 bg-white p-6 text-center text-sm text-charcoal/60">Ingen meldinger her.</li>}
      </ul>
    </>
  );
}
