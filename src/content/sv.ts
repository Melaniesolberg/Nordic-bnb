import type { SiteContent } from "./types";

export const sv: SiteContent = {
  meta: {
    title: "Nordic BnB — Fastighetsförvaltning, Costa del Sol",
    description:
      "Fullservice kortids- och långtidsuthyrning i Marbella, Mijas, Fuengirola och Benalmádena. Din fastighet, kontinuerligt förbättrad.",
  },
  nav: {
    links: [
      { label: "Systemet", href: "/sv#system" },
      { label: "Tjänster", href: "/sv#services" },
      { label: "Områden", href: "/sv#areas" },
      { label: "Om oss", href: "/sv#about" },
      { label: "Team", href: "/sv/contact" },
    ],
    cta: "Begär en fastighetsgenomgång",
    whatsapp: "WhatsApp",
    whatsappMessage: "Hej Nordic BnB — jag vill gärna prata om min fastighet.",
    toggleMenu: "Öppna meny",
    selectLanguage: "Välj språk",
  },
  hero: {
    eyebrow: "Fastighetsförvaltning — Costa del Sol",
    headlineLines: ["Din fastighet.", "Kontinuerligt förbättrad."],
    subline:
      "Fullservice kortids- och långtidsuthyrning i Marbella, Mijas, Fuengirola och Benalmádena — positionering, prissättning och presentation, ständigt förfinade.",
    ctaPrimary: "Begär en fastighetsgenomgång",
    ctaSecondary: "Prata med oss på WhatsApp",
    scrollHint: "Scrolla",
    locationTag: "Costa del Sol, Spanien",
  },
  system: {
    eyebrow: "Så här jobbar vi",
    heading: "Från tomt rum till bekräftad bokning.",
    intro:
      "Processen som gör en annons till en ström av återkommande gäster.",
    pillars: [
      {
        code: "",
        title: "Vi tar över fastigheten",
        description: "Från första kontakt till fullt ansvar, utan stress för dig.",
      },
      {
        code: "",
        title: "Vi inspekterar och uppgraderar stylingen",
        description: "Möbler, textilier och detaljer justerade för att imponera på gäster.",
      },
      {
        code: "",
        title: "Vi fotograferar och lanserar annonsen",
        description: "Professionella bilder, live på alla kanaler samma vecka.",
      },
      {
        code: "",
        title: "Vi hanterar bokningar och gäster",
        description: "Från första meddelandet till nyckelöverlämning — vi tar hand om allt.",
      },
      {
        code: "",
        title: "Vi städar och underhåller mellan varje vistelse",
        description: "Professionell städning, textilier och underhåll, så fastigheten alltid är gästklar.",
      },
      {
        code: "",
        title: "Vi rapporterar och förbättrar kontinuerligt",
        description: "Du följer utvecklingen, vi finjusterar pris och presentation.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Före → efter",
    heading: "Samma fastighet. En helt annan annons.",
    intro:
      "Vanliga annonser undersäljer extraordinära fastigheter. Så förändras allt när Nordic BnB tar över.",
    beforeLabel: "Före",
    afterLabel: "Nordic BnB",
    sliderAriaLabel: "Före- och efter-jämförelse av annons",
    beforeAlt: "Vanligt annonsfoto, före Nordic BnB",
    afterAlt: "Stylat Nordic BnB-annonsfoto, efter",
    fields: [
      {
        label: "Titel",
        before: "Trevlig lägenhet nära stranden, 2 sovrum",
        after: "Solig oas i Marbella, 90 sekunder från sanden",
      },
      {
        label: "Foto",
        before: "Mobilbilder, blandat ljus, stökiga rum",
        after: "Stylat, professionellt fotograferat, exteriörer i gyllene timmen",
      },
      {
        label: "Pris",
        before: "90 €/natt, fast hela året",
        after: "68–165 €/natt, justerat efter efterfrågan i realtid",
      },
      {
        label: "Beskrivning",
        before: "Två rader. Ingen historia, inga detaljer.",
        after: "Skriven för att sälja upplevelsen — och för att konvertera",
      },
      {
        label: "Synlighet",
        before: "Listad på en enda plattform",
        after: "Distribuerad på alla kanaler som betyder något",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portfölj",
    heading: "Verkliga förvandlingar, i alla fastighetstyper.",
    intro:
      "En inblick i hur Nordic BnB omplacerar annonser — lägenheter, villor och hus — längs Costa del Sol.",
    realResultsLabel: "Verkliga resultat",
    disclaimer: "Verkliga före/efter-foton. Tillväxtsiffrorna är illustrativa exempel tills vi kan publicera verifierad kunddata.",
    beforeLabel: "Före",
    afterLabel: "Efter",
    properties: [
      {
        name: "Lägenhet, Fuengirola",
        location: "Fuengirola",
        stats: [
          { value: "+29 %", label: "intäkt" },
          { value: "82 %", label: "beläggning" },
        ],
      },
      {
        name: "Villa, Marbella",
        location: "Marbella",
        stats: [
          { value: "+34 %", label: "intäkt" },
          { value: "86 %", label: "beläggning" },
        ],
      },
      {
        name: "Hus, Mijas",
        location: "Mijas",
        stats: [
          { value: "+27 %", label: "intäkt" },
          { value: "79 %", label: "beläggning" },
        ],
      },
    ],
  },
  services: {
    eyebrow: "Tjänster",
    heading: "Två strategier. En och samma omsorgsnivå.",
    intro:
      "Oavsett om din fastighet passar bäst för semestergäster eller en långtidshyresgäst gäller samma disciplin: fullservicedrift, kontinuerligt optimerad.",
    whatsappTemplate: "Hej Nordic BnB — jag vill gärna fråga om {service}.",
    shortTerm: {
      title: "Korttids- och semesteruthyrning",
      price: "14,9 % + moms",
      priceNote: "av uthyrningsintäkten",
      description:
        "Komplett förvaltning av Airbnb och Booking.com — från första annons till daglig drift.",
      features: [
        "Skapande och löpande optimering av annonsen",
        "Dynamisk, efterfrågestyrd prissättning",
        "Distribution på flera kanaler (Airbnb, Booking.com m.fl.)",
        "Gästkommunikation och incheckningssamordning",
        "Professionell städning och linneservice",
        "Fastighetsbesiktningar mellan vistelser",
        "Underhållssamordning",
        "Styling samt foto-/innehållssamordning",
        "Rapportering till ägaren",
      ],
    },
    longTerm: {
      title: "Långtidsuthyrning",
      price: "7,45 % + moms",
      priceNote: "av månadshyran",
      description:
        "Marknadsföring, hyresgästsamordning och löpande tillsyn för ägare som vill ha förutsägbara, lågintensiva intäkter.",
      features: [
        "Marknadsföring och hyresgästsökning",
        "Hyresgästsamordning och kommunikation",
        "Hyresinkassering och hantering",
        "Fastighetstillsyn",
        "Underhållssamordning",
        "Rapportering till ägaren",
      ],
    },
    termsNote:
      "Slutliga kommersiella villkor kan bero på fastigheten, dess typ och de specifika tjänstekraven — siffrorna ovan speglar vår standardstruktur.",
    ctaLabel: "Fråga om denna tjänst",
  },
  dashboard: {
    eyebrow: "Ägarupplevelse",
    heading: "Du äger fastigheten. Vi sköter driften.",
    intro:
      "En livevy över hur din fastighet presterar — bokningar, beläggning, städstatus, underhåll och din månatliga utbetalning, alltid synliga.",
    footnote: "Konceptgränssnitt — illustrativ ägarpanel, visad med exempeldata.",
    windowTitle: "Villa Sunrise — Ägarportal",
    cardAlt: "Villa Sunrise, fastigheten bakom denna panel",
    revenueChangeNote: "+18 % jämfört med förra månaden",
    payoutNote: "1 okt — banköverföring",
    cleaningStatusText: "Städning schemalagd",
    maintenanceStatusText: "Inga öppna ärenden",
    labels: {
      revenue: "Intäkt denna månad",
      occupancy: "Beläggning",
      upcoming: "Kommande vistelser",
      cleaning: "Städstatus",
      maintenance: "Underhåll",
      payout: "Nästa utbetalning",
      guest: "Gäst",
      status: "Status",
    },
  },
  operations: {
    eyebrow: "Drift",
    heading: "Systemet bakom varje vistelse.",
    intro:
      "Ett lokalt nätverk av städare, stylister och underhållssamordnare — som rör sig i sekvens kring varje gäst, varje gång.",
    bannerHeadline: "Varje vistelse, förberedd för hand.",
    sequenceLabels: {
      styling: "Styling",
      cleaning: "Städning",
      guestArrival: "Gästankomst",
      detail: "Detalj",
    },
    steps: [
      { title: "Bokning bekräftad", detail: "Bokningen synkas direkt över alla kanaler." },
      { title: "Gäst förberedd", detail: "Incheckningsuppgifter, husguide och välkomstmeddelande skickas." },
      { title: "Städning schemalagd", detail: "Professionell städning bokas och bekräftas automatiskt." },
      { title: "Fastighet inspekterad", detail: "Styling, skick och bekvämligheter kontrolleras före ankomst." },
      { title: "Gästen anländer", detail: "Smidig incheckning, och ett team redo för allt som behövs." },
      { title: "Omdöme insamlat", detail: "Gästupplevelsen avslutas och feedback samlas in." },
      { title: "Resultat styr prissättning", detail: "Varje vistelses data skärper nästa prisbeslut." },
    ],
  },
  compare: {
    eyebrow: "Korttid vs. långtid",
    heading: "Osäker på vilken strategi som passar din fastighet?",
    intro:
      "Båda vägarna kan fungera bra på Costa del Sol. Den rätta beror på din fastighet, dina mål och hur involverad du vill vara.",
    shortTerm: {
      title: "Korttids-/semesteruthyrning",
      tagline: "Högre intäktspotential, mer aktiv förvaltning",
      points: [
        "Högre intäktspotential under högsäsong",
        "Kräver aktiv, löpande förvaltning",
        "Intäkterna varierar med säsong",
        "Mer flexibilitet att använda fastigheten själv",
      ],
    },
    longTerm: {
      title: "Långtidsuthyrning",
      tagline: "Förutsägbar intäkt, lägre driftsintensitet",
      points: [
        "Stabil, förutsägbar månadsintäkt",
        "Lägre daglig driftsintensitet",
        "Längre, stabilare hyresförhållande",
        "Mindre flexibilitet att använda fastigheten själv",
      ],
    },
    cta: "Hitta rätt strategi för din fastighet",
  },
  areas: {
    eyebrow: "Var vi verkar",
    heading: "Costa del Sol, från Málaga till Marbella.",
    intro:
      "Lokal närvaro längs kusten innebär snabbare svarstider, bättre lokalkännedom och prissättning som speglar varje delmarknad.",
    areas: [
      {
        name: "Marbella",
        description: "Exklusiva villor och havsnära lägenheter på Spaniens mest etablerade lyxmarknad.",
      },
      {
        name: "Mijas",
        description: "Kustnära Mijas Costa och byn på sluttningen — starkt intresse året runt.",
      },
      {
        name: "Fuengirola",
        description: "Högvolym strandturism med jämn korttidsefterfrågan.",
      },
      {
        name: "Benalmádena",
        description: "En balanserad mix av familjesemestrar och långtidsboende vid kusten.",
      },
      {
        name: "Málaga",
        description: "En kulturell huvudstad med en växande marknad för stadssemestrar och långtidsuthyrning.",
      },
      {
        name: "Torremolinos",
        description: "En klassisk badort med jämn turistefterfrågan året runt.",
      },
    ],
  },
  about: {
    eyebrow: "Om oss",
    heading: "Byggt på en enkel idé.",
    paragraphs: [
      "Nordic BnB grundades 2023 och byggs kring en enkel idé: fastighetsförvaltning bör inte vara passiv. En annons som publiceras och sedan lämnas ifred kommer underprestera — tyst, i åratal, utan att någon märker det.",
      "Varje fastighet vi förvaltar ska granskas, testas och förbättras kontinuerligt — pris, presentation, positionering — snarare än ställas in en gång och glömmas bort.",
      "Bakom Nordic BnB finns ett lokalt driftsnätverk: städning, styling, underhåll och samordning på plats längs hela Costa del Sol, tillsammans med grundare som tror att ägare förtjänar full insyn i hur deras fastighet presterar.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Founder & Head of Growth, Nordic BnB",
    founderQuote:
      "Vi driver inte bara en annons — vi bygger en fastighet som faktiskt konverterar. Vi känner marknaden på Costa del Sol, och vi känner gästerna, särskilt de skandinaviska gästerna som bokar här.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Head of Operations & Marketing, Nordic BnB",
    founder2Quote:
      "Varje ägare förtjänar att se exakt hur deras fastighet presterar — ingen gissning, ingen svart låda.",
  },
  testimonials: {
    eyebrow: "Ägaromdömen",
    heading: "Vad folk säger.",
    items: [
      {
        quote:
          "Hade svårt att fylla lägenheten på vintern. Nordic BnB tog över i mars, och i augusti var vi fullbokade ut oktober. Får en rapport i månaden nu istället för att jaga svar själv.",
        name: "Kristian H.",
        location: "Marbella",
      },
      {
        quote:
          "Bor i Stockholm, har inte sett lägenheten på över ett år. Nordic BnB sköter allt, och intäkterna har gått upp.",
        name: "Annika L.",
        location: "Fuengirola",
      },
      {
        quote:
          "Drev det själv i tre år. Nu slipper jag oroa mig — inga klagomål, och telefonen ringer inte längre mitt i natten.",
        name: "Carlos M.",
        location: "Benalmádena",
      },
    ],
  },
  finalCta: {
    eyebrow: "Låt oss prata",
    heading: "Låt oss se vad din fastighet kan göra.",
    subline:
      "Din fastighet förtjänar mer än grundläggande förvaltning. Begär en kostnadsfri genomgång så visar vi exakt var den underpresterar — och hur kontinuerlig förbättring skulle se ut.",
    ctaPrimary: "Begär en fastighetsgenomgång",
    ctaSecondary: "WhatsAppa oss",
    form: {
      fields: {
        name: "Namn",
        email: "E-post",
        phone: "Telefon / WhatsApp",
        location: "Fastighetens läge",
        propertyType: "Fastighetstyp",
        bedrooms: "Sovrum",
        currentlyRented: "Uthyrd för närvarande?",
        yes: "Ja",
        no: "Nej",
        strategy: "Korttid, långtid eller osäker?",
        strategyOptions: { short: "Korttid", long: "Långtid", unsure: "Osäker" },
        message: "Meddelande",
      },
      submit: "Få din kostnadsfria genomgång",
      successTitle: "Mottaget.",
      successBody: "Tack — vi hör av oss inom kort. För något brådskande, kontakta oss på WhatsApp.",
      errorMessage: "Något gick fel — prova WhatsApp istället.",
    },
  },
  footer: {
    tagline: "Din fastighet. Kontinuerligt förbättrad.",
    linksHeading: "Webbplats",
    contactHeading: "Kontakt",
    languageHeading: "Språk",
    rights: "Nordic BnB. Alla rättigheter förbehållna.",
    orgNumberLabel: "Org.nr 931 905 856",
    realPhotosNote: "Före/efter-bilderna på denna sida är verkliga resultat, inte illustration, om inget annat anges.",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Varje fastighet förtjänar att berättas väl.",
  },
  showcase2: {
    eyebrow: "Presentation",
    heading: "Stylad, fotograferad och positionerad för att prestera.",
  },
  contactPage: {
    eyebrow: "Team",
    heading: "Teamet bakom Nordic BnB.",
    intro:
      "Ett litet, handplockat team — inte ett callcenter. Hör av dig direkt, eller läs vem som står bakom arbetet med din fastighet.",
    teamHeading: "Teamet på plats",
    teamIntro:
      "Vid sidan av oss håller ett lokalt driftteam varje fastighet igång, dag för dag.",
    roles: [
      { title: "Handyman", description: "Underhåll, reparationer och tillsyn mellan bokningar." },
      { title: "Städteam", description: "Professionell städning och byte av textilier efter varje gäst." },
      { title: "Fotograf/stylist", description: "Styling och fotografering för varje ny annons." },
    ],
    emailHeading: "Maila oss direkt",
    ctaHeading: "Låt oss prata om din fastighet.",
    ctaSubline:
      "Har du en fråga, eller vill se vad Nordic BnB kan göra för din fastighet? Skicka ett mail — vi svarar personligen, oftast inom en dag.",
    ctaButton: "Maila oss",
    recruitCta:
      "Intresserad av att bli en del av vårt lokala team som städare, handyman eller fotograf? Hör av dig — vi är alltid öppna för bra folk.",
  },
};
