import { connection } from "next/server";
import Link from "next/link";
import { requireAdmin } from "@/lib/crm/auth";
import { isSupabaseConfigured } from "@/lib/crm/config";
import { signOut } from "@/lib/crm/actions";
import { redirect } from "next/navigation";

const NAV = [
  { href: "/admin", label: "Oversikt" },
  { href: "/admin/prospects", label: "Kunder" },
  { href: "/admin/research", label: "Research" },
  { href: "/admin/outreach", label: "Outreach" },
  { href: "/admin/import", label: "Import / eksport" },
  { href: "/admin/settings", label: "Innstillinger" },
] as const;

export default async function PanelLayout({ children }: LayoutProps<"/admin">) {
  // Env and session are read per request, never at build time.
  await connection();
  if (!isSupabaseConfigured()) redirect("/admin/login");
  const session = await requireAdmin();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-charcoal/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6">
          <Link href="/admin" className="shrink-0 font-serif text-lg">
            Eiendomly<span className="text-coral">.</span> <span className="text-sm text-charcoal/55">CRM</span>
          </Link>
          <nav className="order-last -mx-1 flex w-full min-w-0 gap-1 overflow-x-auto text-sm md:order-none md:w-auto md:flex-1" aria-label="Administrasjon">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="whitespace-nowrap rounded-md px-2.5 py-1.5 text-charcoal/75 hover:bg-charcoal/5 hover:text-charcoal">
                {n.label}
              </Link>
            ))}
          </nav>
          <form action={signOut} className="ml-auto shrink-0 md:ml-0">
            <button type="submit" className="rounded-md px-2.5 py-1.5 text-sm text-charcoal/65 hover:bg-charcoal/5" title={session.email}>
              Logg ut
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        {!session.canWrite && (
          <p className="mb-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">Du har lesetilgang. Endringer er slått av.</p>
        )}
        {children}
      </main>
    </div>
  );
}
