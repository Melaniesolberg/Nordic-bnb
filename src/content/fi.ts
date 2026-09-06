import type { SiteContent } from "./types";

export const fi: SiteContent = {
  meta: {
    title: "Nordic BnB — Kiinteistöhallinta, Costa del Sol",
    description:
      "Täyden palvelun lyhyt- ja pitkäaikaisvuokrauksen hallinta Marbellassa, Mijasissa, Fuengirolassa ja Benalmádenassa. Kiinteistösi, jatkuvasti parannettuna.",
  },
  nav: {
    links: [
      { label: "Järjestelmä", href: "/fi#system" },
      { label: "Palvelut", href: "/fi#services" },
      { label: "Alueet", href: "/fi#areas" },
      { label: "Meistä", href: "/fi#about" },
      { label: "Tiimi", href: "/fi/contact" },
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
  system: {
    eyebrow: "Näin toimimme",
    heading: "Tyhjästä huoneesta vahvistettuun varaukseen.",
    intro:
      "Prosessi, joka muuttaa ilmoituksen palaavien vieraiden virraksi.",
    pillars: [
      {
        code: "",
        title: "Otamme kiinteistön vastuullemme",
        description: "Ensikontaktista täyteen vastuuseen, ilman stressiä sinulle.",
      },
      {
        code: "",
        title: "Tarkastamme ja päivitämme tyylittelyn",
        description: "Huonekalut, tekstiilit ja yksityiskohdat säädetty vieraita miellyttäviksi.",
      },
      {
        code: "",
        title: "Kuvaamme ja julkaisemme ilmoituksen",
        description: "Ammattimaiset kuvat, live kaikilla kanavilla samalla viikolla.",
      },
      {
        code: "",
        title: "Hoidamme varaukset ja vieraat",
        description: "Ensimmäisestä viestistä avainten luovutukseen — hoidamme kaiken.",
      },
      {
        code: "",
        title: "Raportoimme ja parannamme jatkuvasti",
        description: "Sinä seuraat kehitystä, me hienosäädämme hintaa ja esittelyä.",
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
    realResultsLabel: "Aitoja tuloksia",
    disclaimer: "Aidot ennen/jälkeen-kuvat. Kasvuluvut ovat havainnollistavia esimerkkejä, kunnes voimme julkaista todennettua asiakasdataa.",
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
      "Nordic BnB perustettiin vuonna 2023, ja se rakentuu yksinkertaisen ajatuksen ympärille: kiinteistöhallinnan ei pitäisi olla passiivista. Ilmoitus, joka julkaistaan ja jätetään yksin, alisuoriutuu — hiljaa, vuosien ajan, kenenkään huomaamatta.",
      "Jokaista hallinnoimaamme kiinteistöä on tarkoitus tarkastella, testata ja parantaa jatkuvasti — hinnoittelua, esittelyä, asemointia — sen sijaan että se asetettaisiin kerran ja unohdettaisiin.",
      "Nordic BnB:n takana on paikallinen toimintaverkosto: siivous, tyylittely, huolto ja paikan päällä tapahtuva koordinointi koko Costa del Solilla, yhdessä perustajien kanssa, jotka uskovat, että omistajat ansaitsevat täyden näkyvyyden siihen, miten heidän kiinteistönsä suoriutuu.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Perustaja, Nordic BnB",
    founderQuote:
      "Emme vain ylläpidä ilmoitusta — rakennamme kiinteistön, joka oikeasti konvertoi. Tunnemme Costa del Solin markkinat, ja tunnemme vieraat, erityisesti pohjoismaiset vieraat, jotka varaavat täältä.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Perustajakumppani, Nordic BnB",
    founder2Quote:
      "Jokainen omistaja ansaitsee nähdä tarkalleen, miten hänen kiinteistönsä suoriutuu — ei arvailua, ei mustaa laatikkoa.",
  },
  testimonials: {
    eyebrow: "Omistajien kokemuksia",
    heading: "Mitä ihmiset sanovat.",
    items: [
      {
        quote:
          "Asunnon täyttäminen talvella oli vaikeaa. Nordic BnB otti vastuun maaliskuussa, ja elokuuhun mennessä olimme täyteen varattuja lokakuulle asti. Saan nyt yhden raportin kuukaudessa sen sijaan, että jahtaisin vastauksia itse.",
        name: "Kristian H.",
        location: "Marbella",
      },
      {
        quote:
          "Asun Tukholmassa, en ole nähnyt asuntoa yli vuoteen. Nordic BnB hoitaa kaiken, ja tuotto on noussut.",
        name: "Annika L.",
        location: "Fuengirola",
      },
      {
        quote:
          "Hoidin sitä itse kolme vuotta. Nyt minun ei tarvitse huolehtia — ei valituksia, eikä puhelin enää soi keskellä yötä.",
        name: "Carlos M.",
        location: "Benalmádena",
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
    orgNumberLabel: "Y-tunnus 931 905 856",
    realPhotosNote: "Tämän sivuston ennen/jälkeen-kuvat ovat aitoja tuloksia, eivät kuvituskuvia, ellei toisin mainita.",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Jokainen kiinteistö ansaitsee tulla kerrotuksi hyvin.",
  },
  showcase2: {
    eyebrow: "Esittely",
    heading: "Tyyliteltynä, kuvattuna ja aseteltuna suoriutumaan.",
  },
  contactPage: {
    eyebrow: "Tiimi",
    heading: "Nordic BnB:n tiimi.",
    intro:
      "Pieni, käytännönläheinen tiimi — ei puhelinpalvelukeskus. Ota suoraan yhteyttä, tai lue kuka on kiinteistösi työn takana.",
    teamHeading: "Tiimi paikan päällä",
    teamIntro:
      "Petterin ja Melanien lisäksi paikallinen operatiivinen tiimi pitää jokaisen kiinteistön toiminnassa päivittäin.",
    roles: [
      { title: "Huoltomies", description: "Kunnossapito, korjaukset ja tarkastukset varausten välillä." },
      { title: "Siivoustiimi", description: "Ammattimainen siivous ja tekstiilien vaihto jokaisen vieraan jälkeen." },
      { title: "Valokuvaaja/stylisti", description: "Sisustus ja kuvaus jokaiselle uudelle ilmoitukselle." },
    ],
    emailHeading: "Ota yhteyttä sähköpostitse",
    ctaHeading: "Puhutaan kiinteistöstäsi.",
    ctaSubline:
      "Onko sinulla kysymys, tai haluatko nähdä mitä Nordic BnB voisi tehdä kiinteistöllesi? Lähetä meille sähköpostia — vastaamme henkilökohtaisesti, yleensä vuorokauden sisällä.",
    ctaButton: "Lähetä sähköpostia",
  },
};
