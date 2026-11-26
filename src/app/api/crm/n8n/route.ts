import { z } from "zod";
import { crmEnv, isSupabaseConfigured } from "@/lib/crm/config";
import { verifySignedRequest } from "@/lib/crm/signing";
import { createSupabaseServiceClient } from "@/lib/supabase/server";
import { importCompanies } from "@/lib/crm/import";
import { normalizeDomain, normalizeEmail } from "@/lib/crm/normalize";
import { SEGMENTS } from "@/lib/crm/constants";

/**
 * Inbound webhook for n8n. Every request must be signed:
 *   x-eiendomly-timestamp: unix seconds
 *   x-eiendomly-signature: hex(HMAC-SHA256(N8N_WEBHOOK_SECRET, `${timestamp}.${rawBody}`))
 *
 * n8n can register replies and opt-outs and add prospects. It cannot approve
 * or send outreach: that stays a manual step in /admin.
 */

const ReplySchema = z.object({
  action: z.literal("register_reply"),
  email: z.string(),
  classification: z.enum(["interested", "not_interested", "unsubscribe", "other"]),
  summary: z.string().max(2000).optional(),
});

const ProspectSchema = z.object({
  action: z.literal("create_prospect"),
  name: z.string().min(1).max(200),
  org_number: z.string().optional(),
  segment: z.enum(Object.keys(SEGMENTS) as [keyof typeof SEGMENTS, ...(keyof typeof SEGMENTS)[]]).optional(),
  website: z.string().optional(),
  general_email: z.string().optional(),
  phone: z.string().optional(),
  city: z.string().optional(),
  source_url: z.string().url().describe("Where n8n found the data. Required so every record is traceable."),
});

const Payload = z.discriminatedUnion("action", [ReplySchema, ProspectSchema]);

export async function POST(request: Request) {
  if (!isSupabaseConfigured() || !crmEnv.n8nWebhookSecret || !crmEnv.supabaseServiceRoleKey) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }
  const raw = await request.text();
  if (raw.length > 100_000) return Response.json({ error: "too_large" }, { status: 413 });
  const ok = verifySignedRequest(
    crmEnv.n8nWebhookSecret,
    raw,
    request.headers.get("x-eiendomly-timestamp"),
    request.headers.get("x-eiendomly-signature"),
  );
  if (!ok) return Response.json({ error: "unauthorized" }, { status: 401 });

  let parsed: z.infer<typeof Payload>;
  try {
    parsed = Payload.parse(JSON.parse(raw));
  } catch {
    return Response.json({ error: "invalid_payload" }, { status: 400 });
  }

  const supabase = createSupabaseServiceClient();

  if (parsed.action === "create_prospect") {
    const result = await importCompanies(
      supabase,
      [{ ...parsed, source: "n8n", org_number: parsed.org_number ?? null }],
      null,
    );
    return Response.json(result);
  }

  // register_reply
  const email = normalizeEmail(parsed.email);
  if (!email) return Response.json({ error: "invalid_email" }, { status: 400 });
  const domain = normalizeDomain(email);
  const { data: companies } = await supabase
    .from("companies")
    .select("id, status")
    .or(`general_email.eq.${email}${domain ? `,domain.eq.${domain}` : ""}`)
    .limit(5);

  if (parsed.classification === "unsubscribe" || parsed.classification === "not_interested") {
    if (parsed.classification === "unsubscribe") {
      await supabase.from("suppression_list").upsert({ value: email, kind: "email", reason: "unsubscribe (n8n)" }, { onConflict: "value" });
    }
    for (const c of companies ?? []) {
      await supabase
        .from("companies")
        .update({ status: "not_interested", opt_out_reason: parsed.classification === "unsubscribe" ? "Reservert seg" : "Takket nei" })
        .eq("id", c.id);
    }
  } else if (parsed.classification === "interested") {
    for (const c of companies ?? []) {
      if (c.status !== "customer") await supabase.from("companies").update({ status: "interested" }).eq("id", c.id);
    }
  }

  for (const c of companies ?? []) {
    await supabase.from("activities").insert({
      company_id: c.id,
      type: parsed.classification === "unsubscribe" ? "opt_out" : "reply",
      summary: parsed.summary?.slice(0, 500) || `Svar registrert via n8n (${parsed.classification})`,
      details: { classification: parsed.classification, via: "n8n" },
    });
  }
  return Response.json({ matched: companies?.length ?? 0 });
}
