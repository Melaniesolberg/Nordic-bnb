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

export interface ProblemContent {
  eyebrow: string;
  heading: string;
  intro: string;
  /** Seconds the countdown starts from. */
  seconds: number;
  unit: string;
  stat: { value: string; text: string; source: string };
}

export interface PhotoBoostRevealContent {
  eyebrow: string;
  heading: string;
  body: string;
  hint: string;
  beforeLabel: string;
  afterLabel: string;
}

export interface ShowcaseContent {
  eyebrow: string;
  heading: string;
}

export interface HowItWorksContent {
  eyebrow: string;
  heading: string;
  intro: string;
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
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  intro: string;
  items: ServiceItem[];
  termsNote: string;
  ctaLabel: string;
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
}

export interface PlansContent {
  eyebrow: string;
  badge: string;
  heading: string;
  intro: string;
  items: PlanItem[];
  terms: string[];
  note: string;
  ctaLabel: string;
}

export interface AudiencesContent {
  eyebrow: string;
  heading: string;
  intro: string;
  items: { name: string; description: string }[];
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  founderName: string;
  founderRole: string;
  founderQuote: string;
  photoAlt: string;
  replyNote: string;
}

export interface HonestyColumn {
  title: string;
  tagline: string;
  points: string[];
}

export interface HonestyContent {
  eyebrow: string;
  heading: string;
  intro: string;
  does: HonestyColumn;
  never: HonestyColumn;
  cta: string;
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
    message: string;
    rights: string;
    marketing: string;
  };
  selectPlaceholder: string;
  customerTypes: string[];
  serviceOptions: { key: ServiceKey | PlanKey | "unsure"; label: string }[];
  submit: string;
  errorMessage: string;
  privacyNote: string;
  privacyLink: string;
}

export interface FinalCtaContent {
  eyebrow: string;
  heading: string;
  subline: string;
  ctaPrimary: string;
  form: OrderFormContent;
}

export interface ServicePageContent {
  eyebrow: string;
  heading: string;
  forWho: string;
  whatItIs: string;
  includesHeading: string;
  includes: string[];
  /** One short line shown large under the intro. */
  highlight?: string;
  facts?: { value: string; label: string; source?: string }[];
  priceHeading: string;
  price?: string;
  priceNote?: string;
  tiers?: { name: string; price: string; detail: string }[];
  note?: string;
  cta: string;
}

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
  nav: NavContent;
  hero: HeroContent;
  problem: ProblemContent;
  photoBoost: PhotoBoostRevealContent;
  showcase2: ShowcaseContent;
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
