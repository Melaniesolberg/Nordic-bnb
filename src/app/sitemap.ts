import type { MetadataRoute } from "next";
import { CONTACT } from "@/lib/utils";
import { seoPages } from "@/content/seo-pages";
import { locales, defaultLocale } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homeEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: locale === defaultLocale ? CONTACT.site : `${CONTACT.site}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: locale === defaultLocale ? 1 : 0.8,
  }));

  const seoEntries: MetadataRoute.Sitemap = seoPages.map((p) => ({
    url: `${CONTACT.site}/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const contactEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: locale === defaultLocale ? `${CONTACT.site}/contact` : `${CONTACT.site}/${locale}/contact`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...homeEntries, ...seoEntries, ...contactEntries];
}
