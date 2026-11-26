import { configStatus, crmEnv } from "@/lib/crm/config";
import { requireAdmin } from "@/lib/crm/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { loadSettings } from "@/lib/crm/settings";
import { aiSpend } from "@/lib/crm/budget";
import { MUNICIPALITIES, SEGMENTS } from "@/lib/crm/constants";
import { runWorkerNow, saveSettings } from "@/lib/crm/actions";
import { Badge, Card, Flash, PageHeader, btnPrimary, btnSecondary, dateTime, input, label, nok, sp } from "@/components/admin/ui";

export const metadata = { title: "Innstillinger" };

const check = "h-5 w-5 shrink-0 accent-charcoal";

export default async function SettingsPage({ searchParams }: PageProps<"/admin/settings">) {
  const params = await searchParams;
  const session = await requireAdmin();
  const supabase = await createSupabaseServerClient();
  const s = configStatus();
  const [settings, runsRes] = await Promise.all([
    loadSettings(supabase),
    supabase.from("worker_runs").select("trigger, status, stats, error, started_at, finished_at").order("started_at", { ascending: false }).limit(8),
  ]);
  const spent = settings ? await aiSpend(supabase).catch(() => ({ today: 0, month: 0 })) : { today: 0, month: 0 };
  const runs = runsRes.data ?? [];
  const canEdit = session.canWrite;

  const rows: [string, boolean, string][] = [
    ["Supabase (database og innlogging)", s.supabase, "SUPABASE_URL, SUPABASE_ANON_KEY"],
    ["Service-nøkkel (bakgrunnsjobb, n8n, avmelding)", s.serviceRole, "SUPABASE_SERVICE_ROLE_KEY"],
    ["Bakgrunnsjobb", s.worker, "CRM_WORKER_SECRET"],
    ["AI-analyse (Claude)", s.ai, `ANTHROPIC_API_KEY · modell ${crmEnv.anthropicModel}`],
    ["E-postserver (SMTP)", s.smtp, "SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, OUTREACH_FROM"],
    ["Innboks (IMAP: svar, avmelding, retur)", s.imap, "IMAP_HOST, IMAP_PORT, IMAP_USER, IMAP_PASSWORD"],
    ["Avmeldingslenke", s.unsubscribe, "UNSUBSCRIBE_SECRET"],
    ["n8n-webhook (valgfritt)", s.n8n, "N8N_WEBHOOK_SECRET (+ N8N_EVENTS_WEBHOOK_URL)"],
    ["Utsending slått på", s.sending, "OUTREACH_SENDING_ENABLED=true – først etter test"],
  ];

  return (
    <>
      <PageHeader title="Innstillinger" description={`Innlogget som ${session.email} (${session.role}).`} />
      <Flash ok={sp(params, "ok")} error={sp(params, "error")} detail={sp(params, "detail")} />

      {!settings && (
        <p className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          Autopilot-tabellene mangler. Kjør <code>supabase/migrations/20261127000000_crm_autopilot.sql</code> i Supabase (SQL Editor).
        </p>
      )}

      {settings && (
        <form action={saveSettings} className="mb-4 grid gap-4 lg:grid-cols-2">
          <Card title="Research på autopilot">
            <div className="space-y-3 text-sm">
              <label className="flex items-start gap-3">
                <input type="checkbox" name="autopilot_enabled" defaultChecked={settings.autopilot_enabled} className={check} disabled={!canEdit} />
                <span>
                  <span className="font-medium">Finn og analyser nye bedrifter automatisk</span>
                  <span className="block text-xs text-charcoal/60">Hverdager, hver halvtime 06–17. Kun offentlige data fra Brønnøysund og bedriftens egen nettside.</span>
                </span>
              </label>
              <div>
                <label className={label} htmlFor="daily_target">Antall per dag (maks 50)</label>
                <input id="daily_target" name="daily_target" type="number" min={0} max={50} defaultValue={settings.daily_target} className={input} disabled={!canEdit} />
              </div>
              <fieldset>
                <legend className={label}>Kundetyper</legend>
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {Object.entries(SEGMENTS)
                    .filter(([k]) => k !== "other")
                    .map(([k, v]) => (
                      <label key={k} className="flex items-center gap-2">
                        <input type="checkbox" name="discovery_segments" value={k} defaultChecked={settings.discovery_segments.includes(k as never)} className={check} disabled={!canEdit} />
                        {v}
                      </label>
                    ))}
                </div>
              </fieldset>
              <details>
                <summary className="cursor-pointer text-sm font-medium">Kommuner ({settings.discovery_municipalities.length || "hele landet"})</summary>
                <div className="mt-2 grid max-h-56 grid-cols-2 gap-1.5 overflow-y-auto sm:grid-cols-3">
                  {MUNICIPALITIES.map((m) => (
                    <label key={m.code} className="flex items-center gap-2 text-xs">
                      <input type="checkbox" name="discovery_municipalities" value={m.code} defaultChecked={settings.discovery_municipalities.includes(m.code)} className="h-4 w-4 accent-charcoal" disabled={!canEdit} />
                      {m.name}
                    </label>
                  ))}
                </div>
                <p className="mt-1 text-xs text-charcoal/55">Ingen valgt = hele landet.</p>
              </details>
              <label className="flex items-center gap-3">
                <input type="checkbox" name="require_website" defaultChecked={settings.require_website} className={check} disabled={!canEdit} />
                Bare bedrifter med registrert nettside
              </label>
            </div>
          </Card>

          <Card title="Kostnadstak for AI">
            <div className="grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="ai_daily_budget_nok">Per dag (kr)</label>
                <input id="ai_daily_budget_nok" name="ai_daily_budget_nok" type="number" step="1" min={0} defaultValue={settings.ai_daily_budget_nok} className={input} disabled={!canEdit} />
                <p className="mt-1 text-xs text-charcoal/60">Brukt i dag: {spent.today.toFixed(2)} kr</p>
              </div>
              <div>
                <label className={label} htmlFor="ai_monthly_budget_nok">Per måned (kr)</label>
                <input id="ai_monthly_budget_nok" name="ai_monthly_budget_nok" type="number" step="1" min={0} defaultValue={settings.ai_monthly_budget_nok} className={input} disabled={!canEdit} />
                <p className="mt-1 text-xs text-charcoal/60">Brukt denne måneden: {nok(spent.month)}</p>
              </div>
              <div>
                <label className={label} htmlFor="usd_nok_rate">Dollarkurs</label>
                <input id="usd_nok_rate" name="usd_nok_rate" type="number" step="0.01" min={5} max={30} defaultValue={settings.usd_nok_rate} className={input} disabled={!canEdit} />
              </div>
              <p className="text-xs text-charcoal/60 sm:col-span-2">
                Før hver analyse sjekkes det at verst tenkelige pris får plass under begge takene. Gjelder både autopilot og knappene i panelet. En analyse koster vanligvis under 1 krone.
              </p>
            </div>
          </Card>

          <Card title="Oppfølging">
            <div className="space-y-3 text-sm">
              <label className="flex items-start gap-3">
                <input type="checkbox" name="followup_enabled" defaultChecked={settings.followup_enabled} className={check} disabled={!canEdit} />
                <span>
                  <span className="font-medium">Lag utkast til oppfølging når det ikke kommer svar</span>
                  <span className="block text-xs text-charcoal/60">Stopper straks ved svar, nei takk, avmelding eller retur.</span>
                </span>
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="followup_after_days">Etter antall dager</label>
                  <input id="followup_after_days" name="followup_after_days" type="number" min={2} max={30} defaultValue={settings.followup_after_days} className={input} disabled={!canEdit} />
                </div>
                <div>
                  <label className={label} htmlFor="followup_max_steps">Maks oppfølginger</label>
                  <select id="followup_max_steps" name="followup_max_steps" defaultValue={String(settings.followup_max_steps)} className={input} disabled={!canEdit}>
                    <option value="0">Ingen</option>
                    <option value="1">1 (anbefalt)</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
              <label className="flex items-start gap-3">
                <input type="checkbox" name="followup_auto_approve" defaultChecked={settings.followup_auto_approve} className={check} disabled={!canEdit} />
                <span>
                  <span className="font-medium">Godkjenn oppfølginger automatisk</span>
                  <span className="block text-xs text-charcoal/60">Bare for selskaper der første e-post allerede er godkjent av deg. Kontaktgrunnlaget sjekkes på nytt.</span>
                </span>
              </label>
            </div>
          </Card>

          <Card title="Utsending">
            <div className="space-y-3 text-sm">
              {!s.sending && (
                <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
                  Hovedbryteren <code>OUTREACH_SENDING_ENABLED</code> er av i Netlify. Ingenting sendes, uansett hva som står her.
                </p>
              )}
              <label className="flex items-start gap-3">
                <input type="checkbox" name="auto_send_enabled" defaultChecked={settings.auto_send_enabled} className={check} disabled={!canEdit} />
                <span>
                  <span className="font-medium">Send godkjente meldinger automatisk</span>
                  <span className="block text-xs text-charcoal/60">Innenfor tidsvinduet på hverdager. Slå på først når testene i dokumentasjonen er godkjent.</span>
                </span>
              </label>
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <label className={label} htmlFor="daily_send_cap">Maks per dag</label>
                  <input id="daily_send_cap" name="daily_send_cap" type="number" min={0} max={50} defaultValue={settings.daily_send_cap} className={input} disabled={!canEdit} />
                </div>
                <div>
                  <label className={label} htmlFor="send_window_start">Fra kl.</label>
                  <input id="send_window_start" name="send_window_start" type="number" min={0} max={23} defaultValue={settings.send_window_start} className={input} disabled={!canEdit} />
                </div>
                <div>
                  <label className={label} htmlFor="send_window_end">Til kl.</label>
                  <input id="send_window_end" name="send_window_end" type="number" min={1} max={24} defaultValue={settings.send_window_end} className={input} disabled={!canEdit} />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="report_email">Ukerapport til e-post</label>
                <input id="report_email" name="report_email" type="email" defaultValue={settings.report_email ?? ""} placeholder="deg@eiendomly.no" className={input} disabled={!canEdit} />
                <p className="mt-1 text-xs text-charcoal/60">Sendes mandag morgen hvis SMTP er satt opp.</p>
              </div>
            </div>
          </Card>

          {canEdit && (
            <div className="lg:col-span-2">
              <button type="submit" className={`${btnPrimary} w-full sm:w-auto`}>Lagre innstillinger</button>
              <span className="ml-0 mt-2 block text-xs text-charcoal/55 sm:ml-3 sm:mt-0 sm:inline">Sist endret {dateTime(settings.updated_at)}</span>
            </div>
          )}
        </form>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        <Card
          title="Siste kjøringer"
          actions={
            canEdit && s.worker ? (
              <form action={runWorkerNow}>
                <button type="submit" className={btnSecondary}>Kjør nå</button>
              </form>
            ) : null
          }
        >
          {runs.length ? (
            <ul className="divide-y divide-charcoal/5 text-sm">
              {runs.map((r) => (
                <li key={r.started_at} className="py-2">
                  <div className="flex items-center justify-between gap-2">
                    <span>{dateTime(r.started_at)} · {r.trigger === "schedule" ? "planlagt" : r.trigger === "send" ? "sending" : "manuell"}</span>
                    <Badge color={r.status === "done" ? "green" : r.status === "failed" ? "red" : r.status === "running" ? "blue" : "gray"}>{r.status}</Badge>
                  </div>
                  <p className="mt-0.5 break-words text-xs text-charcoal/60">{r.error ?? summarize(r.stats as Record<string, unknown>)}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-charcoal/60">Ingen kjøringer ennå.</p>
          )}
        </Card>

        <Card title="Status">
          <ul className="divide-y divide-charcoal/5 text-sm">
            {rows.map(([name, ok, env]) => (
              <li key={name} className="flex items-start justify-between gap-3 py-2">
                <div className="min-w-0">
                  <p className="font-medium">{name}</p>
                  <p className="break-words text-xs text-charcoal/55"><code>{env}</code></p>
                </div>
                <Badge color={ok ? "green" : name.startsWith("Utsending") || name.includes("valgfritt") ? "amber" : "red"}>{ok ? "På" : "Av"}</Badge>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-charcoal/55">
            Nøkler settes i Netlify under Site configuration → Environment variables. De vises aldri i nettleseren og skal aldri inn i GitHub.
          </p>
        </Card>

        <Card title="Slik er utsending sikret" className="lg:col-span-2">
          <ol className="list-decimal space-y-1.5 pl-5 text-sm text-charcoal/80">
            <li>AI skriver bare utkast. Første e-post til et selskap godkjennes alltid av en person.</li>
            <li>Ingenting sendes før hovedbryteren <code>OUTREACH_SENDING_ENABLED=true</code> er satt i Netlify.</li>
            <li>Rett før hver sending sjekkes adresse, kontaktgrunnlag, stoppliste og status på nytt.</li>
            <li>Personlige adresser krever samtykke eller kundeforhold. Felles bedriftsadresser (post@, kontakt@) er tillatt med enkel reservasjon.</li>
            <li>Svar, «nei takk», avmelding og retur stopper alle usendte meldinger til selskapet straks (database-trigger).</li>
            <li>Innboksen leses før hver sending, så et svar som kom i mellomtiden stopper oppfølgingen.</li>
            <li>Hver e-post har avsender, org.nr. og avmeldingslenke. Maks {settings?.daily_send_cap ?? 30} per dag, 20–45 sekunder mellom hver.</li>
          </ol>
        </Card>
      </div>
    </>
  );
}

function summarize(stats: Record<string, unknown> | null): string {
  if (!stats) return "";
  const parts: string[] = [];
  const inbox = stats.inbox as Record<string, number | string> | undefined;
  if (inbox && "error" in inbox) parts.push(`innboks feilet: ${inbox.error}`);
  else if (inbox?.checked) parts.push(`innboks ${inbox.checked} (svar ${inbox.replies}, nei ${inbox.unsubscribes}, retur ${inbox.bounces})`);
  if (stats.sent) parts.push(`sendt ${stats.sent}`);
  if (stats.followups_drafted) parts.push(`oppfølginger ${stats.followups_drafted}`);
  if (stats.discovered) parts.push(`funnet ${stats.discovered}`);
  if (stats.analyzed) parts.push(`analysert ${stats.analyzed}`);
  if (stats.analysis_failed) parts.push(`feilet ${stats.analysis_failed}`);
  if (stats.research_skipped) parts.push(String(stats.research_skipped));
  if (stats.send_skipped && !stats.sent) parts.push(String(stats.send_skipped));
  if (stats.report) parts.push(`ukerapport ${stats.report}`);
  return parts.join(" · ") || "Ingenting å gjøre";
}
