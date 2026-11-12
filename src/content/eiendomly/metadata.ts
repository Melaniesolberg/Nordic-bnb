import type { Metadata } from "next";
import { CONTACT } from "@/lib/utils";
import type { BbLocale } from "./types";

/**
 * Builds per-page, per-language metadata with hreflang alternates between
 * the Norwegian and English version of the same page.
 *
 * @param nbPath path of the Norwegian version, e.g. "/eiendomly/bildeloft"
 * @param enPath path of the English version, e.g. "/eiendomly/en/photo-boost"
 */
export function bbMetadata(
  locale: BbLocale,
  { title, description, nbPath, enPath }: { title: string; description: string; nbPath: string; enPath: string },
): Metadata {
  const canonical = locale === "nb" ? nbPath : enPath;

  return {
    // `{ absolute: ... }` bypasses the root layout's "%s — Nordic BnB"
    // title template — Eiendomly is a separate brand, not a Nordic BnB page.
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: { nb: nbPath, en: enPath },
    },
    openGraph: {
      title,
      description,
      url: `${CONTACT.site}${canonical}`,
      siteName: "Eiendomly",
      locale: locale === "nb" ? "nb_NO" : "en_US",
      type: "website",
    },
  };
}
