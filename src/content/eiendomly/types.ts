export type BbLocale = "nb" | "en";

export interface BbFaqItem {
  q: string;
  a: string;
}

export interface BbServiceContent {
  slug: string;
  heading: string;
  tagline: string;
  forWho: string;
  whatItIs: string;
  includes: string[];
  price: string;
  priceNote?: string;
  note?: string;
}

export interface BbCaseContent {
  caption: string;
}

export interface BbContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    faq: string;
    orderCta: string;
    langLabel: string;
  };
  hero: {
    h1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  beforeAfter: {
    eyebrow: string;
    heading: string;
    improvedLabel: string;
    cases: Record<string, BbCaseContent>;
  };
  problem: {
    eyebrow: string;
    heading: string;
    points: string[];
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    steps: string[];
  };
  servicesOverview: {
    eyebrow: string;
    heading: string;
    cta: string;
  };
  honesty: {
    eyebrow: string;
    heading: string;
    points: string[];
  };
  about: {
    eyebrow: string;
    name: string;
    role: string;
    bio: string;
    replyNote: string;
    photoAlt: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: BbFaqItem[];
  };
  finalCta: {
    heading: string;
    cta: string;
  };
  pricingNote: string;
  services: {
    photoBoost: BbServiceContent;
    virtualStaging: BbServiceContent;
    saleBoostMini: BbServiceContent;
    saleBoostLarge: BbServiceContent;
    saleBoostValueNote: string;
    saleBoostHeading: string;
    saleBoostTagline: string;
    saleBoostForWho: string;
    saleBoostWhatItIs: string;
    saleBoostIncludes: string[];
  };
  order: {
    eyebrow: string;
    heading: string;
    intro: string;
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
    customerTypes: string[];
    serviceOptions: string[];
    submit: string;
  };
  thanks: {
    heading: string;
    body: string;
    back: string;
  };
  legal: {
    privacy: { heading: string; updated: string; intro: string; sections: { heading: string; body: string }[] };
    terms: { heading: string; intro: string; sections: { heading: string; body: string }[] };
    cookies: { heading: string; intro: string; sections: { heading: string; body: string }[] };
  };
  consent: {
    message: string;
    acceptAll: string;
    rejectAll: string;
    settings: string;
    changeConsent: string;
  };
  footer: {
    legalName: string;
    email: string;
    linkPrivacy: string;
    linkTerms: string;
    linkCookies: string;
    rights: string;
  };
}
