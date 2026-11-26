import { triggerWorker } from "../../src/lib/crm/config";

/**
 * Netlify Scheduled Function (max 30 s): only wakes the background worker,
 * which does the real work with up to 15 minutes per run.
 * Cron is UTC: every 30 minutes 05:00–15:30 UTC on weekdays, which is
 * about 06–17 Oslo time in winter and 07–18 in summer.
 */
const scheduler = async (): Promise<Response> => {
  if (!process.env.CRM_WORKER_SECRET || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.log("CRM worker not configured (CRM_WORKER_SECRET / SUPABASE_SERVICE_ROLE_KEY)");
    return new Response("not configured");
  }
  const started = await triggerWorker("all", "schedule");
  console.log(`CRM worker ${started ? "started" : "could not be started"}`);
  return new Response(started ? "started" : "failed");
};

export default scheduler;

export const config = { schedule: "*/30 5-15 * * 1-5" };
