export const locales = ["no", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "no";

export const localeLabels: Record<Locale, string> = {
  no: "Norsk",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  no: "🇳🇴",
  en: "🇬🇧",
};

export const htmlLang: Record<Locale, string> = {
  no: "nb",
  en: "en",
};

/** Norwegian is served unprefixed at "/"; English lives under "/en". */
export function localeHref(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

/** Pages whose URL slug differs between the two languages. */
export const pageSlugs = {
  home: { no: "", en: "" },
  photoBoost: { no: "bildeloft", en: "photo-boost" },
  virtualStaging: { no: "digital-styling", en: "virtual-staging" },
  saleBoost: { no: "salgsloftet", en: "sale-boost" },
  order: { no: "bestill", en: "order" },
  thanks: { no: "takk", en: "thanks" },
  privacy: { no: "personvern", en: "privacy" },
  terms: { no: "vilkar", en: "terms" },
  cookies: { no: "cookies", en: "cookies" },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof pageSlugs;
export type ServiceKey = "photoBoost" | "virtualStaging" | "saleBoost";

export function pageHref(locale: Locale, key: PageKey): string {
  const slug = pageSlugs[key][locale];
  return localeHref(locale, slug ? `/${slug}` : "/");
}
