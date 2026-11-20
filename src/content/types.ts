import type { ServiceKey } from "@/i18n/config";

export interface NavContent {
  links: { label: string; href: string }[];
  cta: string;
  toggleMenu: string;
  selectLanguage: string;
}

export interface HeroContent {
  eyebrow: string;
  headlineLines: string[];
  subline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** Text that replaces the intro as the visitor scrolls through the hero video. */
  beats: { eyebrow: string; heading: string; body: string }[];
  locationTag: string;
}

/** A figure with the sentence it belongs to and where it comes from. */
export interface SourcedStat {
  value: string;
  text: string;
  source: string;
  href?: string;
}

export interface ProblemContent {
  eyebrow: string;
  heading: string;
  /** Seconds the countdown starts from. */
  seconds: number;
  unit: string;
  /** The listing-preview study the countdown illustrates. */
  timeStat: SourcedStat;
}

export interface PhotoBoostRevealContent {
  link?: string;
  beforeAlt?: string;
  afterAlt?: string;
  eyebrow: string;
  heading: string;
  body: string;
  hint: string;
  beforeLabel: string;
  afterLabel: string;
  /** Visible caption saying what was done and which side is the original. */
  caption?: string;
}

export interface ShowcaseContent {
  eyebrow: string;
  heading: string;
}

export interface HowItWorksContent {
  eyebrow: string;
  heading: string;
  intro?: string;
  steps: { title: string; description: string }[];
  /** Listing sites shown as chips over the last step's image. */
  channels: string[];
}

export interface ServiceItem {
  key: ServiceKey;
  title: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  note?: string;
  /** Descriptive link to the service page. */
  linkLabel: string;
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: ServiceItem[];
  termsHeading: string;
  termsNote: string;
}

export type PlanKey = "brokerPlan" | "managerPlan";

export interface PlanItem {
  key: PlanKey;
  title: string;
  audience: string;
  price: string;
  pricePeriod: string;
  value: string;
  savings: string;
  features: string[];
  badge?: string;
  featured?: boolean;
  cta: string;
}

export interface PlansContent {
  eyebrow: string;
  badge?: string;
  heading: string;
  intro: string;
  items: PlanItem[];
  valueLabel: string;
  terms: string[];
  note: string;
}

export interface AudiencesContent {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: { name: string; description: string }[];
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  founderName: string;
  founderRole: string;
  founderQuote?: string;
  photoAlt: string;
  replyNote: string;
}

export interface HonestyContent {
  eyebrow: string;
  heading: string;
  items: { title: string; body: string }[];
}

export interface FaqContent {
  eyebrow: string;
  heading: string;
  items: { q: string; a: string }[];
}

export interface CasesContent {
  eyebrow: string;
  heading: string;
  improvedLabel: string;
  beforeLabel: string;
  captions: Record<string, string>;
}

export interface OrderFormContent {
  fields: {
    name: string;
    email: string;
    customerType: string;
    service: string;
    photosLink: string;
    photosLinkHelp: string;
    message: string;
    rights: string;
    marketing: string;
    withdrawal: string;
  };
  /** Customer types that are private persons (consumers with a right of withdrawal). */
  privateCustomerTypes: string[];
  selectPlaceholder: string;
  customerTypes: string[];
  serviceOptions: { key: ServiceKey | PlanKey | "unsure" | "freeSample"; label: string }[];
  submit: string;
  errorMessage: string;
  privacyNote: string;
  /** Risk-reversal line shown next to order buttons. */
  trustNote: string;
  privacyLink: string;
}

export interface FinalCtaContent {
  eyebrow: string;
  heading: string;
  subline: string;
  ctaPrimary: string;
  form: OrderFormContent;
}

/**
 * One piece of a service page section. Text may hold inline links written
 * as [label](href); see components/ui/rich-text.tsx.
 */
export type ServiceBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; caption: string; head: string[]; rows: string[][] }
  | { type: "case"; heading: string; text: string }
  | { type: "note"; text: string }
  | { type: "cta" };

export interface ServicePageContent {
  eyebrow: string;
  heading: string;
  intro: string;
  /** Before/after pair shown under the intro, when the page has one. */
  comparison?: {
    beforeLabel: string;
    afterLabel: string;
    beforeAlt: string;
    afterAlt: string;
    caption: string;
    hint: string;
  };
  sections: { heading: string; blocks: ServiceBlock[] }[];
  /** Internal links to related pages, shown after the sections. */
  links: { text: string; label: string; href: string }[];
  priceHeading: string;
  price?: string;
  priceNote?: string;
  tiers?: { name: string; price: string; detail: string }[];
  /** Optional free-sample nudge under the order button. */
  sample?: { text: string; label: string };
  cta: string;
}

export type SeoKey = "home" | ServiceKey | "order";

export interface SimplePageContent {
  eyebrow: string;
  heading: string;
  intro: string;
}

export interface LegalPageContent {
  eyebrow: string;
  heading: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

export interface ConsentContent {
  message: string;
  acceptAll: string;
  rejectAll: string;
  settings: string;
  save: string;
  analytics: string;
  marketing: string;
  changeConsent: string;
}

export interface FooterContent {
  tagline: string;
  linksHeading: string;
  legalHeading: string;
  contactHeading: string;
  languageHeading: string;
  rights: string;
  legalName: string;
  replyNote: string;
}

export interface SiteContent {
  meta: { title: string; description: string };
  seo: Record<SeoKey, { title: string; description: string }>;
  nav: NavContent;
  hero: HeroContent;
  problem: ProblemContent;
  photoBoost: PhotoBoostRevealContent;
  showcase2: PhotoBoostRevealContent & { link: string };
  howItWorks: HowItWorksContent;
  cases: CasesContent;
  services: ServicesContent;
  plans: PlansContent;
  audiences: AudiencesContent;
  about: AboutContent;
  honesty: HonestyContent;
  faq: FaqContent;
  finalCta: FinalCtaContent;
  servicePages: Record<ServiceKey, ServicePageContent>;
  orderPage: SimplePageContent;
  thanks: SimplePageContent & { back: string };
  notFound: SimplePageContent & { back: string };
  legal: {
    privacy: LegalPageContent;
    terms: LegalPageContent;
    cookies: LegalPageContent;
  };
  consent: ConsentContent;
  footer: FooterContent;
}
