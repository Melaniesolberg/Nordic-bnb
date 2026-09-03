import type { SiteContent } from "./types";

export const no: SiteContent = {
  meta: {
    title: "Nordic BnB — Eiendomsforvaltning, Costa del Sol",
    description:
      "Førsteklasses forvaltning av korttids- og langtidsutleie i Marbella, Mijas, Fuengirola og Benalmádena. Din eiendom, kontinuerlig forbedret.",
  },
  nav: {
    links: [
      { label: "Systemet", href: "#system" },
      { label: "Tjenester", href: "#services" },
      { label: "Områder", href: "#areas" },
      { label: "Om oss", href: "#about" },
    ],
    cta: "Be om en eiendomsgjennomgang",
    whatsapp: "WhatsApp",
  },
  hero: {
    eyebrow: "Eiendomsforvaltning — Costa del Sol",
    headlineLines: ["Din eiendom.", "Kontinuerlig forbedret."],
    subline:
      "Komplett forvaltning av korttids- og langtidsutleie i Marbella, Mijas, Fuengirola og Benalmádena — posisjonering, prising og presentasjon, finpusset uten stopp.",
    ctaPrimary: "Be om en eiendomsgjennomgang",
    ctaSecondary: "Snakk med oss på WhatsApp",
    scrollHint: "Scroll",
    locationTag: "Costa del Sol, Spania",
  },
  problem: {
    eyebrow: "Problemet",
    heading: "En vakker eiendom. En fragmentert drift.",
    intro:
      "De fleste eiere på Costa del Sol mangler ikke en flott eiendom — de mangler et system. Bildene er utdaterte. Prisen har ikke endret seg på måneder. Meldinger hoper seg opp på tre ulike apper. Rengjøring avtales i en gruppechat. Og ingen ser helheten.",
    frictions: [
      { label: "Annonse", detail: "Fotografi og tekst som underselger eiendommen" },
      { label: "Prising", detail: "Én fast pris, hele året, uavhengig av etterspørsel" },
      { label: "Kanaler", detail: "Airbnb, Booking.com og henvendelser håndtert hver for seg" },
      { label: "Gjester", detail: "Meldinger besvart sent — eller ikke i det hele tatt" },
      { label: "Rengjøring", detail: "Koordinert ad hoc, uten kvalitetskontroll" },
      { label: "Vedlikehold", detail: "Feil oppdages av neste gjest, ikke før" },
    ],
    pivot: "Nordic BnB tar kontroll over hele driften.",
  },
  system: {
    eyebrow: "Nordic BnB-systemet",
    heading: "Ett driftssystem for hele utleien.",
    intro:
      "Seks disipliner som jobber kontinuerlig og i samspill — ikke en engangsjobb med å legge ut en annonse. Scroll for å bevege deg gjennom systemet.",
    pillars: [
      {
        code: "01",
        title: "Posisjonere",
        description:
          "Fotografi, styling og annonsetekst bygget opp på nytt for å vise eiendommen på sitt beste — på hver eneste kanal den vises.",
      },
      {
        code: "02",
        title: "Prise",
        description:
          "Dynamisk, etterspørselsstyrt prising som følger sesong, kalender og konkurrentbildet — ikke én fast pris.",
      },
      {
        code: "03",
        title: "Distribuere",
        description:
          "Airbnb, Booking.com og kanalene som betyr noe for din eiendom, synkronisert og optimalisert for hvert publikum.",
      },
      {
        code: "04",
        title: "Være vert",
        description:
          "Rask, varm gjestekommunikasjon fra henvendelse til utsjekk, og en innsjekkopplevelse som fortjener fem stjerner.",
      },
      {
        code: "05",
        title: "Pleie",
        description:
          "Profesjonell rengjøring, styling-justeringer og vedlikeholdskoordinering mellom hvert eneste opphold.",
      },
      {
        code: "06",
        title: "Forbedre",
        description:
          "Ytelsen vurderes kontinuerlig, og hver beslutning — pris, bilder, tekst — finjusteres etter det dataene viser.",
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
  performance: {
    eyebrow: "Ytelse",
    heading: "Slik ser kontinuerlig forbedring ut.",
    intro:
      "Et illustrerende optimaliseringsscenario for en leilighet med to soverom på Costa del Sol, som viser hva et helhetlig system kan gi over en sesong.",
    disclaimer:
      "Kun illustrerende eksempel — ikke et verifisert Nordic BnB-resultat. Tallene er et demonstrasjonsscenario inntil reelle kundedata kan publiseres her.",
    metrics: [
      { value: "+18 %", label: "Gjennomsnittlig døgnpris" },
      { value: "+24 %", label: "Inntektspotensial" },
      { value: "+13 %", label: "Belegg" },
      { value: "4,9", label: "Gjestevurdering" },
    ],
    chartLabel: "Illustrerende inntektskurve, måned for måned",
    channelLabel: "Illustrerende kanalfordeling",
  },
  services: {
    eyebrow: "Tjenester",
    heading: "To strategier. Én standard for omsorg.",
    intro:
      "Enten eiendommen egner seg best for feriegjester eller en langtidsleietaker, gjelder samme disiplin: fullservice-forvaltning, kontinuerlig optimalisert.",
    shortTerm: {
      title: "Forvaltning av korttids- og ferieutleie",
      price: "20 % + moms",
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
      price: "8 % + moms",
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
    footnote: "Konseptgrensesnitt — illustrerende eierpanel, vist med eksempeldata.",
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
    heading: "Costa del Sol, fra Marbella til Benalmádena.",
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
    ],
  },
  about: {
    eyebrow: "Om oss",
    heading: "Bygget på en enkel idé.",
    paragraphs: [
      "Nordic BnB bygges rundt en enkel idé: eiendomsforvaltning bør ikke være passiv. En annonse som publiseres og deretter overlates til seg selv, vil underprestere — stille, over flere år, uten at noen legger merke til det.",
      "Hver eiendom vi forvalter skal gjennomgås, testes og forbedres kontinuerlig — prising, presentasjon, posisjonering — i stedet for å settes opp én gang og glemmes.",
      "Bak Nordic BnB står et lokalt driftsnettverk: rengjøring, styling, vedlikehold og koordinering på bakken langs Costa del Sol, sammen med en grunnlegger som mener eiere fortjener full innsikt i hvordan eiendommen deres presterer.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Grunnlegger, Nordic BnB",
    founderQuote:
      "Eiere skal ikke måtte velge mellom en vakker eiendom og en godt drevet en. Vår jobb er å sørge for at de aldri må.",
  },
  team: {
    eyebrow: "Teamet",
    heading: "Menneskene bak driften.",
    intro:
      "Nordic BnB drives av et koordinert lokalt nettverk — ikke én altmuligperson. Hver disiplin har sitt eget fokus.",
    placeholderNotice: "Demo-plassholderprofiler — erstattes med reelle teammedlemmer etter hvert som nettverket vokser.",
    members: [
      { name: "Teammedlem — Drift", role: "Driftskoordinering", note: "Plassholderprofil" },
      { name: "Teammedlem — Gjesteopplevelse", role: "Gjesteopplevelse", note: "Plassholderprofil" },
      { name: "Teammedlem — Styling", role: "Eiendomsstyling", note: "Plassholderprofil" },
      { name: "Teammedlem — Renhold", role: "Renholdsdrift", note: "Plassholderprofil" },
      { name: "Teammedlem — Vedlikehold", role: "Vedlikeholdskoordinering", note: "Plassholderprofil" },
    ],
  },
  testimonials: {
    eyebrow: "Eiernes tilbakemeldinger",
    heading: "Hva eiere kommer til å si.",
    placeholderNotice:
      "Eksempel på tilbakemelding — erstattes med verifisert kundeomtale. Vist her kun for å demonstrere layouten.",
    items: [
      {
        quote:
          "Eksempel på tilbakemelding — erstattes med verifisert kundeomtale. Plassholdertekst som illustrerer tone og lengde for et fremtidig eiersitat.",
        name: "Eksempeleier",
        location: "Marbella",
      },
      {
        quote:
          "Eksempel på tilbakemelding — erstattes med verifisert kundeomtale. Plassholdertekst som illustrerer tone og lengde for et fremtidig eiersitat.",
        name: "Eksempeleier",
        location: "Fuengirola",
      },
      {
        quote:
          "Eksempel på tilbakemelding — erstattes med verifisert kundeomtale. Plassholdertekst som illustrerer tone og lengde for et fremtidig eiersitat.",
        name: "Eksempeleier",
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
    },
  },
  footer: {
    tagline: "Din eiendom. Kontinuerlig forbedret.",
    linksHeading: "Nettsted",
    contactHeading: "Kontakt",
    languageHeading: "Språk",
    rights: "Nordic BnB. Alle rettigheter forbeholdt.",
  },
};
