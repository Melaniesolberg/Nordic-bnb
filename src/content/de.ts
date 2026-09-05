import type { SiteContent } from "./types";

export const de: SiteContent = {
  meta: {
    title: "Nordic BnB — Immobilienverwaltung, Costa del Sol",
    description:
      "Full-Service-Verwaltung für Kurzzeit- und Langzeitvermietung in Marbella, Mijas, Fuengirola und Benalmádena. Ihre Immobilie, kontinuierlich verbessert.",
  },
  nav: {
    links: [
      { label: "System", href: "#system" },
      { label: "Leistungen", href: "#services" },
      { label: "Gebiete", href: "#areas" },
      { label: "Über uns", href: "#about" },
    ],
    cta: "Immobilien-Check anfordern",
    whatsapp: "WhatsApp",
    whatsappMessage: "Hallo Nordic BnB — ich möchte gerne über meine Immobilie sprechen.",
    toggleMenu: "Menü öffnen",
    selectLanguage: "Sprache wählen",
  },
  hero: {
    eyebrow: "Immobilienverwaltung — Costa del Sol",
    headlineLines: ["Ihre Immobilie.", "Kontinuierlich verbessert."],
    subline:
      "Full-Service-Verwaltung für Kurzzeit- und Langzeitvermietung in Marbella, Mijas, Fuengirola und Benalmádena — Positionierung, Preisgestaltung und Präsentation, ohne Unterbrechung verfeinert.",
    ctaPrimary: "Immobilien-Check anfordern",
    ctaSecondary: "Schreiben Sie uns auf WhatsApp",
    scrollHint: "Scrollen",
    locationTag: "Costa del Sol, Spanien",
  },
  system: {
    eyebrow: "So arbeiten wir",
    heading: "Vom leeren Raum zur bestätigten Buchung.",
    intro:
      "Der Prozess, der aus einem Inserat einen stetigen Strom wiederkehrender Gäste macht.",
    pillars: [
      {
        code: "",
        title: "Wir übernehmen die Immobilie",
        description: "Vom ersten Kontakt bis zur vollen Verantwortung, ohne Stress für Sie.",
      },
      {
        code: "",
        title: "Wir prüfen und verbessern das Styling",
        description: "Möbel, Textilien und Details abgestimmt, um Gäste zu beeindrucken.",
      },
      {
        code: "",
        title: "Wir fotografieren und veröffentlichen das Inserat",
        description: "Professionelle Fotos, live auf allen Kanälen in derselben Woche.",
      },
      {
        code: "",
        title: "Wir kümmern uns um Buchungen und Gäste",
        description: "Von der ersten Nachricht bis zur Schlüsselübergabe — wir übernehmen alles.",
      },
      {
        code: "",
        title: "Wir berichten und verbessern kontinuierlich",
        description: "Sie verfolgen den Fortschritt, wir feinjustieren Preis und Präsentation.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Vorher → nachher",
    heading: "Dieselbe Immobilie. Ein völlig anderes Inserat.",
    intro:
      "Gewöhnliche Inserate verkaufen außergewöhnliche Immobilien unter Wert. So verändert sich alles, wenn Nordic BnB übernimmt.",
    beforeLabel: "Vorher",
    afterLabel: "Nordic BnB",
    sliderAriaLabel: "Vorher-Nachher-Vergleich des Inserats",
    beforeAlt: "Gewöhnliches Inseratsfoto, vor Nordic BnB",
    afterAlt: "Stilvolles Nordic BnB-Inseratsfoto, nachher",
    fields: [
      {
        label: "Titel",
        before: "Schöne Wohnung nahe dem Strand, 2 Schlafzimmer",
        after: "Sonniges Refugium in Marbella, 90 Sekunden vom Sand entfernt",
      },
      {
        label: "Fotografie",
        before: "Handyfotos, wechselndes Licht, unaufgeräumte Zimmer",
        after: "Gestylt, professionell fotografiert, Außenaufnahmen zur goldenen Stunde",
      },
      {
        label: "Preis",
        before: "90 €/Nacht, das ganze Jahr über fest",
        after: "68–165 €/Nacht, in Echtzeit an die Nachfrage angepasst",
      },
      {
        label: "Beschreibung",
        before: "Zwei Zeilen. Keine Geschichte, keine Details.",
        after: "Geschrieben, um das Erlebnis zu verkaufen — und zu konvertieren",
      },
      {
        label: "Präsenz",
        before: "Auf einer einzigen Plattform gelistet",
        after: "Verteilt über jeden relevanten Kanal",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    heading: "Echte Verwandlungen, über alle Immobilientypen hinweg.",
    intro:
      "Ein Blick darauf, wie Nordic BnB Inserate neu positioniert — Wohnungen, Villen und Häuser — entlang der Costa del Sol.",
    realResultsLabel: "Echte Ergebnisse",
    disclaimer: "Echte Vorher/Nachher-Fotos. Die Wachstumszahlen sind illustrative Beispiele, bis wir verifizierte Kundendaten veröffentlichen können.",
    beforeLabel: "Vorher",
    afterLabel: "Nachher",
    properties: [
      {
        name: "Wohnung, Fuengirola",
        location: "Fuengirola",
        stats: [
          { value: "+29 %", label: "Umsatz" },
          { value: "82 %", label: "Auslastung" },
        ],
      },
      {
        name: "Villa, Marbella",
        location: "Marbella",
        stats: [
          { value: "+34 %", label: "Umsatz" },
          { value: "86 %", label: "Auslastung" },
        ],
      },
      {
        name: "Haus, Mijas",
        location: "Mijas",
        stats: [
          { value: "+27 %", label: "Umsatz" },
          { value: "79 %", label: "Auslastung" },
        ],
      },
    ],
  },
  services: {
    eyebrow: "Leistungen",
    heading: "Zwei Strategien. Ein Sorgfaltsstandard.",
    intro:
      "Ob Ihre Immobilie am besten zu Feriengästen oder einem Langzeitmieter passt — dieselbe Disziplin gilt: Full-Service-Verwaltung, kontinuierlich optimiert.",
    whatsappTemplate: "Hallo Nordic BnB — ich möchte gerne nach {service} fragen.",
    shortTerm: {
      title: "Kurzzeit- und Ferienvermietung",
      price: "14,9 % + MwSt.",
      priceNote: "der Mieteinnahmen",
      description:
        "Vollständige Verwaltung von Airbnb und Booking.com — vom ersten Inserat bis zum täglichen Betrieb.",
      features: [
        "Erstellung und laufende Optimierung des Inserats",
        "Dynamische, nachfrageorientierte Preisgestaltung",
        "Multichannel-Vertrieb (Airbnb, Booking.com u. a.)",
        "Gästekommunikation und Check-in-Koordination",
        "Professionelle Reinigung und Wäscheservice",
        "Immobilieninspektionen zwischen den Aufenthalten",
        "Instandhaltungskoordination",
        "Styling sowie Foto-/Content-Koordination",
        "Berichterstattung an den Eigentümer",
      ],
    },
    longTerm: {
      title: "Langzeitvermietung",
      price: "7,45 % + MwSt.",
      priceNote: "der Monatsmiete",
      description:
        "Marketing, Mieterkoordination und laufende Aufsicht für Eigentümer, die vorhersehbare Einnahmen mit geringem Aufwand wünschen.",
      features: [
        "Vermarktung der Immobilie und Mietersuche",
        "Mieterkoordination und -kommunikation",
        "Mietinkasso und -verwaltung",
        "Objektaufsicht",
        "Instandhaltungskoordination",
        "Berichterstattung an den Eigentümer",
      ],
    },
    termsNote:
      "Die endgültigen kommerziellen Konditionen können von der Immobilie, ihrem Typ und den spezifischen Serviceanforderungen abhängen — die obigen Zahlen spiegeln unsere Standardstruktur wider.",
    ctaLabel: "Nach diesem Service fragen",
  },
  dashboard: {
    eyebrow: "Eigentümererlebnis",
    heading: "Sie besitzen die Immobilie. Wir übernehmen den Betrieb.",
    intro:
      "Eine Echtzeitansicht der Performance Ihrer Immobilie — Buchungen, Auslastung, Reinigungsstatus, Instandhaltung und Ihre monatliche Auszahlung, immer sichtbar.",
    footnote: "Konzeptoberfläche — illustratives Eigentümer-Dashboard, mit Beispieldaten gezeigt.",
    windowTitle: "Villa Sunrise — Eigentümerportal",
    cardAlt: "Villa Sunrise, die Immobilie hinter diesem Dashboard",
    revenueChangeNote: "+18 % gegenüber dem Vormonat",
    payoutNote: "1. Okt. — Banküberweisung",
    cleaningStatusText: "Reinigung geplant",
    maintenanceStatusText: "Keine offenen Anliegen",
    labels: {
      revenue: "Umsatz diesen Monat",
      occupancy: "Auslastung",
      upcoming: "Bevorstehende Aufenthalte",
      cleaning: "Reinigungsstatus",
      maintenance: "Instandhaltung",
      payout: "Nächste Auszahlung",
      guest: "Gast",
      status: "Status",
    },
  },
  operations: {
    eyebrow: "Betrieb",
    heading: "Das System hinter jedem Aufenthalt.",
    intro:
      "Ein lokales Netzwerk aus Reinigungskräften, Stylisten und Instandhaltungskoordinatoren — die sich bei jedem Gast, jedes Mal, in Reihenfolge bewegen.",
    bannerHeadline: "Jeder Aufenthalt, von Hand vorbereitet.",
    sequenceLabels: {
      styling: "Styling",
      cleaning: "Reinigung",
      guestArrival: "Gästeankunft",
      detail: "Detail",
    },
    steps: [
      { title: "Buchung bestätigt", detail: "Die Reservierung wird sofort über alle Kanäle synchronisiert." },
      { title: "Gast vorbereitet", detail: "Check-in-Details, Hausguide und Willkommensnachricht werden gesendet." },
      { title: "Reinigung geplant", detail: "Die professionelle Reinigung wird automatisch gebucht und bestätigt." },
      { title: "Immobilie inspiziert", detail: "Styling, Zustand und Ausstattung werden vor der Ankunft geprüft." },
      { title: "Gast trifft ein", detail: "Reibungsloser Check-in, und ein Team steht für alles Nötige bereit." },
      { title: "Bewertung eingeholt", detail: "Das Gästeerlebnis wird abgeschlossen, Feedback wird eingeholt." },
      { title: "Leistung steuert die Preisgestaltung", detail: "Die Daten jedes Aufenthalts schärfen die nächste Preisentscheidung." },
    ],
  },
  compare: {
    eyebrow: "Kurzzeit vs. Langzeit",
    heading: "Nicht sicher, welche Strategie zu Ihrer Immobilie passt?",
    intro:
      "Beide Wege können an der Costa del Sol gut funktionieren. Der richtige hängt von Ihrer Immobilie, Ihren Zielen und Ihrem gewünschten Engagement ab.",
    shortTerm: {
      title: "Kurzzeit-/Ferienvermietung",
      tagline: "Höheres Einnahmepotenzial, aktivere Verwaltung",
      points: [
        "Höheres Umsatzpotenzial in der Hochsaison",
        "Erfordert aktive, kontinuierliche Verwaltung",
        "Einnahmen variieren saisonal",
        "Mehr Flexibilität, die Immobilie selbst zu nutzen",
      ],
    },
    longTerm: {
      title: "Langzeitvermietung",
      tagline: "Vorhersehbare Einnahmen, geringere betriebliche Intensität",
      points: [
        "Stabile, vorhersehbare monatliche Einnahmen",
        "Geringere alltägliche betriebliche Intensität",
        "Längeres, stabileres Mietverhältnis",
        "Weniger Flexibilität, die Immobilie selbst zu nutzen",
      ],
    },
    cta: "Finden Sie die richtige Strategie für Ihre Immobilie",
  },
  areas: {
    eyebrow: "Wo wir tätig sind",
    heading: "Costa del Sol, von Marbella bis Benalmádena.",
    intro:
      "Lokale Präsenz entlang der Küste bedeutet schnellere Reaktionszeiten, besseres Ortswissen und Preise, die jeden Mikromarkt widerspiegeln.",
    areas: [
      {
        name: "Marbella",
        description: "Erstklassige Villen und Strandwohnungen in Spaniens etabliertestem Luxusmarkt.",
      },
      {
        name: "Mijas",
        description: "Die Küste von Mijas Costa und das Bergdorf — ganzjährig starke Attraktivität.",
      },
      {
        name: "Fuengirola",
        description: "Stark frequentierter Strandtourismus mit konstanter Kurzzeitnachfrage.",
      },
      {
        name: "Benalmádena",
        description: "Eine ausgewogene Mischung aus familienfreundlicher Ferienvermietung und langfristigem Küstenleben.",
      },
    ],
  },
  about: {
    eyebrow: "Über uns",
    heading: "Auf einer einfachen Idee aufgebaut.",
    paragraphs: [
      "Nordic BnB wurde 2023 gegründet und baut auf einer einfachen Idee auf: Immobilienverwaltung sollte nicht passiv sein. Ein Inserat, das veröffentlicht und dann sich selbst überlassen wird, wird unterdurchschnittlich abschneiden — still, über Jahre, ohne dass es jemand bemerkt.",
      "Jede von uns verwaltete Immobilie soll kontinuierlich überprüft, getestet und verbessert werden — Preisgestaltung, Präsentation, Positionierung — statt einmal eingerichtet und vergessen zu werden.",
      "Hinter Nordic BnB steht ein lokales operatives Netzwerk: Reinigung, Styling, Instandhaltung und Koordination vor Ort entlang der gesamten Costa del Sol, zusammen mit Gründern, die glauben, dass Eigentümer volle Transparenz darüber verdienen, wie ihre Immobilie performt.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Gründer, Nordic BnB",
    founderQuote:
      "Wir betreiben nicht einfach nur ein Inserat — wir bauen eine Immobilie, die tatsächlich konvertiert. Wir kennen den Markt an der Costa del Sol, und wir kennen die Gäste, besonders die skandinavischen Gäste, die hier buchen.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Mitgründerin, Nordic BnB",
    founder2Quote:
      "Jeder Eigentümer verdient es, genau zu sehen, wie seine Immobilie performt — kein Rätselraten, keine Blackbox.",
  },
  testimonials: {
    eyebrow: "Eigentümer-Stimmen",
    heading: "Was die Leute sagen.",
    items: [
      {
        quote:
          "Hatte im Winter Mühe, die Wohnung zu vermieten. Nordic BnB übernahm im März, und bis August waren wir bis Oktober ausgebucht. Jetzt bekomme ich einen Bericht im Monat, statt selbst Antworten hinterherzujagen.",
        name: "Kristian H.",
        location: "Marbella",
      },
      {
        quote:
          "Wohne in Stockholm, habe die Wohnung seit über einem Jahr nicht gesehen. Nordic BnB kümmert sich um alles, und die Einnahmen sind gestiegen.",
        name: "Annika L.",
        location: "Fuengirola",
      },
      {
        quote:
          "Habe es drei Jahre selbst gemacht. Jetzt muss ich mir keine Sorgen mehr machen — keine Beschwerden, und das Telefon klingelt nicht mehr mitten in der Nacht.",
        name: "Carlos M.",
        location: "Benalmádena",
      },
    ],
  },
  finalCta: {
    eyebrow: "Lassen Sie uns sprechen",
    heading: "Sehen wir, was Ihre Immobilie leisten könnte.",
    subline:
      "Ihre Immobilie verdient mehr als eine Basisverwaltung. Fordern Sie einen kostenlosen Immobilien-Check an, und wir zeigen Ihnen genau, wo sie unter ihrem Potenzial bleibt — und wie kontinuierliche Verbesserung aussehen würde.",
    ctaPrimary: "Immobilien-Check anfordern",
    ctaSecondary: "Schreiben Sie uns auf WhatsApp",
    form: {
      fields: {
        name: "Name",
        email: "E-Mail",
        phone: "Telefon / WhatsApp",
        location: "Lage der Immobilie",
        propertyType: "Immobilientyp",
        bedrooms: "Schlafzimmer",
        currentlyRented: "Aktuell vermietet?",
        yes: "Ja",
        no: "Nein",
        strategy: "Kurzzeit, Langzeit oder unsicher?",
        strategyOptions: { short: "Kurzzeit", long: "Langzeit", unsure: "Unsicher" },
        message: "Nachricht",
      },
      submit: "Jetzt kostenlosen Immobilien-Check erhalten",
      successTitle: "Erhalten.",
      successBody: "Danke — wir melden uns in Kürze bei Ihnen. Bei etwas Dringendem schreiben Sie uns auf WhatsApp.",
      errorMessage: "Etwas ist schiefgelaufen — versuchen Sie es stattdessen über WhatsApp.",
    },
  },
  footer: {
    tagline: "Ihre Immobilie. Kontinuierlich verbessert.",
    linksHeading: "Website",
    contactHeading: "Kontakt",
    languageHeading: "Sprache",
    rights: "Nordic BnB. Alle Rechte vorbehalten.",
    orgNumberLabel: "Reg.-Nr. 931 905 856",
    realPhotosNote: "Die Vorher/Nachher-Fotos auf dieser Seite sind echte Ergebnisse, keine Illustrationen, sofern nicht anders angegeben.",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Jede Immobilie verdient es, gut erzählt zu werden.",
  },
  showcase2: {
    eyebrow: "Präsentation",
    heading: "Gestylt, fotografiert und positioniert, um zu performen.",
  },
};
