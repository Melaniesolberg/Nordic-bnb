export const locales = ["en", "no", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  no: "Norsk",
  es: "Español",
};

/** English is served unprefixed at "/"; "no" and "es" are prefixed. */
export function localeHref(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}
