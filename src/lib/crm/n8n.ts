import "server-only";
import { crmEnv } from "@/lib/crm/config";
import { hmacHex } from "@/lib/crm/signing";

/**
 * Sends a signed event to n8n (optional). n8n verifies it with the same
 * secret: signature = hex(HMAC-SHA256(secret, `${timestamp}.${body}`)).
 * Failures are logged and never block the admin action.
 */
export async function emitEvent(type: string, data: Record<string, unknown>): Promise<void> {
  if (!crmEnv.n8nEventsUrl || !crmEnv.n8nWebhookSecret) return;
  const body = JSON.stringify({ type, data, at: new Date().toISOString() });
  const ts = String(Math.floor(Date.now() / 1000));
  try {
    await fetch(crmEnv.n8nEventsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-eiendomly-timestamp": ts,
        "x-eiendomly-signature": hmacHex(crmEnv.n8nWebhookSecret, `${ts}.${body}`),
      },
      body,
      signal: AbortSignal.timeout(5000),
    });
  } catch (err) {
    console.error("n8n event failed", type, err instanceof Error ? err.message : err);
  }
}
