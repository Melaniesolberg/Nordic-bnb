import Link from "next/link";
import Logo from "@/components/ui/logo";
import { CONTACT } from "@/lib/utils";
import { locales, localeLabels, pageHref, type Locale, type PageKey } from "@/i18n/config";
import type { ConsentContent, FooterContent, NavContent, SiteContent } from "@/content/types";

const linkClass = "text-[0.95rem] text-ivory/75 transition-colors hover:text-coral";

export default function Footer({
  locale,
  footer,
  nav,
  legal,
  consent,
  locationTag,
  pageKey = "home",
}: {
  locale: Locale;
  footer: FooterContent;
  nav: NavContent;
  legal: SiteContent["legal"];
  consent: ConsentContent;
  locationTag: string;
  pageKey?: PageKey;
}) {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" size="lg" />
            <p className="mt-6 max-w-xs font-serif-display text-2xl italic text-ivory/85">
              {footer.tagline}
            </p>
          </div>

          <div>
            <p className="eyebrow text-ivory/45">{footer.linksHeading}</p>
            <ul className="mt-5 space-y-3">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/45">{footer.legalHeading}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href={pageHref(locale, "privacy")} className={linkClass}>
                  {legal.privacy.heading}
                </Link>
              </li>
              <li>
                <Link href={pageHref(locale, "terms")} className={linkClass}>
                  {legal.terms.heading}
                </Link>
              </li>
              <li>
                <Link href={pageHref(locale, "cookies")} className={linkClass}>
                  {legal.cookies.heading}
                </Link>
              </li>
              <li>
                <button type="button" data-consent-trigger className={`${linkClass} text-left`}>
                  {consent.changeConsent}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/45">{footer.contactHeading}</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li>
                <a href={`mailto:${CONTACT.email}`} className={linkClass}>
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-ivory/50">{footer.replyNote}</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/45">{footer.languageHeading}</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {locales.map((l) => (
                <li key={l}>
                  <Link
                    href={pageHref(l, pageKey)}
                    className={`transition-colors hover:text-coral ${l === locale ? "text-coral" : "text-ivory/75"}`}
                  >
                    {localeLabels[l]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {footer.rights}
          </p>
          <a
            href={CONTACT.orgNumberUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-coral"
          >
            {footer.legalName}, org.nr {CONTACT.orgNumber}
          </a>
          <p>{locationTag}</p>
        </div>
      </div>
    </footer>
  );
}
