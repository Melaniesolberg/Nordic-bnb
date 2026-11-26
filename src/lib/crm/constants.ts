/** Labels and enums shared by the admin UI and server code. No secrets here. */

export const SEGMENTS = {
  airbnb_manager: "Airbnb-verter og forvaltere",
  real_estate_agent: "Eiendomsmeglere",
  professional_landlord: "Profesjonelle utleiere",
  hotel: "Hoteller",
  photographer: "Boligfotografer",
  stylist: "Boligstylister",
  developer: "Eiendomsutviklere",
  other: "Annet",
} as const;
export type Segment = keyof typeof SEGMENTS;

export const STATUSES = {
  new: "Ny",
  researched: "Analysert",
  qualified: "Kvalifisert",
  contacted: "Kontaktet",
  interested: "Interessert",
  customer: "Kunde",
  not_interested: "Ikke interessert",
  unqualified: "Ikke aktuell",
} as const;
export type Status = keyof typeof STATUSES;

export const SERVICES = {
  photo_boost: "Bildeløft",
  sale_boost: "Salgsløftet",
  virtual_staging: "Digital styling",
  broker_plan: "Megleravtale",
  manager_plan: "Forvalteravtale",
  other: "Annet",
} as const;
export type Service = keyof typeof SERVICES;
export const RECOMMENDABLE_SERVICES = [
  "photo_boost",
  "sale_boost",
  "virtual_staging",
  "broker_plan",
  "manager_plan",
] as const;

/** List prices in NOK, used to estimate deal value. */
export const SERVICE_PRICE_NOK: Record<Service, number> = {
  photo_boost: 1890,
  sale_boost: 1990,
  virtual_staging: 1190,
  broker_plan: 9900,
  manager_plan: 4900,
  other: 0,
};

export const CHANNELS = {
  google_ads: "Google Ads",
  meta_ads: "Meta-annonser",
  linkedin: "LinkedIn",
  outreach: "E-post-outreach",
  referral: "Anbefaling",
  partner: "Partner",
  organic: "Organisk / nettsiden",
  other: "Annet",
} as const;
export type Channel = keyof typeof CHANNELS;

export const CONTACT_BASIS = {
  none: "Ikke vurdert – kan ikke kontaktes",
  b2b_generic_address: "Bedriftens felles e-postadresse (B2B)",
  consent: "Samtykke fra mottaker",
  existing_customer: "Eksisterende kunde",
  inbound_inquiry: "De tok kontakt selv",
} as const;
export type ContactBasis = keyof typeof CONTACT_BASIS;

export const MESSAGE_STATUSES = {
  draft: "Venter på godkjenning",
  approved: "Godkjent – ikke sendt",
  sent: "Sendt",
  failed: "Feilet",
  cancelled: "Stoppet",
} as const;

export const ACTIVITY_TYPES = {
  note: "Notat",
  email_sent: "E-post sendt",
  reply: "Svar",
  call: "Samtale",
  meeting: "Møte",
  status_change: "Statusendring",
  opt_out: "Reservasjon",
  sale: "Salg",
  ai_analysis: "AI-analyse",
  import: "Import",
  follow_up: "Oppfølging",
} as const;

/**
 * Brønnøysund (Enhetsregisteret) industry codes per segment, SN2025.
 * Verified against data.brreg.no in November 2026.
 */
export const SEGMENT_NACE: Record<Exclude<Segment, "other">, { codes: string[]; minEmployees?: number }> = {
  real_estate_agent: { codes: ["68.310"] },
  airbnb_manager: { codes: ["68.320", "55.200"] },
  professional_landlord: { codes: ["68.200"], minEmployees: 1 },
  hotel: { codes: ["55.100"] },
  photographer: { codes: ["74.200"] },
  stylist: { codes: ["74.130"] },
  developer: { codes: ["68.120"] },
};

/** Municipalities offered in the research form (2024+ numbers). */
export const MUNICIPALITIES: { code: string; name: string }[] = [
  { code: "0301", name: "Oslo" },
  { code: "4601", name: "Bergen" },
  { code: "5001", name: "Trondheim" },
  { code: "1103", name: "Stavanger" },
  { code: "1108", name: "Sandnes" },
  { code: "3201", name: "Bærum" },
  { code: "3203", name: "Asker" },
  { code: "3205", name: "Lillestrøm" },
  { code: "3301", name: "Drammen" },
  { code: "3107", name: "Fredrikstad" },
  { code: "3105", name: "Sarpsborg" },
  { code: "3905", name: "Tønsberg" },
  { code: "3907", name: "Sandefjord" },
  { code: "3909", name: "Larvik" },
  { code: "4204", name: "Kristiansand" },
  { code: "4203", name: "Arendal" },
  { code: "5501", name: "Tromsø" },
  { code: "1804", name: "Bodø" },
  { code: "1508", name: "Ålesund" },
  { code: "3403", name: "Hamar" },
  { code: "3405", name: "Lillehammer" },
  { code: "4621", name: "Voss" },
  { code: "3330", name: "Hol (Geilo)" },
  { code: "3326", name: "Hemsedal" },
  { code: "3421", name: "Trysil" },
  { code: "4222", name: "Bykle (Hovden)" },
  { code: "4228", name: "Sirdal" },
  { code: "5021", name: "Oppdal" },
  { code: "3440", name: "Øyer (Hafjell)" },
  { code: "1865", name: "Vågan (Lofoten)" },
];
