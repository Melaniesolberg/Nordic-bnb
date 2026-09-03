import type { SiteContent } from "./types";

export const sv: SiteContent = {
  meta: {
    title: "Nordic BnB — Fastighetsförvaltning, Costa del Sol",
    description:
      "Fullservice kortids- och långtidsuthyrning i Marbella, Mijas, Fuengirola och Benalmádena. Din fastighet, kontinuerligt förbättrad.",
  },
  nav: {
    links: [
      { label: "Systemet", href: "#system" },
      { label: "Tjänster", href: "#services" },
      { label: "Områden", href: "#areas" },
      { label: "Om oss", href: "#about" },
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
  problem: {
    eyebrow: "Problemet",
    heading: "En vacker fastighet. En splittrad drift.",
    subline:
      "Vi tar över annonsering, prissättning, gästkommunikation, städning och underhåll — ett komplett driftsystem för din uthyrning.",
    intro:
      "De flesta ägare på Costa del Sol saknar inte en fin fastighet — de saknar ett system. Bilderna är gamla. Priset har inte ändrats på månader. Meddelanden hopar sig i tre olika appar. Städningen sköts via gruppchatt. Och ingen ser helheten.",
    frictions: [
      { label: "Annons", detail: "Foton och text som undersäljer fastigheten" },
      { label: "Pris", detail: "Ett fast pris, hela året, oavsett efterfrågan" },
      { label: "Kanaler", detail: "Airbnb, Booking.com och förfrågningar hanteras separat" },
      { label: "Gäster", detail: "Meddelanden besvaras sent, eller aldrig" },
      { label: "Städning", detail: "Samordnas ad hoc, utan kvalitetskontroll" },
      { label: "Underhåll", detail: "Problem upptäcks av nästa gäst, inte innan" },
    ],
    pivot: "Nordic BnB tar kontroll över hela driften.",
    imageAlt: "Ett typiskt, undersäljande annonsfoto",
    imageBadge: "Före Nordic BnB",
  },
  system: {
    eyebrow: "Nordic BnB-systemet",
    heading: "Ett operativsystem för hela uthyrningen.",
    intro:
      "Sex discipliner som samverkar kontinuerligt — inte en engångsinstallation. Scrolla för att gå igenom systemet.",
    pillars: [
      {
        code: "01",
        title: "Positionera",
        description:
          "Foto, styling och annonstext ombyggda för att visa fastigheten från sin bästa sida — på varje kanal den syns.",
      },
      {
        code: "02",
        title: "Prissätt",
        description:
          "Dynamisk, efterfrågestyrd prissättning som följer säsong, kalender och konkurrens — inte ett enda fast pris.",
      },
      {
        code: "03",
        title: "Distribuera",
        description:
          "Airbnb, Booking.com och de kanaler som betyder något för din fastighet, synkroniserade och optimerade för varje målgrupp.",
      },
      {
        code: "04",
        title: "Ta emot",
        description:
          "Snabb, varm gästkommunikation från förfrågan till utcheckning, och en incheckning som ger femstjärniga omdömen.",
      },
      {
        code: "05",
        title: "Sköta om",
        description:
          "Professionell städning, stylingjusteringar och underhållssamordning mellan varje vistelse.",
      },
      {
        code: "06",
        title: "Förbättra",
        description:
          "Resultat granskas löpande, och varje beslut — pris, foto, text — förfinas utifrån vad datan visar.",
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
    disclaimer: "Illustrativa exempeltal — inte verifierade Nordic BnB-resultat.",
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
  performance: {
    eyebrow: "Resultat",
    heading: "Så här ser kontinuerlig förbättring ut.",
    intro:
      "Ett illustrativt optimeringsscenario för en tvårumsfastighet på Costa del Sol, som visar den typ av utveckling ett komplett system kan skapa under en säsong.",
    disclaimer:
      "Endast illustrativt exempel — inte ett verifierat Nordic BnB-resultat. Siffrorna är ett demonstrationsscenario tills verklig kunddata kan publiceras här.",
    metrics: [
      { value: "+18 %", label: "Genomsnittligt nattpris" },
      { value: "+24 %", label: "Intäktspotential" },
      { value: "+13 %", label: "Beläggning" },
      { value: "4,9", label: "Gästbetyg" },
    ],
    chartLabel: "Illustrativ intäktskurva, månad för månad",
    channelLabel: "Illustrativ kanalfördelning",
    directOtherLabel: "Direkt & övrigt",
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
    heading: "Costa del Sol, från Marbella till Benalmádena.",
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
    ],
  },
  about: {
    eyebrow: "Om oss",
    heading: "Byggt på en enkel idé.",
    paragraphs: [
      "Nordic BnB byggs kring en enkel idé: fastighetsförvaltning bör inte vara passiv. En annons som publiceras och sedan lämnas ifred kommer underprestera — tyst, i åratal, utan att någon märker det.",
      "Varje fastighet vi förvaltar ska granskas, testas och förbättras kontinuerligt — pris, presentation, positionering — snarare än ställas in en gång och glömmas bort.",
      "Bakom Nordic BnB finns ett lokalt driftsnätverk: städning, styling, underhåll och samordning på plats längs hela Costa del Sol, tillsammans med grundare som tror att ägare förtjänar full insyn i hur deras fastighet presterar.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Grundare, Nordic BnB",
    founderQuote:
      "Ägare ska inte behöva välja mellan en vacker fastighet och en välskött en. Vårt jobb är att se till att de aldrig behöver göra det.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Medgrundare, Nordic BnB",
    founder2Quote:
      "Varje ägare förtjänar att se exakt hur deras fastighet presterar — ingen gissning, ingen svart låda.",
  },
  testimonials: {
    eyebrow: "Ägaromdömen",
    heading: "Vad ägare kommer att säga.",
    placeholderNotice:
      "Exempelcitat som speglar tonen vi förväntar oss från ägare — ännu inte verifierade recensioner.",
    items: [
      {
        quote:
          "Jag bor i Sverige och äger en lägenhet i Fuengirola. Det jag uppskattar mest är kommunikationen — jag vet alltid hur det går, och fastigheten har aldrig presenterats så bra som nu.",
        name: "Annika L.",
        location: "Svensk ägare, Fuengirola",
      },
      {
        quote:
          "Jag bor i Norge och äger en lägenhet i Marbella — Nordic BnB gör att jag faktiskt kan sova om natten. Intäkterna har gått upp, och det är inte längre jag som svarar gäster klockan två på natten.",
        name: "Kristian H.",
        location: "Norsk ägare, Marbella",
      },
      {
        quote:
          "Jag skötte lägenheten själv i flera år. Med Nordic BnB känns allt mer professionellt — bättre bilder, bättre prissättning och betydligt färre huvudvärk.",
        name: "Carlos M.",
        location: "Spansk ägare, Benalmádena",
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
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Varje fastighet förtjänar att berättas väl.",
  },
  showcase2: {
    eyebrow: "Presentation",
    heading: "Stylad, fotograferad och positionerad för att prestera.",
  },
};
