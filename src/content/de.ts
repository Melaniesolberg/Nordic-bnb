import type { SiteContent } from "./types";

export const de: SiteContent = {
  meta: {
    title: "Nordic BnB — Immobilienverwaltung, Costa del Sol",
    description:
      "Full-Service-Verwaltung für Kurzzeit- und Langzeitvermietung in Marbella, Mijas, Fuengirola und Benalmádena. Ihre Immobilie, kontinuierlich verbessert.",
  },
  nav: {
    links: [
      { label: "System", href: "/de#system" },
      { label: "Leistungen", href: "/de#services" },
      { label: "Gebiete", href: "/de#areas" },
      { label: "Über uns", href: "/de#about" },
      { label: "Team", href: "/de/contact" },
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
      "Full-Service-Verwaltung für Kurzzeit- und Langzeitvermietung in Marbella, Mijas, Fuengirola, Benalmádena, Torremolinos und Málaga — Positionierung, Preisgestaltung und Präsentation, ohne Unterbrechung verfeinert.",
    ctaPrimary: "Immobilien-Check anfordern",
    ctaSecondary: "Schreiben Sie uns auf WhatsApp",
    scrollHint: "Scrollen",
    locationTag: "Costa del Sol, Spanien",
  },
  system: {
    eyebrow: "Was Sie erwarten können",
    heading: "Was können Sie von uns erwarten?",
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
        title: "Wir reinigen und pflegen zwischen jedem Aufenthalt",
        description: "Professionelle Reinigung, Wäsche und Instandhaltung, damit die Immobilie immer gästefertig ist.",
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
      "Welches Inserat würden Sie wählen?",
    disclaimer: "Illustriertes Beispiel, zu Demonstrationszwecken.",
  },
  portfolio: {
    eyebrow: "Portfolio",
    heading: "Echte Verwandlungen, über alle Immobilientypen hinweg.",
    intro:
      "Ein Blick darauf, wie Nordic BnB Inserate neu positioniert — Wohnungen, Villen und Häuser — entlang der Costa del Sol.",
    realResultsLabel: "Echte Ergebnisse",
    disclaimer: "Echte Vorher/Nachher-Fotos und echte Wachstumszahlen aus unseren eigenen Immobilien.",
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
    heading: "Costa del Sol, von Málaga bis Marbella.",
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
      {
        name: "Torremolinos",
        description: "Ein klassisches Strandziel mit gleichbleibender touristischer Nachfrage das ganze Jahr über.",
      },
      {
        name: "Málaga",
        description: "Eine kulturelle Hauptstadt mit einem wachsenden Markt für Städtereisen und Langzeitmiete.",
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
    founderRole: "Founder & Head of Growth",
    founderQuote:
      "Wir betreiben nicht einfach nur ein Inserat — wir bauen und gestalten eine Immobilie, die tatsächlich konvertiert. Wir kennen den Markt an der Costa del Sol, und wir kennen die Gäste, besonders die skandinavischen Gäste, die hier buchen.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Head of Operations & Marketing",
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
      {
        quote:
          "Macht es besser, als ich es selbst getan habe, und ich habe früher drei Immobilien verwaltet.",
        name: "Erik B.",
        location: "Mijas",
      },
      {
        quote:
          "War skeptisch, alles aus der Hand zu geben, aber die Berichterstattung ist detaillierter als das, was ich von meinem Steuerberater bekomme. Ich sehe Auslastung, Reinigung, alles.",
        name: "Sofia T.",
        location: "Marbella",
      },
      {
        quote:
          "Wir haben die Wohnung meiner Eltern geerbt und wussten nicht, was wir damit machen sollten. Nordic BnB hat sie fotografiert, neu inseriert, und innerhalb von sechs Wochen hatten wir die ersten Buchungen. Ein Jahr später performt sie besser als ähnliche Einheiten in der Nähe, und ich musste noch nie direkt mit einem Gast zu tun haben.",
        name: "Henrik J.",
        location: "Fuengirola",
      },
      {
        quote:
          "Schnell in der Antwort, und die Reinigung ist wirklich jedes Mal makellos.",
        name: "Maja P.",
        location: "Benalmádena",
      },
      {
        quote:
          "Von einer anderen Agentur gewechselt, die kaum kommuniziert hat. Nordic BnB ruft tatsächlich an, wenn etwas eine Entscheidung braucht, statt es einfach still zu regeln und zu hoffen, dass ich es nicht merke.",
        name: "Thomas R.",
        location: "Marbella",
      },
      {
        quote:
          "Habe vorher langfristig vermietet. Der Mieter hat die Wohnung in schlechtem Zustand hinterlassen, und ich habe zwei Monate Einnahmen verloren, um das zu regeln. Jetzt ist es Kurzzeitvermietung über Nordic BnB, und selbst mit der zusätzlichen Reinigung zwischen den Gästen verdiene ich mehr als mit einem einzigen Mieter.",
        name: "Ingrid S.",
        location: "Mijas",
      },
      {
        quote:
          "Die meisten Wochenenden ausgebucht, bevor ich überhaupt mit den Übergabeunterlagen fertig war.",
        name: "Daniel K.",
        location: "Torremolinos",
      },
      {
        quote:
          "Meine Villa stand unter dem alten Inserat die halbe Zeit leer. Jetzt ist sie selten mehr als ein paar Tage am Stück frei, und die Fotos sehen tatsächlich aus wie mein Haus.",
        name: "Camilla W.",
        location: "Fuengirola",
      },
      {
        quote:
          "Was mich überzeugt hat, war die Preisgestaltung. Früher habe ich einen Preis festgelegt und ihn vergessen. Sie passen ihn täglich an die Nachfrage an, und ich sehe im Monatsbericht genau, warum. Der Umsatz ist seit dem Wechsel um fast ein Drittel gestiegen.",
        name: "Anders G.",
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
    privacyLabel: "Datenschutz",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Jede Immobilie hat etwas Einzigartiges. Nutzen Sie es.",
  },
  showcase2: {
    eyebrow: "Präsentation",
    heading: "Gestylt, fotografiert und positioniert, um zu performen.",
  },
  contactPage: {
    eyebrow: "Team",
    heading: "Das Team hinter Nordic BnB.",
    intro:
      "Wir kümmern uns jeden einzelnen Tag um Ihre Immobilie — gemeinsam mit unserem eigenen festen Team. Nehmen Sie gerne direkt Kontakt auf.",
    teamName: "Unser Betriebsteam",
    teamHeading: "Das Team vor Ort",
    teamIntro:
      "Handwerk, Reinigung und Styling — alles wird von Partnern erledigt, denen wir vertrauen, nicht von zufälligen Subunternehmern.",
    roles: [
      { title: "Hausmeister", description: "Instandhaltung, Reparaturen und Kontrollen zwischen den Aufenthalten." },
      { title: "Reinigungsteam", description: "Professionelle Endreinigung und Wäschewechsel nach jedem Gast." },
      { title: "Fotograf & Stylist", description: "Styling und Fotografie für jedes neue Inserat." },
    ],
    photoDesignLabel: "Foto/Design",
    emailHeading: "Schreiben Sie uns direkt",
    ctaHeading: "Lassen Sie uns über Ihre Immobilie sprechen.",
    ctaSubline:
      "Haben Sie eine Frage, oder möchten Sie sehen, was Nordic BnB für Ihre Immobilie tun könnte? Schreiben Sie uns eine E-Mail — wir antworten persönlich, meist innerhalb eines Tages.",
    ctaButton: "E-Mail schreiben",
    recruitEyebrow: "Werden Sie Teil des Teams",
    recruitHeading: "Wollen Sie mit uns arbeiten?",
    recruitSubline:
      "Wir sind immer offen für gute Leute. Wenn Sie Reinigungskraft, Hausmeister oder Fotograf an der Costa del Sol sind, würden wir gerne von Ihnen hören.",
    story: {
      eyebrow: "Unsere Geschichte",
      heading: "Vom Marketing zur Gastfreundschaft.",
      milestones: [
        {
          period: "August 2023",
          title: "Wo es begann",
          body: "Nordic BnB begann in Norwegen mit digitalem Marketing und half Unternehmen sowie Immobilieninvestoren, sich — und ihre Immobilien — online besser zu präsentieren. Wir lernten früh eines: Präsentation verändert Wahrnehmung, und Wahrnehmung verändert Wert.",
        },
        {
          period: "2024",
          title: "Näher an der Immobilienbranche",
          body: "Zu diesem Zeitpunkt hatten wir bereits Jahre mit Mietimmobilien selbst verbracht — Wohnungen in Norwegen gemietet und über Mietarbitrage weitervermietet, kurz- wie langfristig, während wir die Immobilien, für die wir verantwortlich waren, renovierten und aufwerteten. Unsere Arbeit konzentrierte sich zunehmend auf Immobilien, Content, Fotografie, Positionierung und die Art, wie Häuser online präsentiert wurden. Wir sahen immer wieder dasselbe Problem: großartige Immobilien weit unter ihrem Potenzial vermarktet.",
        },
        {
          period: "2025",
          title: "Von Norwegen nach Spanien 🇪🇸",
          body: "Wir zogen von Norwegen nach Spanien und erlebten den Mietmarkt der Costa del Sol von innen — als Anwohner und als Vermietungsbetreiber. Aus Marketing-Know-how, kombiniert mit jahrelanger Erfahrung im Mieten, Untervermieten und Renovieren von Wohnungen zuhause, wurde etwas Größeres: das Verständnis dafür, was internationale Gäste erwarten, womit Eigentümer kämpfen, und was eine Immobilie besser performen lässt als eine andere.",
        },
        {
          period: "Ende 2025",
          title: "Die Idee entwickelte sich weiter",
          body: "Wir begannen, alles, was wir bereits wussten — Marketing, Präsentation, Interieur, Gästeerlebnis und praktisches Mietmanagement — zu einem kompletten Service für Eigentümer von Ferienimmobilien zu kombinieren, aufbauend auf dem, was wir gelernt hatten, als wir Investoren dabei halfen, Wert aus ihren Immobilien zu schaffen, sowohl in Norwegen als auch in Spanien.",
        },
        {
          period: "2026",
          title: "Nordic BnB heute",
          body: "Nordic BnB wurde zu einem Full-Service-Unternehmen für Ferienvermietung und Immobilienverwaltung an der Costa del Sol. Von der Vorbereitung und Aufwertung der Immobilie bis zu: Styling • Fotografie • Inserate • Preisgestaltung • Gästekommunikation • Reinigung • Instandhaltung • Vollständige Verwaltung. Ein Unternehmen. Ein Ansprechpartner. Alles geregelt.",
        },
        {
          period: "2026 →",
          title: "Das nächste Kapitel",
          body: "Unser Ziel ist einfach: einen neuen Standard für die Ferienvermietungsverwaltung an der Costa del Sol zu schaffen — durch die Kombination von skandinavischem Service, starker Präsentation und lokaler Umsetzung. Wir werten auf. Wir stylen. Wir verwalten.",
        },
      ],
    },
  },
  privacyPage: {
    eyebrow: "Datenschutz",
    heading: "Datenschutzerklärung.",
    updated: "Zuletzt aktualisiert: September 2026",
    intro:
      "Diese Seite erklärt in einfachen Worten, welche Daten wir erfassen, wenn Sie mit Nordic BnB in Kontakt treten, und wie wir sie verwenden.",
    sections: [
      {
        heading: "Was wir erfassen",
        body: "Wenn Sie unser Kontaktformular ausfüllen oder uns per E-Mail oder WhatsApp schreiben, erfassen wir die Angaben, die Sie uns geben — üblicherweise Name, E-Mail-Adresse, Telefonnummer und Details zu Ihrer Immobilie oder Anfrage.",
      },
      {
        heading: "Wie wir es verwenden",
        body: "Wir verwenden diese Angaben ausschließlich, um auf Ihre Anfrage zu antworten und, falls Sie Kunde werden, um Ihre Immobilie zu verwalten. Wir verkaufen oder vermieten Ihre Daten niemals an Dritte.",
      },
      {
        heading: "Wie lange wir sie aufbewahren",
        body: "Wir bewahren Ihre Angaben nur so lange auf, wie es für die Beantwortung Ihrer Anfrage oder die Fortführung unserer Zusammenarbeit erforderlich ist, sofern das Gesetz nicht eine längere Aufbewahrung verlangt.",
      },
      {
        heading: "Ihre Rechte",
        body: "Sie können jederzeit Einsicht, Berichtigung oder Löschung Ihrer bei uns gespeicherten Daten verlangen. Kontaktieren Sie uns einfach, und wir bearbeiten Ihre Anfrage umgehend.",
      },
    ],
    contactHeading: "Fragen zum Datenschutz?",
    contactBody: "Bei Fragen zu dieser Erklärung oder zu Ihren Daten kontaktieren Sie uns bitte direkt.",
  },
};
