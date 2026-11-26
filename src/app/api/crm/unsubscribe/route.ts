import { crmEnv } from "@/lib/crm/config";
import { readUnsubscribeToken } from "@/lib/crm/signing";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

/**
 * Opt-out link from outreach e-mails (also used by one-click
 * List-Unsubscribe). Adds the address to the stop list; the database then
 * marks the company as «do not contact» and cancels unsent messages.
 */
async function unsubscribe(token: string | null): Promise<boolean> {
  if (!token || !crmEnv.unsubscribeSecret || !crmEnv.supabaseServiceRoleKey) return false;
  const email = readUnsubscribeToken(crmEnv.unsubscribeSecret, token);
  if (!email) return false;
  const supabase = createSupabaseServiceClient();
  const { error } = await supabase
    .from("suppression_list")
    .upsert({ value: email, kind: "email", reason: "unsubscribe (lenke)" }, { onConflict: "value" });
  return !error;
}

function page(ok: boolean) {
  const text = ok
    ? "Du er reservert. Du får ingen flere e-poster fra Eiendomly."
    : "Lenken er ugyldig. Svar «nei takk» på e-posten, så reserverer vi deg manuelt.";
  return new Response(
    `<!doctype html><html lang="nb"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Eiendomly</title></head><body style="font-family:system-ui,sans-serif;max-width:32rem;margin:4rem auto;padding:0 1rem;color:#14110d;background:#f6f1e8"><h1 style="font-size:1.25rem">Eiendomly</h1><p>${text}</p></body></html>`,
    { status: ok ? 200 : 400, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } },
  );
}

export async function GET(request: Request) {
  return page(await unsubscribe(new URL(request.url).searchParams.get("t")));
}

export async function POST(request: Request) {
  const ok = await unsubscribe(new URL(request.url).searchParams.get("t"));
  return new Response(null, { status: ok ? 200 : 400 });
}
