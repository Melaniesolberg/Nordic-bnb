import type { SiteContent } from "./types";

export const no: SiteContent = {
  meta: {
    title: "Eiendomly – Bildeløft, digital styling og salgsløft for boligen din",
    description:
      "Vi bruker AI-verktøy til å gi boligbildene dine et løft, møblerer tomme rom digitalt og viser hva boligen kan bli – for korttidsutleie, langtidsutleie og salg.",
  },
  nav: {
    links: [
      { label: "Slik fungerer det", href: "/#system" },
      { label: "Tjenester", href: "/#services" },
      { label: "Faste avtaler", href: "/#avtaler" },
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
    headlineLines: ["Det første bildet avgjør", "om de klikker."],
    subline: "Vi gjør bildene dine klare for FINN, Airbnb og Booking.com – uten fotograf.",
    ctaPrimary: "Bestill bildeløft",
    ctaSecondary: "Se tjenestene",
    beats: [
      {
        eyebrow: "Bildeløft",
        heading: "Lysere. Skarpere. Mer innbydende.",
        body: "Vi bruker AI-verktøy til å gi bildene dine et løft – lys, farger og rette linjer, uten fotograf.",
      },
      {
        eyebrow: "Klar for annonsen",
        heading: "Fra mobilbilde til førstevalg.",
        body: "For korttidsutleie, langtidsutleie og salg – levert på lenke innen 24 timer.",
      },
    ],
    locationTag: "Norge",
  },
  problem: {
    eyebrow: "Førsteinntrykket",
    heading: "Så lang tid har annonsen din.",
    intro:
      "Boligkjøpere på britiske Rightmove brukte i snitt 2,7 sekunder før de valgte å se nærmere på en bolig – eller bla videre.",
    seconds: 2.7,
    unit: "sek",
    stat: {
      value: "58 %",
      text: "valgte bilder av boligen da de skulle oppgi de tre viktigste elementene i en boligannonse. Bilder toppet listen.",
      source: "FINNs eiendomsundersøkelse 2025",
    },
  },
  photoBoost: {
    eyebrow: "Bildeløft",
    heading: "Rotete, mørkt og tatt med mobilen?",
    body: "Skal boligen leies ut på korttid eller langtid – eller selges – har du ikke alltid tid eller penger til fotograf. Vi bruker AI-verktøy til å gjøre bildene lysere og skarpere, rette opp linjene og fjerne løst rot.",
    hint: "Dra for å se forskjellen",
    beforeLabel: "Før",
    afterLabel: "Etter bildeløft",
  },
  showcase2: {
    eyebrow: "Digital styling",
    heading: "Vis hva et tomt rom kan bli.",
    body: "Et tomt rom er vanskelig å se for seg. Du velger stil – moderne, hjemmekoselig eller midt imellom – så møblerer vi rommet digitalt. Vegger, gulv og vinduer endres aldri, og bildet merkes som digital styling.",
    hint: "Dra for å se rommet før og etter",
    beforeLabel: "Før",
    afterLabel: "Etter digital styling",
    link: "Les om digital styling",
  },
  howItWorks: {
    eyebrow: "Slik fungerer det",
    heading: "Tre enkle steg.",
    intro:
      "Alt skjer skriftlig: du sender bildene, vi forbedrer dem, og du får dem tilbake på lenke. Ingen møter, ingen fotograf.",
    steps: [
      { title: "Send bildene", description: "Send bildene eller lenken til annonsen." },
      { title: "Vi gir dem et løft", description: "Vi bruker AI-verktøy og sender bildene tilbake på lenke." },
      { title: "Flere klikk", description: "Du laster opp de nye bildene og får flere klikk." },
    ],
    channels: ["FINN", "Airbnb", "Booking.com"],
  },
  cases: {
    eyebrow: "Eksempler",
    heading: "Se forskjellen selv.",
    improvedLabel: "Etter bildeløft",
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
      "Tre tjenester – fra raske bildeløft til en komplett plan for salg. Du betaler fast pris, og får faktura etter levering. Har du flere boliger i måneden, gir en fast avtale mest verdi for pengene.",
    items: [
      {
        key: "photoBoost",
        title: "Bildeløft",
        price: "1 890 kr",
        priceNote: "inntil 40 bilder",
        description:
          "Det første bildet avgjør på 2,7 sekunder om noen klikker seg inn. Vi bruker AI-verktøy til å gjøre bildene lysere og skarpere, rette opp linjer og fjerne løst rot. Passer for korttidsutleie, langtidsutleie og salg av bolig.",
        features: [
          "Inntil 40 bilder med bildeløft",
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
        priceNote: "per rom",
        description:
          "Fysisk boligstyling kan fort koste tusenvis av kroner. Nå kan den gjøres digitalt: Du forteller hvilken stil du liker – moderne, hjemmekoselig eller midt imellom – så gjør vi rommene riktig hjemmekoselige.",
        features: [
          "Du velger stil – vi gjør resten",
          "Tomme rom møblert, eller slitte møbler byttet ut",
          "Merket «Digital styling – illustrasjon. Møbler følger ikke med.»",
          "Originalbildet ved siden av",
        ],
        note: "Ikke for Airbnb. Der skal gjestene se møblene de faktisk får.",
      },
      {
        key: "saleBoost",
        title: "Salgsløftet",
        price: "4 900 kr",
        priceNote: "Mini · Stor: 9 900 kr",
        description:
          "Vis kjøperne potensialet. Med enkle grep for 20 000–100 000 kr – litt maling på veggene eller nye kjøkkenfronter – kan boligen løftes betraktelig, også i taksten.",
        features: [
          "Før/etter-bilder av boligens potensial",
          "Handleliste med tiltak, kostnad og rekkefølge (PDF)",
          "Hva du kan gjøre selv, og hva som krever fagfolk",
          "Merket «Illustrasjon – ikke utført»",
        ],
        note: "For meglere og deg som selger selv. Hvor mye taksten kan øke, vurderer megler eller takstmann.",
      },
    ],
    termsNote: "Alle priser inkl. mva. Meglere faktureres eks. mva.",
    ctaLabel: "Les mer",
  },
  plans: {
    eyebrow: "Faste avtaler",
    badge: "Mest verdi for pengene",
    heading: "Flere boliger i måneden? Fast avtale gir mest for pengene.",
    intro:
      "For meglere og utleieforvaltere som trenger gode bilder hver måned. Én fast pris, én faktura – og opptil 47 % lavere pris enn å bestille hver gang.",
    items: [
      {
        key: "brokerPlan",
        title: "Megleravtale",
        audience: "For eiendomsmeglere og meglerkontor",
        price: "9 900 kr",
        pricePeriod: "per måned",
        value: "18 690 kr",
        savings: "Spar 8 790 kr i måneden",
        badge: "Mest verdi for pengene",
        features: [
          "Bildeløft for opptil 8 boliger i måneden – inntil 40 bilder per bolig",
          "Digital styling av 3 rom i måneden",
          "Ekstra Bildeløft: 1 490 kr (ellers 1 890 kr)",
          "Én samlet faktura i måneden",
        ],
      },
      {
        key: "managerPlan",
        title: "Forvalteravtale",
        audience: "For Airbnb- og utleieforvaltere",
        price: "4 900 kr",
        pricePeriod: "per måned",
        value: "7 560 kr",
        savings: "Spar 2 660 kr i måneden",
        features: [
          "Bildeløft for opptil 4 enheter i måneden – inntil 40 bilder per enhet",
          "Naturlig forbedring som følger Airbnbs regler",
          "Ekstra Bildeløft: 1 490 kr (ellers 1 890 kr)",
          "Én samlet faktura i måneden",
        ],
      },
    ],
    terms: ["Første måned gratis", "3 måneders binding, deretter 1 måneds oppsigelse", "Faktura i starten av måneden"],
    note: "Verdi kjøpt enkeltvis er beregnet med vanlige priser. Ubrukte jobber overføres ikke til neste måned. Salgsløftet bestilles separat.",
    ctaLabel: "Start gratis måned",
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
          "Salgsløftet viser kjøperne potensialet i boliger som har ligget lenge ute, og digital styling fyller tomme rom. Meglere faktureres eks. mva.",
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
      "Hos Eiendomly bruker jeg AI-verktøy til å gjøre boligen din klar for klikk.",
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
      { q: "Hva er en fast avtale?", a: "For meglere og utleieforvaltere med flere boliger i måneden. Du betaler en fast pris og får et antall bildejobber inkludert hver måned – opptil 47 % billigere enn å bestille enkeltvis. Første måned er gratis." },
      { q: "Er dette lov?", a: "Ja, når bildene ikke villeder. Vi forbedrer lys og kvalitet, merker digital styling og endrer aldri faste ting eller skader." },
      { q: "Kan jeg bruke bildene på Airbnb?", a: "Ja, Bildeløft er laget for det. Vi holder det naturlig og legger aldri tekst i bildene." },
      { q: "Hvem eier bildene?", a: "Du bekrefter at du har rett til bildene du sender. Du får full bruksrett til resultatet." },
      { q: "Hvor fort får jeg dem?", a: "Bildeløft innen 24 timer. For digital styling og Salgsløftet får du beskjed om leveringstid når vi har sett bildene." },
      { q: "Hva hvis jeg ikke er fornøyd?", a: "Du får én ny runde gratis, eller pengene tilbake." },
      { q: "Må jeg ta nye bilder?", a: "Nei. Vi bruker bildene du har, også mobilbilder." },
      { q: "Øker Salgsløftet verdien?", a: "Enkle grep som maling og nye kjøkkenfronter kan løfte boligen betraktelig. Hvor mye taksten kan øke, vurderer megler eller takstmann – vi lover ingen bestemt sum." },
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
      customerTypes: ["Privat utleier", "Airbnb-vert", "Selger selv", "Megler", "Utleieforvalter", "Hotell", "Restaurant"],
      serviceOptions: [
        { key: "photoBoost", label: "Bildeløft" },
        { key: "virtualStaging", label: "Digital styling" },
        { key: "saleBoost", label: "Salgsløftet" },
        { key: "brokerPlan", label: "Megleravtale – 9 900 kr/mnd" },
        { key: "managerPlan", label: "Forvalteravtale – 4 900 kr/mnd" },
        { key: "unsure", label: "Usikker" },
      ],
      submit: "Send bestilling",
      errorMessage: "Noe gikk galt. Prøv igjen, eller send oss en e-post på",
      privacyNote: "Vi verner om personvernet ditt. Opplysningene du oppgir brukes kun til å svare deg og levere tjenesten – vi deler dem ikke med andre.",
      privacyLink: "Les om personvern",
    },
  },
  servicePages: {
    photoBoost: {
      eyebrow: "Bildeløft",
      heading: "Gjør dine egne bilder klare for FINN og Airbnb",
      forWho:
        "Passer for korttidsutleie, langtidsutleie og salg av bolig – for private utleiere, Airbnb-verter og deg som selger selv.",
      whatItIs:
        "Du sender bildene du har, også mobilbilder. Vi bruker AI-verktøy til å gjøre dem lysere og skarpere, rette opp linjer og fjerne løst rot. Du får også et sterkere forsidebilde og forslag til tittel.",
      highlight: "Det første bildet avgjør på 2,7 sekunder om noen klikker seg inn – eller blar videre.",
      facts: [
        {
          value: "2,7 sek",
          label: "brukte boligkjøpere i snitt før de valgte å se nærmere på en bolig – eller bla videre.",
          source: "Rightmove, Storbritannia",
        },
        {
          value: "58 %",
          label: "valgte bilder som ett av de tre viktigste elementene i en boligannonse. Bilder toppet listen.",
          source: "FINNs eiendomsundersøkelse 2025",
        },
        {
          value: "15 000 kr",
          label: "taper du hvis en bolig til 15 000 kr i måneden står tom én måned ekstra.",
        },
      ],
      includesHeading: "Du får",
      includes: [
        "Inntil 40 bilder med bildeløft",
        "Valgt og optimalisert forsidebilde",
        "3 forslag til annonsetittel",
        "Levert innen 24 timer",
      ],
      priceHeading: "Pris",
      price: "1 890 kr",
      priceNote: "inntil 40 bilder",
      note: "Til Airbnb gjør vi kun naturlig forbedring, slik Airbnbs regler krever.",
      cta: "Bestill bildeløft",
    },
    virtualStaging: {
      eyebrow: "Digital styling",
      heading: "Møbler tomme rom – eller bytt ut det som trekker ned",
      forWho:
        "Passer for tomme boliger som skal selges eller leies ut, og boliger med møbler som ikke følger med – for eksempel en slitt sofa.",
      whatItIs:
        "Fysisk boligstyling kan fort koste tusenvis av kroner. Nå kan den gjøres digitalt. Du forteller hvilken stil du liker – moderne, hjemmekoselig eller midt imellom – så møblerer vi rommene og gjør dem riktig hjemmekoselige. Faste ting som vegger, gulv, kjøkken og vinduer endres aldri.",
      highlight: "Spar tusenvis av kroner på styling – og gi kjøperne følelsen av et hjem.",
      includesHeading: "Du får",
      includes: [
        "Du velger stil – vi gjør resten",
        "Tomme rom møblert, eller slitte møbler byttet ut",
        "Merket «Digital styling – illustrasjon. Møbler følger ikke med.»",
        "Originalbildet ved siden av",
      ],
      priceHeading: "Pris",
      price: "1 190 kr",
      priceNote: "per rom",
      note: "Ikke for Airbnb. Der skal gjestene se møblene de faktisk får.",
      cta: "Bestill digital styling",
    },
    saleBoost: {
      eyebrow: "Salgsløftet",
      heading: "Vis kjøperne hva boligen kan bli – og hva det koster",
      forWho:
        "For meglere og deg som selger uten megler – særlig boliger som har ligget lenge ute, står tomme eller er gamle.",
      whatItIs:
        "Andre trenger å se potensialet. Vi lager før/etter-bilder av enkle grep – litt maling på veggene, nye kjøkkenfronter eller oljet gulv – og gir deg en handleliste med tiltak, kostnad og rekkefølge. Grepene skal være enkle og rimelige for de aller fleste. Står boligen tom, eller er den gammel og du ikke vet hvor du skal begynne, får du inspirasjon og en konkret plan.",
      highlight:
        "Med tiltak for 20 000–100 000 kr kan boligen løftes betraktelig, også i taksten. Har den ligget lenge ute uten å bli solgt, kan dette være grepet som snur det.",
      includesHeading: "Du får",
      includes: [
        "Før/etter-bilder av boligens potensial",
        "Handleliste med tiltak, kostnad og rekkefølge (PDF)",
        "Hva du kan gjøre selv, og hva som krever fagfolk",
        "Merket «Illustrasjon – ikke utført»",
      ],
      priceHeading: "Pris",
      tiers: [
        { name: "Mini", price: "4 900 kr", detail: "Tiltak under 20 000 kr, 5 før/etter" },
        { name: "Stor", price: "9 900 kr", detail: "Tiltak 20 000–100 000 kr, 10 før/etter og prioritert liste" },
      ],
      note: "Hvor mye taksten kan øke, vurderer megleren eller takstmannen din. Vi viser hva det koster og hvordan det kan se ut.",
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
        "Vi verner om personvernet ditt. Opplysningene du gir oss brukes kun til å levere tjenesten du bestiller – vi selger dem ikke og deler dem ikke med andre. Under kan du lese hva vi samler inn, hvorfor, og hvilke rettigheter du har.",
      sections: [
        {
          heading: "Vi deler ikke opplysningene dine",
          body: "Navn, e-post, bilder og annet du sender oss blir hos Eiendomly. Vi selger, leier ut eller deler aldri opplysningene dine med andre. De eneste som behandler dem er tekniske leverandører som drifter skjemaet og e-posten vår, og de gjør det kun på våre vegne.",
        },
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
          body: "Skjemaet driftes av Netlify (Netlify Forms), som mottar og lagrer innsendingene på våre vegne. Vi bruker også en e-posttjeneste. Analyseverktøy brukes bare hvis du har godtatt det i cookie-valget.",
        },
        {
          heading: "Dine rettigheter",
          body: "Du kan når som helst be om innsyn i, retting eller sletting av opplysningene dine ved å kontakte oss på e-post. Du kan også klage til Datatilsynet.",
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
          heading: "Faste avtaler",
          body: "Megleravtale og forvalteravtale har første måned gratis, deretter 3 måneders binding og 1 måneds oppsigelse. Avtalen faktureres i starten av hver måned. Jobber som ikke brukes i løpet av måneden, overføres ikke. Ekstra Bildeløft utover avtalen koster 1 490 kr.",
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
        "Vi verner om personvernet ditt. Vi bruker informasjonskapsler (cookies) til analyse og markedsføring kun etter samtykke, vi deler ikke opplysningene dine med andre, og du kan endre valget ditt når du vil.",
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
    message: "Vi verner om personvernet ditt og deler ikke opplysningene dine med andre. Informasjonskapsler til analyse og markedsføring brukes bare hvis du godtar det.",
    acceptAll: "Godta alle",
    rejectAll: "Avvis alle",
    settings: "Innstillinger",
    save: "Lagre valg",
    analytics: "Analyse",
    marketing: "Markedsføring",
    changeConsent: "Endre samtykke",
  },
  footer: {
    tagline: "Det første bildet avgjør. Vi gjør det riktig.",
    linksHeading: "Nettsted",
    legalHeading: "Juridisk",
    contactHeading: "Kontakt",
    languageHeading: "Språk",
    rights: "Eiendomly. Alle rettigheter reservert.",
    legalName: "Eiendomly Solberg",
    replyNote: "Svar innen 24 timer på hverdager.",
  },
};
