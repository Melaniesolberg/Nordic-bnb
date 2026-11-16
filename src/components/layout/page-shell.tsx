import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import ConsentBanner from "@/components/layout/consent-banner";
import { getContent } from "@/content";
import { htmlLang, type Locale, type PageKey } from "@/i18n/config";

/**
 * Nav, footer and consent banner around a page. The root <html> is
 * Norwegian, so English pages mark their own content with lang="en".
 */
export default function PageShell({
  locale,
  pageKey,
  overHero = false,
  children,
}: {
  locale: Locale;
  pageKey: PageKey;
  overHero?: boolean;
  children: React.ReactNode;
}) {
  const content = getContent(locale);

  return (
    <div lang={htmlLang[locale]}>
      <Nav locale={locale} nav={content.nav} pageKey={pageKey} overHero={overHero} />
      <main>{children}</main>
      <Footer
        locale={locale}
        footer={content.footer}
        nav={content.nav}
        legal={content.legal}
        consent={content.consent}
        locationTag={content.hero.locationTag}
        pageKey={pageKey}
      />
      <ConsentBanner copy={content.consent} />
    </div>
  );
}
