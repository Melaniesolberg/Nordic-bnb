import nb from "./nb.json";
import en from "./en.json";
import cases from "./cases.json";
import type { BbContent, BbLocale } from "./types";

const content: Record<BbLocale, BbContent> = { nb: nb as BbContent, en: en as BbContent };

export function getBbContent(locale: BbLocale): BbContent {
  return content[locale];
}

export interface BbCase {
  id: string;
  before: string;
  after: string;
}

export function getBbCases(): BbCase[] {
  return cases as BbCase[];
}

export function bbHref(locale: BbLocale, path = ""): string {
  const clean = path ? `/${path.replace(/^\/+/, "")}` : "";
  return locale === "nb" ? `/eiendomly${clean}` : `/eiendomly/en${clean}`;
}

/** Localized slugs for pages whose path differs between Norwegian and English. */
export const BB_SLUGS = {
  order: { nb: "bestill", en: "order" },
  thanks: { nb: "takk", en: "thanks" },
  privacy: { nb: "personvern", en: "privacy" },
  terms: { nb: "vilkar", en: "terms" },
  cookies: { nb: "cookies", en: "cookies" },
  photoBoost: { nb: "bildeloft", en: "photo-boost" },
  virtualStaging: { nb: "digital-styling", en: "virtual-staging" },
  saleBoost: { nb: "salgsloftet", en: "sale-boost" },
} as const;

export function bbSlugHref(locale: BbLocale, key: keyof typeof BB_SLUGS, anchor = ""): string {
  return bbHref(locale, BB_SLUGS[key][locale] + anchor);
}

export const BB_EMAIL = "hei@eiendomly.no";
