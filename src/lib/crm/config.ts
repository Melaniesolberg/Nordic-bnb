/**
 * CRM configuration, read from server-side environment variables only.
 * None of these use the NEXT_PUBLIC_ prefix, so Next.js never bundles them
 * into browser code. Set them in Netlify (Site configuration → Environment
 * variables) and in a local .env.local that is git-ignored.
 */
export const crmEnv = {
  supabaseUrl: process.env.SUPABASE_URL ?? "",
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY ?? "",
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  anthropicConfigured: Boolean(process.env.ANTHROPIC_API_KEY),
  anthropicModel: process.env.CRM_AI_MODEL || "claude-opus-5-5",
  // "low" keeps one analysis well inside serverless time limits.
  anthropicEffort: (["low", "medium", "high"].includes(process.env.CRM_AI_EFFORT ?? "") ? process.env.CRM_AI_EFFORT : "low") as "low" | "medium" | "high",
  smtpHost: process.env.SMTP_HOST ?? "",
  smtpPort: Number(process.env.SMTP_PORT ?? 465),
  smtpUser: process.env.SMTP_USER ?? "",
  smtpPassword: process.env.SMTP_PASSWORD ?? "",
  outreachFrom: process.env.OUTREACH_FROM ?? "",
  outreachReplyTo: process.env.OUTREACH_REPLY_TO ?? "",
  n8nWebhookSecret: process.env.N8N_WEBHOOK_SECRET ?? "",
  n8nEventsUrl: process.env.N8N_EVENTS_WEBHOOK_URL ?? "",
  unsubscribeSecret: process.env.UNSUBSCRIBE_SECRET ?? "",
  siteUrl: process.env.CRM_SITE_URL || "https://eiendomly.no",
  workerSecret: process.env.CRM_WORKER_SECRET ?? "",
};

/** The background function's address (Netlify sets URL at runtime). */
export function workerUrl(): string {
  const base = (process.env.URL || crmEnv.siteUrl).replace(/\/$/, "");
  return `${base}/.netlify/functions/crm-worker-background`;
}

/** Starts a background run. Returns false if it could not be started. */
export async function triggerWorker(mode: "all" | "send", trigger: "manual" | "send" | "schedule" = "manual"): Promise<boolean> {
  if (!crmEnv.workerSecret) return false;
  try {
    const res = await fetch(workerUrl(), {
      method: "POST",
      headers: { "content-type": "application/json", "x-crm-worker-secret": crmEnv.workerSecret },
      body: JSON.stringify({ mode, trigger }),
      signal: AbortSignal.timeout(10_000),
    });
    return res.status === 202 || res.ok;
  } catch {
    return false;
  }
}

export function isSupabaseConfigured(): boolean {
  return Boolean(crmEnv.supabaseUrl && crmEnv.supabaseAnonKey);
}

export function isSmtpConfigured(): boolean {
  return Boolean(crmEnv.smtpHost && crmEnv.smtpUser && crmEnv.smtpPassword && crmEnv.outreachFrom);
}

/**
 * Sending is off unless explicitly switched on. Even when on, every message
 * still needs a manual approval and a manual press on «Send».
 */
export function isOutreachSendingEnabled(): boolean {
  return process.env.OUTREACH_SENDING_ENABLED === "true";
}

export function configStatus() {
  return {
    supabase: isSupabaseConfigured(),
    serviceRole: Boolean(crmEnv.supabaseServiceRoleKey),
    ai: crmEnv.anthropicConfigured,
    smtp: isSmtpConfigured(),
    sending: isOutreachSendingEnabled(),
    n8n: Boolean(crmEnv.n8nWebhookSecret),
    unsubscribe: Boolean(crmEnv.unsubscribeSecret),
    worker: Boolean(crmEnv.workerSecret && crmEnv.supabaseServiceRoleKey),
    imap: Boolean(process.env.IMAP_HOST && (process.env.IMAP_USER || process.env.SMTP_USER)),
  };
}
