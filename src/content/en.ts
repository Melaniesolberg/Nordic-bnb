import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Property photos, virtual staging and sale boost | Eiendomly",
    description:
      "Better photos of homes, cabins and hotels for FINN, Airbnb, Booking.com and your own website. Photo Boost from NOK 1,890, delivered within 24 hours.",
  },
  seo: {
    home: {
      title: "Property photos, virtual staging and sale boost | Eiendomly",
      description:
        "Better photos of homes, cabins and hotels for FINN, Airbnb, Booking.com and your own website. Photo Boost from NOK 1,890, delivered within 24 hours.",
    },
    photoBoost: {
      title: "Photo Boost for FINN and Airbnb – NOK 1,890 | Eiendomly",
      description:
        "Up to 40 property photos improved for NOK 1,890, delivered within 24 hours. Three listing title suggestions included. Phone photos are fine.",
    },
    virtualStaging: {
      title: "Virtual Staging – NOK 1,190 per room | Eiendomly",
      description:
        "Show what an empty room could become. You choose the style, we furnish the room digitally. Labelled illustration with the original alongside.",
    },
    saleBoost: {
      title: "Sale Boost – renovation plan before selling | Eiendomly",
      description:
        "See what simple improvements could do before a sale. Before/after illustrations and a plan with cost estimates, from NOK 4,900.",
    },
    order: {
      title: "Order Photo Boost or Virtual Staging | Eiendomly",
      description:
        "Order Photo Boost, Virtual Staging, Sale Boost or a monthly plan. Send a link to your photos and get a reply within 24 hours on weekdays.",
    },
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
    eyebrow: "Photo Boost · Virtual Staging · Sale Boost",
    headlineLines: ["Better property photos", "for sales and rentals"],
    subline:
      "Send us the photos you have. We get them ready for FINN, Airbnb, Booking.com or the hotel's own website – within 24 hours, from NOK 1,890.",
    ctaPrimary: "Order Photo Boost",
    ctaSecondary: "See services and prices",
    beats: [
      {
        eyebrow: "Photo Boost",
        heading: "Bright, sharp, straight photos.",
        body: "We adjust light, colour and lines and tidy away small loose items. Phone photos are fine.",
      },
      {
        eyebrow: "Ready to use",
        heading: "Done in 24 hours.",
        body: "You get all your photos back via a link, checked before delivery.",
      },
    ],
    locationTag: "Norway",
  },
  problem: {
    eyebrow: "First impressions",
    heading: "Photos matter most in a listing",
    seconds: 2.7,
    unit: "sec",
    stat: {
      value: "58%",
      text: "of respondents chose the photos as one of the three most important parts of a property listing. Nothing ranked higher.",
      source: "FINN, Property Survey 2025",
      href: "https://www.finn.no/bedriftskunde/aktuelt/finn-eiendom/eiendomsundersokelsen-2025",
    },
    timeStat: {
      value: "2.7 sec",
      text: "is how long buyers spent on average on a listing in the search results before clicking or moving on.",
      source: "Rightmove, United Kingdom, 2012",
    },
    hotel: {
      heading: "Hotel guests look at the photos too",
      value: "36%",
      text: "of travellers use photos and descriptions on the hotel's own website to decide whether the place suits them.",
      source: "Hotels.com, Unpack ’24",
      href: "https://partner.expediagroup.com/en-us/resources/blog/unpack-2024-hotel-trends",
    },
  },
  photoBoost: {
    eyebrow: "Photo Boost",
    heading: "See the difference",
    body: "The same photo, before and after. We adjust light, colour and sharpness, straighten lines and tidy away small loose items. Every photo is checked before you get it.",
    hint: "Drag to compare.",
    beforeLabel: "Original photo",
    afterLabel: "After Photo Boost",
    beforeAlt: "Original photo of a living room, before Photo Boost",
    afterAlt: "The same living room after Photo Boost, with adjusted light, colour and sharpness",
    caption: "Light, colour and lines adjusted. Small loose items tidied away.",
  },
  showcase2: {
    eyebrow: "Virtual Staging",
    heading: "Show what an empty room could become",
    body: "Empty rooms are hard to picture. We furnish them digitally, so buyers and tenants can see how the room could be used. NOK 1,190 per room, with the original photo alongside.",
    hint: "Drag to compare.",
    beforeLabel: "Original photo",
    afterLabel: "Virtual Staging – illustration",
    beforeAlt: "Original photo of an empty living room with large windows",
    afterAlt: "The same living room furnished digitally with a sofa, table and plants – Virtual Staging, illustration",
    caption: "Walls, floors and windows are as in the original.",
    link: "See prices and examples",
  },
  howItWorks: {
    eyebrow: "Three steps",
    heading: "How it works",
    steps: [
      { title: "Send your photos", description: "Share a link to your photos or listing. Phone photos are fine." },
      { title: "We do the work", description: "We improve the photos and check each one before delivery." },
      { title: "Use them", description: "You get your photos via a link, ready to publish." },
    ],
    channels: ["FINN", "Airbnb", "Booking.com"],
  },
  cases: {
    eyebrow: "Examples",
    heading: "See the difference.",
    improvedLabel: "After Photo Boost",
    beforeLabel: "Original photo",
    captions: {
      stue: "Brighter, sharper living room, straightened horizon, small loose items tidied away.",
      kjokken: "Warmer light and cleaner colours in the kitchen.",
      soverom: "Bedroom with better light and sharpness.",
    },
  },
  services: {
    eyebrow: "Services",
    heading: "Three services, fixed prices",
    items: [
      {
        key: "photoBoost",
        title: "Photo Boost",
        price: "NOK 1,890",
        priceNote: "up to 40 photos",
        description: "For bright, clear photos of the property as it is today.",
        features: [
          "Up to 40 photos improved",
          "We pick the best photo for the cover",
          "Three listing title suggestions",
          "Delivered within 24 hours",
        ],
        note: "Example: If you let for NOK 1,200 a night, Photo Boost has paid for itself after two nights.",
        linkLabel: "More about Photo Boost",
      },
      {
        key: "virtualStaging",
        title: "Virtual Staging",
        price: "NOK 1,190",
        priceNote: "per room",
        description: "For empty rooms, or rooms where the furniture is not included.",
        features: [
          "You choose the style",
          "Labelled “Virtual Staging – illustration. Furniture not included.”",
          "The original photo alongside",
          "For sales and long-term rentals",
        ],
        note: "Example: A living room and two bedrooms cost NOK 3,570. Physical staging of a three-room flat starts at NOK 16,900 with the stylists we checked.",
        linkLabel: "More about Virtual Staging",
      },
      {
        key: "saleBoost",
        title: "Sale Boost",
        price: "From NOK 4,900",
        priceNote: "Large: NOK 9,900",
        description: "For sellers who want to know which simple improvements are worth making.",
        features: [
          "Before/after illustrations, labelled “Illustration – not carried out”",
          "PDF with actions, cost estimates and order",
          "What you can do yourself, and what needs a professional",
        ],
        note: "Example: On a NOK 3,000,000 home, Sale Boost Mini is 0.16% of the price.",
        linkLabel: "More about Sale Boost",
      },
    ],
    termsHeading: "Prices and payment",
    termsNote: "Prices include VAT. Estate agents are invoiced excluding VAT. You are invoiced after delivery.",
  },
  plans: {
    eyebrow: "Plans",
    heading: "Monthly plans for agents and managers",
    intro: "Several properties a month? You get a lower price per job and one invoice.",
    items: [
      {
        key: "brokerPlan",
        title: "Agent Plan",
        audience: "For estate agents and agencies",
        price: "NOK 9,900",
        pricePeriod: "per month",
        value: "NOK 18,690",
        savings: "You save NOK 8,790 (approx. 47%) with full use",
        featured: true,
        features: [
          "Photo Boost for up to 8 properties",
          "Up to 40 photos per property",
          "Virtual Staging of 3 rooms",
          "Extra Photo Boost: NOK 1,490",
        ],
        cta: "Order the Agent Plan",
      },
      {
        key: "managerPlan",
        title: "Manager Plan",
        audience: "For rental managers",
        price: "NOK 4,900",
        pricePeriod: "per month",
        value: "NOK 7,560",
        savings: "You save NOK 2,660 (approx. 35%) with full use",
        features: [
          "Photo Boost for up to 4 units",
          "Up to 40 photos per unit",
          "Virtual Staging ordered separately",
          "Extra Photo Boost: NOK 1,490",
        ],
        cta: "Order the Manager Plan",
      },
    ],
    valueLabel: "Bought separately:",
    terms: ["3-month minimum term, then 1 month's notice", "Invoiced at the start of the month", "Unused jobs expire at the end of the month"],
    note: "Sale Boost is ordered separately.",
  },
  audiences: {
    eyebrow: "Who we help",
    heading: "For homes, cabins and hotels",
    items: [
      { name: "Airbnb hosts", description: "Bright, honest photos that show the place as guests will find it." },
      { name: "Private landlords", description: "Show the rooms, light and layout clearly in your rental listing." },
      { name: "Home sellers", description: "Better photos, furnished empty rooms or a plan for simple improvements before selling." },
      { name: "Estate agents", description: "Photo Boost, Virtual Staging and Sale Boost – for one property or many." },
      { name: "Hotels", description: "Show rooms and shared spaces on your own website the way guests will experience them." },
      { name: "Cabin owners", description: "Show the cabin at its best, from the living room to the outdoor space." },
    ],
  },
  about: {
    eyebrow: "About",
    heading: "Hi, I'm Melanie",
    paragraphs: [
      "I trained in digital marketing and have worked in it for a couple of years. I'm curious about how AI tools can make things better, and that is what Eiendomly is built on.",
      "Through jobs and projects I've seen many homes, cabins and hotels that look far better in real life than in their photos. That's a shame. Often it takes very little before people see why the cabin or hotel is worth a closer look, or that the home is a bargain with a few small changes. The flat nobody expected much from can become someone's new home.",
      "I love a good deal, where what you put in gives a lot back. That's what Eiendomly should be for you.",
      "I run Eiendomly myself, so you deal with me the whole way, from order to finished photos. And the photos are always honest: I never change walls, windows, floors or views, and I never hide damage. What you see is what you get.",
    ],
    founderName: "Melanie Solberg",
    founderRole: "Founder",
    photoAlt: "Melanie Solberg, founder of Eiendomly",
    replyNote: "I reply to emails within 24 hours on weekdays.",
  },
  honesty: {
    eyebrow: "Honest photos",
    heading: "What we change – and what we leave alone",
    items: [
      {
        title: "Photo Boost",
        body: "Light, colour, sharpness and crooked lines. Small loose items can be tidied away. Views, damage and fixed parts of the home stay as they are.",
      },
      {
        title: "Virtual Staging",
        body: "Shows one possible way to furnish a room. Walls, windows, kitchen and floors are as in the original, and you get the original photo alongside.",
      },
      {
        title: "Sale Boost",
        body: "Shows what suggested upgrades could look like. The images are labelled “Illustration – not carried out”.",
      },
      { title: "Airbnb", body: "Only natural adjustments. Guests should get what they see in the photos." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        q: "How much does it cost?",
        a: "Photo Boost costs NOK 1,890 for up to 40 photos. Virtual Staging costs NOK 1,190 per room. Sale Boost costs NOK 4,900 (Mini) or NOK 9,900 (Large). All prices include VAT.",
      },
      {
        q: "Is it worth it?",
        a: "It depends on the property, but the price is low compared with what is at stake. Example: If you let for NOK 1,200 a night, Photo Boost has paid for itself after two nights. If you sell a NOK 4,000,000 home, Photo Boost is less than 0.05% of the price.",
      },
      { q: "Do I need new photos?", a: "No. Send the photos you have, including phone photos." },
      {
        q: "How quickly do I get the photos?",
        a: "Photo Boost is delivered within 24 hours. For Virtual Staging and Sale Boost, we confirm the delivery time once we have seen the photos.",
      },
      {
        q: "What is Virtual Staging?",
        a: "We furnish a room digitally in a property photo, in the style you choose. The image is labelled “Virtual Staging – illustration. Furniture not included.”, and you get the original alongside.",
      },
      {
        q: "Can I use the photos on Airbnb?",
        a: "Yes, Photo Boost works for Airbnb. We only make natural adjustments, without added furniture or text. Virtual Staging is for sales and long-term rentals.",
      },
      {
        q: "Who owns the photos?",
        a: "You confirm that you have the right to send us the photos. You get full rights to use the result.",
      },
      {
        q: "What do I get with a monthly plan?",
        a: "The Agent Plan (NOK 9,900 per month) gives Photo Boost for up to 8 properties and Virtual Staging of 3 rooms. The Manager Plan (NOK 4,900 per month) gives Photo Boost for up to 4 units.",
      },
      {
        q: "Does Sale Boost increase the value of a home?",
        a: "We can't promise that. You see possible improvements and what they cost. Any increase in value is assessed by an estate agent or valuer.",
      },
      {
        q: "What if I'm not happy?",
        a: "Tell us within seven days of delivery. You get one free round of adjustments. If you're still not happy, you get 50% of the price back.",
      },
      {
        q: "When do I pay?",
        a: "You receive an invoice by email after delivery. Monthly plans are invoiced at the start of the month.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Order",
    heading: "Send us your photos",
    subline: "Choose a service and add a link. You'll get a reply within 24 hours on weekdays.",
    ctaPrimary: "Send order",
    form: {
      fields: {
        name: "Name",
        email: "Email",
        customerType: "Who is ordering?",
        service: "Choose a service",
        photosLink: "Link to the photos or listing",
        photosLinkHelp: "For example Google Drive, Dropbox or WeTransfer. Check that the link opens.",
        message: "Comment (optional)",
        rights: "I confirm that I have the right to use the photos and to send them to Eiendomly for editing.",
        marketing:
          "I get a 10% discount and agree that Eiendomly may use the before/after photos in its own marketing, without the address or personal details.",
        withdrawal:
          "I ask for the work to start right away, and understand that the 14-day right of withdrawal ends once the photos are delivered. If I withdraw before delivery, I pay for the work already done.",
      },
      privateCustomerTypes: ["Private landlord", "Airbnb host", "Home seller", "Cabin owner"],
      selectPlaceholder: "Choose …",
      customerTypes: ["Private landlord", "Airbnb host", "Home seller", "Estate agent", "Rental manager", "Cabin owner", "Hotel"],
      serviceOptions: [
        { key: "photoBoost", label: "Photo Boost" },
        { key: "virtualStaging", label: "Virtual Staging" },
        { key: "saleBoost", label: "Sale Boost" },
        { key: "brokerPlan", label: "Agent Plan – NOK 9,900 per month" },
        { key: "managerPlan", label: "Manager Plan – NOK 4,900 per month" },
        { key: "unsure", label: "I'm not sure" },
      ],
      submit: "Send order",
      errorMessage: "Something went wrong. Please try again, or email us at",
      privacyNote: "We use your details to reply to you, deliver the service and send the invoice.",
      privacyLink: "Read about privacy",
    },
  },
  servicePages: {
    photoBoost: {
      eyebrow: "Photo Boost",
      heading: "Photo Boost for FINN, Airbnb and Booking.com",
      intro: "Up to 40 photos improved for NOK 1,890, delivered within 24 hours. Send the photos you have, including phone photos.",
      comparison: {
        beforeLabel: "Original photo",
        afterLabel: "After Photo Boost",
        beforeAlt: "Original photo of a living room, before Photo Boost",
        afterAlt: "The same living room after Photo Boost, with adjusted light, colour and sharpness",
        caption: "Light, colour and lines adjusted. Small loose items tidied away.",
        hint: "Drag to compare.",
      },
      sections: [
        {
          heading: "What you get",
          blocks: [
            {
              type: "list",
              items: [
                "Up to 40 photos with better light, colour and sharpness.",
                "Straight lines and small loose items tidied away.",
                "We pick the best photo for the cover.",
                "Three listing title suggestions.",
                "All photos via a link within 24 hours.",
              ],
            },
            { type: "cta" },
          ],
        },
        {
          heading: "What it means in money",
          blocks: [
            { type: "p", text: "Photo Boost costs the same whatever you let or sell. Three examples:" },
            {
              type: "list",
              items: [
                "Short-term rental: If you let for NOK 1,200 a night, Photo Boost has paid for itself after two nights.",
                "Long-term rental: At NOK 15,000 a month, one empty month costs almost eight times as much as Photo Boost.",
                "Sale: For a NOK 4,000,000 home, Photo Boost is less than 0.05% of the price.",
              ],
            },
          ],
        },
        {
          heading: "Photos for Airbnb",
          blocks: [
            {
              type: "p",
              text: "Only natural adjustments. Furniture, views and facilities must match what guests find, and we never add text to the photos.",
            },
          ],
        },
        {
          heading: "Photos for a hotel website",
          blocks: [
            { type: "p", text: "We also get photos of rooms, shared spaces and outdoor areas ready for the hotel's own website." },
          ],
        },
      ],
      links: [
        { text: "Got empty rooms?", label: "See Virtual Staging", href: "/en/virtual-staging" },
        { text: "Got several properties?", label: "See monthly plans", href: "/en#avtaler" },
      ],
      priceHeading: "Price",
      price: "NOK 1,890",
      priceNote: "Up to 40 photos. Delivered within 24 hours.",
      cta: "Order Photo Boost",
    },
    virtualStaging: {
      eyebrow: "Virtual Staging",
      heading: "Virtual Staging for home sales and long-term rentals",
      intro: "Show what an empty room could become, for NOK 1,190 per room. You choose the style, we furnish the room in the photo.",
      comparison: {
        beforeLabel: "Original photo",
        afterLabel: "Virtual Staging – illustration",
        beforeAlt: "Original photo of an empty living room with large windows",
        afterAlt: "The same living room furnished digitally with a sofa, table and plants – Virtual Staging, illustration",
        caption: "Walls, floors and windows are as in the original.",
        hint: "Drag to compare.",
      },
      sections: [
        {
          heading: "Why furnish digitally?",
          blocks: [
            {
              type: "p",
              text: "An empty room is hard to picture. Once it is furnished, buyers and tenants can see how the room could be used. Walls, floors, windows and the kitchen are as in the original.",
            },
          ],
        },
        {
          heading: "What you save",
          blocks: [
            {
              type: "p",
              text: "Example: A living room and two bedrooms in a three-room flat cost NOK 3,570 digitally. With two Norwegian stylists, physical staging of a three-room flat starts at NOK 16,900 and NOK 23,500.",
            },
            {
              type: "table",
              caption: "Digital furnishing at Eiendomly compared with listed starting prices for physical full staging",
              head: ["Flat", "Eiendomly", "Bolig Interiør", "Main Boligstyling", "You save"],
              rows: [
                ["2 rooms", "NOK 2,380", "From NOK 12,900", "From NOK 17,500", "NOK 10,520–15,120"],
                ["3 rooms", "NOK 3,570", "From NOK 16,900", "From NOK 23,500", "NOK 13,330–19,930"],
                ["4 rooms", "NOK 4,760", "From NOK 18,900", "From NOK 27,800", "NOK 14,140–23,040"],
              ],
            },
            {
              type: "note",
              text: "The Eiendomly price covers the living room and all bedrooms. Physical staging includes transport and furniture hire. All prices include VAT. Price lists checked on 19 November 2026: [Bolig Interiør](https://www.bolig-interior.no/priser) · [Main Boligstyling](https://www.mainboligstyling.no/priser-boligstyling/)",
            },
          ],
        },
        {
          heading: "What you get",
          blocks: [
            {
              type: "list",
              items: [
                "The room furnished in the style you choose.",
                "The image labelled “Virtual Staging – illustration. Furniture not included.”",
                "The original photo alongside.",
              ],
            },
            { type: "p", text: "We confirm the delivery time once we have seen the photos." },
            { type: "cta" },
          ],
        },
        {
          heading: "Letting on Airbnb?",
          blocks: [
            {
              type: "p",
              text: "Virtual Staging is for sales and long-term rentals. For Airbnb we recommend [Photo Boost](/en/photo-boost), with natural adjustments of the rooms as guests will find them.",
            },
          ],
        },
      ],
      links: [],
      priceHeading: "Price",
      price: "NOK 1,190",
      priceNote: "Per room. We confirm the delivery time once we have seen the photos.",
      cta: "Order Virtual Staging",
    },
    saleBoost: {
      eyebrow: "Sale Boost",
      heading: "Sale Boost – illustrations and a renovation plan before selling",
      intro:
        "See what paint, new kitchen fronts or a new floor could do before a sale. You get before/after illustrations and a plan with costs. From NOK 4,900.",
      sections: [
        {
          heading: "Who is it for?",
          blocks: [
            {
              type: "p",
              text: "Estate agents and people selling their own home. Especially older homes, empty homes and homes that have been on the market for a while.",
            },
          ],
        },
        {
          heading: "What it means in money",
          blocks: [
            {
              type: "p",
              text: "Example: On a NOK 3,000,000 home, Sale Boost Mini is 0.16% of the price. The plan shows which improvements are worth making before a sale, and what they cost.",
            },
            {
              type: "case",
              heading: "From a Norwegian home sale: styling for NOK 200",
              text: "The sellers hung light curtains they already had, moved furniture, borrowed lamps and bought flowers. The flat was valued at NOK 2.6 million and sold for NOK 2.85 million after one viewing. [Read the story in Bergens Tidende (2015, Norwegian)](https://www.bt.no/husoghjem/bolig/i/Vbbpw3/stylingbudsjett-200-kroner-sjekk-hvordan-vi-fikset-leiligheten-foer-visning)",
            },
            {
              type: "note",
              text: "The figures apply to this sale. Nobody knows how much the styling affected the bids.",
            },
          ],
        },
        {
          heading: "Mini or Large",
          blocks: [
            {
              type: "table",
              caption: "Comparison of Sale Boost Mini and Large",
              head: ["", "Mini", "Large"],
              rows: [
                ["Price", "NOK 4,900", "NOK 9,900"],
                ["Budget for the improvements", "Under NOK 20,000", "NOK 20,000–100,000"],
                ["Before/after comparisons", "5", "10"],
                ["Plan", "Actions, cost estimates and order", "Prioritised list of actions, cost estimates and order"],
              ],
            },
            {
              type: "p",
              text: "Both show what you can do yourself and what needs a professional. The images are labelled “Illustration – not carried out”. Any increase in value is assessed by an estate agent or valuer.",
            },
            { type: "cta" },
          ],
        },
      ],
      links: [
        { text: "Would you rather furnish an empty room?", label: "See Virtual Staging", href: "/en/virtual-staging" },
      ],
      priceHeading: "Price",
      tiers: [
        { name: "Mini", price: "NOK 4,900", detail: "5 before/after comparisons. Improvements under NOK 20,000." },
        { name: "Large", price: "NOK 9,900", detail: "10 before/after comparisons. Improvements of NOK 20,000–100,000." },
      ],
      cta: "Order Sale Boost",
    },
  },
  orderPage: {
    eyebrow: "Order",
    heading: "Order Photo Boost, Virtual Staging or Sale Boost",
    intro: "Choose a service and add a link to your photos. You'll get a reply within 24 hours on weekdays.",
  },
  thanks: {
    eyebrow: "Received",
    heading: "Thank you!",
    intro: "You'll get a reply by email within 24 hours on weekdays.",
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
          heading: "Right of withdrawal for private customers",
          body: "If you order as a private person, you have a 14-day right of withdrawal under the Norwegian Right of Withdrawal Act. If you ask us to start right away and confirm in the order form that the right ends once the photos are delivered, you can't withdraw after delivery. If you withdraw before delivery, you pay for the part of the work already done. To withdraw, email kontakt@eiendomly.no. Businesses have no right of withdrawal.",
        },
        {
          heading: "Monthly plans",
          body: "The Agent Plan and Manager Plan have a 3-month commitment, followed by 1 month's notice. Plans are invoiced at the start of each month. Jobs not used during the month don't carry over. Extra Photo Boosts beyond the plan cost NOK 1,490.",
        },
        { heading: "Payment", body: "You receive an invoice by email after delivery, due within 14 days." },
        { heading: "If you're not happy", body: "If you're not happy with the delivery, you get one free revision where we adjust the photos to your wishes. If you're still not happy after the revision, you get 50% of the price back. The rest covers the work already done. Let us know within 7 days of delivery." },
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
    tagline: "Better property photos for sales and rentals.",
    linksHeading: "Site",
    legalHeading: "Legal",
    contactHeading: "Contact",
    languageHeading: "Language",
    rights: "Eiendomly. All rights reserved.",
    legalName: "Eiendomly Solberg",
    replyNote: "Reply within 24 hours on weekdays.",
  },
};
