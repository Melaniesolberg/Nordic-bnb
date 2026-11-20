import type { SiteContent } from "./types";

export const no: SiteContent = {
  meta: {
    title: "Boligbilder, digital styling og salgsløft | Eiendomly",
    description:
      "Bedre bilder av boliger, hytter og hoteller til FINN, Airbnb, Booking.com og egen nettside. Bildeløft fra 1 890 kr, levert innen 24 timer.",
  },
  seo: {
    home: {
      title: "Boligbilder, digital styling og salgsløft | Eiendomly",
      description:
        "Bedre bilder av boliger, hytter og hoteller til FINN, Airbnb, Booking.com og egen nettside. Bildeløft fra 1 890 kr, levert innen 24 timer.",
    },
    photoBoost: {
      title: "Bildeløft for FINN og Airbnb – 1 890 kr | Eiendomly",
      description:
        "Opptil 40 boligbilder forbedret for 1 890 kr, levert innen 24 timer. Tre forslag til annonsetittel inkludert. Mobilbilder holder.",
    },
    virtualStaging: {
      title: "Digital boligstyling – 1 190 kr per rom | Eiendomly",
      description:
        "Vis hva et tomt rom kan bli. Du velger stil, vi møblerer rommet digitalt. Merket illustrasjon med originalbildet ved siden av.",
    },
    saleBoost: {
      title: "Salgsløftet – oppussingsplan før boligsalg | Eiendomly",
      description:
        "Se hva enkle tiltak kan gjøre før salg. Før/etter-illustrasjon og handleliste med priser, 1 990 kr per rom.",
    },
    order: {
      title: "Bestill bildeløft eller digital styling | Eiendomly",
      description:
        "Bestill Bildeløft, digital styling, Salgsløftet eller en fast avtale. Send en lenke til bildene og få svar innen 24 timer på hverdager.",
    },
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
    eyebrow: "Bildeløft · Digital styling · Salgsløftet",
    headlineLines: ["Bedre boligbilder", "for salg og utleie"],
    subline:
      "Send oss bildene du har. Vi gjør dem klare for FINN, Airbnb, Booking.com eller hotellets egen nettside – innen 24 timer, fra 1 890 kr. Usikker? Test gratis med ett bilde først.",
    ctaPrimary: "Bestill bildeløft",
    ctaSecondary: "Få et gratis prøvebilde",
    beats: [
      {
        eyebrow: "Bildeløft",
        heading: "Lyse, skarpe og rette bilder.",
        body: "Vi justerer lys, farger og linjer og rydder bort løse småting. Mobilbilder holder.",
      },
      {
        eyebrow: "Klar til bruk",
        heading: "Ferdig på 24 timer.",
        body: "Du får alle bildene tilbake på en lenke, sjekket før levering.",
      },
    ],
    locationTag: "Norge",
  },
  problem: {
    eyebrow: "Førsteinntrykket",
    heading: "Annonsen får noen få sekunder",
    seconds: 2.7,
    unit: "sek",
    timeStat: {
      value: "2,7 sek",
      text: "Boligkjøpere brukte i snitt 2,7 sekunder på en annonse i søkelisten før de klikket seg inn eller gikk videre.",
      source: "Rightmove, Storbritannia, 2012",
    },
  },
  photoBoost: {
    eyebrow: "Bildeløft",
    heading: "Se forskjellen",
    body: "Samme bilde, før og etter. Vi justerer lys, farger og skarphet, retter opp linjer og rydder bort løse småting. Hvert bilde sjekkes før du får det.",
    hint: "Dra for å sammenligne.",
    beforeLabel: "Originalbilde",
    afterLabel: "Etter bildeløft",
    beforeAlt: "Originalbilde av en stue, før bildeløft",
    afterAlt: "Samme stue etter bildeløft, med justert lys, farger og skarphet",
    caption: "Lys, farger og linjer justert. Løse småting ryddet bort.",
  },
  showcase2: {
    eyebrow: "Digital styling",
    heading: "Vis hva et tomt rom kan bli",
    body: "Tomme rom er vanskelige å se for seg. Vi møblerer dem digitalt, så kjøpere og leietakere ser hvordan rommet kan brukes. 1 190 kr per rom, med originalbildet ved siden av.",
    hint: "Dra for å sammenligne.",
    beforeLabel: "Originalbilde",
    afterLabel: "Digital styling – illustrasjon",
    beforeAlt: "Originalbilde av en tom stue med store vinduer",
    afterAlt: "Samme stue møblert digitalt med sofa, bord og planter – digital styling, illustrasjon",
    caption: "Vegger, gulv og vinduer er som på originalen.",
    link: "Se pris og eksempler",
  },
  howItWorks: {
    eyebrow: "Tre steg",
    heading: "Slik fungerer det",
    steps: [
      { title: "Send bildene", description: "Del en lenke til bildene eller annonsen. Mobilbilder holder." },
      { title: "Vi gjør jobben", description: "Vi forbedrer bildene og sjekker hvert enkelt før levering." },
      { title: "Bruk dem", description: "Du får bildene på en lenke, klare til å publiseres." },
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
    heading: "Tre tjenester, faste priser",
    items: [
      {
        key: "photoBoost",
        title: "Bildeløft",
        price: "1 890 kr",
        priceNote: "opptil 40 bilder",
        description: "For deg som vil ha lyse, tydelige bilder av boligen slik den er i dag.",
        features: [
          "Opptil 40 bilder forbedret",
          "Vi velger det beste bildet til forsiden",
          "Tre forslag til annonsetittel",
          "Levert innen 24 timer",
          "Test gratis med ett bilde først",
        ],
        note: "Eksempel: Leier du ut for 1 200 kr natten, er Bildeløft betalt etter to netter.",
        linkLabel: "Les mer om Bildeløft",
      },
      {
        key: "virtualStaging",
        title: "Digital styling",
        price: "1 190 kr",
        priceNote: "per rom",
        description: "For tomme rom, eller rom der møblene ikke følger med.",
        features: [
          "Du velger stil",
          "Merket «Digital styling – illustrasjon. Møbler følger ikke med.»",
          "Originalbildet ved siden av",
          "For salg og langtidsutleie",
        ],
        note: "Eksempel: Stue og to soverom koster 3 570 kr. Fysisk styling av en treroms starter på 16 900 kr hos stylistene vi har sjekket.",
        linkLabel: "Les mer om digital styling",
      },
      {
        key: "saleBoost",
        title: "Salgsløftet",
        price: "1 990 kr",
        priceNote: "per rom, maks 9 900 kr for hele boligen",
        description: "For deg som skal selge og vil vise hva enkle tiltak kan gjøre i rommene som trekker ned.",
        features: [
          "Du velger rommene, for eksempel kjøkken og bad",
          "Før/etter-illustrasjon, merket «Illustrasjon – ikke utført»",
          "Handleliste med produkter, priser og lenker",
          "Hva du kan gjøre selv, og hva som krever fagfolk",
        ],
        note: "Eksempel: Kjøkken og bad koster 3 980 kr. På en bolig til 3 000 000 kr er det 0,13 % av prisen.",
        linkLabel: "Les mer om Salgsløftet",
      },
    ],
    termsHeading: "Pris og betaling",
    termsNote: "Prisene er inkludert mva. Meglere faktureres ekskl. mva. Du får faktura etter levering.",
  },
  plans: {
    eyebrow: "Faste avtaler",
    heading: "Faste avtaler for meglere og forvaltere",
    intro: "Har du flere boliger i måneden? Da får du lavere pris per jobb og én samlet faktura.",
    items: [
      {
        key: "brokerPlan",
        title: "Megleravtale",
        audience: "For meglere og meglerkontor",
        price: "9 900 kr",
        pricePeriod: "per måned",
        value: "18 690 kr",
        savings: "Du sparer 8 790 kr (ca. 47 %) ved full bruk",
        featured: true,
        features: [
          "Bildeløft for opptil 8 boliger",
          "Opptil 40 bilder per bolig",
          "Digital styling av 3 rom",
          "Ekstra Bildeløft: 1 490 kr",
        ],
        cta: "Bestill Megleravtalen",
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
        cta: "Bestill Forvalteravtalen",
      },
    ],
    valueLabel: "Kjøpt enkeltvis:",
    terms: [
      "3 måneders binding, deretter 1 måneds oppsigelse",
      "Faktura i starten av måneden",
      "Ubrukte jobber utløper ved månedsslutt",
    ],
    note: "Salgsløftet bestilles separat.",
  },
  audiences: {
    eyebrow: "Hvem vi hjelper",
    heading: "For boliger, hytter og hoteller",
    items: [
      { name: "Airbnb-verter", description: "Lyse, ærlige bilder som viser stedet slik gjestene møter det." },
      { name: "Private utleiere", description: "Vis rommene, lyset og planløsningen tydelig i leieannonsen." },
      {
        name: "Boligselgere",
        description: "Bedre bilder, møblerte tomme rom eller en plan for enkle tiltak før salg.",
      },
      { name: "Eiendomsmeglere", description: "Bildeløft, digital styling og Salgsløftet – for én bolig eller mange." },
      { name: "Hoteller", description: "Vis rom og fellesområder på egen nettside slik gjestene vil oppleve dem." },
      { name: "Hytteeiere", description: "Vis hytta fra sin beste side, fra stua til uteområdet." },
    ],
  },
  about: {
    eyebrow: "Om meg",
    heading: "Hei, jeg er Melanie",
    paragraphs: [
      "Jeg er utdannet innen digital markedsføring og har jobbet med det i et par år. Jeg er nysgjerrig på hvordan AI-verktøy kan gjøre ting bedre, og det er det Eiendomly er bygget på.",
      "Gjennom jobber og prosjekter har jeg sett mange boliger, hytter og hoteller som er mye finere i virkeligheten enn på bildene. Det er synd. Ofte skal det lite til før folk ser hvorfor hytta eller hotellet er verdt en nærmere titt, eller at boligen er et kupp med noen små grep. Leiligheten ingen hadde ventet noe av, kan bli noens nye hjem.",
      "Jeg er glad i gode kjøp, der det du legger inn gir mye tilbake. Sånn skal Eiendomly være for deg.",
      "Jeg driver Eiendomly selv, så du har kontakt med meg hele veien, fra bestilling til ferdige bilder. Og bildene er alltid ærlige: Jeg endrer aldri vegger, vinduer, gulv eller utsikt, og jeg skjuler aldri skader. Det du ser, er det du får.",
    ],
    founderName: "Melanie Solberg",
    founderRole: "Grunnlegger",
    photoAlt: "Melanie Solberg, grunnlegger av Eiendomly",
    replyNote: "Jeg svarer på e-post innen 24 timer på hverdager.",
  },
  honesty: {
    eyebrow: "Ærlige bilder",
    heading: "Hva vi endrer – og hva vi lar være",
    items: [
      {
        title: "Bildeløft",
        body: "Lys, farger, skarphet og skjeve linjer. Løse småting kan ryddes bort. Utsikt, skader og faste deler av boligen står som de er.",
      },
      {
        title: "Digital styling",
        body: "Viser en mulig møblering. Vegger, vinduer, kjøkken og gulv er som på originalen, og du får originalbildet ved siden av.",
      },
      {
        title: "Salgsløftet",
        body: "Viser hvordan foreslåtte oppgraderinger kan se ut. Bildene merkes «Illustrasjon – ikke utført».",
      },
      {
        title: "Airbnb",
        body: "Bare naturlige justeringer. Gjestene skal få det de ser på bildene.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Ofte stilte spørsmål",
    items: [
      {
        q: "Hva koster det?",
        a: "Bildeløft koster 1 890 kr for opptil 40 bilder. Digital styling koster 1 190 kr per rom. Salgsløftet koster 1 990 kr per rom, maks 9 900 kr for hele boligen. Alle priser er inkludert mva.",
      },
      {
        q: "Lønner det seg?",
        a: "Det kommer an på boligen, men prisen er lav sammenlignet med det som står på spill. Eksempel: Leier du ut for 1 200 kr natten, er Bildeløft betalt etter to netter. Selger du en bolig til 4 000 000 kr, er Bildeløft under 0,05 % av prisen.",
      },
      {
        q: "Hvor viktige er bildene i en annonse?",
        a: "I FINNs eiendomsundersøkelse 2025 valgte 58 % av de spurte bildene som en av de tre viktigste delene av en boligannonse. Ingenting kom høyere. [Se undersøkelsen](https://www.finn.no/bedriftskunde/aktuelt/finn-eiendom/eiendomsundersokelsen-2025)",
      },
      {
        q: "Kan jeg teste gratis først?",
        a: "Ja. Velg «Gratis prøvebilde» i skjemaet og send ett bilde. Du får det forbedret innen 24 timer på hverdager, helt uten forpliktelser. Ett bilde per kunde.",
      },
      { q: "Må jeg ta nye bilder?", a: "Nei. Send bildene du har, også mobilbilder." },
      {
        q: "Hvor raskt får jeg bildene?",
        a: "Bildeløft leveres innen 24 timer. For digital styling og Salgsløftet bekrefter vi leveringstid når vi har sett bildene.",
      },
      {
        q: "Hva er digital boligstyling?",
        a: "Vi møblerer et rom digitalt på et boligbilde, i stilen du velger. Bildet merkes «Digital styling – illustrasjon. Møbler følger ikke med.», og du får originalen ved siden av.",
      },
      {
        q: "Kan jeg bruke bildene på Airbnb?",
        a: "Ja, Bildeløft passer for Airbnb. Vi gjør bare naturlige justeringer, uten ekstra møbler eller tekst. Digital styling er for salg og langtidsutleie.",
      },
      {
        q: "Hvem eier bildene?",
        a: "Du bekrefter at du har rett til å sende oss bildene. Du får full bruksrett til resultatet.",
      },
      {
        q: "Hva får jeg med en fast avtale?",
        a: "Megleravtalen (9 900 kr per måned) gir Bildeløft for opptil 8 boliger og digital styling av 3 rom. Forvalteravtalen (4 900 kr per måned) gir Bildeløft for opptil 4 enheter.",
      },
      {
        q: "Øker Salgsløftet verdien på boligen?",
        a: "Det kan vi ikke love. Du ser mulige forbedringer og hva de koster. En eventuell verdiøkning vurderer megler eller takstmann.",
      },
      {
        q: "Hva om jeg ikke er fornøyd?",
        a: "Si fra innen sju dager etter levering. Du får én gratis justeringsrunde. Er du fortsatt ikke fornøyd, får du 50 % av beløpet tilbake.",
      },
      {
        q: "Når betaler jeg?",
        a: "Du får faktura på e-post etter levering. Faste avtaler faktureres i starten av måneden.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Bestilling",
    heading: "Send oss bildene dine",
    subline: "Velg tjeneste og legg ved en lenke, eller start med et gratis prøvebilde. Du får svar innen 24 timer på hverdager.",
    ctaPrimary: "Send bestilling",
    form: {
      fields: {
        name: "Navn",
        email: "E-post",
        customerType: "Hvem bestiller?",
        service: "Velg tjeneste",
        photosLink: "Lenke til bildene eller annonsen",
        photosLinkHelp: "For eksempel Google Drive, Dropbox eller WeTransfer. Sjekk at lenken kan åpnes.",
        message: "Kommentar (valgfritt)",
        rights: "Jeg bekrefter at jeg har rett til å bruke bildene og til å sende dem til Eiendomly for bearbeiding.",
        marketing:
          "Jeg får 10 % rabatt og samtykker til at Eiendomly bruker før/etter-bildene i egen markedsføring, uten adresse eller personlige detaljer.",
        withdrawal:
          "Jeg ber om at arbeidet starter med en gang, og forstår at angreretten på 14 dager faller bort når bildene er levert. Angrer jeg før levering, betaler jeg for arbeidet som er gjort.",
      },
      privateCustomerTypes: ["Privat utleier", "Airbnb-vert", "Boligselger", "Hytteeier"],
      selectPlaceholder: "Velg …",
      customerTypes: ["Privat utleier", "Airbnb-vert", "Boligselger", "Megler", "Utleieforvalter", "Hytteeier", "Hotell"],
      serviceOptions: [
        { key: "freeSample", label: "Gratis prøvebilde (1 bilde)" },
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
      trustNote: "Du betaler først etter levering. Én gratis justering. Ikke fornøyd etter justeringen? Da får du 50 % tilbake.",
      privacyLink: "Les om personvern",
    },
  },
  servicePages: {
    photoBoost: {
      eyebrow: "Bildeløft",
      heading: "Bildeløft for FINN, Airbnb og Booking.com",
      intro:
        "Opptil 40 bilder forbedret for 1 890 kr, levert innen 24 timer. Du sender bildene du har, også mobilbilder.",
      comparison: {
        beforeLabel: "Originalbilde",
        afterLabel: "Etter bildeløft",
        beforeAlt: "Originalbilde av en stue, før bildeløft",
        afterAlt: "Samme stue etter bildeløft, med justert lys, farger og skarphet",
        caption: "Lys, farger og linjer justert. Løse småting ryddet bort.",
        hint: "Dra for å sammenligne.",
      },
      sections: [
        {
          heading: "Dette får du",
          blocks: [
            {
              type: "list",
              items: [
                "Opptil 40 bilder med bedre lys, farger og skarphet.",
                "Rette linjer og løse småting ryddet bort.",
                "Vi velger det beste bildet til forsiden.",
                "Tre forslag til annonsetittel.",
                "Alle bildene på en lenke innen 24 timer.",
              ],
            },
            { type: "cta" },
          ],
        },
        {
          heading: "Hva det betyr i kroner",
          blocks: [
            { type: "p", text: "Bildeløft koster det samme, uansett hva du leier ut eller selger. Tre eksempler:" },
            {
              type: "list",
              items: [
                "Korttidsutleie: Leier du ut for 1 200 kr natten, er Bildeløft betalt etter to netter.",
                "Langtidsutleie: Med 15 000 kr i månedsleie koster én tom måned nesten åtte ganger så mye som Bildeløft.",
                "Salg: For en bolig til 4 000 000 kr er Bildeløft under 0,05 % av prisen.",
              ],
            },
          ],
        },
        {
          heading: "Bilder til Airbnb",
          blocks: [
            {
              type: "p",
              text: "Bare naturlige justeringer. Møbler, utsikt og fasiliteter skal stemme med det gjestene møter, og vi legger aldri tekst på bildene.",
            },
          ],
        },
        {
          heading: "Bilder til hotellets nettside",
          blocks: [
            {
              type: "p",
              text: "Vi gjør også bilder av rom, fellesområder og uteområder klare for hotellets egen nettside. I en undersøkelse fra Expedia Group svarte 36 % av de reisende at de bruker bilder og beskrivelser på hotellets egen nettside for å finne ut om stedet passer dem. [Hotels.com, Unpack ’24](https://partner.expediagroup.com/en-us/resources/blog/unpack-2024-hotel-trends)",
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
      priceNote: "Opptil 40 bilder. Levert innen 24 timer.",
      sample: { text: "Usikker? Send ett bilde først.", label: "Få et gratis prøvebilde" },
      cta: "Bestill bildeløft",
    },
    virtualStaging: {
      eyebrow: "Digital styling",
      heading: "Digital boligstyling for salg og langtidsutleie",
      intro: "Vis hva et tomt rom kan bli, for 1 190 kr per rom. Du velger stil, vi møblerer rommet på bildet.",
      comparison: {
        beforeLabel: "Originalbilde",
        afterLabel: "Digital styling – illustrasjon",
        beforeAlt: "Originalbilde av en tom stue med store vinduer",
        afterAlt: "Samme stue møblert digitalt med sofa, bord og planter – digital styling, illustrasjon",
        caption: "Vegger, gulv og vinduer er som på originalen.",
        hint: "Dra for å sammenligne.",
      },
      sections: [
        {
          heading: "Hvorfor møblere digitalt?",
          blocks: [
            {
              type: "p",
              text: "Et tomt rom er vanskelig å se for seg. Når det er møblert, ser kjøperen eller leietakeren hvordan rommet kan brukes. Vegger, gulv, vinduer og kjøkken er som på originalen.",
            },
          ],
        },
        {
          heading: "Hva du sparer",
          blocks: [
            {
              type: "p",
              text: "Eksempel: Stue og to soverom i en treroms koster 3 570 kr digitalt. Hos to norske stylister starter fysisk fullstyling av en treroms på 16 900 og 23 500 kr.",
            },
            {
              type: "table",
              caption: "Digital møblering hos Eiendomly sammenlignet med oppgitte startpriser for fysisk fullstyling",
              head: ["Leilighet", "Eiendomly", "Bolig Interiør", "Main Boligstyling", "Du sparer"],
              rows: [
                ["2-roms", "2 380 kr", "Fra 12 900 kr", "Fra 17 500 kr", "10 520–15 120 kr"],
                ["3-roms", "3 570 kr", "Fra 16 900 kr", "Fra 23 500 kr", "13 330–19 930 kr"],
                ["4-roms", "4 760 kr", "Fra 18 900 kr", "Fra 27 800 kr", "14 140–23 040 kr"],
              ],
            },
            {
              type: "note",
              text: "Eiendomly-prisen gjelder stuen og alle soverommene. Fysisk styling inkluderer transport og møbelleie. Alle priser inkl. mva. Prislister sjekket 19. november 2026: [Bolig Interiør](https://www.bolig-interior.no/priser) · [Main Boligstyling](https://www.mainboligstyling.no/priser-boligstyling/)",
            },
          ],
        },
        {
          heading: "Dette får du",
          blocks: [
            {
              type: "list",
              items: [
                "Rommet møblert i stilen du velger.",
                "Bildet merket «Digital styling – illustrasjon. Møbler følger ikke med.»",
                "Originalbildet ved siden av.",
              ],
            },
            { type: "p", text: "Vi bekrefter leveringstid når vi har sett bildene." },
            { type: "cta" },
          ],
        },
        {
          heading: "Skal du leie ut på Airbnb?",
          blocks: [
            {
              type: "p",
              text: "Digital styling er for salg og langtidsutleie. Til Airbnb anbefaler vi [Bildeløft](/bildeloft), med naturlige justeringer av rommene slik gjestene får dem.",
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
        "Se hva maling, nye kjøkkenfronter eller nytt gulv kan gjøre før salg. Du velger rommene og får før/etter-illustrasjon og handleliste med priser. 1 990 kr per rom.",
      sections: [
        {
          heading: "Hvem passer det for?",
          blocks: [
            {
              type: "p",
              text: "Meglere og deg som selger selv. Særlig eldre boliger, tomme boliger og boliger som har ligget ute en stund.",
            },
          ],
        },
        {
          heading: "Hva det betyr i kroner",
          blocks: [
            {
              type: "p",
              text: "Eksempel: Kjøkken og ett bad koster 3 980 kr. På en bolig til 3 000 000 kr er det 0,13 % av prisen. Handlelisten viser hvilke tiltak som er verdt å gjøre før salg, og hva de koster.",
            },
            {
              type: "case",
              heading: "Fra et norsk boligsalg: styling for 200 kr",
              text: "Selgerne hengte opp lyse gardiner de hadde fra før, flyttet møbler, lånte lamper og kjøpte blomster. Leiligheten var taksert til 2,6 millioner kr og ble solgt for 2,85 millioner kr etter én visning. [Les saken i Bergens Tidende (2015)](https://www.bt.no/husoghjem/bolig/i/Vbbpw3/stylingbudsjett-200-kroner-sjekk-hvordan-vi-fikset-leiligheten-foer-visning)",
            },
            {
              type: "note",
              text: "Tallene gjelder dette salget. Hvor mye stylingen betydde for budene, vet ingen.",
            },
          ],
        },
        {
          heading: "Pris og innhold",
          blocks: [
            {
              type: "p",
              text: "1 990 kr per rom. Du velger rommene selv, for eksempel kjøkken, bad og stue. Hele boligen koster maks 9 900 kr, uansett hvor mange rom.",
            },
            {
              type: "list",
              items: [
                "En før/etter-illustrasjon, merket «Illustrasjon – ikke utført».",
                "Handleliste med produkter, priser og lenker.",
                "Kostnadsanslag, og hva du kan gjøre selv og hva som krever fagfolk.",
                "Tiltak innenfor budsjettet du velger, for eksempel maks 25 000 kr for et bad.",
              ],
            },
            {
              type: "p",
              text: "En eventuell verdiøkning vurderer megler eller takstmann. Vi bekrefter leveringstid når vi har sett bildene.",
            },
            { type: "cta" },
          ],
        },
      ],
      links: [
        { text: "Vil du heller møblere et tomt rom?", label: "Se digital boligstyling", href: "/digital-styling" },
      ],
      priceHeading: "Pris",
      price: "1 990 kr",
      priceNote: "Per rom. Maks 9 900 kr for hele boligen.",
      cta: "Bestill Salgsløftet",
    },
  },
  orderPage: {
    eyebrow: "Bestilling",
    heading: "Bestill bildeløft, digital styling eller Salgsløftet",
    intro: "Velg tjeneste og legg ved en lenke til bildene. Du får svar innen 24 timer på hverdager.",
  },
  thanks: {
    eyebrow: "Mottatt",
    heading: "Takk!",
    intro: "Du får svar på e-post innen 24 timer på hverdager.",
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
          body: "Megleravtale og forvalteravtale har 3 måneders binding, deretter 1 måneds oppsigelse. Avtalen faktureres i starten av hver måned. Jobber som ikke brukes i løpet av måneden, overføres ikke. Ekstra Bildeløft utover avtalen koster 1 490 kr.",
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
    tagline: "Bedre boligbilder for salg og utleie.",
    linksHeading: "Nettsted",
    legalHeading: "Juridisk",
    contactHeading: "Kontakt",
    languageHeading: "Språk",
    rights: "Eiendomly. Alle rettigheter reservert.",
    legalName: "Eiendomly Solberg",
    replyNote: "Svar innen 24 timer på hverdager.",
  },
};
