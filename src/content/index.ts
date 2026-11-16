import type { Locale } from "@/i18n/config";
import type { SiteContent } from "./types";
import { en } from "./en";
import { no } from "./no";

const dictionaries: Record<Locale, SiteContent> = { no, en };

export function getContent(locale: Locale): SiteContent {
  return dictionaries[locale];
}

export type { SiteContent } from "./types";
