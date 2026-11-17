import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Eiendomly – Photo boost, virtual staging and sale boost for your property",
    description:
      "We use AI tools to give your property photos a lift, furnish empty rooms digitally and show what your home could become – for short-term rentals, long-term rentals and sales.",
  },
  nav: {
    links: [
      { label: "How it works", href: "/en#system" },
      { label: "Services", href: "/en#services" },
      { label: "Plans", href: "/en#avtaler" },
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
    subline: "We get your photos ready for FINN, Airbnb and Booking.com – no photographer needed.",
    ctaPrimary: "Order a photo boost",
    ctaSecondary: "See services",
    beats: [
      {
        eyebrow: "Photo Boost",
        heading: "Brighter. Sharper. More inviting.",
        body: "We use AI tools to give your photos a lift – light, colour and straight lines, no photographer needed.",
      },
      {
        eyebrow: "Ready for your listing",
        heading: "From phone photo to first choice.",
        body: "For short-term rentals, long-term rentals and sales – delivered via link within 24 hours.",
      },
    ],
    locationTag: "Norway",
  },
  problem: {
    eyebrow: "First impression",
    heading: "That's all the time your listing gets.",
    intro:
      "Home buyers on the UK's Rightmove spent 2.7 seconds on average before deciding to look closer at a property – or scroll on.",
    seconds: 2.7,
    unit: "sec",
    stat: {
      value: "58%",
      text: "chose photos of the home when asked for the three most important elements of a property listing. Photos topped the list.",
      source: "FINN property survey 2025",
    },
  },
  photoBoost: {
    eyebrow: "Photo Boost",
    heading: "Messy, dark and shot on a phone?",
    body: "Whether you're renting short-term or long-term – or selling – you don't always have the time or money for a photographer. We use AI tools to make your photos brighter and sharper, straighten the lines and remove loose clutter.",
    hint: "Drag to see the difference",
    beforeLabel: "Before",
    afterLabel: "After photo boost",
  },
  showcase2: {
    eyebrow: "Virtual Staging",
    heading: "Show what an empty room could become.",
    body: "An empty room is hard to picture. You choose the style – modern, cosy or somewhere in between – and we furnish the room digitally. Walls, floors and windows are never changed, and the image is labelled as virtual staging.",
    hint: "Drag to see the room before and after",
    beforeLabel: "Before",
    afterLabel: "After virtual staging",
    link: "Read about virtual staging",
  },
  howItWorks: {
    eyebrow: "How it works",
    heading: "Three simple steps.",
    intro:
      "Everything happens in writing: you send the photos, we enhance them, and you get them back via a link. No meetings, no photographer.",
    steps: [
      { title: "Send your photos", description: "Send us your photos or a link to your listing." },
      { title: "We give them a lift", description: "We use AI tools and send the photos back via a link." },
      { title: "More clicks", description: "You upload the new photos and get more clicks." },
    ],
    channels: ["FINN", "Airbnb", "Booking.com"],
  },
  cases: {
    eyebrow: "Examples",
    heading: "See the difference yourself.",
    improvedLabel: "After photo boost",
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
      "Three services – from a quick photo boost to a complete plan for selling. Fixed prices, invoiced after delivery. Several properties a month? A monthly plan gives the best value for money.",
    items: [
      {
        key: "photoBoost",
        title: "Photo Boost",
        price: "NOK 1,890",
        priceNote: "up to 40 photos",
        description:
          "Your first photo decides in 2.7 seconds whether anyone clicks. We use AI tools to make your photos brighter and sharper, straighten lines and remove loose clutter. Suitable for short-term rentals, long-term rentals and sales.",
        features: [
          "Up to 40 photos with a photo boost",
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
        priceNote: "per room",
        description:
          "Physical home staging can easily cost thousands. Now it can be done digitally: tell us the style you like – modern, cosy or somewhere in between – and we'll make the rooms feel properly homely.",
        features: [
          "You choose the style – we do the rest",
          "Empty rooms furnished, or worn furniture replaced",
          "Labelled \"Virtual staging – illustration. Furniture not included.\"",
          "Original photo alongside",
        ],
        note: "Not for Airbnb, where guests must see the furniture they actually get.",
      },
      {
        key: "saleBoost",
        title: "Sale Boost",
        price: "NOK 4,900",
        priceNote: "Mini · Large: NOK 9,900",
        description:
          "Show buyers the potential. With simple changes for NOK 20,000–100,000 – a coat of paint or new kitchen fronts – a home can be lifted considerably, valuation included.",
        features: [
          "Before/after images of the home's potential",
          "Shopping list with the work, costs and order (PDF)",
          "What you can do yourself, and what needs a professional",
          "Labelled \"Illustration – not carried out\"",
        ],
        note: "For estate agents and private sellers. How much the valuation may increase is assessed by an agent or valuer.",
      },
    ],
    termsNote: "All prices include VAT. Estate agents are invoiced excl. VAT.",
    ctaLabel: "Read more",
  },
  plans: {
    eyebrow: "Monthly plans",
    badge: "Best value for money",
    heading: "Several properties a month? A plan gives you the most for your money.",
    intro:
      "For estate agents and rental managers who need good photos every month. One fixed price, one invoice – and up to 47% less than ordering each time.",
    items: [
      {
        key: "brokerPlan",
        title: "Agent Plan",
        audience: "For estate agents and agencies",
        price: "NOK 9,900",
        pricePeriod: "per month",
        value: "NOK 18,690",
        savings: "Save NOK 8,790 a month",
        badge: "Best value for money",
        features: [
          "Photo Boost for up to 8 properties a month – up to 40 photos each",
          "Virtual staging of 3 rooms a month",
          "Extra Photo Boost: NOK 1,490 (normally NOK 1,890)",
          "One combined invoice a month",
        ],
      },
      {
        key: "managerPlan",
        title: "Manager Plan",
        audience: "For Airbnb and rental managers",
        price: "NOK 4,900",
        pricePeriod: "per month",
        value: "NOK 7,560",
        savings: "Save NOK 2,660 a month",
        features: [
          "Photo Boost for up to 4 units a month – up to 40 photos each",
          "Natural enhancement that follows Airbnb's rules",
          "Extra Photo Boost: NOK 1,490 (normally NOK 1,890)",
          "One combined invoice a month",
        ],
      },
    ],
    terms: ["First month free", "3-month commitment, then 1 month's notice", "Invoiced at the start of each month"],
    note: "Value when bought separately is based on standard prices. Unused jobs don't carry over to the next month. Sale Boost is ordered separately.",
    ctaLabel: "Start free month",
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
          "Sale Boost shows buyers the potential of homes that have been on the market a long time, and virtual staging fills empty rooms. Estate agents are invoiced excl. VAT.",
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
      "At Eiendomly I use AI tools to get your property ready for clicks.",
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
      { q: "What is a monthly plan?", a: "For estate agents and rental managers with several properties a month. You pay a fixed price and get a number of photo jobs included every month – up to 47% cheaper than ordering one at a time. The first month is free." },
      { q: "Is this allowed?", a: "Yes, as long as the photos don't mislead. We improve light and quality, label virtual staging and never change fixed features or damage." },
      { q: "Can I use the photos on Airbnb?", a: "Yes, Photo Boost is made for that. We keep it natural and never add text to the photos." },
      { q: "Who owns the photos?", a: "You confirm you have the rights to the photos you send. You get full rights to use the result." },
      { q: "How fast do I get them?", a: "Photo Boost within 24 hours. For virtual staging and Sale Boost, we'll confirm the delivery time once we've seen your photos." },
      { q: "What if I'm not happy?", a: "You get one free revision, or your money back." },
      { q: "Do I need new photos?", a: "No. We use the photos you have, including phone photos." },
      { q: "Does Sale Boost increase the value?", a: "Simple changes like paint and new kitchen fronts can lift a home considerably. How much the valuation may increase is assessed by an agent or valuer – we don't promise a specific amount." },
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
      customerTypes: ["Private landlord", "Airbnb host", "Selling privately", "Estate agent", "Rental manager", "Hotel", "Restaurant"],
      serviceOptions: [
        { key: "photoBoost", label: "Photo Boost" },
        { key: "virtualStaging", label: "Virtual Staging" },
        { key: "saleBoost", label: "Sale Boost" },
        { key: "brokerPlan", label: "Agent Plan – NOK 9,900/month" },
        { key: "managerPlan", label: "Manager Plan – NOK 4,900/month" },
        { key: "unsure", label: "Not sure" },
      ],
      submit: "Send order",
      errorMessage: "Something went wrong. Please try again, or email us at",
      privacyNote: "We protect your privacy. The information you provide is only used to reply to you and deliver the service – we never share it with others.",
      privacyLink: "Read our privacy policy",
    },
  },
  servicePages: {
    photoBoost: {
      eyebrow: "Photo Boost",
      heading: "Make your own photos ready for FINN and Airbnb",
      forWho:
        "Suitable for short-term rentals, long-term rentals and sales – for private landlords, Airbnb hosts and people selling privately.",
      whatItIs:
        "Send us the photos you have, including phone photos. We use AI tools to make them brighter and sharper, straighten lines and remove loose clutter. You also get a stronger cover photo and title suggestions.",
      highlight: "Your first photo decides in 2.7 seconds whether anyone clicks – or scrolls on.",
      facts: [
        {
          value: "2.7 sec",
          label: "is how long home buyers spent on average before deciding to look closer at a property – or scroll on.",
          source: "Rightmove, UK",
        },
        {
          value: "58%",
          label: "chose photos as one of the three most important elements of a property listing. Photos topped the list.",
          source: "FINN property survey 2025",
        },
        {
          value: "NOK 15,000",
          label: "is what you lose if a NOK 15,000/month rental sits empty one extra month.",
        },
      ],
      includesHeading: "You get",
      includes: [
        "Up to 40 photos with a photo boost",
        "A selected and optimised cover photo",
        "3 listing title suggestions",
        "Delivered within 24 hours",
      ],
      priceHeading: "Price",
      price: "NOK 1,890",
      priceNote: "up to 40 photos",
      note: "For Airbnb we only do natural enhancement, as Airbnb's rules require.",
      cta: "Order a photo boost",
    },
    virtualStaging: {
      eyebrow: "Virtual Staging",
      heading: "Furnish empty rooms – or replace what holds them back",
      forWho:
        "Suitable for empty homes being sold or rented out, and homes with furniture that isn't included – like a worn sofa.",
      whatItIs:
        "Physical home staging can easily cost thousands. Now it can be done digitally. Tell us the style you like – modern, cosy or somewhere in between – and we'll furnish the rooms and make them feel properly homely. Fixed features such as walls, floors, kitchens and windows are never changed.",
      highlight: "Save thousands on staging – and give buyers the feeling of a home.",
      includesHeading: "You get",
      includes: [
        "You choose the style – we do the rest",
        "Empty rooms furnished, or worn furniture replaced",
        "Labelled \"Virtual staging – illustration. Furniture not included.\"",
        "Original photo alongside",
      ],
      priceHeading: "Price",
      price: "NOK 1,190",
      priceNote: "per room",
      note: "Not for Airbnb, where guests must see the furniture they actually get.",
      cta: "Order virtual staging",
    },
    saleBoost: {
      eyebrow: "Sale Boost",
      heading: "Show buyers what the home could become – and what it costs",
      forWho:
        "For estate agents and people selling without an agent – especially homes that have been on the market a long time, stand empty or are dated.",
      whatItIs:
        "Buyers need to see the potential. We create before/after images of simple changes – a coat of paint, new kitchen fronts or an oiled floor – and give you a shopping list with the work, costs and order. The changes should be simple and affordable for most people. If the home is empty, or old and you don't know where to start, you get inspiration and a concrete plan.",
      highlight:
        "With changes for NOK 20,000–100,000, a home can be lifted considerably, valuation included. If it has been on the market a long time without selling, this could be what turns it around.",
      includesHeading: "You get",
      includes: [
        "Before/after images of the home's potential",
        "Shopping list with the work, costs and order (PDF)",
        "What you can do yourself, and what needs a professional",
        "Labelled \"Illustration – not carried out\"",
      ],
      priceHeading: "Price",
      tiers: [
        { name: "Mini", price: "NOK 4,900", detail: "Upgrades under NOK 20,000, 5 before/after" },
        { name: "Large", price: "NOK 9,900", detail: "Upgrades NOK 20,000–100,000, 10 before/after and a prioritised list" },
      ],
      note: "How much the valuation may increase is assessed by your estate agent or valuer. We show what it costs and how it could look.",
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
        "We protect your privacy. The information you give us is only used to deliver the service you order – we never sell it or share it with others. Below you can read what we collect, why, and what rights you have.",
      sections: [
        {
          heading: "We don't share your information",
          body: "Your name, email, photos and anything else you send us stay with Eiendomly. We never sell, rent out or share your information with others. The only parties that process it are the technical providers that run our form and email, and they do so solely on our behalf.",
        },
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
          body: "The form is run on Netlify (Netlify Forms), which receives and stores submissions on our behalf. We also use an email service. Analytics tools are only used if you have accepted them in the cookie settings.",
        },
        {
          heading: "Your rights",
          body: "You can request access to, correction of, or deletion of your data at any time by contacting us by email. You can also complain to the Norwegian Data Protection Authority (Datatilsynet).",
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
        {
          heading: "Monthly plans",
          body: "The Agent Plan and Manager Plan start with one free month, followed by a 3-month commitment and 1 month's notice. Plans are invoiced at the start of each month. Jobs not used during the month don't carry over. Extra Photo Boosts beyond the plan cost NOK 1,490.",
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
      intro: "We protect your privacy. We only use analytics and marketing cookies after consent, we don't share your information with others, and you can change your choice at any time.",
      sections: [
        {
          heading: "Necessary",
          body: "A few technical cookies are necessary for the site to function, and don't require consent.",
        },
        {
          heading: "Analytics and marketing",
          body: "Analytics and marketing tools (such as Google Analytics via Google Tag Manager, and Meta Pixel) are only loaded if you've accepted this in the consent banner.",
        },
        {
          heading: "Change consent",
          body: "You can change your consent at any time via the \"Change consent\" link in the footer.",
        },
      ],
    },
  },
  consent: {
    message: "We protect your privacy and never share your information with others. Analytics and marketing cookies are only used if you accept them.",
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
