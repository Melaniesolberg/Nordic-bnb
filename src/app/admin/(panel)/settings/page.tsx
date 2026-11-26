import { configStatus, crmEnv } from "@/lib/crm/config";
import { requireAdmin } from "@/lib/crm/auth";
import { Badge, Card, PageHeader } from "@/components/admin/ui";

export const metadata = { title: "Innstillinger" };

export default async function SettingsPage() {
  const session = await requireAdmin();
  const s = configStatus();
  const rows: [string, boolean, string][] = [
    ["Supabase (database og innlogging)", s.supabase, "SUPABASE_URL, SUPABASE_ANON_KEY"],
    ["Service-nøkkel (n8n og avmelding)", s.serviceRole, "SUPABASE_SERVICE_ROLE_KEY"],
    ["AI-analyse (Claude)", s.ai, `ANTHROPIC_API_KEY · modell ${crmEnv.anthropicModel}`],
    ["E-postserver (SMTP)", s.smtp, "SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, OUTREACH_FROM"],
    ["Avmeldingslenke", s.unsubscribe, "UNSUBSCRIBE_SECRET"],
    ["n8n-webhook", s.n8n, "N8N_WEBHOOK_SECRET (+ N8N_EVENTS_WEBHOOK_URL)"],
    ["Utsending slått på", s.sending, "OUTREACH_SENDING_ENABLED=true – først etter test"],
  ];

  return (
    <>
      <PageHeader title="Innstillinger" description={`Innlogget som ${session.email} (${session.role}).`} />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Status">
          <ul className="divide-y divide-charcoal/5 text-sm">
            {rows.map(([name, ok, env]) => (
              <li key={name} className="flex items-start justify-between gap-3 py-2">
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-xs text-charcoal/55"><code>{env}</code></p>
                </div>
                <Badge color={ok ? "green" : name.startsWith("Utsending") ? "amber" : "red"}>{ok ? "På" : "Av"}</Badge>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-charcoal/55">
            Nøkler settes i Netlify under Site configuration → Environment variables. De vises aldri i nettleseren og skal aldri inn i GitHub.
          </p>
        </Card>
        <Card title="Slik er utsending sikret">
          <ol className="list-decimal space-y-1.5 pl-5 text-sm text-charcoal/80">
            <li>AI skriver bare utkast. Ingenting sendes automatisk, og n8n kan ikke sende.</li>
            <li>Hver melding må godkjennes av en person, og deretter sendes med et eget trykk.</li>
            <li>Sending krever <code>OUTREACH_SENDING_ENABLED=true</code> og gyldig kontaktgrunnlag.</li>
            <li>Personlige adresser krever samtykke eller kundeforhold. Felles bedriftsadresser (post@, kontakt@) er tillatt med enkel reservasjon.</li>
            <li>Stopplisten, avslag og reservasjoner stopper alle usendte meldinger automatisk (database-trigger).</li>
            <li>Hver e-post har avsender, org.nr. og avmeldingslenke.</li>
          </ol>
        </Card>
      </div>
    </>
  );
}
