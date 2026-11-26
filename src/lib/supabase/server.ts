import "server-only";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { crmEnv } from "@/lib/crm/config";

/**
 * Per-request Supabase client acting as the signed-in user. All queries run
 * under Row Level Security. Create a new one for every request.
 */
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  return createServerClient(crmEnv.supabaseUrl, crmEnv.supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // Called from a Server Component, where cookies are read-only.
          // The proxy refreshes the session, so this is safe to ignore.
        }
      },
    },
  });
}

/**
 * Service-role client. Bypasses RLS: use it only in server code that has
 * already authenticated the caller in another way (the signed n8n webhook,
 * the signed unsubscribe link). Never import this from a client component.
 */
export function createSupabaseServiceClient() {
  if (!crmEnv.supabaseUrl || !crmEnv.supabaseServiceRoleKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY er ikke satt.");
  }
  return createClient(crmEnv.supabaseUrl, crmEnv.supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
