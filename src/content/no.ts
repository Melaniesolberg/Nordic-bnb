import type { SiteContent } from "./types";

export const no: SiteContent = {
  meta: {
    title: "Nordic BnB — Eiendomsforvaltning, Costa del Sol",
    description:
      "Førsteklasses forvaltning av korttids- og langtidsutleie i Marbella, Mijas, Fuengirola og Benalmádena. Din eiendom, kontinuerlig forbedret.",
  },
  nav: {
    links: [
      { label: "Systemet", href: "/no#system" },
      { label: "Tjenester", href: "/no#services" },
      { label: "Områder", href: "/no#areas" },
      { label: "Om oss", href: "/no#about" },
      { label: "Team", href: "/no/contact" },
    ],
    cta: "Be om en eiendomsgjennomgang",
    whatsapp: "WhatsApp",
    whatsappMessage: "Hei Nordic BnB — jeg vil gjerne snakke om eiendommen min.",
    toggleMenu: "Åpne meny",
    selectLanguage: "Velg språk",
  },
  hero: {
    eyebrow: "Eiendomsforvaltning — Costa del Sol",
    headlineLines: ["Din eiendom.", "Kontinuerlig forbedret."],
    subline:
      "Komplett forvaltning av korttids- og langtidsutleie i Marbella, Mijas, Fuengirola, Benalmádena, Torremolinos og Málaga — posisjonering, prising og presentasjon, finpusset uten stopp.",
    ctaPrimary: "Be om en eiendomsgjennomgang",
    ctaSecondary: "Snakk med oss på WhatsApp",
    scrollHint: "Scroll",
    locationTag: "Costa del Sol, Spania",
  },
  system: {
    eyebrow: "Hva kan du forvente",
    heading: "Hva kan du forvente av oss?",
    intro:
      "Prosessen som gjør en annonse om til en strøm av gjester som kommer tilbake.",
    pillars: [
      {
        code: "",
        title: "Vi overtar eiendommen",
        description: "Fra første kontakt til fullt ansvar, uten stress for deg.",
      },
      {
        code: "",
        title: "Vi inspiserer og oppgraderer styling",
        description: "Møbler, tekstiler og detaljer justert for å imponere gjester.",
      },
      {
        code: "",
        title: "Vi fotograferer og lanserer annonsen",
        description: "Profesjonelle bilder, live på alle kanaler samme uke.",
      },
      {
        code: "",
        title: "Vi håndterer bookinger og gjester",
        description: "Fra første melding til nøkkeloverlevering — vi tar oss av alt.",
      },
      {
        code: "",
        title: "Vi rengjør og vedlikeholder mellom hvert opphold",
        description: "Profesjonell vask, tekstiler og vedlikehold, slik at eiendommen alltid er gjesteklar.",
      },
      {
        code: "",
        title: "Vi rapporterer og forbedrer kontinuerlig",
        description: "Du følger utviklingen, vi finjusterer prisen og presentasjonen.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Før → etter",
    heading: "Samme eiendom. En helt annen annonse.",
    intro:
      "Ordinære annonser underselger ekstraordinære eiendommer. Slik ser endringen ut når Nordic BnB tar over.",
    beforeLabel: "Før",
    afterLabel: "Nordic BnB",
    sliderAriaLabel: "Før- og etter-sammenligning av annonse",
    beforeAlt: "Ordinært annonsefoto, før Nordic BnB",
    afterAlt: "Stylet Nordic BnB-annonsefoto, etter",
    disclaimer: "Illustrert eksempel, kun til demonstrasjon.",
    fields: [
      {
        label: "Tittel",
        before: "Fin leilighet nær stranden, 2 soverom",
        after: "Solfylt tilfluktssted i Marbella, 90 sekunder fra sanden",
      },
      {
        label: "Fotografi",
        before: "Mobilbilder, blandet lys, rotete rom",
        after: "Stylet, profesjonelt fotografert, eksteriør i gyllent lys",
      },
      {
        label: "Prising",
        before: "900 kr/natt, fast hele året",
        after: "680–1650 kr/natt, justert etter etterspørsel i sanntid",
      },
      {
        label: "Beskrivelse",
        before: "To linjer. Ingen historie, ingen detaljer.",
        after: "Skrevet for å selge opplevelsen — og for å konvertere",
      },
      {
        label: "Synlighet",
        before: "Annonsert på én plattform",
        after: "Distribuert på alle kanaler som betyr noe",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portefølje",
    heading: "Ekte transformasjoner, for alle eiendomstyper.",
    intro:
      "Et innblikk i hvordan Nordic BnB reposisjonerer annonser — leiligheter, villaer og hus — langs Costa del Sol.",
    realResultsLabel: "Ekte resultater",
    disclaimer: "Ekte før/etter-bilder. Vekstallene er illustrerende eksempler inntil vi kan publisere verifiserte kundedata.",
    beforeLabel: "Før",
    afterLabel: "Etter",
    properties: [
      {
        name: "Leilighet, Fuengirola",
        location: "Fuengirola",
        stats: [
          { value: "+29 %", label: "inntekt" },
          { value: "82 %", label: "belegg" },
        ],
      },
      {
        name: "Villa, Marbella",
        location: "Marbella",
        stats: [
          { value: "+34 %", label: "inntekt" },
          { value: "86 %", label: "belegg" },
        ],
      },
      {
        name: "Hus, Mijas",
        location: "Mijas",
        stats: [
          { value: "+27 %", label: "inntekt" },
          { value: "79 %", label: "belegg" },
        ],
      },
    ],
  },
  services: {
    eyebrow: "Tjenester",
    heading: "To strategier. Én standard for omsorg.",
    intro:
      "Enten eiendommen egner seg best for feriegjester eller en langtidsleietaker, gjelder samme disiplin: fullservice-forvaltning, kontinuerlig optimalisert.",
    whatsappTemplate: "Hei Nordic BnB — jeg vil gjerne spørre om {service}.",
    shortTerm: {
      title: "Forvaltning av korttids- og ferieutleie",
      price: "14,9 % + moms",
      priceNote: "av leieinntekten",
      description:
        "Komplett forvaltning av Airbnb og Booking.com — fra første annonse til daglig drift.",
      features: [
        "Opprettelse og løpende optimalisering av annonse",
        "Dynamisk, etterspørselsstyrt prising",
        "Distribusjon på flere kanaler (Airbnb, Booking.com m.fl.)",
        "Gjestekommunikasjon og innsjekkkoordinering",
        "Profesjonell rengjøring og linservice",
        "Eiendomsinspeksjon mellom opphold",
        "Vedlikeholdskoordinering",
        "Styling og koordinering av foto/innhold",
        "Rapportering til eier",
      ],
    },
    longTerm: {
      title: "Forvaltning av langtidsutleie",
      price: "7,45 % + moms",
      priceNote: "av månedlig leie",
      description:
        "Markedsføring, leietakerkoordinering og løpende oppfølging for eiere som ønsker forutsigbar inntekt med lav driftsintensitet.",
      features: [
        "Markedsføring og leietakersøk",
        "Leietakerkoordinering og kommunikasjon",
        "Innkreving og forvaltning av leie",
        "Eiendomsoppfølging",
        "Vedlikeholdskoordinering",
        "Rapportering til eier",
      ],
    },
    termsNote:
      "Endelige kommersielle vilkår kan avhenge av eiendommen, typen og de spesifikke tjenestebehovene — tallene over reflekterer vår standardstruktur.",
    ctaLabel: "Spør om denne tjenesten",
  },
  dashboard: {
    eyebrow: "Eieropplevelsen",
    heading: "Du eier eiendommen. Vi håndterer driften.",
    intro:
      "Full innsikt i hvordan eiendommen din presterer — bookinger, belegg, rengjøringsstatus, vedlikehold og din månedlige utbetaling, alltid synlig.",
    windowTitle: "Villa Sunrise — Eierportal",
    cardAlt: "Villa Sunrise, eiendommen bak dette panelet",
    revenueChangeNote: "+18 % sammenlignet med forrige måned",
    payoutNote: "1. okt — bankoverføring",
    cleaningStatusText: "Rengjøring planlagt",
    maintenanceStatusText: "Ingen åpne saker",
    labels: {
      revenue: "Inntekt denne måneden",
      occupancy: "Belegg",
      upcoming: "Kommende opphold",
      cleaning: "Rengjøringsstatus",
      maintenance: "Vedlikehold",
      payout: "Neste utbetaling",
      guest: "Gjest",
      status: "Status",
    },
  },
  operations: {
    eyebrow: "Drift",
    heading: "Systemet bak hvert eneste opphold.",
    intro:
      "Et lokalt nettverk av renholdere, stylister og vedlikeholdskoordinatorer — som beveger seg i sekvens rundt hver gjest, hver gang.",
    bannerHeadline: "Hvert opphold, forberedt for hånd.",
    sequenceLabels: {
      styling: "Styling",
      cleaning: "Rengjøring",
      guestArrival: "Gjesteankomst",
      detail: "Detalj",
    },
    steps: [
      { title: "Booking bekreftet", detail: "Reservasjon synkronisert på tvers av alle kanaler umiddelbart." },
      { title: "Gjest forberedt", detail: "Innsjekkinfo, husguide og velkomstmelding sendt." },
      { title: "Renhold planlagt", detail: "Profesjonelt renhold bestilt og bekreftet automatisk." },
      { title: "Eiendom inspisert", detail: "Styling, tilstand og fasiliteter sjekket før ankomst." },
      { title: "Gjest ankommer", detail: "Smidig innsjekk, og et team tilgjengelig ved behov." },
      { title: "Anmeldelse innhentet", detail: "Gjesteopplevelsen avsluttes, tilbakemelding samles inn." },
      { title: "Ytelse styrer prising", detail: "Data fra hvert opphold skjerper neste prisbeslutning." },
    ],
  },
  compare: {
    eyebrow: "Korttid vs. langtid",
    heading: "Usikker på hvilken strategi som passer din eiendom?",
    intro:
      "Begge veier kan fungere godt på Costa del Sol. Den rette avhenger av eiendommen, målene dine og hvor involvert du ønsker å være.",
    shortTerm: {
      title: "Korttids-/ferieutleie",
      tagline: "Høyere inntektspotensial, mer aktiv forvaltning",
      points: [
        "Høyere inntektspotensial i høysesong",
        "Krever aktiv, kontinuerlig forvaltning",
        "Inntekten varierer med sesong",
        "Mer fleksibilitet til å bruke eiendommen selv",
      ],
    },
    longTerm: {
      title: "Langtidsutleie",
      tagline: "Forutsigbar inntekt, lavere driftsintensitet",
      points: [
        "Stabil, forutsigbar månedlig inntekt",
        "Lavere daglig driftsintensitet",
        "Lengre, mer stabilt leieforhold",
        "Mindre fleksibilitet til å bruke eiendommen selv",
      ],
    },
    cta: "Finn riktig strategi for din eiendom",
  },
  areas: {
    eyebrow: "Hvor vi opererer",
    heading: "Costa del Sol, fra Málaga til Marbella.",
    intro:
      "Lokal tilstedeværelse langs kysten gir raskere responstid, bedre lokalkunnskap og priser som gjenspeiler hvert mikromarked.",
    areas: [
      {
        name: "Marbella",
        description: "Eksklusive villaer og leiligheter ved sjøen i Spanias mest etablerte luksusmarked.",
      },
      {
        name: "Mijas",
        description: "Kystnære Mijas Costa og fjellandsbyen — sterk appell hele året.",
      },
      {
        name: "Fuengirola",
        description: "Høyt turistvolum ved stranden med jevn etterspørsel etter korttidsutleie.",
      },
      {
        name: "Benalmádena",
        description: "En balansert miks av familieferier og langsiktig kystliv.",
      },
      {
        name: "Torremolinos",
        description: "En klassisk strandby med jevn turistetterspørsel hele året.",
      },
      {
        name: "Málaga",
        description: "En kulturell hovedstad med et voksende marked for bykortferier og langtidsleie.",
      },
    ],
  },
  about: {
    eyebrow: "Om oss",
    heading: "Bygget på en enkel idé.",
    paragraphs: [
      "Nordic BnB ble stiftet i 2023, og er bygget rundt en enkel idé: eiendomsforvaltning bør ikke være passiv. En annonse som publiseres og deretter overlates til seg selv, vil underprestere — stille, over flere år, uten at noen legger merke til det.",
      "Hver eiendom vi forvalter skal gjennomgås, testes og forbedres kontinuerlig — prising, presentasjon, posisjonering — i stedet for å settes opp én gang og glemmes.",
      "Bak Nordic BnB står et lokalt driftsnettverk: rengjøring, styling, vedlikehold og koordinering på bakken langs Costa del Sol, sammen med grunnleggere som mener eiere fortjener full innsikt i hvordan eiendommen deres presterer.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Founder & Head of Growth, Nordic BnB",
    founderQuote:
      "Vi driver ikke bare en annonse — vi bygger en eiendom som faktisk konverterer. Vi kjenner markedet på Costa del Sol, og vi kjenner kundene, spesielt de skandinaviske gjestene som booker her. Og vi forvalter ikke bare på avstand — vårt eget handyman- og vedlikeholdsteam gjør oppgraderingen, fiksingen og vedlikeholdet selv, på hver eneste eiendom vi driver.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Head of Operations & Marketing, Nordic BnB",
    founder2Quote:
      "Hver eier fortjener å se nøyaktig hvordan eiendommen deres presterer — ingen gjetting, ingen svart boks.",
  },
  testimonials: {
    eyebrow: "Eiernes tilbakemeldinger",
    heading: "Hva folk sier.",
    items: [
      {
        quote:
          "Slet med å fylle leiligheten om vinteren. Nordic BnB tok over i mars, og i august var vi fullbooket ut oktober. Får én rapport i måneden nå i stedet for å jage svar selv.",
        name: "Kristian H.",
        location: "Marbella",
      },
      {
        quote:
          "Bor i Stockholm, har ikke sett leiligheten på over et år. Nordic BnB tar seg av alt, og inntekten har gått opp.",
        name: "Annika L.",
        location: "Fuengirola",
      },
      {
        quote:
          "Drev det selv i tre år. Nå slipper jeg å bekymre meg — ingen klager, og telefonen ringer ikke lenger midt på natten.",
        name: "Carlos M.",
        location: "Benalmádena",
      },
    ],
  },
  finalCta: {
    eyebrow: "La oss snakke",
    heading: "La oss se hva eiendommen din kan gjøre.",
    subline:
      "Eiendommen din fortjener mer enn grunnleggende forvaltning. Be om en gratis eiendomsgjennomgang, så viser vi deg nøyaktig hvor den underpresterer — og hvordan kontinuerlig forbedring kan se ut.",
    ctaPrimary: "Be om en eiendomsgjennomgang",
    ctaSecondary: "Skriv til oss på WhatsApp",
    form: {
      fields: {
        name: "Navn",
        email: "E-post",
        phone: "Telefon / WhatsApp",
        location: "Eiendommens beliggenhet",
        propertyType: "Eiendomstype",
        bedrooms: "Antall soverom",
        currentlyRented: "Leies den ut i dag?",
        yes: "Ja",
        no: "Nei",
        strategy: "Korttid, langtid, eller usikker?",
        strategyOptions: { short: "Korttid", long: "Langtid", unsure: "Usikker" },
        message: "Melding",
      },
      submit: "Få din gratis eiendomsgjennomgang",
      successTitle: "Mottatt.",
      successBody: "Takk — vi tar kontakt snart. For noe akutt, skriv til oss på WhatsApp.",
      errorMessage: "Noe gikk galt — prøv WhatsApp i stedet.",
    },
  },
  footer: {
    tagline: "Din eiendom. Kontinuerlig forbedret.",
    linksHeading: "Nettsted",
    contactHeading: "Kontakt",
    languageHeading: "Språk",
    rights: "Nordic BnB. Alle rettigheter forbeholdt.",
    orgNumberLabel: "Org.nr. 931 905 856",
    privacyLabel: "Personvern",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Hver eiendom forteller en historie verdt å fortelle godt.",
  },
  showcase2: {
    eyebrow: "Presentasjon",
    heading: "Stylet, fotografert og posisjonert for å prestere.",
  },
  contactPage: {
    eyebrow: "Team",
    heading: "Teamet bak Nordic BnB.",
    intro:
      "Et dedikert team som faktisk driver — ikke bare administrerer — eiendommen din. Ta direkte kontakt, eller les hvem som står bak arbeidet på eiendommen din.",
    teamName: "Vårt driftsteam",
    teamHeading: "Teamet på bakken",
    teamIntro:
      "Dette er vårt eget team — internt, ikke innleid — som holder hver eiendom i gang, dag for dag.",
    roles: [
      { title: "Handyman", description: "Vedlikehold, reparasjoner og tilsyn mellom opphold." },
      { title: "Vasketeam", description: "Profesjonell klargjøring og skift av tekstiler etter hver gjest." },
      { title: "Fotograf/stylist", description: "Styling og fotografering for hver nye annonse." },
    ],
    emailHeading: "Send oss en e-post direkte",
    ctaHeading: "La oss snakke om eiendommen din.",
    ctaSubline:
      "Har du et spørsmål, eller vil se hva Nordic BnB kan gjøre for eiendommen din? Send oss en e-post — vi svarer personlig, som regel innen en dag.",
    ctaButton: "Send e-post",
    recruitEyebrow: "Bli en del av teamet",
    recruitHeading: "Vil du jobbe hos oss?",
    recruitSubline:
      "Vi er alltid åpne for gode folk. Er du vasker, handyman eller fotograf på Costa del Sol, hører vi gjerne fra deg.",
    story: {
      eyebrow: "Vår historie",
      heading: "Fra markedsføring til vertskap.",
      milestones: [
        {
          period: "August 2023",
          title: "Der det startet",
          body: "Nordic BnB startet med digital markedsføring, og hjalp bedrifter og eiendomsmeglere med å presentere seg selv og eiendommene sine bedre på nett. Det lærte oss én ting tidlig: presentasjon endrer oppfatning — og oppfatning endrer verdi.",
        },
        {
          period: "2024",
          title: "Nærmere eiendom",
          body: "Arbeidet vårt ble stadig mer rettet mot eiendom, innhold, fotografering, posisjonering og måten hjem ble presentert på nett. Vi begynte å se det samme problemet igjen og igjen: gode eiendommer ble ofte markedsført langt under sitt potensial.",
        },
        {
          period: "2025",
          title: "Fra Norge til Costa del Sol 🇪🇸",
          body: "Vi flyttet til Spania og opplevde utleiemarkedet på Costa del Sol innenfra — både som beboere og eiendomseiere/-operatører. Det som startet som markedsføringskunnskap ble raskt til noe større: forståelse for hva internasjonale gjester forventer, hva eiere sliter med, og hva som gjør at én eiendom presterer bedre enn en annen.",
        },
        {
          period: "Sent 2025",
          title: "Ideen utviklet seg",
          body: "Vi begynte å kombinere alt vi allerede kunne — markedsføring, presentasjon, interiør, gjesteopplevelse og eiendom — til én komplett tjeneste for eiere av ferieutleie.",
        },
        {
          period: "2026",
          title: "Nordic BnB i dag",
          body: "Nordic BnB ble et fullservice selskap for ferieutleie og eiendomsforvaltning på Costa del Sol. Fra klargjøring og oppgradering av eiendommen til styling, fotografering, annonser, prising, gjestekommunikasjon, rengjøring, vedlikehold og full forvaltning. Ett selskap. Ett kontaktpunkt. Alt håndtert.",
        },
        {
          period: "2026 →",
          title: "Neste kapittel",
          body: "Målet vårt er enkelt: bygge en ny standard for ferieutleieforvaltning på Costa del Sol — som kombinerer skandinavisk service, sterk presentasjon og lokal gjennomføring. Vi oppgraderer. Vi styler. Vi forvalter.",
        },
      ],
    },
  },
  privacyPage: {
    eyebrow: "Personvern",
    heading: "Personvernerklæring.",
    updated: "Sist oppdatert: september 2026",
    intro:
      "Denne siden forklarer, i enkle ord, hvilke opplysninger Nordic BnB samler inn når du kontakter oss, og hvordan vi bruker dem.",
    sections: [
      {
        heading: "Hva vi samler inn",
        body: "Når du tar kontakt via kontaktskjemaet vårt, e-post eller WhatsApp, samler vi inn opplysningene du oppgir — vanligvis navn, e-postadresse, telefonnummer og informasjon om eiendommen din eller henvendelsen.",
      },
      {
        heading: "Hvordan vi bruker det",
        body: "Vi bruker disse opplysningene kun til å svare på henvendelsen din, gi en eiendomsgjennomgang eller et tilbud, og — om du blir kunde — til å forvalte eiendommen din og kommunisere med deg om den. Vi selger ikke opplysningene dine til tredjeparter.",
      },
      {
        heading: "Hvor lenge vi oppbevarer det",
        body: "Vi oppbevarer henvendelsesopplysninger så lenge det er nødvendig for å svare deg, eller — om du blir kunde — for varigheten av samarbeidet vårt og deretter så lenge loven krever.",
      },
      {
        heading: "Dine rettigheter",
        body: "Du kan når som helst spørre oss om hvilke opplysninger vi har om deg, be oss rette dem, eller be om at vi sletter dem. Send oss bare en e-post, så ordner vi det.",
      },
    ],
    contactHeading: "Spørsmål om dine opplysninger?",
    contactBody: "For personvernhenvendelser, send oss en e-post direkte, så svarer vi deg personlig.",
  },
};
