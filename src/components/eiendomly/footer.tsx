import Link from "next/link";
import { bbSlugHref } from "@/content/eiendomly";
import type { BbContent, BbLocale } from "@/content/eiendomly/types";

export default function BbFooter({ locale, footer }: { locale: BbLocale; footer: BbContent["footer"] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10 bg-charcoal py-12 text-ivory/70">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif-display text-xl text-ivory">Eiendomly</p>
            <p className="mt-2 text-sm">{footer.legalName}</p>
            <a href={`mailto:${footer.email}`} className="mt-1 inline-block text-sm hover:text-amber-500">
              {footer.email}
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href={bbSlugHref(locale, "privacy")} className="hover:text-amber-500">
              {footer.linkPrivacy}
            </Link>
            <Link href={bbSlugHref(locale, "terms")} className="hover:text-amber-500">
              {footer.linkTerms}
            </Link>
            <Link href={bbSlugHref(locale, "cookies")} className="hover:text-amber-500">
              {footer.linkCookies}
            </Link>
            <button
              type="button"
              data-bb-consent-trigger
              className="text-left hover:text-amber-500"
            >
              {locale === "nb" ? "Endre samtykke" : "Change consent"}
            </button>
          </nav>
        </div>

        <p className="mt-8 text-xs text-ivory/40">
          © {year} Eiendomly. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
