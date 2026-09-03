import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Nordic BnB — Property Management, Costa del Sol",
    description:
      "Premium short-term and long-term rental management across Marbella, Mijas, Fuengirola and Benalmádena. Your property, continuously improved.",
  },
  nav: {
    links: [
      { label: "System", href: "#system" },
      { label: "Services", href: "#services" },
      { label: "Areas", href: "#areas" },
      { label: "About", href: "#about" },
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
  problem: {
    eyebrow: "The problem",
    heading: "A beautiful property. A fragmented operation.",
    subline:
      "We take over listing, pricing, guest communication, cleaning and maintenance — one complete operating system for your rental.",
    intro:
      "Most owners on the Costa del Sol aren't short on a great property — they're short on a system. The photos are dated. The price hasn't moved in months. Messages pile up across three apps. Cleaning gets arranged by group chat. And nobody is looking at the whole picture.",
    frictions: [
      { label: "Listing", detail: "Photography and copy that undersell the property" },
      { label: "Pricing", detail: "One flat rate, all year, regardless of demand" },
      { label: "Channels", detail: "Airbnb, Booking.com and enquiries managed separately" },
      { label: "Guests", detail: "Messages answered late, or not at all" },
      { label: "Cleaning", detail: "Coordinated ad-hoc, with no quality checkpoint" },
      { label: "Maintenance", detail: "Issues discovered by the next guest, not before" },
    ],
    pivot: "Nordic BnB takes control of the complete operation.",
    imageAlt: "A typical, undersold listing photo",
    imageBadge: "Before Nordic BnB",
  },
  system: {
    eyebrow: "The Nordic BnB system",
    heading: "One operating system for the entire rental.",
    intro:
      "Six disciplines, working continuously and in concert — not a one-time listing setup. Scroll to move through the system.",
    pillars: [
      {
        code: "01",
        title: "Position",
        description:
          "Photography, styling and listing copy rebuilt to show the property at its best — on every channel it appears.",
      },
      {
        code: "02",
        title: "Price",
        description:
          "Dynamic, demand-led pricing that moves with the season, the calendar and the competitive set — not a single flat rate.",
      },
      {
        code: "03",
        title: "Distribute",
        description:
          "Airbnb, Booking.com and the channels that matter for your property, synchronised and optimised for each audience.",
      },
      {
        code: "04",
        title: "Host",
        description:
          "Fast, warm guest communication from enquiry to check-out, and a check-in experience that earns five-star reviews.",
      },
      {
        code: "05",
        title: "Care",
        description:
          "Professional cleaning, styling touch-ups and maintenance coordination between every single stay.",
      },
      {
        code: "06",
        title: "Improve",
        description:
          "Performance reviewed continuously, and every decision — price, photos, copy — refined against what the data shows.",
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
    disclaimer: "Illustrative example figures — not verified Nordic BnB results.",
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
  performance: {
    eyebrow: "Performance",
    heading: "What continuous improvement looks like.",
    intro:
      "An illustrative optimisation scenario for a two-bedroom Costa del Sol property, showing the kind of movement a full system can produce over a season.",
    disclaimer:
      "Illustrative example only — not a verified Nordic BnB result. Figures are a demonstration scenario until real client data can be published here.",
    metrics: [
      { value: "+18%", label: "Average nightly rate" },
      { value: "+24%", label: "Revenue potential" },
      { value: "+13%", label: "Occupancy" },
      { value: "4.9", label: "Guest rating" },
    ],
    chartLabel: "Illustrative revenue curve, month by month",
    channelLabel: "Illustrative channel distribution",
    directOtherLabel: "Direct & other",
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
      "Nordic BnB is being built around a simple idea: property management should not be passive. A listing that goes live and is left alone will underperform — quietly, for years, without anyone noticing.",
      "Every property we manage is meant to be reviewed, tested and improved continuously — pricing, presentation, positioning — rather than set once and forgotten.",
      "Behind Nordic BnB is a local operational network: cleaning, styling, maintenance and on-the-ground coordination across the Costa del Sol, working alongside founders who believe owners deserve full visibility into how their property performs.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Founder, Nordic BnB",
    founderQuote:
      "Owners shouldn't have to choose between a beautiful property and a well-run one. Our job is to make sure they never have to.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Co-Founder, Nordic BnB",
    founder2Quote:
      "Every owner deserves to see exactly how their property is performing — no guesswork, no black box.",
  },
  testimonials: {
    eyebrow: "Owner testimonials",
    heading: "What owners will say.",
    placeholderNotice:
      "Sample testimonial — replace with verified client review. Shown here to demonstrate layout only.",
    items: [
      {
        quote:
          "I live in Norway and own an apartment in Marbella — Nordic BnB means I can actually sleep at night. Revenue is up, and I'm not the one answering guest messages at 2am anymore.",
        name: "Kristian H.",
        location: "Marbella",
      },
      {
        quote:
          "As a Swedish owner living abroad, I needed someone I could fully trust. Nordic BnB communicates clearly, the property looks better than it ever has, and the numbers speak for themselves.",
        name: "Annika L.",
        location: "Fuengirola",
      },
      {
        quote:
          "I managed the apartment myself for years. With Nordic BnB everything feels more professional — better photos, better pricing, and far fewer headaches.",
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
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Every property tells a story worth telling well.",
  },
  showcase2: {
    eyebrow: "Presentation",
    heading: "Styled, photographed and positioned to perform.",
  },
};
