import { getAdminSession } from "@/lib/crm/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { toCsv } from "@/lib/crm/csv";

const EXPORTS = {
  companies: {
    table: "companies",
    columns: [
      "id", "name", "org_number", "segment", "status", "score", "recommended_service", "website", "general_email",
      "email_is_generic", "phone", "address", "postal_code", "city", "nace_code", "employees", "source", "source_url",
      "contact_basis", "do_not_contact", "estimated_value_nok", "acquisition_channel", "needs_summary", "score_reason",
      "analyzed_at", "created_at",
    ],
  },
  deals: {
    table: "deals",
    columns: ["id", "company_id", "service", "channel", "amount_nok", "status", "probability", "expected_close", "closed_at", "note", "created_at"],
  },
  activities: {
    table: "activities",
    columns: ["id", "company_id", "type", "summary", "follow_up_at", "occurred_at"],
  },
  messages: {
    table: "outreach_messages",
    columns: ["id", "company_id", "to_email", "subject", "status", "generated_by", "approved_at", "sent_at", "error", "created_at"],
  },
} as const;

export async function GET(request: Request) {
  const session = await getAdminSession();
  if (!session) return new Response("Ikke innlogget", { status: 401 });

  const type = new URL(request.url).searchParams.get("type") ?? "companies";
  const spec = EXPORTS[type as keyof typeof EXPORTS];
  if (!spec) return new Response("Ukjent eksport", { status: 400 });

  const supabase = await createSupabaseServerClient();
  const rows: Record<string, unknown>[] = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await supabase.from(spec.table).select(spec.columns.join(",")).order("created_at").range(from, from + 999);
    if (error) return new Response(error.message, { status: 500 });
    rows.push(...((data ?? []) as unknown as Record<string, unknown>[]));
    if (!data || data.length < 1000) break;
  }

  const date = new Date().toISOString().slice(0, 10);
  return new Response(toCsv(rows, [...spec.columns]), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="eiendomly-${type}-${date}.csv"`,
      "Cache-Control": "private, no-store",
    },
  });
}
