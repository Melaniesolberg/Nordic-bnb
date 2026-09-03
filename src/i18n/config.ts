export const locales = ["en", "no", "sv", "da", "fi", "de", "fr", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  no: "Norsk",
  sv: "Svenska",
  da: "Dansk",
  fi: "Suomi",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  no: "🇳🇴",
  sv: "🇸🇪",
  da: "🇩🇰",
  fi: "🇫🇮",
  de: "🇩🇪",
  fr: "🇫🇷",
  es: "🇪🇸",
};

/** English is served unprefixed at "/"; every other locale is prefixed. */
export function localeHref(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}
