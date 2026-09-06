export interface NavContent {
  links: { label: string; href: string }[];
  cta: string;
  whatsapp: string;
  whatsappMessage: string;
  toggleMenu: string;
  selectLanguage: string;
}

export interface ShowcaseContent {
  eyebrow: string;
  heading: string;
}

export interface HeroContent {
  eyebrow: string;
  headlineLines: string[];
  subline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  scrollHint: string;
  locationTag: string;
}

export interface SystemPillar {
  code: string;
  title: string;
  description: string;
}

export interface SystemContent {
  eyebrow: string;
  heading: string;
  intro: string;
  pillars: SystemPillar[];
}

export interface BeforeAfterField {
  label: string;
  before: string;
  after: string;
}

export interface BeforeAfterContent {
  eyebrow: string;
  heading: string;
  intro: string;
  beforeLabel: string;
  afterLabel: string;
  fields: BeforeAfterField[];
  sliderAriaLabel: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface PortfolioProperty {
  name: string;
  location: string;
  stats: { value: string; label: string }[];
}

export interface PortfolioContent {
  eyebrow: string;
  heading: string;
  intro: string;
  realResultsLabel: string;
  disclaimer: string;
  beforeLabel: string;
  afterLabel: string;
  properties: PortfolioProperty[];
}

export interface ServiceItem {
  title: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  intro: string;
  shortTerm: ServiceItem;
  longTerm: ServiceItem;
  termsNote: string;
  ctaLabel: string;
  whatsappTemplate: string;
}

export interface DashboardContent {
  eyebrow: string;
  heading: string;
  intro: string;
  footnote: string;
  windowTitle: string;
  cardAlt: string;
  revenueChangeNote: string;
  payoutNote: string;
  cleaningStatusText: string;
  maintenanceStatusText: string;
  labels: {
    revenue: string;
    occupancy: string;
    upcoming: string;
    cleaning: string;
    maintenance: string;
    payout: string;
    guest: string;
    status: string;
  };
}

export interface OperationsStep {
  title: string;
  detail: string;
}

export interface OperationsContent {
  eyebrow: string;
  heading: string;
  intro: string;
  steps: OperationsStep[];
  bannerHeadline: string;
  sequenceLabels: {
    styling: string;
    cleaning: string;
    guestArrival: string;
    detail: string;
  };
}

export interface CompareColumn {
  title: string;
  tagline: string;
  points: string[];
}

export interface CompareContent {
  eyebrow: string;
  heading: string;
  intro: string;
  shortTerm: CompareColumn;
  longTerm: CompareColumn;
  cta: string;
}

export interface AreaItem {
  name: string;
  description: string;
}

export interface AreasContent {
  eyebrow: string;
  heading: string;
  intro: string;
  areas: AreaItem[];
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  founderName: string;
  founderRole: string;
  founderQuote: string;
  founder2Name: string;
  founder2Role: string;
  founder2Quote: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export interface TestimonialsContent {
  eyebrow: string;
  heading: string;
  items: Testimonial[];
}

export interface ContactFormContent {
  fields: {
    name: string;
    email: string;
    phone: string;
    location: string;
    propertyType: string;
    bedrooms: string;
    currentlyRented: string;
    yes: string;
    no: string;
    strategy: string;
    strategyOptions: { short: string; long: string; unsure: string };
    message: string;
  };
  submit: string;
  successTitle: string;
  successBody: string;
  errorMessage: string;
}

export interface FinalCtaContent {
  eyebrow: string;
  heading: string;
  subline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  form: ContactFormContent;
}

export interface FooterContent {
  tagline: string;
  linksHeading: string;
  contactHeading: string;
  languageHeading: string;
  rights: string;
  orgNumberLabel: string;
  realPhotosNote: string;
}

export interface ContactPageContent {
  eyebrow: string;
  heading: string;
  intro: string;
  teamHeading: string;
  teamIntro: string;
  roles: { title: string; description: string }[];
  emailHeading: string;
  ctaHeading: string;
  ctaSubline: string;
  ctaButton: string;
  recruitCta: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: NavContent;
  hero: HeroContent;
  system: SystemContent;
  beforeAfter: BeforeAfterContent;
  services: ServicesContent;
  dashboard: DashboardContent;
  operations: OperationsContent;
  compare: CompareContent;
  areas: AreasContent;
  about: AboutContent;
  testimonials: TestimonialsContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
  showcase1: ShowcaseContent;
  showcase2: ShowcaseContent;
  portfolio: PortfolioContent;
  contactPage: ContactPageContent;
}
