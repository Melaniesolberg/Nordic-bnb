import type { Locale } from "@/i18n/config";
import type { SiteContent } from "./types";
import { en } from "./en";
import { no } from "./no";
import { sv } from "./sv";
import { da } from "./da";
import { fi } from "./fi";
import { de } from "./de";
import { fr } from "./fr";
import { es } from "./es";

const dictionaries: Record<Locale, SiteContent> = { en, no, sv, da, fi, de, fr, es };

export function getContent(locale: Locale): SiteContent {
  return dictionaries[locale];
}

export type { SiteContent } from "./types";
