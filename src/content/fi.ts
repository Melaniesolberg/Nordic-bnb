import type { SiteContent } from "./types";

export const fi: SiteContent = {
  meta: {
    title: "Nordic BnB — Kiinteistöhallinta, Costa del Sol",
    description:
      "Täyden palvelun lyhyt- ja pitkäaikaisvuokrauksen hallinta Marbellassa, Mijasissa, Fuengirolassa ja Benalmádenassa. Kiinteistösi, jatkuvasti parannettuna.",
  },
  nav: {
    links: [
      { label: "Järjestelmä", href: "#system" },
      { label: "Palvelut", href: "#services" },
      { label: "Alueet", href: "#areas" },
      { label: "Meistä", href: "#about" },
    ],
    cta: "Pyydä kiinteistökatsaus",
    whatsapp: "WhatsApp",
    whatsappMessage: "Hei Nordic BnB — haluaisin keskustella kiinteistöstäni.",
    toggleMenu: "Avaa valikko",
    selectLanguage: "Valitse kieli",
  },
  hero: {
    eyebrow: "Kiinteistöhallinta — Costa del Sol",
    headlineLines: ["Kiinteistösi.", "Jatkuvasti parannettuna."],
    subline:
      "Täyden palvelun lyhyt- ja pitkäaikaisvuokrauksen hallinta Marbellassa, Mijasissa, Fuengirolassa ja Benalmádenassa — asemointi, hinnoittelu ja esittely, hiottuna keskeytyksettä.",
    ctaPrimary: "Pyydä kiinteistökatsaus",
    ctaSecondary: "Ota yhteyttä WhatsAppissa",
    scrollHint: "Vieritä",
    locationTag: "Costa del Sol, Espanja",
  },
  problem: {
    eyebrow: "Ongelma",
    heading: "Kaunis kiinteistö. Hajanainen toiminta.",
    subline:
      "Otamme hoitaaksemme ilmoituksen, hinnoittelun, vieraiden viestinnän, siivouksen ja huollon — yhden kattavan käyttöjärjestelmän vuokrauksellesi.",
    intro:
      "Useimmilta Costa del Solin omistajilta ei puutu hieno kiinteistö — heiltä puuttuu järjestelmä. Kuvat ovat vanhentuneita. Hinta ei ole muuttunut kuukausiin. Viestejä kertyy kolmeen eri sovellukseen. Siivous sovitaan ryhmäkeskustelussa. Eikä kukaan katso kokonaiskuvaa.",
    frictions: [
      { label: "Ilmoitus", detail: "Valokuvat ja teksti, jotka aliarvioivat kiinteistön" },
      { label: "Hinta", detail: "Yksi kiinteä hinta ympäri vuoden, kysynnästä riippumatta" },
      { label: "Kanavat", detail: "Airbnb, Booking.com ja tiedustelut hoidetaan erikseen" },
      { label: "Vieraat", detail: "Viesteihin vastataan myöhään tai ei ollenkaan" },
      { label: "Siivous", detail: "Sovitaan tilapäisesti, ilman laadunvalvontaa" },
      { label: "Huolto", detail: "Ongelmat huomaa seuraava vieras, ei ennen sitä" },
    ],
    pivot: "Nordic BnB ottaa haltuunsa koko toiminnan.",
    imageAlt: "Tyypillinen, aliarvioiva ilmoituskuva",
    imageBadge: "Ennen Nordic BnB:tä",
  },
  system: {
    eyebrow: "Nordic BnB -järjestelmä",
    heading: "Yksi käyttöjärjestelmä koko vuokraukselle.",
    intro:
      "Kuusi osa-aluetta, jotka toimivat jatkuvasti ja yhdessä — ei kertaluontoinen ilmoituksen perustaminen. Vieritä liikkuaksesi järjestelmän läpi.",
    pillars: [
      {
        code: "01",
        title: "Asemoi",
        description:
          "Valokuvaus, tyylittely ja ilmoitusteksti uudistettuna näyttämään kiinteistön parhaimmillaan — jokaisella kanavalla, jolla se näkyy.",
      },
      {
        code: "02",
        title: "Hinnoittele",
        description:
          "Dynaaminen, kysyntäpohjainen hinnoittelu, joka mukautuu sesonkiin, kalenteriin ja kilpailuun — ei yhtä kiinteää hintaa.",
      },
      {
        code: "03",
        title: "Jakele",
        description:
          "Airbnb, Booking.com ja kiinteistöllesi merkitykselliset kanavat, synkronoituna ja optimoituna jokaiselle yleisölle.",
      },
      {
        code: "04",
        title: "Isännöi",
        description:
          "Nopea, lämmin vierasviestintä tiedustelusta uloskirjautumiseen, ja sisäänkirjautumiskokemus, joka ansaitsee viiden tähden arvostelut.",
      },
      {
        code: "05",
        title: "Huolla",
        description:
          "Ammattimainen siivous, tyylittelyn viimeistely ja huollon koordinointi jokaisen oleskelun välillä.",
      },
      {
        code: "06",
        title: "Paranna",
        description:
          "Suorituskykyä tarkastellaan jatkuvasti, ja jokainen päätös — hinta, kuvat, teksti — hiotaan datan perusteella.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Ennen → jälkeen",
    heading: "Sama kiinteistö. Täysin erilainen ilmoitus.",
    intro:
      "Tavalliset ilmoitukset aliarvioivat poikkeukselliset kiinteistöt. Näin kaikki muuttuu, kun Nordic BnB ottaa ohjat.",
    beforeLabel: "Ennen",
    afterLabel: "Nordic BnB",
    sliderAriaLabel: "Ennen ja jälkeen -ilmoitusvertailu",
    beforeAlt: "Tavallinen ilmoituskuva, ennen Nordic BnB:tä",
    afterAlt: "Tyylitelty Nordic BnB -ilmoituskuva, jälkeen",
    fields: [
      {
        label: "Otsikko",
        before: "Mukava asunto lähellä rantaa, 2 makuuhuonetta",
        after: "Aurinkoinen keidas Marbellassa, 90 sekuntia hiekasta",
      },
      {
        label: "Valokuvaus",
        before: "Puhelinkuvia, epätasainen valaistus, sotkuiset huoneet",
        after: "Tyylitelty, ammattimaisesti kuvattu, ulkotilat kultaisessa tunnissa",
      },
      {
        label: "Hinta",
        before: "90 €/yö, kiinteä ympäri vuoden",
        after: "68–165 €/yö, mukautuu kysyntään reaaliajassa",
      },
      {
        label: "Kuvaus",
        before: "Kaksi riviä. Ei tarinaa, ei yksityiskohtia.",
        after: "Kirjoitettu myymään kokemusta — ja konvertoimaan",
      },
      {
        label: "Näkyvyys",
        before: "Ilmoitettu yhdellä alustalla",
        after: "Jaeltu jokaiseen merkitykselliseen kanavaan",
      },
    ],
  },
  portfolio: {
    eyebrow: "Referenssit",
    heading: "Todellisia muutoksia, kaikentyyppisissä kiinteistöissä.",
    intro:
      "Katsaus siihen, miten Nordic BnB asemoi ilmoitukset uudelleen — asunnot, huvilat ja talot — pitkin Costa del Solia.",
    disclaimer: "Havainnollistavia esimerkkilukuja — ei todennettuja Nordic BnB -tuloksia.",
    beforeLabel: "Ennen",
    afterLabel: "Jälkeen",
    properties: [
      {
        name: "Asunto, Fuengirola",
        location: "Fuengirola",
        stats: [
          { value: "+29 %", label: "tuotto" },
          { value: "82 %", label: "käyttöaste" },
        ],
      },
      {
        name: "Huvila, Marbella",
        location: "Marbella",
        stats: [
          { value: "+34 %", label: "tuotto" },
          { value: "86 %", label: "käyttöaste" },
        ],
      },
      {
        name: "Talo, Mijas",
        location: "Mijas",
        stats: [
          { value: "+27 %", label: "tuotto" },
          { value: "79 %", label: "käyttöaste" },
        ],
      },
    ],
  },
  performance: {
    eyebrow: "Suorituskyky",
    heading: "Miltä jatkuva parantaminen näyttää.",
    intro:
      "Havainnollistava optimointiskenaario kahden makuuhuoneen Costa del Sol -kiinteistölle, joka näyttää millaista kehitystä täysi järjestelmä voi tuottaa yhden sesongin aikana.",
    disclaimer:
      "Vain havainnollistava esimerkki — ei todennettu Nordic BnB -tulos. Luvut ovat demonstraatioskenaario, kunnes todelliset asiakastiedot voidaan julkaista täällä.",
    metrics: [
      { value: "+18 %", label: "Keskimääräinen yöhinta" },
      { value: "+24 %", label: "Tuottopotentiaali" },
      { value: "+13 %", label: "Käyttöaste" },
      { value: "4,9", label: "Vieraiden arvosana" },
    ],
    chartLabel: "Havainnollistava tuottokäyrä, kuukausittain",
    channelLabel: "Havainnollistava kanavajakauma",
    directOtherLabel: "Suora & muut",
  },
  services: {
    eyebrow: "Palvelut",
    heading: "Kaksi strategiaa. Yksi huolellisuuden taso.",
    intro:
      "Sopiiko kiinteistösi parhaiten lomavieraille vai pitkäaikaiselle vuokralaiselle, sama periaate pätee: täyden palvelun hallinta, jatkuvasti optimoituna.",
    whatsappTemplate: "Hei Nordic BnB — haluaisin kysyä palvelusta {service}.",
    shortTerm: {
      title: "Lyhyt- ja lomavuokrauksen hallinta",
      price: "14,9 % + ALV",
      priceNote: "vuokratuotosta",
      description:
        "Täydellinen Airbnb- ja Booking.com-hallinta — ensimmäisestä ilmoituksesta päivittäiseen toimintaan.",
      features: [
        "Ilmoituksen luonti ja jatkuva optimointi",
        "Dynaaminen, kysyntäpohjainen hinnoittelu",
        "Monikanavajakelu (Airbnb, Booking.com ja muut)",
        "Vierasviestintä ja sisäänkirjautumisen koordinointi",
        "Ammattimainen siivous ja liinavaatepalvelu",
        "Kiinteistötarkastukset oleskelujen välillä",
        "Huollon koordinointi",
        "Tyylittely sekä kuva-/sisältökoordinointi",
        "Raportointi omistajalle",
      ],
    },
    longTerm: {
      title: "Pitkäaikaisvuokrauksen hallinta",
      price: "7,45 % + ALV",
      priceNote: "kuukausivuokrasta",
      description:
        "Markkinointi, vuokralaiskoordinointi ja jatkuva valvonta omistajille, jotka haluavat ennustettavaa, matalan intensiteetin tuloa.",
      features: [
        "Kiinteistön markkinointi ja vuokralaishankinta",
        "Vuokralaiskoordinointi ja viestintä",
        "Vuokranperintä ja -hallinta",
        "Kiinteistön valvonta",
        "Huollon koordinointi",
        "Raportointi omistajalle",
      ],
    },
    termsNote:
      "Lopulliset kaupalliset ehdot voivat riippua kiinteistöstä, sen tyypistä ja tietyistä palveluvaatimuksista — yllä olevat luvut kuvaavat vakiorakennettamme.",
    ctaLabel: "Kysy tästä palvelusta",
  },
  dashboard: {
    eyebrow: "Omistajakokemus",
    heading: "Sinä omistat kiinteistön. Me hoidamme toiminnan.",
    intro:
      "Reaaliaikainen näkymä siihen, miten kiinteistösi suoriutuu — varaukset, käyttöaste, siivouksen tila, huolto ja kuukausittainen maksusi, aina näkyvillä.",
    footnote: "Konseptikäyttöliittymä — havainnollistava omistajapaneeli, näytetty esimerkkitiedoilla.",
    windowTitle: "Villa Sunrise — Omistajaportaali",
    cardAlt: "Villa Sunrise, tämän paneelin taustalla oleva kiinteistö",
    revenueChangeNote: "+18 % edelliseen kuukauteen verrattuna",
    payoutNote: "1.10. — pankkisiirto",
    cleaningStatusText: "Siivous ajoitettu",
    maintenanceStatusText: "Ei avoimia asioita",
    labels: {
      revenue: "Tuotto tässä kuussa",
      occupancy: "Käyttöaste",
      upcoming: "Tulevat oleskelut",
      cleaning: "Siivouksen tila",
      maintenance: "Huolto",
      payout: "Seuraava maksu",
      guest: "Vieras",
      status: "Tila",
    },
  },
  operations: {
    eyebrow: "Toiminta",
    heading: "Jokaisen oleskelun takana oleva järjestelmä.",
    intro:
      "Paikallinen siivoojien, tyylittelijöiden ja huoltokoordinaattoreiden verkosto — joka liikkuu järjestyksessä jokaisen vieraan ympärillä, joka kerta.",
    bannerHeadline: "Jokainen oleskelu, käsin valmisteltuna.",
    sequenceLabels: {
      styling: "Tyylittely",
      cleaning: "Siivous",
      guestArrival: "Vieraan saapuminen",
      detail: "Yksityiskohta",
    },
    steps: [
      { title: "Varaus vahvistettu", detail: "Varaus synkronoituu välittömästi kaikissa kanavissa." },
      { title: "Vieras valmisteltu", detail: "Sisäänkirjautumistiedot, talon opas ja tervetuloviesti lähetetään." },
      { title: "Siivous ajoitettu", detail: "Ammattimainen siivous varataan ja vahvistetaan automaattisesti." },
      { title: "Kiinteistö tarkastettu", detail: "Tyylittely, kunto ja mukavuudet tarkistetaan ennen saapumista." },
      { title: "Vieras saapuu", detail: "Sujuva sisäänkirjautuminen, ja tiimi valmiina kaikkeen tarvittavaan." },
      { title: "Arvostelu kerätty", detail: "Vierailukokemus päätetään ja palaute kerätään." },
      { title: "Suorituskyky ohjaa hinnoittelua", detail: "Jokaisen oleskelun data terävöittää seuraavan hintapäätöksen." },
    ],
  },
  compare: {
    eyebrow: "Lyhytaikainen vs. pitkäaikainen",
    heading: "Etkö ole varma, mikä strategia sopii kiinteistöllesi?",
    intro:
      "Molemmat tiet voivat toimia hyvin Costa del Solilla. Oikea vaihtoehto riippuu kiinteistöstäsi, tavoitteistasi ja siitä, kuinka aktiivisesti haluat osallistua.",
    shortTerm: {
      title: "Lyhytaikainen / lomavuokraus",
      tagline: "Suurempi tuottopotentiaali, aktiivisempi hallinta",
      points: [
        "Suurempi tuottopotentiaali sesonkiaikaan",
        "Vaatii aktiivista, jatkuvaa hallintaa",
        "Tuotto vaihtelee sesongin mukaan",
        "Enemmän joustavuutta käyttää kiinteistöä itse",
      ],
    },
    longTerm: {
      title: "Pitkäaikaisvuokraus",
      tagline: "Ennustettava tuotto, matalampi toiminnan intensiteetti",
      points: [
        "Vakaa, ennustettava kuukausitulo",
        "Matalampi päivittäisen toiminnan intensiteetti",
        "Pidempi, vakaampi vuokrasuhde",
        "Vähemmän joustavuutta käyttää kiinteistöä itse",
      ],
    },
    cta: "Löydä kiinteistöllesi oikea strategia",
  },
  areas: {
    eyebrow: "Missä toimimme",
    heading: "Costa del Sol, Marbellasta Benalmádenaan.",
    intro:
      "Paikallinen läsnäolo koko rannikolla tarkoittaa nopeampia vastausaikoja, parempaa paikallistuntemusta ja hinnoittelua, joka heijastaa kutakin mikromarkkinaa.",
    areas: [
      {
        name: "Marbella",
        description: "Huippuluokan huvilat ja rantahuoneistot Espanjan vakiintuneimmilla luksusmarkkinoilla.",
      },
      {
        name: "Mijas",
        description: "Rannikon Mijas Costa ja rinteellä sijaitseva kylä — vahva vetovoima ympäri vuoden.",
      },
      {
        name: "Fuengirola",
        description: "Suurivolyyminen rantaturismi jatkuvalla lyhytaikaisella kysynnällä.",
      },
      {
        name: "Benalmádena",
        description: "Tasapainoinen sekoitus perheiden lomavuokrausta ja pitkäaikaista rannikkoasumista.",
      },
    ],
  },
  about: {
    eyebrow: "Meistä",
    heading: "Rakennettu yksinkertaiselle ajatukselle.",
    paragraphs: [
      "Nordic BnB rakentuu yksinkertaisen ajatuksen ympärille: kiinteistöhallinnan ei pitäisi olla passiivista. Ilmoitus, joka julkaistaan ja jätetään yksin, alisuoriutuu — hiljaa, vuosien ajan, kenenkään huomaamatta.",
      "Jokaista hallinnoimaamme kiinteistöä on tarkoitus tarkastella, testata ja parantaa jatkuvasti — hinnoittelua, esittelyä, asemointia — sen sijaan että se asetettaisiin kerran ja unohdettaisiin.",
      "Nordic BnB:n takana on paikallinen toimintaverkosto: siivous, tyylittely, huolto ja paikan päällä tapahtuva koordinointi koko Costa del Solilla, yhdessä perustajien kanssa, jotka uskovat, että omistajat ansaitsevat täyden näkyvyyden siihen, miten heidän kiinteistönsä suoriutuu.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Perustaja, Nordic BnB",
    founderQuote:
      "Omistajien ei pitäisi joutua valitsemaan kauniin ja hyvin hoidetun kiinteistön välillä. Meidän tehtävämme on varmistaa, ettei heidän koskaan tarvitse.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Perustajakumppani, Nordic BnB",
    founder2Quote:
      "Jokainen omistaja ansaitsee nähdä tarkalleen, miten hänen kiinteistönsä suoriutuu — ei arvailua, ei mustaa laatikkoa.",
  },
  testimonials: {
    eyebrow: "Omistajien kokemuksia",
    heading: "Mitä omistajat sanovat.",
    placeholderNotice:
      "Esimerkkilainauksia, jotka kuvastavat omistajilta odotettua sävyä — ei vielä todennettuja arvosteluja.",
    items: [
      {
        quote:
          "Asun Norjassa ja omistan asunnon Marbellassa — Nordic BnB:n ansiosta pystyn oikeasti nukkumaan yöllä. Tuotto on noussut, enkä enää itse vastaa vieraiden viesteihin kello kahdelta yöllä.",
        name: "Kristian H.",
        location: "Norjalainen omistaja, Marbella",
      },
      {
        quote:
          "Ruotsalaisena omistajana ulkomailla tarvitsin jonkun, johon voin luottaa täysin. Nordic BnB viestii selkeästi, kiinteistö näyttää paremmalta kuin koskaan, ja luvut puhuvat puolestaan.",
        name: "Annika L.",
        location: "Ruotsalainen omistaja, Fuengirola",
      },
      {
        quote:
          "Hoidin asuntoa itse vuosia. Nordic BnB:n kanssa kaikki tuntuu ammattimaisemmalta — paremmat kuvat, parempi hinnoittelu ja huomattavasti vähemmän päänvaivaa.",
        name: "Carlos M.",
        location: "Espanjalainen omistaja, Benalmádena",
      },
    ],
  },
  finalCta: {
    eyebrow: "Jutellaan",
    heading: "Katsotaan, mitä kiinteistösi voisi saavuttaa.",
    subline:
      "Kiinteistösi ansaitsee enemmän kuin peruspalvelun. Pyydä maksuton kiinteistökatsaus, niin näytämme tarkalleen missä se alisuoriutuu — ja miltä jatkuva parantaminen näyttäisi.",
    ctaPrimary: "Pyydä kiinteistökatsaus",
    ctaSecondary: "Ota yhteyttä WhatsAppissa",
    form: {
      fields: {
        name: "Nimi",
        email: "Sähköposti",
        phone: "Puhelin / WhatsApp",
        location: "Kiinteistön sijainti",
        propertyType: "Kiinteistötyyppi",
        bedrooms: "Makuuhuoneet",
        currentlyRented: "Tällä hetkellä vuokrattu?",
        yes: "Kyllä",
        no: "Ei",
        strategy: "Lyhytaikainen, pitkäaikainen vai et tiedä?",
        strategyOptions: { short: "Lyhytaikainen", long: "Pitkäaikainen", unsure: "En tiedä" },
        message: "Viesti",
      },
      submit: "Hanki maksuton kiinteistökatsaus",
      successTitle: "Vastaanotettu.",
      successBody: "Kiitos — olemme sinuun yhteydessä pian. Kiireellisissä asioissa ota yhteyttä WhatsAppissa.",
      errorMessage: "Jotain meni pieleen — kokeile sen sijaan WhatsAppia.",
    },
  },
  footer: {
    tagline: "Kiinteistösi. Jatkuvasti parannettuna.",
    linksHeading: "Sivusto",
    contactHeading: "Yhteystiedot",
    languageHeading: "Kieli",
    rights: "Nordic BnB. Kaikki oikeudet pidätetään.",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Jokainen kiinteistö ansaitsee tulla kerrotuksi hyvin.",
  },
  showcase2: {
    eyebrow: "Esittely",
    heading: "Tyyliteltynä, kuvattuna ja aseteltuna suoriutumaan.",
  },
};
