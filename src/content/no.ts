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
    whatsappMessage: "Hei Nordic BnB — jeg vil gjerne snakke om eiendommen min.",
    toggleMenu: "Åpne meny",
    selectLanguage: "Velg språk",
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
  system: {
    eyebrow: "Slik jobber vi",
    heading: "Fra tomt rom til bekreftet bestilling.",
    intro:
      "Prosessen som gjør en annonse om til en strøm av gjester som kommer tilbake — scroll for å følge den fra start til slutt.",
    pillars: [
      {
        code: "01",
        title: "Styling",
        description:
          "En stylist innreder rommet med møbler, tekstiler og lys til det føles som et hjem, ikke en utleieenhet.",
      },
      {
        code: "02",
        title: "Rengjøring",
        description:
          "Profesjonell vask fra topp til bunn, før hver eneste gjest ankommer.",
      },
      {
        code: "03",
        title: "Fotografering",
        description:
          "Profesjonell fotografering fanger eiendommen i sitt beste lys, klar for alle kanaler.",
      },
      {
        code: "04",
        title: "Synkronisering",
        description:
          "Annonsen publiseres umiddelbart på Airbnb, Booking.com og alle kanalene som betyr noe.",
      },
      {
        code: "05",
        title: "Innsjekk",
        description:
          "Gjesten henter nøklene — eller sjekker inn selv — og er på plass i løpet av minutter.",
      },
      {
        code: "06",
        title: "Bestilling",
        description:
          "Oppholdet avsluttes, anmeldelsen kommer inn, og neste bestilling er allerede bekreftet.",
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
    footnote: "Konseptgrensesnitt — illustrerende eierpanel, vist med eksempeldata.",
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
      "Nordic BnB ble stiftet i 2023, og er bygget rundt en enkel idé: eiendomsforvaltning bør ikke være passiv. En annonse som publiseres og deretter overlates til seg selv, vil underprestere — stille, over flere år, uten at noen legger merke til det.",
      "Hver eiendom vi forvalter skal gjennomgås, testes og forbedres kontinuerlig — prising, presentasjon, posisjonering — i stedet for å settes opp én gang og glemmes.",
      "Bak Nordic BnB står et lokalt driftsnettverk: rengjøring, styling, vedlikehold og koordinering på bakken langs Costa del Sol, sammen med grunnleggere som mener eiere fortjener full innsikt i hvordan eiendommen deres presterer.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Grunnlegger, Nordic BnB",
    founderQuote:
      "Eiere skal ikke måtte velge mellom en vakker eiendom og en godt drevet en. Vår jobb er å sørge for at de aldri må.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Medgrunnlegger, Nordic BnB",
    founder2Quote:
      "Hver eier fortjener å se nøyaktig hvordan eiendommen deres presterer — ingen gjetting, ingen svart boks.",
  },
  testimonials: {
    eyebrow: "Eiernes tilbakemeldinger",
    heading: "Hva folk sier.",
    items: [
      {
        quote:
          "Vi hadde eid leiligheten i to år og slet alltid med å fylle den om vinteren. Nordic BnB tok over i mars, og innen august var vi fullbooket helt ut oktober. Det beste er at jeg får én enkel rapport hver måned i stedet for å jage svar selv.",
        name: "Kristian H.",
        location: "Marbella",
      },
      {
        quote:
          "Jeg bor i Stockholm og har ikke sett leiligheten fysisk siden Nordic BnB tok over styling og renhold. Likevel vet jeg nøyaktig hva som skjer hver uke gjennom rapportene deres, og inntekten har økt med god margin siden i fjor sommer.",
        name: "Annika L.",
        location: "Fuengirola",
      },
      {
        quote:
          "Jeg drev leiligheten selv i tre år, og skiftet laken mellom gjestene. Siden Nordic BnB tok over i januar har jeg ikke måttet bekymre meg for noe — ikke én klage, og telefonen min pipes ikke lenger av WhatsApp-meldinger midt på natten.",
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
    realPhotosNote: "Før/etter-bildene på denne siden er ekte resultater, ikke illustrasjon, med mindre annet er merket.",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Hver eiendom forteller en historie verdt å fortelle godt.",
  },
  showcase2: {
    eyebrow: "Presentasjon",
    heading: "Stylet, fotografert og posisjonert for å prestere.",
  },
};
