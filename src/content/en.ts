import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Eiendomly – AI-enhanced property photos, virtual staging and sale boost",
    description:
      "We enhance your photos with AI, furnish empty rooms digitally and show how simple upgrades can lift your property – delivered in 24–48 hours.",
  },
  nav: {
    links: [
      { label: "How it works", href: "/en#system" },
      { label: "Services", href: "/en#services" },
      { label: "Who we help", href: "/en#areas" },
      { label: "About", href: "/en#about" },
      { label: "FAQ", href: "/en#faq" },
    ],
    cta: "Order a photo boost",
    toggleMenu: "Open menu",
    selectLanguage: "Choose language",
  },
  hero: {
    eyebrow: "Property photos · Virtual staging · Sale boost",
    headlineLines: ["Your first photo decides", "whether they click."],
    subline:
      "We get your photos ready for FINN and Airbnb – brighter, sharper and more inviting. No photographer needed, delivered in 24 hours.",
    ctaPrimary: "Order a photo boost",
    ctaSecondary: "See services",
    scrollHint: "Scroll",
    locationTag: "Norway",
  },
  problem: {
    eyebrow: "The problem",
    heading: "You only have a few seconds.",
    intro:
      "People scroll past listings with dark or messy photos – no matter how good the home is. The first photo and the title decide whether anyone clicks.",
    note: "Every month your property sits empty costs you a full month's rent. If a 15,000 NOK/month rental stays empty one extra month, you've lost 15,000 NOK.",
  },
  showcase1: {
    eyebrow: "Photo Boost",
    heading: "Brighter, sharper and more inviting – no photographer needed.",
  },
  showcase2: {
    eyebrow: "Virtual Staging",
    heading: "Show what an empty room could become.",
  },
  howItWorks: {
    eyebrow: "How it works",
    heading: "Three simple steps.",
    intro:
      "Everything happens in writing: you send the photos, we enhance them, and you get them back via a link. No meetings, no photographer.",
    steps: [
      { title: "Send your photos", description: "Send us your photos or a link to your listing." },
      { title: "We enhance them", description: "We enhance them and deliver within 24–48 hours." },
      { title: "More clicks", description: "You upload the new photos and get more clicks." },
    ],
    channels: ["FINN", "Airbnb", "Booking.com"],
  },
  cases: {
    eyebrow: "Examples",
    heading: "See the difference yourself.",
    improvedLabel: "Enhanced with AI",
    beforeLabel: "Before",
    captions: {
      stue: "A brighter, sharper living room, straightened horizon, loose clutter removed.",
      kjokken: "Warmer light and cleaner colours in the kitchen.",
      soverom: "A more inviting bedroom with better light and sharpness.",
    },
  },
  services: {
    eyebrow: "Services",
    heading: "Find the right boost for your property.",
    intro:
      "Three services – from quick photo enhancement to a complete plan for selling. Fixed prices, invoiced after delivery.",
    items: [
      {
        key: "photoBoost",
        title: "Photo Boost",
        price: "NOK 790",
        priceNote: "up to 20 photos",
        description:
          "Send us the photos you have. We enhance them with AI: light, colour, sharpness, straight lines and removal of loose clutter. You also get a stronger cover photo and title suggestions.",
        features: [
          "Up to 20 enhanced photos",
          "A selected and optimised cover photo",
          "3 listing title suggestions",
          "Delivered within 24 hours",
        ],
        note: "For Airbnb we only do natural enhancement, as Airbnb's rules require.",
      },
      {
        key: "virtualStaging",
        title: "Virtual Staging",
        price: "NOK 1,190",
        priceNote: "per room · 3 rooms for NOK 2,990",
        description:
          "We furnish empty rooms digitally, or replace loose furniture that isn't included in the sale, like a worn sofa. Fixed features such as walls, floors, kitchens and windows are never changed.",
        features: [
          "Staged photos in 2 style options",
          "Labelled \"Virtual staging – illustration. Furniture not included.\"",
          "Original photo alongside",
          "Delivered within 48 hours",
        ],
        note: "Not for Airbnb, where guests must see the furniture they actually get.",
      },
      {
        key: "saleBoost",
        title: "Sale Boost",
        price: "NOK 4,900",
        priceNote: "Mini · Large: NOK 9,900",
        description:
          "We create before/after images of simple upgrades, like painting cabinets and walls, refreshing the worktop with film or oiling the floor – plus a report with the work, costs and order.",
        features: [
          "Before/after images",
          "Sale Boost report (PDF) with the work, costs and what requires a professional",
          "Labelled \"Illustration – not carried out\"",
          "Delivered within 48 hours",
        ],
        note: "How much the value may increase is assessed by your estate agent or valuer.",
      },
    ],
    termsNote: "All prices include VAT. Estate agents are invoiced excl. VAT.",
    ctaLabel: "Read more",
  },
  audiences: {
    eyebrow: "Who we help",
    heading: "From cabins to hotels.",
    intro:
      "Photos are the first thing people see – whether they're renting, buying, booking or dining. We make that first impression count.",
    items: [
      {
        name: "Airbnb hosts",
        description:
          "Natural, honest enhancement that follows Airbnb's rules – more clicks without promising anything the home doesn't have.",
      },
      {
        name: "Landlords",
        description:
          "Photos that stand out on FINN, so your listing doesn't get scrolled past. We use the photos you have, including phone photos.",
      },
      {
        name: "Selling privately",
        description:
          "Selling without an agent? We get your own photos ready for the listing – no photographer needed.",
      },
      {
        name: "Estate agents",
        description:
          "Virtual staging of empty rooms and Sale Boost for homes that need work. Estate agents are invoiced excl. VAT.",
      },
      {
        name: "Hotels",
        description: "Brighter, sharper room photos for your own website and booking sites.",
      },
      {
        name: "Restaurants",
        description: "Inviting photos of your venue for your website, Google and social media.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    heading: "Honest photos. More clicks.",
    paragraphs: [
      "I'm Melanie Solberg, and I started Eiendomly because too many great homes get scrolled past because of dark, cluttered photos.",
      "I have a background in sales, management and digital marketing, and I also run SynligAI, which helps businesses become visible in AI search.",
      "At Eiendomly I use AI to get your property ready for clicks.",
    ],
    founderName: "Melanie Solberg",
    founderRole: "Founder",
    founderQuote: "I check every single photo myself, so the result is honest and looks natural.",
    photoAlt: "Melanie Solberg, founder of Eiendomly",
    replyNote: "I reply to emails within 24 hours on weekdays.",
  },
  honesty: {
    eyebrow: "Honesty",
    heading: "We enhance – we don't mislead.",
    intro:
      "Good photos should make people click – not disappoint them at the viewing. That's why there are clear limits on what we change.",
    does: {
      title: "What we do",
      tagline: "Natural enhancement",
      points: [
        "Adjust light, colour and sharpness",
        "Straighten crooked lines",
        "Remove loose clutter",
        "Label digitally furnished photos, with the original alongside",
      ],
    },
    never: {
      title: "What we never do",
      tagline: "No misleading",
      points: [
        "Change walls, floors or windows",
        "Change the view",
        "Hide damage",
        "Add furniture that isn't there, or text, to Airbnb photos",
      ],
    },
    cta: "Order a photo boost",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions.",
    items: [
      { q: "Is this allowed?", a: "Yes, as long as the photos don't mislead. We improve light and quality, label virtual staging and never change fixed features or damage." },
      { q: "Can I use the photos on Airbnb?", a: "Yes, Photo Boost is made for that. We keep it natural and never add text to the photos." },
      { q: "Who owns the photos?", a: "You confirm you have the rights to the photos you send. You get full rights to use the result." },
      { q: "How fast do I get them?", a: "Photo Boost within 24 hours, staging and Sale Boost within 48 hours." },
      { q: "What if I'm not happy?", a: "You get one free revision, or your money back." },
      { q: "Do I need new photos?", a: "No. We use the photos you have, including phone photos." },
      { q: "Does Sale Boost increase the value?", a: "Many simple upgrades make a home more attractive. How much the value may increase should be assessed by an agent or valuer. We don't promise a specific amount." },
      { q: "How do I pay?", a: "You receive an invoice by email after delivery." },
    ],
  },
  finalCta: {
    eyebrow: "Order",
    heading: "Ready for more clicks?",
    subline:
      "Send us your photos today. Fill in the form and you'll get a reply by email within 24 hours.",
    ctaPrimary: "Order now",
    form: {
      fields: {
        name: "Name",
        email: "Email",
        customerType: "I am a",
        service: "Service",
        photosLink: "Link to your photos (Google Drive, Dropbox, WeTransfer) or your listing",
        message: "Comment (optional)",
        rights: "I confirm I have the right to use these photos.",
        marketing:
          "Optional – 10% off: Eiendomly may use the before/after photos, without address or personal details, in its own marketing.",
      },
      selectPlaceholder: "Choose …",
      customerTypes: ["Private landlord", "Airbnb host", "Selling privately", "Estate agent", "Hotel", "Restaurant"],
      serviceOptions: [
        { key: "photoBoost", label: "Photo Boost" },
        { key: "virtualStaging", label: "Virtual Staging" },
        { key: "saleBoost", label: "Sale Boost" },
        { key: "unsure", label: "Not sure" },
      ],
      submit: "Send order",
      errorMessage: "Something went wrong. Please try again, or email us at",
    },
  },
  servicePages: {
    photoBoost: {
      eyebrow: "Photo Boost",
      heading: "Make your own photos ready for FINN and Airbnb",
      forWho:
        "Suitable for private landlords, Airbnb hosts and people selling privately, who have taken the photos themselves.",
      whatItIs:
        "Send us the photos you have. We enhance them with AI: light, colour, sharpness, straight lines and removal of loose clutter. You also get a stronger cover photo and title suggestions.",
      includesHeading: "You get",
      includes: [
        "Up to 20 enhanced photos",
        "A selected and optimised cover photo",
        "3 listing title suggestions",
        "Delivered within 24 hours",
      ],
      priceHeading: "Price",
      price: "NOK 790",
      note: "For Airbnb we only do natural enhancement, as Airbnb's rules require.",
      cta: "Order a photo boost",
    },
    virtualStaging: {
      eyebrow: "Virtual Staging",
      heading: "Furnish empty rooms – or replace what holds them back",
      forWho:
        "Suitable for empty properties for sale or long-term rental, and properties with furniture that isn't included in the sale, like a worn sofa.",
      whatItIs:
        "We furnish empty rooms digitally, or replace loose furniture that isn't included in the sale, like a worn sofa. Fixed features such as walls, floors, kitchens and windows are never changed.",
      includesHeading: "You get",
      includes: [
        "Staged photos in 2 style options",
        "Labelled \"Virtual staging – illustration. Furniture not included.\"",
        "Original photo alongside",
        "Delivered within 48 hours",
      ],
      priceHeading: "Price",
      price: "NOK 1,190 per room",
      priceNote: "3 rooms for NOK 2,990",
      note: "Not for Airbnb, where guests must see the furniture they actually get.",
      cta: "Order virtual staging",
    },
    saleBoost: {
      eyebrow: "Sale Boost",
      heading: "Show buyers what the home could become – and what it costs",
      forWho:
        "Suitable for properties needing renovation that are being sold, or that have been on the market a long time. For sellers and estate agents.",
      whatItIs:
        "We create before/after images of simple upgrades, like painting cabinets and walls, refreshing the worktop with film or oiling the floor. You get a report with the work, costs and the order to do it in. Do the work and your listing gets real new photos. Don't, and buyers still see the potential.",
      includesHeading: "You get",
      includes: [
        "Before/after images",
        "Sale Boost report (PDF) with the work, costs and what requires a professional",
        "Labelled \"Illustration – not carried out\"",
        "Delivered within 48 hours",
      ],
      priceHeading: "Price",
      tiers: [
        { name: "Mini", price: "NOK 4,900", detail: "Upgrades under NOK 20,000, 5 before/after" },
        {
          name: "Large",
          price: "NOK 9,900",
          detail: "Upgrades NOK 20,000–100,000, 10 before/after and a prioritised list",
        },
      ],
      note: "How much the value may increase is assessed by your estate agent or valuer. We show what it costs and how it could look.",
      cta: "Order Sale Boost",
    },
  },
  orderPage: {
    eyebrow: "Order",
    heading: "Order a photo boost",
    intro: "Fill in the form below and you'll get a reply by email within 24 hours.",
  },
  thanks: {
    eyebrow: "Received",
    heading: "Thank you!",
    intro: "You'll get a reply by email within 24 hours.",
    back: "Back to the homepage",
  },
  notFound: {
    eyebrow: "404",
    heading: "Page not found.",
    intro: "The page you're looking for doesn't exist, or has moved.",
    back: "Back to the homepage",
  },
  legal: {
    privacy: {
      eyebrow: "Privacy",
      heading: "Privacy",
      updated: "Last updated: November 2026",
      intro:
        "This page explains what Eiendomly collects when you use the order form, why, and what rights you have.",
      sections: [
        {
          heading: "What we collect",
          body: "When you fill in the order form, we store your name, email, customer type, requested service, a link to your photos, any comment, and whether you consent to marketing use of the before/after photos.",
        },
        {
          heading: "Why we collect it",
          body: "The information is used to deliver the service you order, respond to your enquiry and send an invoice. Marketing consent is only used if you've ticked that box.",
        },
        {
          heading: "How long we keep it",
          body: "We keep order information for as long as necessary for delivery and bookkeeping, normally up to 5 years in line with Norwegian accounting law.",
        },
        {
          heading: "Sub-processors",
          body: "The form is run on Netlify (Netlify Forms), which receives and stores submissions. We also use email and may use analytics tools to understand how the site is used.",
        },
        {
          heading: "Your rights",
          body: "You can request access to, correction of, or deletion of your data by contacting us by email.",
        },
      ],
    },
    terms: {
      eyebrow: "Terms",
      heading: "Terms",
      updated: "Last updated: November 2026",
      intro: "These terms apply when you order a service from Eiendomly.",
      sections: [
        {
          heading: "Photo rights",
          body: "By ordering, you confirm you have the right to use the photos you submit, and that we may edit them for you.",
        },
        {
          heading: "Right to use the result",
          body: "You get full rights to use the enhanced photos and any reports we deliver.",
        },
        {
          heading: "Labelling",
          body: "Digitally furnished photos and Sale Boost illustrations are always clearly labelled, so there's no doubt about what's real and what's an illustration.",
        },
        {
          heading: "Your responsibility",
          body: "You are responsible for how and where the photos are published, and for ensuring publication follows applicable rules, such as Airbnb's guidelines.",
        },
        { heading: "Payment", body: "You receive an invoice by email after delivery, due within 14 days." },
        { heading: "If you're not happy", body: "You get one free revision, or your money back." },
        { heading: "Governing law", body: "Norwegian law applies to these terms." },
      ],
    },
    cookies: {
      eyebrow: "Cookies",
      heading: "Cookies",
      updated: "Last updated: November 2026",
      intro: "We only use cookies after consent, and you can change your choice at any time.",
      sections: [
        {
          heading: "Necessary",
          body: "A few technical cookies are necessary for the site to function, and don't require consent.",
        },
        {
          heading: "Analytics and marketing",
          body: "Analytics and marketing tools (such as GA4 and Meta Pixel) are only loaded if you've accepted this in the consent banner.",
        },
        {
          heading: "Change consent",
          body: "You can change your consent at any time via the \"Change consent\" link in the footer.",
        },
      ],
    },
  },
  consent: {
    message: "We use cookies for analytics and marketing. You choose what you accept.",
    acceptAll: "Accept all",
    rejectAll: "Reject all",
    settings: "Settings",
    save: "Save choices",
    analytics: "Analytics",
    marketing: "Marketing",
    changeConsent: "Change consent",
  },
  footer: {
    tagline: "Your first photo decides. We make it count.",
    linksHeading: "Site",
    legalHeading: "Legal",
    contactHeading: "Contact",
    languageHeading: "Language",
    rights: "Eiendomly. All rights reserved.",
    legalName: "Eiendomly Solberg",
    replyNote: "Reply within 24 hours on weekdays.",
  },
};
