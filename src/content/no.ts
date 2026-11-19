import type { SiteContent } from "./types";

export const no: SiteContent = {
  meta: {
    title: "Boligbilder, digital styling og salgsløft | Eiendomly",
    description:
      "Få bedre bilder av boliger og hytter til FINN, Airbnb og Booking.com, og bilder av hotellrom til hotellets egen nettside. Se tjenester og priser hos Eiendomly.",
  },
  seo: {
    home: {
      title: "Boligbilder, digital styling og salgsløft | Eiendomly",
      description:
        "Få bedre bilder av boliger og hytter til FINN, Airbnb og Booking.com, og bilder av hotellrom til hotellets egen nettside. Se tjenester og priser hos Eiendomly.",
    },
    photoBoost: {
      title: "Bildeløft for FINN og Airbnb – 1 890 kr | Eiendomly",
      description:
        "Få opptil 40 boligbilder forbedret for 1 890 kr. Forsidebilde og tre forslag til annonsetittel inkludert. Levering innen 24 timer.",
    },
    virtualStaging: {
      title: "Digital boligstyling – 1 190 kr per rom | Eiendomly",
      description:
        "Vis hvordan et tomt rom kan møbleres. Velg stil og få en merket illustrasjon med originalbildet ved siden av. For salg og langtidsutleie.",
    },
    saleBoost: {
      title: "Salgsløftet – oppussingsplan før boligsalg | Eiendomly",
      description:
        "Se hva enkle oppgraderinger kan gjøre før salg. Få før/etter-illustrasjoner, kostnadsanslag og prioritert tiltaksplan fra 4 900 kr.",
    },
    order: {
      title: "Bestill bildeløft eller digital styling | Eiendomly",
      description:
        "Bestill Bildeløft, digital boligstyling, Salgsløftet eller en fast avtale. Send lenke til bildene eller annonsen og få svar på e-post.",
    },
  },
  nav: {
    links: [
      { label: "Slik fungerer det", href: "/#system" },
      { label: "Tjenester", href: "/#services" },
      { label: "Faste avtaler", href: "/#avtaler" },
      { label: "Hvem vi hjelper", href: "/#areas" },
      { label: "Om Eiendomly", href: "/#about" },
      { label: "Spørsmål og svar", href: "/#faq" },
    ],
    cta: "Bestill bildeløft",
    toggleMenu: "Åpne meny",
    selectLanguage: "Velg språk",
  },
  hero: {
    eyebrow: "Bildeløft · Digital styling · Salgsløftet",
    headlineLines: ["Bedre boligbilder", "for salg og utleie"],
    subline:
      "Vi forbedrer bildene du allerede har av boligen eller hytta, slik at de er klare for FINN, Airbnb og Booking.com. For hoteller gjør vi bilder av rom, fellesområder og uteområder klare for hotellets egen nettside. Skal du selge bolig, kan vi også møblere tomme rom digitalt og vise hvordan enkle oppgraderinger kan se ut.",
    ctaPrimary: "Bestill bildeløft",
    ctaSecondary: "Se tjenester og priser",
    beats: [
      {
        eyebrow: "Bildeløft",
        heading: "Lysere og tydeligere bilder.",
        body: "Vi justerer lys, farger og skarphet, retter opp linjer og rydder bort løse småting der det passer.",
      },
      {
        eyebrow: "Klar for annonsen",
        heading: "Bilder du kan publisere med en gang.",
        body: "Du får bildene tilbake på en lenke. Bildeløft leveres innen 24 timer, og vi sjekker hvert bilde før levering.",
      },
    ],
    locationTag: "Norge",
  },
  problem: {
    eyebrow: "Førsteinntrykket",
    heading: "Gode bilder gir et tydelig førsteinntrykk",
    seconds: 2.7,
    unit: "sek",
    stat: {
      value: "58 %",
      text: "I FINNs eiendomsundersøkelse fra 2025 valgte 58 % boligbildene som ett av de tre viktigste elementene i en boligannonse. Bilder kom øverst på listen.",
      source: "FINN, Eiendomsundersøkelsen 2025",
      href: "https://www.finn.no/bedriftskunde/aktuelt/finn-eiendom/eiendomsundersokelsen-2025",
    },
    timeStat: {
      value: "2,7 sek",
      text: "I Rightmoves britiske undersøkelse fra 2012 brukte potensielle kjøpere i snitt 2,7 sekunder på annonseforhåndsvisningen før de valgte å se videre eller gå til neste bolig.",
      source: "Rightmove, Storbritannia, 2012",
    },
    hotel: {
      heading: "Hva ser hotellgjestene etter før de bestiller?",
      value: "36 %",
      text: "I en undersøkelse fra Expedia Group svarte 36 % av de reisende at de bruker beskrivelser og bilder på hotellets egen nettside for å vurdere om stemningen passer dem.",
      source: "Hotels.com, Unpack ’24",
      href: "https://partner.expediagroup.com/en-us/resources/blog/unpack-2024-hotel-trends",
    },
  },
  photoBoost: {
    eyebrow: "Bildeløft",
    heading: "Se hva et bildeløft gjør",
    body: "Mørke mobilbilder eller skjeve linjer? Vi bruker AI-verktøy til å justere lys, farger og skarphet, rette opp linjer og rydde bort løse småting der det passer. Vi sjekker hvert bilde før levering.",
    hint: "Dra for å sammenligne bildene.",
    beforeLabel: "Originalbilde",
    afterLabel: "Etter bildeløft",
    beforeAlt: "Originalbilde av en stue, før bildeløft",
    afterAlt: "Samme stue etter bildeløft, med justert lys, farger og skarphet",
    caption: "Originalbilde og samme bilde etter bildeløft: lys, farger og skarphet justert, linjer rettet og løse småting ryddet bort.",
  },
  showcase2: {
    eyebrow: "Digital styling",
    heading: "Digital styling viser hvordan rommet kan brukes",
    body: "Et tomt rom kan være vanskelig å innrede i hodet. Vi møblerer rommet på bildet, så kjøperen eller leietakeren kan se hvordan det kan brukes. Du får originalbildet ved siden av illustrasjonen. Digital styling koster 1 190 kr per rom.",
    hint: "Dra for å sammenligne bildene.",
    beforeLabel: "Originalbilde",
    afterLabel: "Digital styling – illustrasjon",
    beforeAlt: "Originalbilde av en tom stue med store vinduer",
    afterAlt: "Samme stue møblert digitalt med sofa, bord og planter – digital styling, illustrasjon",
    caption: "Originalbilde av et tomt rom og samme rom møblert digitalt. Vegger, gulv og vinduer er som på originalen.",
    link: "Se pris og eksempler på digital styling",
  },
  howItWorks: {
    eyebrow: "Tre steg",
    heading: "Slik fungerer det",
    steps: [
      {
        title: "Send oss bildene",
        description: "Del en bildelenke eller lenken til annonsen. Mobilbilder fungerer også.",
      },
      {
        title: "Vi gjør jobben",
        description:
          "Vi bruker AI-verktøy og sjekker resultatet før levering. Ved digital styling velger du uttrykket du vil ha.",
      },
      {
        title: "Få bildene på en lenke",
        description:
          "Du får bildene tilbake digitalt. Du kan publisere dem i annonsen eller på din egen nettside.",
      },
    ],
    channels: ["FINN", "Airbnb", "Booking.com"],
  },
  cases: {
    eyebrow: "Eksempler",
    heading: "Se forskjellen selv.",
    improvedLabel: "Etter bildeløft",
    beforeLabel: "Originalbilde",
    captions: {
      stue: "Lysere og skarpere stue, rettet horisont, løse småting ryddet bort.",
      kjokken: "Varmere lys og renere farger på kjøkkenet.",
      soverom: "Soverom med bedre lys og skarphet.",
    },
  },
  services: {
    eyebrow: "Tjenester",
    heading: "Velg tjenesten som passer eiendommen din",
    items: [
      {
        key: "photoBoost",
        title: "Bildeløft",
        price: "1 890 kr",
        priceNote: "opptil 40 bilder",
        description: "Passer når du vil ha lysere og tydeligere bilder av boligen slik den er i dag.",
        features: [
          "Opptil 40 bilder",
          "Valgt og bearbeidet forsidebilde",
          "Tre forslag til annonsetittel",
          "Levering innen 24 timer",
        ],
        linkLabel: "Se hva Bildeløft inkluderer",
      },
      {
        key: "virtualStaging",
        title: "Digital styling",
        price: "1 190 kr",
        priceNote: "per rom",
        description:
          "Passer når du vil vise hvordan et tomt rom kan møbleres, eller hvordan rommet ser ut med andre møbler.",
        features: [
          "Du velger stil",
          "Tydelig merket bilde med originalen ved siden av",
          "Til salg og langtidsutleie",
        ],
        linkLabel: "Se hvordan digital styling fungerer",
      },
      {
        key: "saleBoost",
        title: "Salgsløftet",
        price: "Fra 4 900 kr",
        priceNote: "Stor pakke koster 9 900 kr",
        description:
          "Passer når du vil vise hva maling, nye kjøkkenfronter eller andre mindre tiltak kan gjøre før salg.",
        features: [
          "Før/etter-illustrasjoner",
          "PDF med tiltak, kostnadsanslag og anbefalt rekkefølge",
        ],
        linkLabel: "Sammenlign pakkene i Salgsløftet",
      },
    ],
    termsHeading: "Pris og betaling",
    termsNote:
      "Oppgitte priser inkluderer mva. Meglere faktureres ekskl. mva. Enkeltbestillinger faktureres etter levering.",
  },
  plans: {
    eyebrow: "Faste avtaler",
    heading: "Faste avtaler for meglere og utleieforvaltere",
    intro: "Få bilder til flere eiendommer hver måned og samle jobbene på én faktura.",
    items: [
      {
        key: "brokerPlan",
        title: "Megleravtale",
        audience: "For eiendomsmeglere og meglerkontor",
        price: "9 900 kr",
        pricePeriod: "per måned",
        value: "18 690 kr",
        savings: "Du sparer 8 790 kr (ca. 47 %) ved full bruk",
        featured: true,
        features: [
          "Bildeløft for opptil 8 boliger",
          "Opptil 40 bilder per bolig",
          "Digital styling av 3 rom per måned",
          "Ekstra Bildeløft: 1 490 kr",
        ],
        cta: "Start gratis måned med Megleravtalen",
      },
      {
        key: "managerPlan",
        title: "Forvalteravtale",
        audience: "For utleieforvaltere",
        price: "4 900 kr",
        pricePeriod: "per måned",
        value: "7 560 kr",
        savings: "Du sparer 2 660 kr (ca. 35 %) ved full bruk",
        features: [
          "Bildeløft for opptil 4 enheter",
          "Opptil 40 bilder per enhet",
          "Digital styling bestilles separat",
          "Ekstra Bildeløft: 1 490 kr",
        ],
        cta: "Start gratis måned med Forvalteravtalen",
      },
    ],
    valueLabel: "Ved full bruk, kjøpt enkeltvis:",
    terms: [
      "Første måned er gratis.",
      "Deretter har avtalen tre måneders binding og én måneds oppsigelse.",
      "Faktura sendes i starten av måneden.",
    ],
    note: "Ubrukte jobber utløper ved månedsslutt. Salgsløftet bestilles separat.",
  },
  audiences: {
    eyebrow: "Målgrupper",
    heading: "Hvem vi hjelper",
    items: [
      {
        name: "Airbnb-verter",
        description: "Få lysere, tydeligere bilder som viser stedet slik gjestene møter det.",
      },
      {
        name: "Private utleiere",
        description: "Bruk bildene du har til å vise rom, lys og planløsning i leieannonsen.",
      },
      {
        name: "Boligselgere",
        description:
          "Forbedre bildene, vis hvordan et tomt rom kan innredes, eller få en plan for enkle tiltak før salg.",
      },
      {
        name: "Eiendomsmeglere",
        description:
          "Bestill bildeløft, digital styling eller illustrasjoner av oppgraderingsmuligheter for én bolig eller flere.",
      },
      {
        name: "Hoteller",
        description:
          "Vis rom og fellesområder på hotellets egen nettside, slik at gjestene ser hva de kan forvente før de bestiller.",
      },
      {
        name: "Hytteeiere",
        description:
          "Vis hytta slik kjøpere eller leietakere vil oppleve den, fra stua og soveplassene til uteområdet.",
      },
    ],
  },
  about: {
    eyebrow: "Om Eiendomly",
    heading: "Melanie Solberg, grunnlegger av Eiendomly",
    paragraphs: [
      "Eiendomsinteressen min begynte da jeg leste Rich Dad Poor Dad av Robert T. Kiyosaki. Jeg ble særlig interessert i BRRRR-metoden, som går ut på å kjøpe en bolig, pusse den opp, leie den ut, refinansiere og gjenta prosessen. Nå bruker vi metoden i vårt eget eiendomsprosjekt på privaten.",
      "Gjennom andre prosjekter har jeg brukt hundrevis av timer på FINN, Airbnb og Booking.com. Etter hvert la jeg merke til hvor ofte det første bildet avgjorde om jeg åpnet en annonse. Det var derfor jeg startet Eiendomly. Jeg vil hjelpe andre med å vise det som gjør boligen verdt en nærmere titt.",
      "Jeg er utdannet innen salg, ledelse og digital markedsføring og driver også SynligAI. Hos Eiendomly bruker jeg AI-verktøy til å forbedre bildene og går gjennom hvert bilde selv før du får det tilbake.",
    ],
    founderName: "Melanie Solberg",
    founderRole: "Grunnlegger",
    photoAlt: "Melanie Solberg, grunnlegger av Eiendomly",
    replyNote: "Jeg svarer på e-post innen 24 timer på hverdager.",
  },
  honesty: {
    eyebrow: "Bildeendringer",
    heading: "Hva endrer vi på boligbildene?",
    items: [
      {
        title: "Bildeløft",
        body: "Bildeløft justerer lys, farger, skarphet og skjeve linjer. Vi kan fjerne løse småting der det passer. Utsikt, skader og faste deler av boligen vises som de er.",
      },
      {
        title: "Digital styling",
        body: "Digital styling viser en mulig møblering. Vegger, vinduer, kjøkken og gulv beholdes som på originalen. Du får originalbildet sammen med den merkede illustrasjonen.",
      },
      {
        title: "Salgsløftet",
        body: "Salgsløftet viser hvordan foreslåtte oppgraderinger kan se ut. Bildene merkes «Illustrasjon – ikke utført».",
      },
      {
        title: "Airbnb",
        body: "For Airbnb bruker vi naturlige bildejusteringer. Bildene viser møblene og fasilitetene gjesten faktisk får.",
      },
    ],
  },
  faq: {
    eyebrow: "Spørsmål og svar",
    heading: "Ofte stilte spørsmål",
    items: [
      {
        q: "Hva koster det å få forbedret boligbilder?",
        a: "Bildeløft koster 1 890 kr for opptil 40 bilder. Et valgt og bearbeidet forsidebilde og tre forslag til annonsetittel er inkludert.",
      },
      {
        q: "Må jeg ta nye bilder?",
        a: "Du kan sende bildene du allerede har, også mobilbilder. Send en bildelenke eller lenken til annonsen.",
      },
      {
        q: "Hvor raskt får jeg bildene tilbake?",
        a: "Bildeløft leveres innen 24 timer. For digital styling og Salgsløftet bekrefter vi leveringstiden når vi har sett bildene.",
      },
      {
        q: "Hva er digital boligstyling, og hva koster det?",
        a: "Digital boligstyling er møblering av et rom på et boligbilde. Hos Eiendomly koster det 1 190 kr per rom. Du velger stilen og får en merket illustrasjon sammen med originalen.",
      },
      {
        q: "Kan jeg bruke bildene på Airbnb?",
        a: "Ja, Bildeløft passer for Airbnb. Vi justerer bildet naturlig, uten ekstra møbler eller tekst. Digital styling tilbys til boligsalg og langtidsutleie.",
      },
      {
        q: "Hvordan merkes redigerte bilder?",
        a: "Digitalt møblerte bilder merkes «Digital styling – illustrasjon. Møbler følger ikke med.» Bilder fra Salgsløftet merkes «Illustrasjon – ikke utført». Sjekk publiseringsreglene der du skal bruke bildene.",
      },
      {
        q: "Hva slags bruksrett får jeg?",
        a: "Du bekrefter at du har rett til å sende inn bildene til bearbeiding. Du får full bruksrett til resultatet.",
      },
      {
        q: "Hva får jeg med en fast avtale?",
        a: "Megleravtalen koster 9 900 kr per måned og inkluderer Bildeløft for opptil åtte boliger og digital styling av tre rom. Forvalteravtalen koster 4 900 kr per måned og inkluderer Bildeløft for opptil fire enheter. Første måned er gratis.",
      },
      {
        q: "Kan Salgsløftet øke boligverdien?",
        a: "Salgsløftet viser mulige forbedringer og gir deg et anslag på hva tiltakene koster. En eventuell verdiøkning vurderes av megler eller takstmann.",
      },
      {
        q: "Hva hvis jeg vil ha endringer etter levering?",
        a: "Gi beskjed innen sju dager etter levering. Du får én gratis justeringsrunde. Hvis du fortsatt er misfornøyd etter justeringen, får du 50 % av beløpet tilbake.",
      },
      {
        q: "Når betaler jeg?",
        a: "Ved enkeltbestilling får du faktura på e-post etter levering. Faste avtaler faktureres i starten av måneden.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Bestilling",
    heading: "Send oss bildene dine",
    subline:
      "Velg tjeneste og legg ved en lenke til bildene eller annonsen. Du får svar på e-post innen 24 timer på hverdager.",
    ctaPrimary: "Send bestilling",
    form: {
      fields: {
        name: "Navn",
        email: "E-post",
        customerType: "Hvem bestiller?",
        service: "Velg tjeneste",
        photosLink: "Lenke til bildene eller annonsen",
        photosLinkHelp:
          "Bruk for eksempel Google Drive, Dropbox eller WeTransfer. Sjekk at vi kan åpne lenken.",
        message: "Kommentar (valgfritt)",
        rights:
          "Jeg bekrefter at jeg har rett til å bruke bildene og til å sende dem til Eiendomly for bearbeiding.",
        marketing:
          "Jeg får 10 % rabatt og samtykker til at Eiendomly bruker før/etter-bildene i egen markedsføring, uten adresse eller personlige detaljer.",
        withdrawal:
          "Jeg ber om at arbeidet starter med en gang, og forstår at angreretten på 14 dager faller bort når bildene er levert. Angrer jeg før levering, betaler jeg for arbeidet som er gjort.",
      },
      privateCustomerTypes: ["Privat utleier", "Airbnb-vert", "Boligselger", "Hytteeier"],
      selectPlaceholder: "Velg …",
      customerTypes: [
        "Privat utleier",
        "Airbnb-vert",
        "Boligselger",
        "Megler",
        "Utleieforvalter",
        "Hytteeier",
        "Hotell",
      ],
      serviceOptions: [
        { key: "photoBoost", label: "Bildeløft" },
        { key: "virtualStaging", label: "Digital styling" },
        { key: "saleBoost", label: "Salgsløftet" },
        { key: "brokerPlan", label: "Megleravtale – 9 900 kr per måned" },
        { key: "managerPlan", label: "Forvalteravtale – 4 900 kr per måned" },
        { key: "unsure", label: "Jeg er usikker" },
      ],
      submit: "Send bestilling",
      errorMessage: "Noe gikk galt. Prøv igjen, eller send oss en e-post på",
      privacyNote: "Vi bruker opplysningene til å svare deg, levere tjenesten og sende faktura.",
      privacyLink: "Les om personvern",
    },
  },
  servicePages: {
    photoBoost: {
      eyebrow: "Bildeløft",
      heading: "Bildeløft for FINN, Airbnb og Booking.com",
      intro:
        "Vi forbedrer bilder av boliger og hytter til annonser, og bilder av hotellrom og fellesområder til hotellets egen nettside. For boligannonser får du opptil 40 bilder forbedret for 1 890 kr. Du sender bildene du har, og vi leverer de ferdige bildene innen 24 timer sammen med et bearbeidet forsidebilde og tre forslag til annonsetittel.",
      comparison: {
        beforeLabel: "Originalbilde",
        afterLabel: "Etter bildeløft",
        beforeAlt: "Originalbilde av en stue, før bildeløft",
        afterAlt: "Samme stue etter bildeløft, med justert lys, farger og skarphet",
        caption: "Originalbilde og samme bilde etter bildeløft: lys, farger og skarphet justert, linjer rettet og løse småting ryddet bort.",
        hint: "Dra for å sammenligne bildene.",
      },
      sections: [
        {
          heading: "Bruk bildene du allerede har",
          blocks: [
            {
              type: "p",
              text: "Bildeløft passer til korttidsutleie, langtidsutleie og boligsalg. Send oss mobilbilder, andre bilder du har rett til å bruke eller en lenke til annonsen. Vi justerer lys, farger og skarphet, retter opp skjeve linjer og kan rydde bort løse småting der det passer. Vi velger også bildet som egner seg best til forsiden av annonsen.",
            },
          ],
        },
        {
          heading: "Dette får du for 1 890 kr",
          blocks: [
            {
              type: "list",
              items: [
                "Opptil 40 bearbeidede bilder.",
                "Et valgt og bearbeidet forsidebilde.",
                "Tre forslag til annonsetittel.",
                "Levering på lenke innen 24 timer.",
              ],
            },
            { type: "cta" },
          ],
        },
        {
          heading: "Hva endrer dere i bilder til Airbnb?",
          blocks: [
            {
              type: "p",
              text: "Vi holder oss til naturlige justeringer av bildet. Møbler, utsikt og fasiliteter skal stemme med det gjestene møter. Vi legger heller ikke tekst på bildene.",
            },
          ],
        },
        {
          heading: "Hva koster en måned uten leietaker?",
          blocks: [
            {
              type: "p",
              text: "For en bolig med 15 000 kr i månedsleie betyr én ekstra måned uten leietaker 15 000 kr i uteblitt brutto leieinntekt. Når du oppdaterer leieannonsen, er forsidebildet et konkret sted å begynne.",
            },
          ],
        },
      ],
      links: [
        { text: "Har du tomme rom?", label: "Se digital boligstyling", href: "/digital-styling" },
        { text: "Har du flere eiendommer?", label: "Se faste avtaler", href: "/#avtaler" },
      ],
      priceHeading: "Pris",
      price: "1 890 kr",
      priceNote: "Opptil 40 bilder. Levering innen 24 timer.",
      cta: "Bestill bildeløft",
    },
    virtualStaging: {
      eyebrow: "Digital styling",
      heading: "Digital boligstyling for salg og langtidsutleie",
      intro:
        "Vis hvordan et tomt rom kan møbleres for 1 190 kr per rom. Du velger stil fra moderne til hjemmekoselig. Vi møblerer rommet på bildet og leverer illustrasjonen sammen med originalen.",
      comparison: {
        beforeLabel: "Originalbilde",
        afterLabel: "Digital styling – illustrasjon",
        beforeAlt: "Originalbilde av en tom stue med store vinduer",
        afterAlt: "Samme stue møblert digitalt med sofa, bord og planter – digital styling, illustrasjon",
        caption: "Originalbilde av et tomt rom og samme rom møblert digitalt. Vegger, gulv og vinduer er som på originalen.",
        hint: "Dra for å sammenligne bildene.",
      },
      sections: [
        {
          heading: "Hva er digital boligstyling?",
          blocks: [
            {
              type: "p",
              text: "Digital boligstyling viser en mulig innredning på et eksisterende boligbilde. Vi kan møblere tomme rom eller vise en annen møblering der dagens møbler ikke følger med. Vegger, gulv, vinduer og fast kjøkkeninnredning vises som på originalbildet.",
            },
          ],
        },
        {
          heading: "Hvor mye kan du spare med digital boligstyling?",
          blocks: [
            {
              type: "p",
              text: "I en tom treromsleilighet kan vi møblere stuen og begge soverommene digitalt for 3 570 kr. To norske stylister oppgir startpriser på 16 900 kr og 23 500 kr for fysisk fullstyling av en treroms. Med disse prisene blir stylingkostnaden 13 330–19 930 kr lavere når du velger digital møblering til annonsen.",
            },
            {
              type: "table",
              caption: "Digital møblering hos Eiendomly sammenlignet med oppgitte startpriser for fysisk fullstyling",
              head: [
                "Leilighet",
                "Eiendomly, 1 190 kr per rom",
                "Fullstyling hos Bolig Interiør",
                "Fullstyling hos Main Boligstyling",
                "Forskjell fra oppgitte startpriser",
              ],
              rows: [
                ["2-roms", "2 380 kr", "Fra 12 900 kr", "Fra 17 500 kr", "10 520–15 120 kr"],
                ["3-roms", "3 570 kr", "Fra 16 900 kr", "Fra 23 500 kr", "13 330–19 930 kr"],
                ["4-roms", "4 760 kr", "Fra 18 900 kr", "Fra 27 800 kr", "14 140–23 040 kr"],
              ],
            },
            {
              type: "p",
              text: "Regnestykkene gjelder digital møblering av stuen og alle soverommene. Du velger selv hvilke rom du vil vise i annonsen. Med fysisk fullstyling blir hele boligen møblert til fotografering og visning. Leverandørene inkluderer transport og møbelleie i prisen. Alle priser er inkludert mva.",
            },
            {
              type: "note",
              text: "Prislister sjekket 19. november 2026. [Bolig Interiør](https://www.bolig-interior.no/priser) · [Main Boligstyling](https://www.mainboligstyling.no/priser-boligstyling/)",
            },
          ],
        },
        {
          heading: "Dette får du for 1 190 kr per rom",
          blocks: [
            {
              type: "list",
              items: [
                "Et rom møblert digitalt i stilen du velger.",
                "En ferdig illustrasjon merket «Digital styling – illustrasjon. Møbler følger ikke med.»",
                "Originalbildet ved siden av, slik at kjøperen ser både dagens rom og innredningsforslaget.",
              ],
            },
            { type: "p", text: "Vi bekrefter leveringstid når vi har sett bildene." },
            { type: "cta" },
          ],
        },
        {
          heading: "Kan digital styling brukes på Airbnb?",
          blocks: [
            {
              type: "p",
              text: "Vi tilbyr digital styling til salg og langtidsutleie. For Airbnb bruker vi [Bildeløft](/bildeloft) med naturlige justeringer av bilder som viser innredningen gjesten faktisk får.",
            },
          ],
        },
      ],
      links: [],
      priceHeading: "Pris",
      price: "1 190 kr",
      priceNote: "Per rom. Vi bekrefter leveringstid når vi har sett bildene.",
      cta: "Bestill digital styling",
    },
    saleBoost: {
      eyebrow: "Salgsløftet",
      heading: "Salgsløftet – illustrasjoner og oppussingsplan før boligsalg",
      intro:
        "Se hvordan maling, nye kjøkkenfronter eller behandling av gulv kan endre inntrykket av boligen. Eiendomly lager før/etter-illustrasjoner og en PDF med tiltak, kostnadsanslag og anbefalt rekkefølge. Fra 4 900 kr.",
      sections: [
        {
          heading: "Hvem passer Salgsløftet for?",
          blocks: [
            {
              type: "p",
              text: "Salgsløftet passer for meglere og deg som selger selv. Det er særlig aktuelt for eldre boliger, tomme boliger og boliger som har ligget ute en stund. Bruk planen til å velge hvilke tiltak du vil gjøre før salg, eller bruk merkede illustrasjoner til å vise mulighetene i boligen.",
            },
          ],
        },
        {
          heading: "Hva gjorde andre før de solgte? To norske boligsalg",
          blocks: [
            {
              type: "case",
              heading: "Lørenskog · Styling for 200 kr før visning",
              text: "Før visningen av en treromsleilighet byttet selgerne ut mørke gardiner med lyse de allerede hadde. De flyttet møbler, lånte lamper og kjøpte blomster. Med et stylingbudsjett på 200 kr gjorde de leiligheten klar for fotografering og visning. Takst og prisantydning var 2,60 millioner kr. Etter én visning og en budrunde ble boligen solgt for 2,85 millioner kr, 250 000 kr over takst. [Les reportasjen i Bergens Tidende (2015)](https://www.bt.no/husoghjem/bolig/i/Vbbpw3/stylingbudsjett-200-kroner-sjekk-hvordan-vi-fikset-leiligheten-foer-visning)",
            },
            {
              type: "case",
              heading: "Bergen · Nye gulv og malte vegger før salg",
              text: "En leilighet på 78 m² i Elvenesvegen ble først vurdert av megleren til 1,50 millioner kr. Eieren beholdt kjøkkeninnredningen, skiftet gulv i flere rom, malte vegger og oppgraderte belysningen. Ifølge megleren kostet oppgraderingen i underkant av 100 000 kr, med egeninnsats fra eieren. Leiligheten ble solgt for 1,95 millioner kr pluss fellesgjeld, 450 000 kr over den tidligere verdivurderingen. Borettslaget hadde også nylig oppgradert fasaden og fellesområdene. Kilde: ProAktivs annonsørinnhold hos Bergens Tidende.",
            },
            {
              type: "note",
              text: "Tallene gjelder disse to salgene. Hvor mye hvert enkelt tiltak bidro til budene, er ukjent.",
            },
          ],
        },
        {
          heading: "Velg Mini eller Stor",
          blocks: [
            {
              type: "table",
              caption: "Sammenligning av Salgsløftet Mini og Stor",
              head: ["", "Mini", "Stor"],
              rows: [
                ["Pris for Salgsløftet", "4 900 kr", "9 900 kr"],
                ["Budsjett for foreslåtte tiltak", "Under 20 000 kr", "20 000–100 000 kr"],
                ["Før/etter-sammenligninger", "5", "10"],
                ["Plan", "Tiltak, kostnadsanslag og rekkefølge", "Prioritert liste med tiltak, kostnadsanslag og rekkefølge"],
              ],
            },
            {
              type: "p",
              text: "Begge pakkene viser hva du kan gjøre selv, og hva du bør bruke fagfolk til. Bildene merkes «Illustrasjon – ikke utført». Kostnadsanslagene gjelder de foreslåtte tiltakene. Eventuell verdiøkning vurderes av megler eller takstmann. Vi bekrefter leveringstid når vi har sett bildene.",
            },
            { type: "cta" },
          ],
        },
      ],
      links: [
        {
          text: "Vil du vise hvordan et tomt rom kan møbleres?",
          label: "Se digital boligstyling",
          href: "/digital-styling",
        },
      ],
      priceHeading: "Pris",
      tiers: [
        { name: "Mini", price: "4 900 kr", detail: "5 før/etter-sammenligninger. Tiltak under 20 000 kr." },
        { name: "Stor", price: "9 900 kr", detail: "10 før/etter-sammenligninger. Tiltak for 20 000–100 000 kr." },
      ],
      cta: "Bestill Salgsløftet",
    },
  },
  orderPage: {
    eyebrow: "Bestilling",
    heading: "Bestill bildeløft, digital styling eller Salgsløftet",
    intro:
      "Velg tjenesten du trenger og del en lenke til bildene eller annonsen. Vi svarer på e-post innen 24 timer på hverdager.",
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
          heading: "Angrerett for privatpersoner",
          body: "Bestiller du som privatperson, har du 14 dagers angrerett etter angrerettloven. Ber du oss starte arbeidet med en gang, og bekrefter i bestillingsskjemaet at angreretten faller bort når bildene er levert, kan du ikke angre etter levering. Angrer du før vi har levert, betaler du for den delen av arbeidet som er gjort. Vil du angre, gi beskjed på e-post til kontakt@eiendomly.no. Bedrifter har ikke angrerett.",
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
          body: "Er du ikke fornøyd med leveransen, får du én ny runde gratis der vi justerer bildene etter ønskene dine. Er du fortsatt ikke fornøyd etter den nye runden, får du 50 % av beløpet tilbake. Resten dekker arbeidet som er utført. Si fra innen 7 dager etter levering.",
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
          body: "Analyse- og markedsføringsverktøy (som Google Analytics via Google Tag Manager og Meta Pixel) lastes kun hvis du har godtatt dette i samtykkebanneret.",
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
    tagline: "Bildeløft, digital boligstyling og enkle tiltak før salg.",
    linksHeading: "Nettsted",
    legalHeading: "Juridisk",
    contactHeading: "Kontakt",
    languageHeading: "Språk",
    rights: "Eiendomly. Alle rettigheter reservert.",
    legalName: "Eiendomly Solberg",
    replyNote: "Svar innen 24 timer på hverdager.",
  },
};
