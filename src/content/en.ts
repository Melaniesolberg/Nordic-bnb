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
      "Full-service short-term and long-term rental management across Marbella, Mijas, Fuengirola, Benalmádena, Torremolinos and Málaga — positioning, pricing and presentation, refined without pause.",
    ctaPrimary: "Request a property review",
    ctaSecondary: "Talk to us on WhatsApp",
    scrollHint: "Scroll",
    locationTag: "Costa del Sol, Spain",
  },
  system: {
    eyebrow: "What to expect",
    heading: "What can you expect from us?",
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
        title: "We clean and maintain between every stay",
        description: "Professional cleaning, linen and upkeep, so the property is always guest-ready.",
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
      "Which listing would you choose?",
    disclaimer: "Illustrated example, for demonstration purposes.",
  },
  portfolio: {
    eyebrow: "Portfolio",
    heading: "Real transformations, across every property type.",
    intro:
      "A look at how Nordic BnB repositions listings — apartments, villas and houses alike — across the Costa del Sol.",
    realResultsLabel: "Real results",
    disclaimer: "Real before/after photography and real growth figures from our own properties.",
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
    heading: "Costa del Sol, from Málaga to Marbella.",
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
      {
        name: "Torremolinos",
        description: "A classic beach destination with steady, year-round tourist demand.",
      },
      {
        name: "Málaga",
        description: "A cultural capital with a growing city-break and long-stay rental market.",
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
    founderRole: "Founder & Head of Growth",
    founderQuote:
      "We don't just run a listing — we build and shape a property that actually converts. We know the Costa del Sol market, and we know the guests, especially the Scandinavians who book here.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Head of Operations & Marketing",
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
      {
        quote: "Handles it better than I did myself, and I used to manage three properties.",
        name: "Erik B.",
        location: "Mijas",
      },
      {
        quote:
          "I was skeptical about handing over the whole thing, but the reporting is more detailed than what I get from my accountant. I can see occupancy, cleaning, everything.",
        name: "Sofia T.",
        location: "Marbella",
      },
      {
        quote:
          "We inherited my parents' apartment and had no idea what to do with it. Nordic BnB photographed it, relisted it, and within six weeks we had our first bookings. A year later it's outperforming similar units nearby, and I've never had to deal with a guest directly.",
        name: "Henrik J.",
        location: "Fuengirola",
      },
      {
        quote: "Quick to respond, and the cleaning is genuinely spotless every time.",
        name: "Maja P.",
        location: "Benalmádena",
      },
      {
        quote:
          "Switched from another agency that barely communicated. Nordic BnB actually calls when something needs a decision, instead of just handling it silently and hoping I don't notice.",
        name: "Thomas R.",
        location: "Marbella",
      },
      {
        quote:
          "I was renting long-term before. The tenant left the place in bad shape and I lost two months of income sorting it out. Now it's short-term through Nordic BnB, and even with the extra cleaning between guests, I'm making more than I did with a single tenant.",
        name: "Ingrid S.",
        location: "Mijas",
      },
      {
        quote: "Booked out most weekends before I'd even finished the handover paperwork.",
        name: "Daniel K.",
        location: "Torremolinos",
      },
      {
        quote:
          "My villa sat empty half the year under the old listing. Now it's rarely free more than a few days at a time, and the photos actually look like my house.",
        name: "Camilla W.",
        location: "Fuengirola",
      },
      {
        quote:
          "What sold me was the pricing. I used to set one rate and forget about it. They adjust daily based on demand, and I can see exactly why in the monthly report. Revenue is up almost a third since switching.",
        name: "Anders G.",
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
    privacyLabel: "Privacy",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Every property tells a story worth telling well — we make sure it's heard.",
  },
  showcase2: {
    eyebrow: "Presentation",
    heading: "Styled, photographed and positioned to perform.",
  },
  contactPage: {
    eyebrow: "Team",
    heading: "The team behind Nordic BnB.",
    intro:
      "We follow up on your property every single day — with our own steady team. Feel free to reach out directly.",
    teamName: "Our operations team",
    teamHeading: "The team on the ground",
    teamIntro:
      "Handyman work, cleaning and styling — all handled by people we know and trust, not random subcontractors.",
    roles: [
      { title: "Handyman", description: "Maintenance, repairs and upkeep between stays." },
      { title: "Cleaning team", description: "Professional turnover and linen service after every guest." },
      { title: "Photographer & stylist", description: "Styling and photography for every new listing." },
    ],
    photoDesignLabel: "Photo/Design",
    emailHeading: "Email us directly",
    ctaHeading: "Let's talk about your property.",
    ctaSubline:
      "Have a question, or want to see what Nordic BnB could do for your property? Send us an email — we reply personally, usually within a day.",
    ctaButton: "Email us",
    recruitEyebrow: "Join the team",
    recruitHeading: "Want to work with us?",
    recruitSubline:
      "We're always open to good people. If you're a cleaner, handyman or photographer on the Costa del Sol, we'd like to hear from you.",
    story: {
      eyebrow: "Our story",
      heading: "From marketing to hospitality.",
      milestones: [
        {
          period: "August 2023",
          title: "Where it started",
          body: "Nordic BnB began in Norway with digital marketing, helping businesses and property investors present themselves — and their properties — better online. It taught us one thing early: presentation changes perception, and perception changes value.",
        },
        {
          period: "2024",
          title: "Closer to real estate",
          body: "By then we'd already spent years around rental property ourselves — buying, renovating and letting out homes in Norway, short-term and long-term alike. Our work turned increasingly toward property, content, photography, positioning and the way homes were presented online. We kept seeing the same problem: great properties marketed far below their potential.",
        },
        {
          period: "2025",
          title: "From Norway to Spain 🇪🇸",
          body: "We moved from Norway to Spain and experienced the Costa del Sol rental market from the inside — as residents and as property owners and operators. What started as marketing knowledge, paired with years of renting out our own properties back home, became something bigger: understanding what international guests expect, what owners struggle with, and what makes one property outperform another.",
        },
        {
          period: "Late 2025",
          title: "The idea evolved",
          body: "We began combining everything we already knew — marketing, presentation, interiors, guest experience and hands-on rental management — into one complete service for holiday-rental owners, built on what we'd learned helping investors create value from their properties in both Norway and Spain.",
        },
        {
          period: "2026",
          title: "Nordic BnB today",
          body: "Nordic BnB became a full-service holiday rental and property management company on the Costa del Sol. From preparing and upgrading the property to styling, photography, listings, pricing, guest communication, cleaning, maintenance and full management. One company. One point of contact. Everything handled.",
        },
        {
          period: "2026 →",
          title: "The next chapter",
          body: "Our goal is simple: build a new standard for holiday rental management on the Costa del Sol — combining Scandinavian service, strong presentation and local execution. We upgrade. We style. We manage.",
        },
      ],
    },
  },
  privacyPage: {
    eyebrow: "Privacy",
    heading: "Privacy policy.",
    updated: "Last updated: September 2026",
    intro:
      "This page explains, in plain terms, what information Nordic BnB collects when you contact us and how we use it.",
    sections: [
      {
        heading: "What we collect",
        body: "When you reach out through our contact form, email or WhatsApp, we collect the details you provide — typically your name, email address, phone number and any information about your property or enquiry.",
      },
      {
        heading: "How we use it",
        body: "We use this information only to respond to your enquiry, provide a property review or quote, and, if you become a client, to manage your property and communicate with you about it. We do not sell your information to third parties.",
      },
      {
        heading: "How long we keep it",
        body: "We keep enquiry information for as long as needed to respond to you or, if you become a client, for the duration of our working relationship and as required by law afterwards.",
      },
      {
        heading: "Your rights",
        body: "You can ask us at any time what information we hold about you, ask us to correct it, or request that we delete it. Just email us and we'll take care of it.",
      },
    ],
    contactHeading: "Questions about your data?",
    contactBody: "For any privacy-related request, email us directly and we'll get back to you personally.",
  },
};
