import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/crm/config";

export type AdminRole = "owner" | "admin" | "viewer";

export interface AdminSession {
  userId: string;
  email: string;
  role: AdminRole;
  canWrite: boolean;
}

/**
 * Data-access-layer check. Verifies the user with Supabase Auth (getUser
 * contacts the auth server, so a forged cookie is rejected) and that the
 * user has a row in admin_users. Cached per request.
 */
export const getAdminSession = cache(async (): Promise<AdminSession | null> => {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return null;
  const { data: row } = await supabase
    .from("admin_users")
    .select("role, email")
    .eq("user_id", data.user.id)
    .maybeSingle();
  if (!row) return null;
  const role = row.role as AdminRole;
  return {
    userId: data.user.id,
    email: row.email ?? data.user.email ?? "",
    role,
    canWrite: role === "owner" || role === "admin",
  };
});

export async function requireAdmin(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login?error=access");
  return session;
}

/** For server actions that change data. */
export async function requireWriter(): Promise<AdminSession> {
  const session = await requireAdmin();
  if (!session.canWrite) throw new Error("Du har bare lesetilgang.");
  return session;
}
