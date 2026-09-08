import type { SiteContent } from "./types";

export const da: SiteContent = {
  meta: {
    title: "Nordic BnB — Ejendomsadministration, Costa del Sol",
    description:
      "Fuld service korttids- og langtidsudlejning i Marbella, Mijas, Fuengirola og Benalmádena. Din ejendom, løbende forbedret.",
  },
  nav: {
    links: [
      { label: "Systemet", href: "/da#system" },
      { label: "Tjenester", href: "/da#services" },
      { label: "Områder", href: "/da#areas" },
      { label: "Om os", href: "/da#about" },
      { label: "Team", href: "/da/contact" },
    ],
    cta: "Anmod om en ejendomsgennemgang",
    whatsapp: "WhatsApp",
    whatsappMessage: "Hej Nordic BnB — jeg vil gerne tale om min ejendom.",
    toggleMenu: "Åbn menu",
    selectLanguage: "Vælg sprog",
  },
  hero: {
    eyebrow: "Ejendomsadministration — Costa del Sol",
    headlineLines: ["Din ejendom.", "Løbende forbedret."],
    subline:
      "Fuld service korttids- og langtidsudlejning i Marbella, Mijas, Fuengirola, Benalmádena, Torremolinos og Málaga — positionering, prissætning og præsentation, konstant forfinet.",
    ctaPrimary: "Anmod om en ejendomsgennemgang",
    ctaSecondary: "Skriv til os på WhatsApp",
    scrollHint: "Scroll",
    locationTag: "Costa del Sol, Spanien",
  },
  system: {
    eyebrow: "Hvad du kan forvente",
    heading: "Hvad kan du forvente af os?",
    intro:
      "Processen der gør en annonce til en strøm af gæster, der kommer igen.",
    pillars: [
      {
        code: "",
        title: "Vi overtager ejendommen",
        description: "Fra første kontakt til fuldt ansvar, uden stress for dig.",
      },
      {
        code: "",
        title: "Vi inspicerer og opgraderer stylingen",
        description: "Møbler, tekstiler og detaljer justeret for at imponere gæster.",
      },
      {
        code: "",
        title: "Vi fotograferer og lancerer annoncen",
        description: "Professionelle billeder, live på alle kanaler samme uge.",
      },
      {
        code: "",
        title: "Vi håndterer bookinger og gæster",
        description: "Fra første besked til nøgleoverdragelse — vi tager os af det hele.",
      },
      {
        code: "",
        title: "Vi rengør og vedligeholder mellem hvert ophold",
        description: "Professionel rengøring, tekstiler og vedligeholdelse, så ejendommen altid er gæsteklar.",
      },
      {
        code: "",
        title: "Vi rapporterer og forbedrer løbende",
        description: "Du følger udviklingen, vi finjusterer pris og præsentation.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Før → efter",
    heading: "Samme ejendom. En helt anden annonce.",
    intro:
      "Hvilken annonce ville du have valgt?",
    beforeLabel: "Før",
    afterLabel: "Nordic BnB",
    sliderAriaLabel: "Før- og efter-sammenligning af annonce",
    beforeAlt: "Almindeligt annoncefoto, før Nordic BnB",
    afterAlt: "Stylet Nordic BnB-annoncefoto, efter",
    disclaimer: "Illustreret eksempel, kun til demonstrationsformål.",
    fields: [
      {
        label: "Titel",
        before: "Fin lejlighed nær stranden, 2 værelser",
        after: "Solrigt tilflugtssted i Marbella, 90 sekunder fra sandet",
      },
      {
        label: "Fotografi",
        before: "Mobilbilleder, blandet lys, rodede rum",
        after: "Stylet, professionelt fotograferet, eksteriør i det gyldne timelys",
      },
      {
        label: "Pris",
        before: "90 €/nat, fast hele året",
        after: "68–165 €/nat, justeret efter efterspørgsel i realtid",
      },
      {
        label: "Beskrivelse",
        before: "To linjer. Ingen historie, ingen detaljer.",
        after: "Skrevet for at sælge oplevelsen — og for at konvertere",
      },
      {
        label: "Synlighed",
        before: "Annonceret på én platform",
        after: "Distribueret på alle kanaler der betyder noget",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portefølje",
    heading: "Virkelige forvandlinger, på tværs af alle ejendomstyper.",
    intro:
      "Et indblik i hvordan Nordic BnB genpositionerer annoncer — lejligheder, villaer og huse — langs Costa del Sol.",
    realResultsLabel: "Ægte resultater",
    disclaimer: "Ægte før/efter-billeder og ægte væksttal fra vores egne ejendomme.",
    beforeLabel: "Før",
    afterLabel: "Efter",
    properties: [
      {
        name: "Lejlighed, Fuengirola",
        location: "Fuengirola",
        stats: [
          { value: "+29 %", label: "indtægt" },
          { value: "82 %", label: "belægning" },
        ],
      },
      {
        name: "Villa, Marbella",
        location: "Marbella",
        stats: [
          { value: "+34 %", label: "indtægt" },
          { value: "86 %", label: "belægning" },
        ],
      },
      {
        name: "Hus, Mijas",
        location: "Mijas",
        stats: [
          { value: "+27 %", label: "indtægt" },
          { value: "79 %", label: "belægning" },
        ],
      },
    ],
  },
  services: {
    eyebrow: "Tjenester",
    heading: "To strategier. Ét niveau af omhu.",
    intro:
      "Uanset om din ejendom passer bedst til feriegæster eller en langtidslejer, gælder samme disciplin: fuld servicedrift, løbende optimeret.",
    whatsappTemplate: "Hej Nordic BnB — jeg vil gerne spørge om {service}.",
    shortTerm: {
      title: "Korttids- og ferieudlejning",
      price: "14,9 % + moms",
      priceNote: "af udlejningsindtægten",
      description:
        "Komplet administration af Airbnb og Booking.com — fra første annonce til daglig drift.",
      features: [
        "Oprettelse og løbende optimering af annonce",
        "Dynamisk, efterspørgselsstyret prissætning",
        "Distribution på flere kanaler (Airbnb, Booking.com m.fl.)",
        "Gæstekommunikation og koordinering af indtjekning",
        "Professionel rengøring og linnedservice",
        "Ejendomsinspektioner mellem ophold",
        "Vedligeholdelseskoordinering",
        "Styling samt foto-/indholdskoordinering",
        "Rapportering til ejeren",
      ],
    },
    longTerm: {
      title: "Langtidsudlejning",
      price: "7,45 % + moms",
      priceNote: "af den månedlige leje",
      description:
        "Markedsføring, lejerkoordinering og løbende tilsyn til ejere der ønsker forudsigelig, lavintensiv indkomst.",
      features: [
        "Markedsføring og lejersøgning",
        "Lejerkoordinering og kommunikation",
        "Lejeopkrævning og -håndtering",
        "Ejendomstilsyn",
        "Vedligeholdelseskoordinering",
        "Rapportering til ejeren",
      ],
    },
    termsNote:
      "Endelige kommercielle vilkår kan afhænge af ejendommen, dens type og de specifikke servicekrav — tallene ovenfor afspejler vores standardstruktur.",
    ctaLabel: "Spørg om denne tjeneste",
  },
  dashboard: {
    eyebrow: "Ejeroplevelse",
    heading: "Du ejer ejendommen. Vi håndterer driften.",
    intro:
      "Et live overblik over hvordan din ejendom præsterer — bookinger, belægning, rengøringsstatus, vedligeholdelse og din månedlige udbetaling, altid synlige.",
    windowTitle: "Villa Sunrise — Ejerportal",
    cardAlt: "Villa Sunrise, ejendommen bag dette panel",
    revenueChangeNote: "+18 % ift. sidste måned",
    payoutNote: "1. okt — bankoverførsel",
    cleaningStatusText: "Rengøring planlagt",
    maintenanceStatusText: "Ingen åbne sager",
    labels: {
      revenue: "Indtægt denne måned",
      occupancy: "Belægning",
      upcoming: "Kommende ophold",
      cleaning: "Rengøringsstatus",
      maintenance: "Vedligeholdelse",
      payout: "Næste udbetaling",
      guest: "Gæst",
      status: "Status",
    },
  },
  operations: {
    eyebrow: "Drift",
    heading: "Systemet bag hvert ophold.",
    intro:
      "Et lokalt netværk af rengøringspersonale, stylister og vedligeholdelseskoordinatorer — der bevæger sig i rækkefølge omkring hver gæst, hver gang.",
    bannerHeadline: "Hvert ophold, forberedt i hånden.",
    sequenceLabels: {
      styling: "Styling",
      cleaning: "Rengøring",
      guestArrival: "Gæsteankomst",
      detail: "Detalje",
    },
    steps: [
      { title: "Booking bekræftet", detail: "Reservationen synkroniseres øjeblikkeligt på tværs af alle kanaler." },
      { title: "Gæst forberedt", detail: "Indtjekningsoplysninger, husguide og velkomstbesked sendes." },
      { title: "Rengøring planlagt", detail: "Professionel rengøring bestilles og bekræftes automatisk." },
      { title: "Ejendom inspiceret", detail: "Styling, stand og faciliteter kontrolleres før ankomst." },
      { title: "Gæsten ankommer", detail: "Problemfri indtjekning, og et team klar til alt der er brug for." },
      { title: "Anmeldelse indsamlet", detail: "Gæsteoplevelsen afsluttes, og feedback indsamles." },
      { title: "Præstation styrer prisen", detail: "Data fra hvert ophold skærper den næste prisbeslutning." },
    ],
  },
  compare: {
    eyebrow: "Korttid vs. langtid",
    heading: "Usikker på hvilken strategi der passer til din ejendom?",
    intro:
      "Begge veje kan fungere godt på Costa del Sol. Den rette afhænger af din ejendom, dine mål og hvor involveret du vil være.",
    shortTerm: {
      title: "Korttids-/ferieudlejning",
      tagline: "Højere indtjeningspotentiale, mere aktiv administration",
      points: [
        "Højere indtægtspotentiale i højsæsonen",
        "Kræver aktiv, løbende administration",
        "Indtægten varierer med sæsonen",
        "Mere fleksibilitet til selv at bruge ejendommen",
      ],
    },
    longTerm: {
      title: "Langtidsudlejning",
      tagline: "Forudsigelig indkomst, lavere driftsintensitet",
      points: [
        "Stabil, forudsigelig månedlig indkomst",
        "Lavere daglig driftsintensitet",
        "Længere, mere stabilt lejeforhold",
        "Mindre fleksibilitet til selv at bruge ejendommen",
      ],
    },
    cta: "Find den rette strategi for din ejendom",
  },
  areas: {
    eyebrow: "Hvor vi opererer",
    heading: "Costa del Sol, fra Málaga til Marbella.",
    intro:
      "Lokal tilstedeværelse langs kysten betyder hurtigere responstider, bedre lokalkendskab og prissætning der afspejler hvert mikromarked.",
    areas: [
      {
        name: "Marbella",
        description: "Eksklusive villaer og strandnære lejligheder på Spaniens mest etablerede luksusmarked.",
      },
      {
        name: "Mijas",
        description: "Kystnære Mijas Costa og bjergbyen — stærk appel året rundt.",
      },
      {
        name: "Fuengirola",
        description: "Højvolumen strandturisme med konstant korttidsefterspørgsel.",
      },
      {
        name: "Benalmádena",
        description: "En afbalanceret mix af familieferieboliger og langtidsliv ved kysten.",
      },
      {
        name: "Torremolinos",
        description: "En klassisk badeby med jævn turistefterspørgsel året rundt.",
      },
      {
        name: "Málaga",
        description: "En kulturel hovedstad med et voksende marked for bykortferier og langtidsudlejning.",
      },
    ],
  },
  about: {
    eyebrow: "Om os",
    heading: "Bygget på en enkel idé.",
    paragraphs: [
      "Nordic BnB blev grundlagt i 2023 og bygges omkring en enkel idé: ejendomsadministration bør ikke være passiv. En annonce der offentliggøres og efterlades alene vil underprætere — stille, i årevis, uden at nogen bemærker det.",
      "Hver ejendom vi administrerer skal gennemgås, testes og forbedres løbende — pris, præsentation, positionering — i stedet for at blive sat op én gang og glemt.",
      "Bag Nordic BnB står et lokalt driftsnetværk: rengøring, styling, vedligeholdelse og koordinering på stedet langs hele Costa del Sol, sammen med grundlæggere der mener, at ejere fortjener fuld indsigt i, hvordan deres ejendom præsterer.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Founder & Head of Growth",
    founderQuote:
      "Vi driver ikke bare en annonce — vi bygger og former en ejendom, der faktisk konverterer. Vi kender markedet på Costa del Sol, og vi kender gæsterne, især de skandinaviske gæster, der booker her.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Head of Operations & Marketing",
    founder2Quote:
      "Hver ejer fortjener at se præcis, hvordan deres ejendom præsterer — ingen gætterier, ingen sort boks.",
  },
  testimonials: {
    eyebrow: "Ejerudtalelser",
    heading: "Hvad folk siger.",
    items: [
      {
        quote:
          "Havde svært ved at fylde lejligheden om vinteren. Nordic BnB overtog i marts, og i august var vi fuldt booket ud oktober. Får én rapport om måneden nu i stedet for selv at jagte svar.",
        name: "Kristian H.",
        location: "Marbella",
      },
      {
        quote:
          "Bor i Stockholm, har ikke set lejligheden i over et år. Nordic BnB klarer det hele, og indtægten er steget.",
        name: "Annika L.",
        location: "Fuengirola",
      },
      {
        quote:
          "Drev det selv i tre år. Nu slipper jeg for at bekymre mig — ingen klager, og telefonen ringer ikke længere midt om natten.",
        name: "Carlos M.",
        location: "Benalmádena",
      },
      {
        quote:
          "Håndterer det bedre, end jeg selv gjorde, og jeg plejede at drive tre ejendomme.",
        name: "Erik B.",
        location: "Mijas",
      },
      {
        quote:
          "Var skeptisk over for at give hele det fra mig, men rapporteringen er mere detaljeret, end hvad jeg får fra min revisor. Jeg kan se belægning, rengøring, alt.",
        name: "Sofia T.",
        location: "Marbella",
      },
      {
        quote:
          "Vi arvede mine forældres lejlighed og anede ikke, hvad vi skulle gøre med den. Nordic BnB fotograferede den, genoprettede annoncen, og inden for seks uger havde vi vores første bookinger. Et år senere præsterer den bedre end lignende enheder i nærheden, og jeg har aldrig skullet håndtere en gæst direkte.",
        name: "Henrik J.",
        location: "Fuengirola",
      },
      {
        quote:
          "Hurtige til at svare, og rengøringen er virkelig pletfri hver gang.",
        name: "Maja P.",
        location: "Benalmádena",
      },
      {
        quote:
          "Skiftede fra et andet bureau, der næsten ikke kommunikerede. Nordic BnB ringer faktisk, når noget kræver en beslutning, i stedet for bare at klare det i det stille og håbe, jeg ikke bemærker det.",
        name: "Thomas R.",
        location: "Marbella",
      },
      {
        quote:
          "Udlejede langtids før. Lejeren efterlod stedet i dårlig stand, og jeg mistede to måneders indtægt på at ordne det. Nu er det korttidsudlejning via Nordic BnB, og selv med ekstra rengøring mellem gæster tjener jeg mere, end jeg gjorde med én lejer.",
        name: "Ingrid S.",
        location: "Mijas",
      },
      {
        quote:
          "Fuldt booket de fleste weekender, før jeg overhovedet var færdig med overdragelsespapirerne.",
        name: "Daniel K.",
        location: "Torremolinos",
      },
      {
        quote:
          "Min villa stod tom halvdelen af året under den gamle annonce. Nu er den sjældent ledig mere end nogle få dage ad gangen, og billederne ligner faktisk mit hus.",
        name: "Camilla W.",
        location: "Fuengirola",
      },
      {
        quote:
          "Det, der overbeviste mig, var prissætningen. Jeg plejede at sætte én pris og glemme den. De justerer dagligt efter efterspørgsel, og jeg kan se præcis hvorfor i den månedlige rapport. Indtægten er steget med næsten en tredjedel, siden jeg skiftede.",
        name: "Anders G.",
        location: "Benalmádena",
      },
    ],
  },
  finalCta: {
    eyebrow: "Lad os tale sammen",
    heading: "Lad os se hvad din ejendom kan gøre.",
    subline:
      "Din ejendom fortjener mere end grundlæggende administration. Anmod om en gratis ejendomsgennemgang, så viser vi dig præcis hvor den underpræsterer — og hvordan løbende forbedring ville se ud.",
    ctaPrimary: "Anmod om en ejendomsgennemgang",
    ctaSecondary: "Skriv til os på WhatsApp",
    form: {
      fields: {
        name: "Navn",
        email: "E-mail",
        phone: "Telefon / WhatsApp",
        location: "Ejendommens beliggenhed",
        propertyType: "Ejendomstype",
        bedrooms: "Værelser",
        currentlyRented: "Aktuelt udlejet?",
        yes: "Ja",
        no: "Nej",
        strategy: "Korttid, langtid eller usikker?",
        strategyOptions: { short: "Korttid", long: "Langtid", unsure: "Usikker" },
        message: "Besked",
      },
      submit: "Få din gratis ejendomsgennemgang",
      successTitle: "Modtaget.",
      successBody: "Tak — vi kontakter dig snarest. Ved noget akut, så skriv til os på WhatsApp.",
      errorMessage: "Noget gik galt — prøv WhatsApp i stedet.",
    },
  },
  footer: {
    tagline: "Din ejendom. Løbende forbedret.",
    linksHeading: "Site",
    contactHeading: "Kontakt",
    languageHeading: "Sprog",
    rights: "Nordic BnB. Alle rettigheder forbeholdes.",
    orgNumberLabel: "CVR-lign. nr. 931 905 856",
    privacyLabel: "Privatliv",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Hver ejendom fortæller en historie, der fortjener at blive fortalt godt — vi sørger for, at den bliver hørt.",
  },
  showcase2: {
    eyebrow: "Præsentation",
    heading: "Stylet, fotograferet og positioneret til at præstere.",
  },
  contactPage: {
    eyebrow: "Team",
    heading: "Teamet bag Nordic BnB.",
    intro:
      "Vi følger op på din ejendom hver eneste dag — sammen med vores eget faste team. Tag endelig direkte kontakt.",
    teamName: "Vores driftsteam",
    teamHeading: "Teamet på jorden",
    teamIntro:
      "Dette er vores eget team — inklusive vores eget rengøringspersonale — der holder hver ejendom kørende, dag efter dag.",
    roles: [
      { title: "Handyman", description: "Vedligeholdelse, reparationer og tilsyn mellem ophold." },
      { title: "Rengøringsteam", description: "Professionel klargøring og skift af tekstiler efter hver gæst." },
      { title: "Fotograf/stylist", description: "Styling og fotografering til hver ny annonce." },
    ],
    emailHeading: "Skriv direkte til os",
    ctaHeading: "Lad os tale om din ejendom.",
    ctaSubline:
      "Har du et spørgsmål, eller vil du se hvad Nordic BnB kan gøre for din ejendom? Send os en mail — vi svarer personligt, som regel inden for en dag.",
    ctaButton: "Send os en mail",
    recruitEyebrow: "Bliv en del af teamet",
    recruitHeading: "Vil du arbejde med os?",
    recruitSubline:
      "Vi er altid åbne for gode folk. Er du rengøring, handyman eller fotograf på Costa del Sol, hører vi gerne fra dig.",
    story: {
      eyebrow: "Vores historie",
      heading: "Fra markedsføring til gæstfrihed.",
      milestones: [
        {
          period: "August 2023",
          title: "Der hvor det startede",
          body: "Nordic BnB startede i Norge med digital markedsføring og hjalp virksomheder og ejendomsinvestorer med at præsentere sig selv — og deres ejendomme — bedre online. Det lærte os én ting tidligt: præsentation ændrer opfattelse, og opfattelse ændrer værdi.",
        },
        {
          period: "2024",
          title: "Tættere på ejendomsbranchen",
          body: "På det tidspunkt havde vi allerede brugt flere år på udlejningsejendom selv — købt, renoveret og udlejet boliger i Norge, både korttids- og langtidsudlejning. Vores arbejde blev i stigende grad fokuseret på ejendom, indhold, fotografering, positionering og måden hjem blev præsenteret på online. Vi så det samme problem igen og igen: gode ejendomme markedsført langt under deres potentiale.",
        },
        {
          period: "2025",
          title: "Fra Norge til Spanien 🇪🇸",
          body: "Vi flyttede fra Norge til Spanien og oplevede udlejningsmarkedet på Costa del Sol indefra — som beboere og som ejendomsejere og -operatører. Det, der startede som markedsføringsviden, kombineret med flere års erfaring med at udleje egne boliger derhjemme, blev til noget større: forståelse for, hvad internationale gæster forventer, hvad ejere kæmper med, og hvad der gør, at én ejendom præsterer bedre end en anden.",
        },
        {
          period: "Sent 2025",
          title: "Idéen udviklede sig",
          body: "Vi begyndte at kombinere alt, hvad vi allerede kunne — markedsføring, præsentation, interiør, gæsteoplevelse og praktisk udlejningsforvaltning — til én komplet tjeneste for ejere af ferieudlejning, bygget på det, vi havde lært af at hjælpe investorer med at skabe værdi af deres ejendomme, både i Norge og Spanien.",
        },
        {
          period: "2026",
          title: "Nordic BnB i dag",
          body: "Nordic BnB blev et fuld-service ferieudlejnings- og ejendomsadministrationsselskab på Costa del Sol. Fra klargøring og opgradering af ejendommen til styling, fotografering, annoncer, prissætning, gæstekommunikation, rengøring, vedligeholdelse og fuld administration. Ét selskab. Ét kontaktpunkt. Alt håndteret.",
        },
        {
          period: "2026 →",
          title: "Næste kapitel",
          body: "Vores mål er enkelt: bygge en ny standard for ferieudlejningsadministration på Costa del Sol — der kombinerer skandinavisk service, stærk præsentation og lokal udførelse. Vi opgraderer. Vi styler. Vi administrerer.",
        },
      ],
    },
  },
  privacyPage: {
    eyebrow: "Privatliv",
    heading: "Privatlivspolitik.",
    updated: "Sidst opdateret: september 2026",
    intro:
      "Denne side forklarer, i enkle vendinger, hvilke oplysninger Nordic BnB indsamler, når du kontakter os, og hvordan vi bruger dem.",
    sections: [
      {
        heading: "Hvad vi indsamler",
        body: "Når du kontakter os via vores kontaktformular, e-mail eller WhatsApp, indsamler vi de oplysninger, du oplyser — typisk navn, e-mailadresse, telefonnummer og oplysninger om din ejendom eller henvendelse.",
      },
      {
        heading: "Hvordan vi bruger det",
        body: "Vi bruger kun disse oplysninger til at besvare din henvendelse, give en ejendomsgennemgang eller et tilbud, og — hvis du bliver kunde — til at administrere din ejendom og kommunikere med dig om den. Vi sælger ikke dine oplysninger til tredjeparter.",
      },
      {
        heading: "Hvor længe vi opbevarer det",
        body: "Vi opbevarer henvendelsesoplysninger, så længe det er nødvendigt for at svare dig, eller — hvis du bliver kunde — i vores samarbejdsperiode og derefter så længe loven kræver det.",
      },
      {
        heading: "Dine rettigheder",
        body: "Du kan til enhver tid spørge os, hvilke oplysninger vi har om dig, bede os rette dem eller anmode om, at vi sletter dem. Send os blot en e-mail, så ordner vi det.",
      },
    ],
    contactHeading: "Spørgsmål om dine data?",
    contactBody: "Ved enhver henvendelse om databeskyttelse, send os en e-mail direkte, så vender vi personligt tilbage.",
  },
};
