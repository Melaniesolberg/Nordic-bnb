import Link from "next/link";
import type { ReactNode } from "react";

export const input =
  "w-full rounded-md border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal outline-none focus:border-charcoal/60 focus:ring-2 focus:ring-coral/30";
export const label = "mb-1 block text-xs font-medium uppercase tracking-wide text-charcoal/65";
export const btn =
  "inline-flex items-center justify-center rounded-md px-3.5 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50";
export const btnPrimary = `${btn} bg-charcoal text-ivory hover:bg-charcoal/85`;
export const btnSecondary = `${btn} border border-charcoal/20 bg-white text-charcoal hover:border-charcoal/50`;
export const btnDanger = `${btn} border border-red-300 bg-white text-red-700 hover:bg-red-50`;
export const btnAccent = `${btn} bg-coral text-white hover:bg-coral-deep`;

export function Card({ title, actions, children, className = "" }: { title?: string; actions?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`min-w-0 rounded-lg border border-charcoal/10 bg-white p-4 sm:p-5 ${className}`}>
      {(title || actions) && (
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          {title && <h2 className="text-sm font-semibold text-charcoal">{title}</h2>}
          {actions}
        </div>
      )}
      {children}
    </section>
  );
}

export function Stat({ label: l, value, hint, href }: { label: string; value: ReactNode; hint?: string; href?: string }) {
  const body = (
    <div className="h-full rounded-lg border border-charcoal/10 bg-white p-4 transition-colors hover:border-charcoal/30">
      <p className="text-xs font-medium uppercase tracking-wide text-charcoal/60">{l}</p>
      <p className="mt-1 text-2xl font-semibold tabular-nums text-charcoal">{value}</p>
      {hint && <p className="mt-1 text-xs text-charcoal/60">{hint}</p>}
    </div>
  );
  return href ? <Link href={href}>{body}</Link> : body;
}

const tone = {
  gray: "bg-charcoal/5 text-charcoal/75 border-charcoal/10",
  green: "bg-emerald-50 text-emerald-800 border-emerald-200",
  amber: "bg-amber-50 text-amber-800 border-amber-200",
  red: "bg-red-50 text-red-700 border-red-200",
  blue: "bg-sky-50 text-sky-800 border-sky-200",
} as const;

export function Badge({ children, color = "gray" }: { children: ReactNode; color?: keyof typeof tone }) {
  return <span className={`inline-flex items-center rounded border px-1.5 py-0.5 text-xs font-medium ${tone[color]}`}>{children}</span>;
}

export function ScoreBadge({ score }: { score: number | null }) {
  if (score === null || score === undefined) return <Badge>–</Badge>;
  return <Badge color={score >= 70 ? "green" : score >= 50 ? "amber" : "gray"}>{score}</Badge>;
}

const statusColor: Record<string, keyof typeof tone> = {
  new: "gray",
  researched: "blue",
  qualified: "amber",
  contacted: "blue",
  interested: "green",
  customer: "green",
  not_interested: "red",
  unqualified: "gray",
};
export function StatusBadge({ status, text }: { status: string; text: string }) {
  return <Badge color={statusColor[status] ?? "gray"}>{text}</Badge>;
}

const FLASH: Record<string, string> = {
  created: "Selskapet er lagt til.",
  saved: "Endringene er lagret.",
  deleted: "Selskapet er slettet.",
  activity: "Aktiviteten er registrert.",
  deal: "Salget/avtalen er registrert.",
  analyzed: "AI-analysen er ferdig. Sjekk utkastet under Outreach før det godkjennes.",
  message: "Meldingen er lagret som utkast. Den må godkjennes før den kan sendes.",
  approved: "Meldingen er godkjent. Den sendes først når du trykker «Send».",
  cancelled: "Meldingen er stoppet.",
  sent: "E-posten er sendt.",
  suppressed: "Lagt til i stopplisten. Matchende selskaper er merket «ikke kontakt».",
  config: "Supabase er ikke satt opp ennå. Se Innstillinger.",
  credentials: "Feil e-post eller passord.",
  access: "Du er logget inn, men har ikke tilgang til administrasjonen. Be eieren legge deg til i admin_users.",
  duplicate: "Selskapet finnes allerede (samme org.nr., domene, e-post eller navn og postnummer).",
  invalid: "Mangler navn eller har ugyldige felt.",
  notfound: "Fant ikke det du lette etter.",
  save: "Kunne ikke lagre.",
  amount: "Ugyldig beløp.",
  none: "Velg minst ett selskap.",
  brreg: "Brønnøysundregistrene svarte ikke. Prøv igjen om litt.",
  ai: "AI-analysen feilet.",
  state: "Meldingen har endret status. Last siden på nytt.",
  noemail: "Meldingen mangler gyldig e-postadresse.",
  dnc: "Selskapet har reservert seg eller takket nei.",
  basis: "Kontaktgrunnlag er ikke vurdert. Sett det på selskapet først.",
  blocked: "Kan ikke sende:",
  send: "Sendingen feilet. Se feilmeldingen på meldingen.",
  nofile: "Velg en CSV-fil.",
  toolarge: "Filen er for stor (maks 2 MB).",
  suppression: "Skriv en gyldig e-postadresse eller et domene.",
  message_invalid: "Emne og tekst må fylles ut.",
  blocked_approve: "Kan ikke godkjenne:",
  sending_off: "Utsending er slått av (OUTREACH_SENDING_ENABLED).",
  worker: "Bakgrunnsjobben kunne ikke startes nå (CRM_WORKER_SECRET mangler eller Netlify svarte ikke).",
  migration: "Databasen mangler autopilot-tabellene. Kjør migreringen 20261127000000_crm_autopilot.sql.",
};

export function Flash({ ok, error, detail }: { ok?: string; error?: string; detail?: string }) {
  if (!ok && !error) return null;
  let text = "";
  if (ok?.startsWith("imported:")) {
    const [, n, d] = ok.split(":");
    text = `Importert ${n} nye selskaper. ${d} duplikater ble hoppet over.`;
  } else if (ok?.startsWith("analyzed:")) {
    const [, n, f] = ok.split(":");
    text = `Analyserte ${n} selskaper${Number(f) ? `, ${f} feilet` : ""}. Utkastene venter på godkjenning under Outreach.`;
  } else if (ok?.startsWith("csv:")) {
    const [, n, d, i] = ok.split(":");
    text = `CSV-import: ${n} nye, ${d} duplikater, ${i} ugyldige rader.`;
  } else if (ok?.startsWith("bulk:")) {
    const [, n, f] = ok.split(":");
    text = `Godkjente ${n} meldinger${Number(f) ? `. ${f} ble ikke godkjent:` : "."} Ingenting er sendt ennå.`;
  } else if (ok?.startsWith("queued:")) {
    const [, n] = ok.split(":");
    text = `${n} meldinger er lagt i sendekø. Bakgrunnsjobben sender dem én og én de neste minuttene.`;
  } else if (ok === "worker") {
    text = "Bakgrunnsjobben er startet. Se «Siste kjøringer» om et par minutter.";
  } else {
    text = FLASH[(ok ?? error)!] ?? (ok ? "Ferdig." : "Noe gikk galt.");
  }
  return (
    <div
      role="status"
      className={`mb-4 rounded-md border px-4 py-3 text-sm ${
        error ? "border-red-200 bg-red-50 text-red-800" : "border-emerald-200 bg-emerald-50 text-emerald-900"
      }`}
    >
      {text}
      {detail ? ` ${detail}` : ""}
    </div>
  );
}

export function PageHeader({ title, description, actions }: { title: string; description?: string; actions?: ReactNode }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="text-xl font-semibold text-charcoal sm:text-2xl">{title}</h1>
        {description && <p className="mt-1 max-w-2xl text-sm text-charcoal/65">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export const nok = (n: number | null | undefined) =>
  `${Math.round(Number(n ?? 0)).toLocaleString("nb-NO")} kr`;

export const dateTime = (iso: string | null | undefined) =>
  iso ? new Date(iso).toLocaleString("nb-NO", { dateStyle: "short", timeStyle: "short", timeZone: "Europe/Oslo" }) : "–";

export type SP = Record<string, string | string[] | undefined>;
export const sp = (params: SP, key: string): string | undefined => {
  const v = params[key];
  return Array.isArray(v) ? v[0] : v;
};
