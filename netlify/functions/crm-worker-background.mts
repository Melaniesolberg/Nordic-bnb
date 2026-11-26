import { createHash, timingSafeEqual } from "node:crypto";
import { runWorker } from "../../src/lib/crm/worker/run";

/**
 * Netlify Background Function (up to 15 minutes, answers 202 at once).
 * Only runs when the caller knows CRM_WORKER_SECRET: the scheduler or the
 * admin panel. Everything it may do is limited by crm_settings and by
 * OUTREACH_SENDING_ENABLED, exactly like the admin panel.
 */
const digest = (s: string) => createHash("sha256").update(s).digest();

const worker = async (req: Request): Promise<void> => {
  const secret = process.env.CRM_WORKER_SECRET ?? "";
  const given = req.headers.get("x-crm-worker-secret") ?? "";
  if (!secret || req.method !== "POST" || !timingSafeEqual(digest(secret), digest(given))) {
    console.warn("CRM worker: rejected unauthenticated call");
    return;
  }
  let body: { mode?: string; trigger?: string } = {};
  try {
    body = await req.json();
  } catch {
    // empty body is fine
  }
  const mode = body.mode === "send" ? "send" : "all";
  const trigger = body.trigger === "manual" || body.trigger === "send" ? body.trigger : "schedule";
  const started = Date.now();
  try {
    const result = await runWorker({ mode, trigger, deadline: started + 13.5 * 60 * 1000 });
    console.log("CRM worker done", JSON.stringify(result));
  } catch (err) {
    console.error("CRM worker failed", err instanceof Error ? err.message : err);
  }
};

export default worker;

export const config = { background: true };
