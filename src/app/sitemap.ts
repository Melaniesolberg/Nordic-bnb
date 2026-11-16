import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";
import { locales, pageHref, pageSlugs, type PageKey } from "@/i18n/config";

const PRIORITY: Partial<Record<PageKey, number>> = {
  home: 1,
  photoBoost: 0.9,
  virtualStaging: 0.9,
  saleBoost: 0.9,
  order: 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const keys = (Object.keys(pageSlugs) as PageKey[]).filter((k) => k !== "thanks");

  return keys.flatMap((key) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${pageHref(locale, key)}`,
      lastModified: now,
      changeFrequency: key === "home" ? ("weekly" as const) : ("monthly" as const),
      priority: (PRIORITY[key] ?? 0.4) * (locale === "no" ? 1 : 0.9),
      alternates: {
        languages: { nb: `${SITE_URL}${pageHref("no", key)}`, en: `${SITE_URL}${pageHref("en", key)}` },
      },
    })),
  );
}
