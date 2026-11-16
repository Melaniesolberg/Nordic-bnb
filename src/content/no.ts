import type { SiteContent } from "./types";

export const no: SiteContent = {
  meta: {
    title: "Eiendomly – AI-forbedrede boligbilder, digital styling og salgsløft",
    description:
      "Vi forbedrer bildene dine med AI, møblerer tomme rom digitalt og viser hvordan enkle oppgraderinger kan løfte boligen – levert på 24–48 timer.",
  },
  nav: {
    links: [
      { label: "Slik fungerer det", href: "/#system" },
      { label: "Tjenester", href: "/#services" },
      { label: "Hvem vi hjelper", href: "/#areas" },
      { label: "Om meg", href: "/#about" },
      { label: "FAQ", href: "/#faq" },
    ],
    cta: "Bestill bildeløft",
    toggleMenu: "Åpne meny",
    selectLanguage: "Velg språk",
  },
  hero: {
    eyebrow: "Boligfoto · Digital styling · Salgsløft",
    headlineLines: ["Førstebildet avgjør", "om de klikker."],
    subline:
      "Vi gjør bildene dine klare for FINN og Airbnb – lysere, skarpere og mer innbydende. Uten fotograf, levert på 24 timer.",
    ctaPrimary: "Bestill bildeløft",
    ctaSecondary: "Se tjenestene",
    scrollHint: "Scroll",
    locationTag: "Norge",
  },
  problem: {
    eyebrow: "Problemet",
    heading: "Du har bare noen sekunder.",
    intro:
      "Folk scroller forbi annonser med mørke eller rotete bilder – uansett hvor fin boligen er. Det er førstebildet og tittelen som avgjør om noen klikker seg inn.",
    note: "Hver måned boligen står tom, taper du en hel månedsleie. Står en bolig til 15 000 kr i måneden tom én måned ekstra, har du tapt 15 000 kr.",
  },
  showcase1: {
    eyebrow: "Bildeløft",
    heading: "Lysere, skarpere og mer innbydende – uten fotograf.",
  },
  showcase2: {
    eyebrow: "Digital styling",
    heading: "Vis hva et tomt rom kan bli.",
  },
  howItWorks: {
    eyebrow: "Slik fungerer det",
    heading: "Tre enkle steg.",
    intro:
      "Alt skjer skriftlig: du sender bildene, vi forbedrer dem, og du får dem tilbake på lenke. Ingen møter, ingen fotograf.",
    steps: [
      { title: "Send bildene", description: "Send bildene eller lenken til annonsen." },
      { title: "Vi forbedrer", description: "Vi forbedrer og leverer innen 24–48 timer." },
      { title: "Flere klikk", description: "Du laster opp de nye bildene og får flere klikk." },
    ],
    channels: ["FINN", "Airbnb", "Booking.com"],
  },
  cases: {
    eyebrow: "Eksempler",
    heading: "Se forskjellen selv.",
    improvedLabel: "Forbedret med AI",
    beforeLabel: "Før",
    captions: {
      stue: "Lysere og skarpere stue, rettet horisont, løst rot fjernet.",
      kjokken: "Varmere lys og renere farger på kjøkkenet.",
      soverom: "Mer innbydende soverom med bedre lys og skarphet.",
    },
  },
  services: {
    eyebrow: "Tjenester",
    heading: "Finn riktig løft for eiendommen din.",
    intro:
      "Tre tjenester – fra raske bildeforbedringer til en komplett plan for salg. Du betaler fast pris, og får faktura etter levering.",
    items: [
      {
        key: "photoBoost",
        title: "Bildeløft",
        price: "790 kr",
        priceNote: "inntil 20 bilder",
        description:
          "Du sender bildene du har. Vi forbedrer dem med AI: lys, farger, skarphet, rette linjer og rydding av løst rot. Du får også et sterkere forsidebilde og forslag til tittel.",
        features: [
          "Inntil 20 forbedrede bilder",
          "Valgt og optimalisert forsidebilde",
          "3 forslag til annonsetittel",
          "Levert innen 24 timer",
        ],
        note: "Til Airbnb gjør vi kun naturlig forbedring, slik Airbnbs regler krever.",
      },
      {
        key: "virtualStaging",
        title: "Digital styling",
        price: "1 190 kr",
        priceNote: "per rom · 3 rom for 2 990 kr",
        description:
          "Vi møblerer tomme rom digitalt, eller bytter ut løse møbler som ikke følger med i salget, for eksempel en slitt sofa. Faste ting som vegger, gulv, kjøkken og vinduer endres aldri.",
        features: [
          "Stylede bilder i 2 stilvalg",
          "Merket «Digital styling – illustrasjon. Møbler følger ikke med.»",
          "Originalbildet ved siden av",
          "Levert innen 48 timer",
        ],
        note: "Ikke for Airbnb. Der skal gjestene se møblene de faktisk får.",
      },
      {
        key: "saleBoost",
        title: "Salgsløftet",
        price: "4 900 kr",
        priceNote: "Mini · Stor: 9 900 kr",
        description:
          "Vi lager før/etter-bilder av enkle oppgraderinger, som å male skap og vegger, bytte benkeplate med folie eller olje gulvet – og en rapport med tiltak, kostnad og rekkefølge.",
        features: [
          "Før/etter-bilder",
          "Salgsløft-rapport (PDF) med tiltak, kostnad og hva som må gjøres av fagfolk",
          "Merket «Illustrasjon – ikke utført»",
          "Levert innen 48 timer",
        ],
        note: "Hvor mye verdien kan øke, vurderer megleren eller takstmannen din.",
      },
    ],
    termsNote: "Alle priser inkl. mva. Meglere faktureres eks. mva.",
    ctaLabel: "Les mer",
  },
  audiences: {
    eyebrow: "Hvem vi hjelper",
    heading: "Fra hytta til hotellet.",
    intro:
      "Bildene er det første folk ser – enten de skal leie, kjøpe, booke eller spise. Vi gjør førsteinntrykket riktig.",
    items: [
      {
        name: "Airbnb-verter",
        description:
          "Naturlige, ærlige forbedringer som følger Airbnbs regler – flere klikk uten å love noe boligen ikke har.",
      },
      {
        name: "Utleiere",
        description:
          "Bilder som skiller seg ut på FINN, så annonsen ikke blir scrollet forbi. Vi bruker bildene du har, også mobilbilder.",
      },
      {
        name: "Selger selv",
        description:
          "Selger du uten megler? Vi gjør dine egne bilder klare for annonsen – uten fotograf.",
      },
      {
        name: "Meglere",
        description:
          "Digital styling av tomme rom og Salgsløftet for boliger med oppussingsbehov. Meglere faktureres eks. mva.",
      },
      {
        name: "Hoteller",
        description:
          "Lysere og skarpere rombilder til egen nettside og bookingsider.",
      },
      {
        name: "Restauranter",
        description:
          "Innbydende bilder av lokalet til nettside, Google og sosiale medier.",
      },
    ],
  },
  about: {
    eyebrow: "Om meg",
    heading: "Ærlige bilder. Flere klikk.",
    paragraphs: [
      "Jeg heter Melanie Solberg og startet Eiendomly fordi altfor mange fine boliger blir scrollet forbi på grunn av mørke og rotete bilder.",
      "Jeg er utdannet innen salg, ledelse og digital markedsføring, og driver også SynligAI, som hjelper bedrifter å bli synlige i AI-søk.",
      "Hos Eiendomly bruker jeg AI til å gjøre boligen din klar for klikk.",
    ],
    founderName: "Melanie Solberg",
    founderRole: "Grunnlegger",
    founderQuote: "Jeg sjekker hvert eneste bilde selv, så resultatet er ærlig og ser naturlig ut.",
    photoAlt: "Melanie Solberg, grunnlegger av Eiendomly",
    replyNote: "Jeg svarer på e-post innen 24 timer på hverdager.",
  },
  honesty: {
    eyebrow: "Ærlighet",
    heading: "Vi forbedrer – vi lurer ikke.",
    intro:
      "Gode bilder skal få folk til å klikke – ikke skuffe dem på visning. Derfor er det tydelige grenser for hva vi endrer.",
    does: {
      title: "Det vi gjør",
      tagline: "Naturlig forbedring",
      points: [
        "Justerer lys, farger og skarphet",
        "Retter opp skjeve linjer",
        "Fjerner løst rot",
        "Merker digitalt møblerte bilder, med originalen ved siden av",
      ],
    },
    never: {
      title: "Det vi aldri gjør",
      tagline: "Ingen villedning",
      points: [
        "Endrer vegger, gulv eller vinduer",
        "Endrer utsikten",
        "Skjuler skader",
        "Legger inn møbler som ikke finnes, eller tekst, i Airbnb-bilder",
      ],
    },
    cta: "Bestill bildeløft",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Ofte stilte spørsmål.",
    items: [
      { q: "Er dette lov?", a: "Ja, når bildene ikke villeder. Vi forbedrer lys og kvalitet, merker digital styling og endrer aldri faste ting eller skader." },
      { q: "Kan jeg bruke bildene på Airbnb?", a: "Ja, Bildeløft er laget for det. Vi holder det naturlig og legger aldri tekst i bildene." },
      { q: "Hvem eier bildene?", a: "Du bekrefter at du har rett til bildene du sender. Du får full bruksrett til resultatet." },
      { q: "Hvor fort får jeg dem?", a: "Bildeløft innen 24 timer, styling og Salgsløftet innen 48 timer." },
      { q: "Hva hvis jeg ikke er fornøyd?", a: "Du får én ny runde gratis, eller pengene tilbake." },
      { q: "Må jeg ta nye bilder?", a: "Nei. Vi bruker bildene du har, også mobilbilder." },
      { q: "Øker Salgsløftet verdien?", a: "Mange enkle oppgraderinger gjør boligen mer attraktiv. Hvor mye verdien kan øke, bør megler eller takstmann vurdere. Vi lover ingen bestemt sum." },
      { q: "Hvordan betaler jeg?", a: "Du får faktura på e-post etter levering." },
    ],
  },
  finalCta: {
    eyebrow: "Bestilling",
    heading: "Klar for flere klikk?",
    subline:
      "Send bildene dine i dag. Fyll ut skjemaet, så får du svar på e-post innen 24 timer.",
    ctaPrimary: "Bestill nå",
    form: {
      fields: {
        name: "Navn",
        email: "E-post",
        customerType: "Jeg er",
        service: "Tjeneste",
        photosLink: "Lenke til bildene (Google Drive, Dropbox, WeTransfer) eller annonsen",
        message: "Kommentar (valgfritt)",
        rights: "Jeg bekrefter at jeg har rett til å bruke disse bildene.",
        marketing:
          "Valgfritt – 10 % rabatt: Eiendomly kan bruke før/etter-bildene uten adresse og personlige detaljer i egen markedsføring.",
      },
      selectPlaceholder: "Velg …",
      customerTypes: ["Privat utleier", "Airbnb-vert", "Selger selv", "Megler", "Hotell", "Restaurant"],
      serviceOptions: [
        { key: "photoBoost", label: "Bildeløft" },
        { key: "virtualStaging", label: "Digital styling" },
        { key: "saleBoost", label: "Salgsløftet" },
        { key: "unsure", label: "Usikker" },
      ],
      submit: "Send bestilling",
      errorMessage: "Noe gikk galt. Prøv igjen, eller send oss en e-post på",
    },
  },
  servicePages: {
    photoBoost: {
      eyebrow: "Bildeløft",
      heading: "Gjør dine egne bilder klare for FINN og Airbnb",
      forWho:
        "Passer for private utleiere, Airbnb-verter og privatpersoner som selger selv, og som har tatt bildene selv.",
      whatItIs:
        "Du sender bildene du har. Vi forbedrer dem med AI: lys, farger, skarphet, rette linjer og rydding av løst rot. Du får også et sterkere forsidebilde og forslag til tittel.",
      includesHeading: "Du får",
      includes: [
        "Inntil 20 forbedrede bilder",
        "Valgt og optimalisert forsidebilde",
        "3 forslag til annonsetittel",
        "Levert innen 24 timer",
      ],
      priceHeading: "Pris",
      price: "790 kr",
      note: "Til Airbnb gjør vi kun naturlig forbedring, slik Airbnbs regler krever.",
      cta: "Bestill bildeløft",
    },
    virtualStaging: {
      eyebrow: "Digital styling",
      heading: "Møbler tomme rom – eller bytt ut det som trekker ned",
      forWho:
        "Passer for tomme boliger som skal selges eller leies ut langtid, og boliger med møbler som ikke følger med, for eksempel en gammel sofa.",
      whatItIs:
        "Vi møblerer tomme rom digitalt, eller bytter ut løse møbler som ikke følger med i salget, for eksempel en slitt sofa. Faste ting som vegger, gulv, kjøkken og vinduer endres aldri.",
      includesHeading: "Du får",
      includes: [
        "Stylede bilder i 2 stilvalg",
        "Merket «Digital styling – illustrasjon. Møbler følger ikke med.»",
        "Originalbildet ved siden av",
        "Levert innen 48 timer",
      ],
      priceHeading: "Pris",
      price: "1 190 kr per rom",
      priceNote: "3 rom for 2 990 kr",
      note: "Ikke for Airbnb. Der skal gjestene se møblene de faktisk får.",
      cta: "Bestill digital styling",
    },
    saleBoost: {
      eyebrow: "Salgsløftet",
      heading: "Vis kjøperne hva boligen kan bli – og hva det koster",
      forWho:
        "Passer for boliger med oppussingsbehov som skal selges, eller som har ligget lenge på markedet. For selgere og meglere.",
      whatItIs:
        "Vi lager før/etter-bilder av enkle oppgraderinger, som å male skap og vegger, bytte benkeplate med folie eller olje gulvet. Du får en rapport med tiltak, kostnad og rekkefølge. Gjør du tiltakene, får annonsen ekte nye bilder. Gjør du dem ikke, ser kjøperne potensialet.",
      includesHeading: "Du får",
      includes: [
        "Før/etter-bilder",
        "Salgsløft-rapport (PDF) med tiltak, kostnad og hva som må gjøres av fagfolk",
        "Merket «Illustrasjon – ikke utført»",
        "Levert innen 48 timer",
      ],
      priceHeading: "Pris",
      tiers: [
        { name: "Mini", price: "4 900 kr", detail: "Tiltak under 20 000 kr, 5 før/etter" },
        {
          name: "Stor",
          price: "9 900 kr",
          detail: "Tiltak 20 000–100 000 kr, 10 før/etter og prioritert liste",
        },
      ],
      note: "Hvor mye verdien kan øke, vurderer megleren eller takstmannen din. Vi viser hva det koster og hvordan det kan se ut.",
      cta: "Bestill Salgsløftet",
    },
  },
  orderPage: {
    eyebrow: "Bestilling",
    heading: "Bestill bildeløft",
    intro: "Fyll ut skjemaet under, og du får svar på e-post innen 24 timer.",
  },
  thanks: {
    eyebrow: "Mottatt",
    heading: "Takk!",
    intro: "Du får svar på e-post innen 24 timer.",
    back: "Tilbake til forsiden",
  },
  notFound: {
    eyebrow: "404",
    heading: "Siden finnes ikke.",
    intro: "Siden du ser etter finnes ikke, eller har flyttet.",
    back: "Tilbake til forsiden",
  },
  legal: {
    privacy: {
      eyebrow: "Personvern",
      heading: "Personvern",
      updated: "Sist oppdatert: november 2026",
      intro:
        "Denne siden forklarer hva Eiendomly samler inn når du bruker bestillingsskjemaet, hvorfor, og hvilke rettigheter du har.",
      sections: [
        {
          heading: "Hva vi samler inn",
          body: "Når du fyller ut bestillingsskjemaet, lagrer vi navn, e-post, hvilken type kunde du er, hvilken tjeneste du ønsker, lenken til bildene dine, eventuell kommentar og om du samtykker til markedsføringsbruk av før/etter-bilder.",
        },
        {
          heading: "Hvorfor vi samler det inn",
          body: "Opplysningene brukes til å levere tjenesten du bestiller, svare på henvendelsen din og sende faktura. Markedsføringssamtykke brukes kun hvis du har krysset det av.",
        },
        {
          heading: "Hvor lenge vi lagrer det",
          body: "Vi lagrer bestillingsopplysninger så lenge det er nødvendig for leveranse og bokføring, normalt i opptil 5 år i tråd med bokføringsloven.",
        },
        {
          heading: "Underleverandører",
          body: "Skjemaet driftes av Netlify (Netlify Forms), som mottar og lagrer innsendingene. Vi bruker også e-post og eventuelt analyseverktøy for å forstå bruken av siden.",
        },
        {
          heading: "Dine rettigheter",
          body: "Du kan be om innsyn i, retting eller sletting av dine opplysninger ved å kontakte oss på e-post.",
        },
      ],
    },
    terms: {
      eyebrow: "Vilkår",
      heading: "Vilkår",
      updated: "Sist oppdatert: november 2026",
      intro: "Disse vilkårene gjelder når du bestiller en tjeneste fra Eiendomly.",
      sections: [
        {
          heading: "Bilderettigheter",
          body: "Ved bestilling bekrefter du at du har rett til å bruke bildene du sender inn, og at vi kan bearbeide dem for deg.",
        },
        {
          heading: "Bruksrett til resultatet",
          body: "Du får full bruksrett til de forbedrede bildene og eventuelle rapporter vi leverer.",
        },
        {
          heading: "Merking",
          body: "Digitalt møblerte bilder og illustrasjoner fra Salgsløftet merkes alltid tydelig, slik at det ikke er tvil om hva som er ekte og hva som er illustrasjon.",
        },
        {
          heading: "Ditt ansvar",
          body: "Du er selv ansvarlig for hvordan og hvor bildene publiseres, og for at publiseringen følger gjeldende regler, for eksempel Airbnbs retningslinjer.",
        },
        {
          heading: "Betaling",
          body: "Du mottar faktura på e-post etter levering, med 14 dagers forfall.",
        },
        {
          heading: "Hvis du ikke er fornøyd",
          body: "Du får én ny runde gratis, eller pengene tilbake.",
        },
        { heading: "Lovvalg", body: "Norsk lov gjelder for disse vilkårene." },
      ],
    },
    cookies: {
      eyebrow: "Informasjonskapsler",
      heading: "Informasjonskapsler",
      updated: "Sist oppdatert: november 2026",
      intro:
        "Vi bruker informasjonskapsler (cookies) kun etter samtykke, og du kan endre valget ditt når du vil.",
      sections: [
        {
          heading: "Nødvendige",
          body: "Noen få tekniske informasjonskapsler er nødvendige for at siden skal fungere, og krever ikke samtykke.",
        },
        {
          heading: "Analyse og markedsføring",
          body: "Analyse- og markedsføringsverktøy (som GA4 og Meta Pixel) lastes kun hvis du har godtatt dette i samtykkebanneret.",
        },
        {
          heading: "Endre samtykke",
          body: "Du kan endre samtykket ditt når som helst via lenken «Endre samtykke» i bunnteksten.",
        },
      ],
    },
  },
  consent: {
    message: "Vi bruker informasjonskapsler til analyse og markedsføring. Du velger selv hva du godtar.",
    acceptAll: "Godta alle",
    rejectAll: "Avvis alle",
    settings: "Innstillinger",
    save: "Lagre valg",
    analytics: "Analyse",
    marketing: "Markedsføring",
    changeConsent: "Endre samtykke",
  },
  footer: {
    tagline: "Førstebildet avgjør. Vi gjør det riktig.",
    linksHeading: "Nettsted",
    legalHeading: "Juridisk",
    contactHeading: "Kontakt",
    languageHeading: "Språk",
    rights: "Eiendomly. Alle rettigheter reservert.",
    legalName: "Eiendomly Solberg",
    replyNote: "Svar innen 24 timer på hverdager.",
  },
};
