import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";
import { pageHref, type Locale, type PageKey } from "@/i18n/config";

/** Per-page, per-language metadata with hreflang alternates to the other language. */
export function pageMetadata(
  locale: Locale,
  key: PageKey,
  { title, description, absoluteTitle = false }: { title: string; description: string; absoluteTitle?: boolean },
): Metadata {
  const canonical = pageHref(locale, key);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: { nb: pageHref("no", key), en: pageHref("en", key), "x-default": pageHref("no", key) },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${canonical}`,
      siteName: "Eiendomly",
      locale: locale === "no" ? "nb_NO" : "en_US",
      type: "website",
    },
  };
}
