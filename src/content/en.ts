import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Nordic BnB — Property Management, Costa del Sol",
    description:
      "Premium short-term and long-term rental management across Marbella, Mijas, Fuengirola and Benalmádena. Your property, continuously improved.",
  },
  nav: {
    links: [
      { label: "System", href: "/#system" },
      { label: "Services", href: "/#services" },
      { label: "Areas", href: "/#areas" },
      { label: "About", href: "/#about" },
      { label: "Team", href: "/contact" },
    ],
    cta: "Request a property review",
    whatsapp: "WhatsApp",
    whatsappMessage: "Hi Nordic BnB — I'd like to talk about my property.",
    toggleMenu: "Toggle menu",
    selectLanguage: "Select language",
  },
  hero: {
    eyebrow: "Property management — Costa del Sol",
    headlineLines: ["Your property.", "Continuously improved."],
    subline:
      "Full-service short-term and long-term rental management across Marbella, Mijas, Fuengirola and Benalmádena — positioning, pricing and presentation, refined without pause.",
    ctaPrimary: "Request a property review",
    ctaSecondary: "Talk to us on WhatsApp",
    scrollHint: "Scroll",
    locationTag: "Costa del Sol, Spain",
  },
  system: {
    eyebrow: "How it works",
    heading: "From empty room to confirmed booking.",
    intro:
      "The process that turns a listing into a stream of returning guests.",
    pillars: [
      {
        code: "",
        title: "We take over the property",
        description: "From first contact to full responsibility, with zero stress for you.",
      },
      {
        code: "",
        title: "We inspect and upgrade the styling",
        description: "Furniture, textiles and details adjusted to impress guests.",
      },
      {
        code: "",
        title: "We photograph and launch the listing",
        description: "Professional photos, live on every channel the same week.",
      },
      {
        code: "",
        title: "We handle bookings and guests",
        description: "From the first message to key handover — we take care of it all.",
      },
      {
        code: "",
        title: "We report and improve continuously",
        description: "You follow the progress, we fine-tune pricing and presentation.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Before → after",
    heading: "The same property. A different listing entirely.",
    intro:
      "Ordinary listings undersell extraordinary properties. Here's what changes when Nordic BnB takes over.",
    beforeLabel: "Before",
    afterLabel: "Nordic BnB",
    sliderAriaLabel: "Before and after listing comparison",
    beforeAlt: "Ordinary listing photography, before Nordic BnB",
    afterAlt: "Styled Nordic BnB listing photography, after",
    fields: [
      {
        label: "Title",
        before: "Nice apartment near the beach, 2 bedrooms",
        after: "Sunlit Marbella retreat, 90 seconds from the sand",
      },
      {
        label: "Photography",
        before: "Phone photos, mixed lighting, cluttered rooms",
        after: "Styled, professionally shot, golden-hour exteriors",
      },
      {
        label: "Pricing",
        before: "€90/night, fixed all year",
        after: "€68–€165/night, adjusted to demand in real time",
      },
      {
        label: "Description",
        before: "Two lines. No story, no detail.",
        after: "Written to sell the experience — and to convert",
      },
      {
        label: "Presence",
        before: "Listed on one platform",
        after: "Distributed across every channel that matters",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    heading: "Real transformations, across every property type.",
    intro:
      "A look at how Nordic BnB repositions listings — apartments, villas and houses alike — across the Costa del Sol.",
    realResultsLabel: "Real results",
    disclaimer: "Real before/after photography. Growth figures are illustrative examples until we can publish verified client data.",
    beforeLabel: "Before",
    afterLabel: "After",
    properties: [
      {
        name: "Apartment, Fuengirola",
        location: "Fuengirola",
        stats: [
          { value: "+29%", label: "revenue" },
          { value: "82%", label: "occupancy" },
        ],
      },
      {
        name: "Villa, Marbella",
        location: "Marbella",
        stats: [
          { value: "+34%", label: "revenue" },
          { value: "86%", label: "occupancy" },
        ],
      },
      {
        name: "House, Mijas",
        location: "Mijas",
        stats: [
          { value: "+27%", label: "revenue" },
          { value: "79%", label: "occupancy" },
        ],
      },
    ],
  },
  services: {
    eyebrow: "Services",
    heading: "Two strategies. One standard of care.",
    intro:
      "Whether your property is best suited to holiday guests or a long-term tenant, the same discipline applies: full-service management, continuously optimised.",
    whatsappTemplate: "Hi Nordic BnB — I'd like to ask about {service}.",
    shortTerm: {
      title: "Short-term & holiday rental management",
      price: "14.9% + IVA",
      priceNote: "of rental revenue",
      description:
        "Complete Airbnb and Booking.com management — from first listing to nightly operations.",
      features: [
        "Listing creation & ongoing optimisation",
        "Dynamic, demand-led pricing",
        "Multi-channel distribution (Airbnb, Booking.com & more)",
        "Guest communication & check-in coordination",
        "Professional cleaning & linen service",
        "Property inspections between stays",
        "Maintenance coordination",
        "Styling & photography/content coordination",
        "Owner reporting",
      ],
    },
    longTerm: {
      title: "Long-term rental management",
      price: "7.45% + IVA",
      priceNote: "of monthly rent",
      description:
        "Marketing, tenant coordination and ongoing oversight for owners who want predictable, low-intensity income.",
      features: [
        "Property marketing & tenant sourcing",
        "Tenant coordination & communication",
        "Rent collection & management",
        "Property oversight",
        "Maintenance coordination",
        "Owner reporting",
      ],
    },
    termsNote:
      "Final commercial terms can depend on the property, its type and the specific service requirements — figures above reflect our standard structure.",
    ctaLabel: "Ask about this service",
  },
  dashboard: {
    eyebrow: "Owner experience",
    heading: "You own the property. We handle the operation.",
    intro:
      "A live view into how your property is performing — bookings, occupancy, cleaning status, maintenance and your monthly payout, always visible.",
    footnote: "Concept interface — illustrative owner dashboard, shown with example data.",
    windowTitle: "Villa Sunrise — Owner portal",
    cardAlt: "Villa Sunrise, the property behind this dashboard",
    revenueChangeNote: "+18% vs. last month",
    payoutNote: "Oct 1 — bank transfer",
    cleaningStatusText: "Turnover scheduled",
    maintenanceStatusText: "No open issues",
    labels: {
      revenue: "Revenue this month",
      occupancy: "Occupancy",
      upcoming: "Upcoming stays",
      cleaning: "Cleaning status",
      maintenance: "Maintenance",
      payout: "Next payout",
      guest: "Guest",
      status: "Status",
    },
  },
  operations: {
    eyebrow: "Operations",
    heading: "The system behind every stay.",
    intro:
      "A local network of cleaners, stylists and maintenance coordinators — moving in sequence around every guest, every time.",
    bannerHeadline: "Every stay, prepared by hand.",
    sequenceLabels: {
      styling: "Styling",
      cleaning: "Cleaning",
      guestArrival: "Guest arrival",
      detail: "Detail",
    },
    steps: [
      { title: "Booking confirmed", detail: "Reservation synced across every channel instantly." },
      { title: "Guest prepared", detail: "Check-in details, house guide and welcome message sent." },
      { title: "Cleaner scheduled", detail: "Professional turnover booked and confirmed automatically." },
      { title: "Property inspected", detail: "Styling, condition and amenities checked before arrival." },
      { title: "Guest arrives", detail: "Smooth check-in, and a team on call for anything needed." },
      { title: "Review collected", detail: "Guest experience closed out, feedback gathered." },
      { title: "Performance feeds pricing", detail: "Every stay's data sharpens the next pricing decision." },
    ],
  },
  compare: {
    eyebrow: "Short-term vs. long-term",
    heading: "Not sure which strategy fits your property?",
    intro:
      "Both paths can work well on the Costa del Sol. The right one depends on your property, your goals and how hands-on you want to be.",
    shortTerm: {
      title: "Short-term / holiday rental",
      tagline: "Higher potential income, more active management",
      points: [
        "Higher revenue potential in peak season",
        "Requires active, continuous management",
        "Income varies with seasonality",
        "More flexibility to use the property yourself",
      ],
    },
    longTerm: {
      title: "Long-term rental",
      tagline: "Predictable income, lower operational intensity",
      points: [
        "Stable, predictable monthly income",
        "Lower day-to-day operational intensity",
        "Longer, more stable tenancy",
        "Less flexibility to use the property yourself",
      ],
    },
    cta: "Find the right strategy for your property",
  },
  areas: {
    eyebrow: "Where we operate",
    heading: "Costa del Sol, from Marbella to Benalmádena.",
    intro:
      "Local presence across the coast means faster response times, better local knowledge, and pricing that reflects each micro-market.",
    areas: [
      {
        name: "Marbella",
        description: "Premium villas and beachfront apartments in Spain's most established luxury market.",
      },
      {
        name: "Mijas",
        description: "Coastal Mijas Costa and the hillside pueblo — strong year-round appeal.",
      },
      {
        name: "Fuengirola",
        description: "High-volume beachfront tourism with consistent short-term demand.",
      },
      {
        name: "Benalmádena",
        description: "A balanced mix of family holiday lets and long-term coastal living.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    heading: "Built on a simple idea.",
    paragraphs: [
      "Founded in 2023, Nordic BnB is built around a simple idea: property management should not be passive. A listing that goes live and is left alone will underperform — quietly, for years, without anyone noticing.",
      "Every property we manage is meant to be reviewed, tested and improved continuously — pricing, presentation, positioning — rather than set once and forgotten.",
      "Behind Nordic BnB is a local operational network: cleaning, styling, maintenance and on-the-ground coordination across the Costa del Sol, working alongside founders who believe owners deserve full visibility into how their property performs.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Founder, Nordic BnB",
    founderQuote:
      "We don't just run a listing — we build a property that actually converts. We know the Costa del Sol market, and we know the guests, especially the Scandinavians who book here.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Co-Founder, Nordic BnB",
    founder2Quote:
      "Every owner deserves to see exactly how their property is performing — no guesswork, no black box.",
  },
  testimonials: {
    eyebrow: "Owner testimonials",
    heading: "What people say.",
    items: [
      {
        quote:
          "Struggled to fill the apartment in winter. Nordic BnB took over in March, and by August we were fully booked through October. Now I get one report a month instead of chasing answers myself.",
        name: "Kristian H.",
        location: "Marbella",
      },
      {
        quote:
          "Live in Stockholm, haven't seen the apartment in over a year. Nordic BnB handles everything, and revenue is up.",
        name: "Annika L.",
        location: "Fuengirola",
      },
      {
        quote:
          "Ran it myself for three years. Now I don't have to worry — no complaints, and my phone doesn't ring at midnight anymore.",
        name: "Carlos M.",
        location: "Benalmádena",
      },
    ],
  },
  finalCta: {
    eyebrow: "Let's talk",
    heading: "Let's see what your property could do.",
    subline:
      "Your property deserves more than basic management. Request a free property review and we'll show you exactly where it's underperforming — and what continuous improvement would look like.",
    ctaPrimary: "Request a property review",
    ctaSecondary: "WhatsApp us",
    form: {
      fields: {
        name: "Name",
        email: "Email",
        phone: "Phone / WhatsApp",
        location: "Property location",
        propertyType: "Property type",
        bedrooms: "Bedrooms",
        currentlyRented: "Currently rented?",
        yes: "Yes",
        no: "No",
        strategy: "Short-term, long-term, or unsure?",
        strategyOptions: { short: "Short-term", long: "Long-term", unsure: "Unsure" },
        message: "Message",
      },
      submit: "Get your free property review",
      successTitle: "Received.",
      successBody: "Thank you — we'll be in touch shortly. For anything urgent, message us on WhatsApp.",
      errorMessage: "Something went wrong — please try WhatsApp instead.",
    },
  },
  footer: {
    tagline: "Your property. Continuously improved.",
    linksHeading: "Site",
    contactHeading: "Contact",
    languageHeading: "Language",
    rights: "Nordic BnB. All rights reserved.",
    orgNumberLabel: "Company reg. no. 931 905 856",
    realPhotosNote: "Before/after photos on this site are real results, not illustration, unless otherwise labeled.",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Every property tells a story worth telling well.",
  },
  showcase2: {
    eyebrow: "Presentation",
    heading: "Styled, photographed and positioned to perform.",
  },
  contactPage: {
    eyebrow: "Team",
    heading: "The team behind Nordic BnB.",
    intro:
      "A small, hands-on team — not a call center. Reach out directly, or read who's behind the work on your property.",
    teamHeading: "The team on the ground",
    teamIntro:
      "Alongside Petter and Melanie, a local operational team keeps every property running day to day.",
    roles: [
      { title: "Handyman", description: "Maintenance, repairs and upkeep between stays." },
      { title: "Cleaning team", description: "Professional turnover and linen service after every guest." },
      { title: "Photographer & stylist", description: "Styling and photography for every new listing." },
    ],
    emailHeading: "Email us directly",
    ctaHeading: "Let's talk about your property.",
    ctaSubline:
      "Have a question, or want to see what Nordic BnB could do for your property? Send us an email — we reply personally, usually within a day.",
    ctaButton: "Email us",
  },
};
