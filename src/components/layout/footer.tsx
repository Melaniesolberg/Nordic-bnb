import Link from "next/link";
import Logo from "@/components/ui/logo";
import { CONTACT, WHATSAPP_LINK } from "@/lib/utils";
import { locales, localeHref, localeLabels, type Locale } from "@/i18n/config";
import type { FooterContent, NavContent } from "@/content/types";

export default function Footer({
  locale,
  footer,
  nav,
  locationTag,
}: {
  locale: Locale;
  footer: FooterContent;
  nav: NavContent;
  locationTag: string;
}) {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs font-serif-display text-2xl italic text-ivory/85">
              {footer.tagline}
            </p>
          </div>

          <div>
            <p className="eyebrow text-ivory/45">{footer.linksHeading}</p>
            <ul className="mt-5 space-y-3">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[0.95rem] text-ivory/75 transition-colors hover:text-coral">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/45">{footer.contactHeading}</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li>
                <a href={`mailto:${CONTACT.emailGeneral}`} className="text-ivory/75 transition-colors hover:text-coral">
                  {CONTACT.emailGeneral}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.emailFounder}`} className="text-ivory/75 transition-colors hover:text-coral">
                  {CONTACT.emailFounder}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/75 transition-colors hover:text-coral"
                >
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/45">{footer.languageHeading}</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {locales.map((l) => (
                <li key={l}>
                  <Link
                    href={localeHref(l, "/")}
                    className={`transition-colors hover:text-coral ${
                      l === locale ? "text-coral" : "text-ivory/75"
                    }`}
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
          <p>{locationTag}</p>
        </div>
      </div>
    </footer>
  );
}
