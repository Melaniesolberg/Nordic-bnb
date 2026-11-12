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

  const privacyEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: locale === defaultLocale ? `${CONTACT.site}/privacy` : `${CONTACT.site}/${locale}/privacy`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const eiendomlyPaths = [
    "/eiendomly",
    "/eiendomly/en",
    "/eiendomly/bildeloft",
    "/eiendomly/en/photo-boost",
    "/eiendomly/digital-styling",
    "/eiendomly/en/virtual-staging",
    "/eiendomly/salgsloftet",
    "/eiendomly/en/sale-boost",
    "/eiendomly/bestill",
    "/eiendomly/en/order",
    "/eiendomly/personvern",
    "/eiendomly/en/privacy",
    "/eiendomly/vilkar",
    "/eiendomly/en/terms",
    "/eiendomly/cookies",
    "/eiendomly/en/cookies",
  ];

  const eiendomlyEntries: MetadataRoute.Sitemap = eiendomlyPaths.map((path) => ({
    url: `${CONTACT.site}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/eiendomly" || path === "/eiendomly/en" ? 0.9 : 0.6,
  }));

  return [...homeEntries, ...seoEntries, ...contactEntries, ...privacyEntries, ...eiendomlyEntries];
}
