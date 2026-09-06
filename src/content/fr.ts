import type { SiteContent } from "./types";

export const fr: SiteContent = {
  meta: {
    title: "Nordic BnB — Gestion immobilière, Costa del Sol",
    description:
      "Gestion complète de location courte et longue durée à Marbella, Mijas, Fuengirola et Benalmádena. Votre bien, continuellement amélioré.",
  },
  nav: {
    links: [
      { label: "Le système", href: "#system" },
      { label: "Services", href: "#services" },
      { label: "Zones", href: "#areas" },
      { label: "À propos", href: "#about" },
      { label: "Contactez-nous", href: "/fr/contact" },
    ],
    cta: "Demander un bilan de votre bien",
    whatsapp: "WhatsApp",
    whatsappMessage: "Bonjour Nordic BnB — j'aimerais discuter de mon bien.",
    toggleMenu: "Ouvrir le menu",
    selectLanguage: "Choisir la langue",
  },
  hero: {
    eyebrow: "Gestion immobilière — Costa del Sol",
    headlineLines: ["Votre bien.", "Continuellement amélioré."],
    subline:
      "Gestion complète de location courte et longue durée à Marbella, Mijas, Fuengirola et Benalmádena — positionnement, tarification et présentation, affinés sans relâche.",
    ctaPrimary: "Demander un bilan de votre bien",
    ctaSecondary: "Écrivez-nous sur WhatsApp",
    scrollHint: "Défiler",
    locationTag: "Costa del Sol, Espagne",
  },
  system: {
    eyebrow: "Comment nous travaillons",
    heading: "D'une pièce vide à une réservation confirmée.",
    intro:
      "Le processus qui transforme une annonce en un flux de voyageurs fidèles.",
    pillars: [
      {
        code: "",
        title: "Nous prenons en charge le bien",
        description: "Du premier contact à la pleine responsabilité, sans aucun stress pour vous.",
      },
      {
        code: "",
        title: "Nous inspectons et améliorons la mise en scène",
        description: "Meubles, textiles et détails ajustés pour impressionner les voyageurs.",
      },
      {
        code: "",
        title: "Nous photographions et publions l'annonce",
        description: "Photos professionnelles, en ligne sur tous les canaux la même semaine.",
      },
      {
        code: "",
        title: "Nous gérons les réservations et les voyageurs",
        description: "Du premier message à la remise des clés — nous nous occupons de tout.",
      },
      {
        code: "",
        title: "Nous faisons un rapport et améliorons en continu",
        description: "Vous suivez les progrès, nous ajustons le prix et la présentation.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Avant → après",
    heading: "Le même bien. Une annonce complètement différente.",
    intro:
      "Les annonces ordinaires sous-vendent des biens extraordinaires. Voici ce qui change quand Nordic BnB prend le relais.",
    beforeLabel: "Avant",
    afterLabel: "Nordic BnB",
    sliderAriaLabel: "Comparaison avant/après de l'annonce",
    beforeAlt: "Photo d'annonce ordinaire, avant Nordic BnB",
    afterAlt: "Photo d'annonce Nordic BnB mise en scène, après",
    fields: [
      {
        label: "Titre",
        before: "Bel appartement près de la plage, 2 chambres",
        after: "Havre lumineux à Marbella, à 90 secondes du sable",
      },
      {
        label: "Photographie",
        before: "Photos de téléphone, éclairage inégal, pièces en désordre",
        after: "Mis en scène, photographié par un professionnel, extérieurs à l'heure dorée",
      },
      {
        label: "Prix",
        before: "90 €/nuit, fixe toute l'année",
        after: "68–165 €/nuit, ajusté à la demande en temps réel",
      },
      {
        label: "Description",
        before: "Deux lignes. Aucune histoire, aucun détail.",
        after: "Rédigée pour vendre l'expérience — et pour convertir",
      },
      {
        label: "Présence",
        before: "Publié sur une seule plateforme",
        after: "Distribué sur tous les canaux pertinents",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portefeuille",
    heading: "De vraies transformations, tous types de biens confondus.",
    intro:
      "Un aperçu de la façon dont Nordic BnB repositionne les annonces — appartements, villas et maisons — le long de la Costa del Sol.",
    realResultsLabel: "Résultats réels",
    disclaimer: "Vraies photos avant/après. Les chiffres de croissance sont des exemples illustratifs en attendant de pouvoir publier des données clients vérifiées.",
    beforeLabel: "Avant",
    afterLabel: "Après",
    properties: [
      {
        name: "Appartement, Fuengirola",
        location: "Fuengirola",
        stats: [
          { value: "+29 %", label: "revenus" },
          { value: "82 %", label: "occupation" },
        ],
      },
      {
        name: "Villa, Marbella",
        location: "Marbella",
        stats: [
          { value: "+34 %", label: "revenus" },
          { value: "86 %", label: "occupation" },
        ],
      },
      {
        name: "Maison, Mijas",
        location: "Mijas",
        stats: [
          { value: "+27 %", label: "revenus" },
          { value: "79 %", label: "occupation" },
        ],
      },
    ],
  },
  services: {
    eyebrow: "Services",
    heading: "Deux stratégies. Un même niveau de soin.",
    intro:
      "Que votre bien convienne mieux à des voyageurs de vacances ou à un locataire de longue durée, la même rigueur s'applique : gestion complète, continuellement optimisée.",
    whatsappTemplate: "Bonjour Nordic BnB — j'aimerais me renseigner sur {service}.",
    shortTerm: {
      title: "Gestion de location courte durée et vacances",
      price: "14,9 % + TVA",
      priceNote: "des revenus de location",
      description:
        "Gestion complète d'Airbnb et Booking.com — de la première annonce aux opérations quotidiennes.",
      features: [
        "Création et optimisation continue de l'annonce",
        "Tarification dynamique guidée par la demande",
        "Distribution multicanal (Airbnb, Booking.com et plus)",
        "Communication avec les voyageurs et coordination des arrivées",
        "Ménage professionnel et service de linge",
        "Inspections du bien entre les séjours",
        "Coordination de l'entretien",
        "Mise en scène et coordination photo/contenu",
        "Rapports pour le propriétaire",
      ],
    },
    longTerm: {
      title: "Gestion de location longue durée",
      price: "7,45 % + TVA",
      priceNote: "du loyer mensuel",
      description:
        "Marketing, coordination des locataires et supervision continue pour les propriétaires souhaitant des revenus prévisibles et une faible intensité opérationnelle.",
      features: [
        "Marketing du bien et recherche de locataires",
        "Coordination et communication avec le locataire",
        "Encaissement et gestion des loyers",
        "Supervision du bien",
        "Coordination de l'entretien",
        "Rapports pour le propriétaire",
      ],
    },
    termsNote:
      "Les conditions commerciales finales peuvent dépendre du bien, de son type et des exigences spécifiques du service — les chiffres ci-dessus reflètent notre structure standard.",
    ctaLabel: "Se renseigner sur ce service",
  },
  dashboard: {
    eyebrow: "Expérience propriétaire",
    heading: "Vous possédez le bien. Nous gérons l'exploitation.",
    intro:
      "Une vue en temps réel de la performance de votre bien — réservations, occupation, statut du ménage, entretien et votre versement mensuel, toujours visibles.",
    footnote: "Interface conceptuelle — tableau de bord propriétaire illustratif, présenté avec des données d'exemple.",
    windowTitle: "Villa Sunrise — Portail propriétaire",
    cardAlt: "Villa Sunrise, le bien derrière ce tableau de bord",
    revenueChangeNote: "+18 % par rapport au mois dernier",
    payoutNote: "1er oct. — virement bancaire",
    cleaningStatusText: "Ménage programmé",
    maintenanceStatusText: "Aucun problème en cours",
    labels: {
      revenue: "Revenus ce mois-ci",
      occupancy: "Occupation",
      upcoming: "Séjours à venir",
      cleaning: "Statut du ménage",
      maintenance: "Entretien",
      payout: "Prochain versement",
      guest: "Voyageur",
      status: "Statut",
    },
  },
  operations: {
    eyebrow: "Opérations",
    heading: "Le système derrière chaque séjour.",
    intro:
      "Un réseau local de personnel de ménage, de décorateurs et de coordinateurs d'entretien — mobilisé en séquence autour de chaque voyageur, à chaque fois.",
    bannerHeadline: "Chaque séjour, préparé à la main.",
    sequenceLabels: {
      styling: "Mise en scène",
      cleaning: "Ménage",
      guestArrival: "Arrivée du voyageur",
      detail: "Détail",
    },
    steps: [
      { title: "Réservation confirmée", detail: "La réservation est synchronisée instantanément sur tous les canaux." },
      { title: "Voyageur préparé", detail: "Les informations d'arrivée, le guide de la maison et le message de bienvenue sont envoyés." },
      { title: "Ménage programmé", detail: "Le ménage professionnel est réservé et confirmé automatiquement." },
      { title: "Bien inspecté", detail: "La mise en scène, l'état et les équipements sont vérifiés avant l'arrivée." },
      { title: "Le voyageur arrive", detail: "Arrivée fluide, et une équipe disponible pour tout besoin." },
      { title: "Avis recueilli", detail: "L'expérience du voyageur est clôturée, ses retours sont recueillis." },
      { title: "La performance oriente la tarification", detail: "Les données de chaque séjour affinent la prochaine décision tarifaire." },
    ],
  },
  compare: {
    eyebrow: "Courte durée vs. longue durée",
    heading: "Vous ne savez pas quelle stratégie convient à votre bien ?",
    intro:
      "Les deux options peuvent bien fonctionner sur la Costa del Sol. La bonne dépend de votre bien, de vos objectifs et de votre niveau d'implication souhaité.",
    shortTerm: {
      title: "Location courte durée / vacances",
      tagline: "Potentiel de revenus plus élevé, gestion plus active",
      points: [
        "Potentiel de revenus plus élevé en haute saison",
        "Nécessite une gestion active et continue",
        "Les revenus varient selon la saisonnalité",
        "Plus de flexibilité pour utiliser le bien vous-même",
      ],
    },
    longTerm: {
      title: "Location longue durée",
      tagline: "Revenus prévisibles, intensité opérationnelle plus faible",
      points: [
        "Revenus mensuels stables et prévisibles",
        "Intensité opérationnelle quotidienne plus faible",
        "Location plus longue et plus stable",
        "Moins de flexibilité pour utiliser le bien vous-même",
      ],
    },
    cta: "Trouvez la bonne stratégie pour votre bien",
  },
  areas: {
    eyebrow: "Où nous intervenons",
    heading: "Costa del Sol, de Marbella à Benalmádena.",
    intro:
      "Une présence locale le long de la côte signifie des temps de réponse plus rapides, une meilleure connaissance locale et une tarification qui reflète chaque micro-marché.",
    areas: [
      {
        name: "Marbella",
        description: "Villas haut de gamme et appartements en front de mer sur le marché du luxe le plus établi d'Espagne.",
      },
      {
        name: "Mijas",
        description: "Le littoral de Mijas Costa et le village de montagne — un fort attrait toute l'année.",
      },
      {
        name: "Fuengirola",
        description: "Un tourisme balnéaire à fort volume avec une demande de courte durée constante.",
      },
      {
        name: "Benalmádena",
        description: "Un équilibre entre locations de vacances familiales et vie côtière de longue durée.",
      },
    ],
  },
  about: {
    eyebrow: "À propos",
    heading: "Construit sur une idée simple.",
    paragraphs: [
      "Fondée en 2023, Nordic BnB se construit autour d'une idée simple : la gestion immobilière ne devrait pas être passive. Une annonce publiée puis laissée à elle-même sous-performera — silencieusement, pendant des années, sans que personne ne le remarque.",
      "Chaque bien que nous gérons doit être revu, testé et amélioré en continu — tarification, présentation, positionnement — plutôt que réglé une fois pour toutes et oublié.",
      "Derrière Nordic BnB se trouve un réseau opérationnel local : ménage, mise en scène, entretien et coordination sur le terrain sur toute la Costa del Sol, aux côtés de fondateurs qui pensent que les propriétaires méritent une visibilité totale sur la performance de leur bien.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Fondateur, Nordic BnB",
    founderQuote:
      "Nous ne gérons pas seulement une annonce — nous construisons un bien qui convertit vraiment. Nous connaissons le marché de la Costa del Sol, et nous connaissons les voyageurs, en particulier les Scandinaves qui réservent ici.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Co-fondatrice, Nordic BnB",
    founder2Quote:
      "Chaque propriétaire mérite de voir exactement comment son bien performe — sans conjectures, sans boîte noire.",
  },
  testimonials: {
    eyebrow: "Témoignages de propriétaires",
    heading: "Ce que disent les gens.",
    items: [
      {
        quote:
          "Difficile de remplir l'appartement en hiver. Nordic BnB a pris le relais en mars, et dès août nous étions complets jusqu'en octobre. Je reçois maintenant un rapport par mois au lieu de courir après les réponses moi-même.",
        name: "Kristian H.",
        location: "Marbella",
      },
      {
        quote:
          "Je vis à Stockholm, je n'ai pas vu l'appartement depuis plus d'un an. Nordic BnB s'occupe de tout, et les revenus ont augmenté.",
        name: "Annika L.",
        location: "Fuengirola",
      },
      {
        quote:
          "Je le gérais moi-même depuis trois ans. Maintenant je n'ai plus à m'inquiéter — aucune plainte, et le téléphone ne sonne plus au milieu de la nuit.",
        name: "Carlos M.",
        location: "Benalmádena",
      },
    ],
  },
  finalCta: {
    eyebrow: "Parlons-en",
    heading: "Voyons ce que votre bien pourrait accomplir.",
    subline:
      "Votre bien mérite mieux qu'une gestion basique. Demandez un bilan gratuit et nous vous montrerons exactement où il sous-performe — et à quoi ressemblerait une amélioration continue.",
    ctaPrimary: "Demander un bilan de votre bien",
    ctaSecondary: "Écrivez-nous sur WhatsApp",
    form: {
      fields: {
        name: "Nom",
        email: "E-mail",
        phone: "Téléphone / WhatsApp",
        location: "Emplacement du bien",
        propertyType: "Type de bien",
        bedrooms: "Chambres",
        currentlyRented: "Actuellement loué ?",
        yes: "Oui",
        no: "Non",
        strategy: "Courte durée, longue durée, ou incertain ?",
        strategyOptions: { short: "Courte durée", long: "Longue durée", unsure: "Incertain" },
        message: "Message",
      },
      submit: "Obtenez votre bilan gratuit",
      successTitle: "Reçu.",
      successBody: "Merci — nous vous contacterons sous peu. Pour toute urgence, écrivez-nous sur WhatsApp.",
      errorMessage: "Une erreur s'est produite — essayez plutôt WhatsApp.",
    },
  },
  footer: {
    tagline: "Votre bien. Continuellement amélioré.",
    linksHeading: "Site",
    contactHeading: "Contact",
    languageHeading: "Langue",
    rights: "Nordic BnB. Tous droits réservés.",
    orgNumberLabel: "N° d'enregistrement 931 905 856",
    realPhotosNote: "Les photos avant/après sur ce site sont de vrais résultats, pas des illustrations, sauf indication contraire.",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Chaque bien mérite que l'on raconte bien son histoire.",
  },
  showcase2: {
    eyebrow: "Présentation",
    heading: "Mis en scène, photographié et positionné pour performer.",
  },
  contactPage: {
    eyebrow: "Contact",
    heading: "Les personnes derrière Nordic BnB.",
    intro:
      "Une petite équipe, très impliquée — pas un centre d'appels. Contactez-nous directement, ou découvrez qui se cache derrière le travail sur votre bien.",
    teamHeading: "L'équipe sur le terrain",
    teamIntro:
      "Aux côtés de Petter et Melanie, une équipe opérationnelle locale fait tourner chaque bien au quotidien.",
    roles: ["Ménage", "Homme à tout faire & entretien", "Photographie", "Support voyageurs"],
    emailHeading: "Écrivez-nous directement",
    ctaHeading: "Parlons de votre bien.",
    ctaSubline:
      "Une question, ou envie de voir ce que Nordic BnB pourrait faire pour votre bien ? Envoyez-nous un e-mail — nous répondons personnellement, en général sous un jour.",
    ctaButton: "Nous écrire",
  },
};
