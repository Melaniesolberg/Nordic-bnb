import { connection } from "next/server";
import { redirect } from "next/navigation";
import { signIn } from "@/lib/crm/actions";
import { getAdminSession } from "@/lib/crm/auth";
import { isSupabaseConfigured } from "@/lib/crm/config";
import { Flash, btnPrimary, input, label, sp } from "@/components/admin/ui";

export const metadata = { title: "Logg inn" };

export default async function LoginPage({ searchParams }: PageProps<"/admin/login">) {
  // Env and session are read per request, never at build time.
  await connection();
  const params = await searchParams;
  const configured = isSupabaseConfigured();
  const error = sp(params, "error");
  if (configured && error !== "access" && (await getAdminSession())) redirect("/admin");

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <p className="mb-6 text-center font-serif text-2xl">
          Eiendomly<span className="text-coral">.</span> <span className="text-charcoal/60">CRM</span>
        </p>
        <div className="rounded-lg border border-charcoal/10 bg-white p-6">
          <Flash error={error} />
          {!configured ? (
            <div className="space-y-3 text-sm text-charcoal/80">
              <p className="font-medium">Administrasjonen er ikke satt opp ennå.</p>
              <p>
                Sett <code>SUPABASE_URL</code> og <code>SUPABASE_ANON_KEY</code> i Netlify, kjør databasemigrasjonen og legg deg
                selv til i <code>admin_users</code>. Se <code>docs/crm/README.md</code> i repoet.
              </p>
            </div>
          ) : (
            <form action={signIn} className="space-y-4">
              <div>
                <label htmlFor="email" className={label}>E-post</label>
                <input id="email" name="email" type="email" autoComplete="username" required className={input} />
              </div>
              <div>
                <label htmlFor="password" className={label}>Passord</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className={input} />
              </div>
              <button type="submit" className={`${btnPrimary} w-full`}>Logg inn</button>
            </form>
          )}
        </div>
        <p className="mt-4 text-center text-xs text-charcoal/55">Kun for Eiendomly. Alle hendelser logges.</p>
      </div>
    </main>
  );
}
