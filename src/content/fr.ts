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
  problem: {
    eyebrow: "Le problème",
    heading: "Un bien magnifique. Une exploitation fragmentée.",
    subline:
      "Nous prenons en charge l'annonce, la tarification, la communication avec les voyageurs, le ménage et l'entretien — un système d'exploitation complet pour votre location.",
    intro:
      "La plupart des propriétaires sur la Costa del Sol ne manquent pas d'un bien exceptionnel — ils manquent d'un système. Les photos sont datées. Le prix n'a pas bougé depuis des mois. Les messages s'accumulent dans trois applications différentes. Le ménage se coordonne par chat de groupe. Et personne ne regarde l'ensemble.",
    frictions: [
      { label: "Annonce", detail: "Photos et texte qui sous-vendent le bien" },
      { label: "Prix", detail: "Un tarif fixe toute l'année, sans tenir compte de la demande" },
      { label: "Canaux", detail: "Airbnb, Booking.com et demandes gérés séparément" },
      { label: "Voyageurs", detail: "Messages répondus tard, ou jamais" },
      { label: "Ménage", detail: "Coordonné au coup par coup, sans contrôle qualité" },
      { label: "Entretien", detail: "Problèmes découverts par le voyageur suivant, pas avant" },
    ],
    pivot: "Nordic BnB prend le contrôle de toute l'exploitation.",
    imageAlt: "Une photo d'annonce typique et sous-valorisée",
    imageBadge: "Avant Nordic BnB",
  },
  system: {
    eyebrow: "Comment nous travaillons",
    heading: "D'une pièce vide à une réservation confirmée.",
    intro:
      "Le processus qui transforme une annonce en un flux de voyageurs fidèles — défilez pour le suivre du début à la fin.",
    pillars: [
      {
        code: "01",
        title: "Mise en scène",
        description:
          "Un décorateur agence meubles, linge et éclairage jusqu'à ce que l'espace ressemble à un chez-soi, pas à une location.",
      },
      {
        code: "02",
        title: "Ménage",
        description:
          "Un ménage professionnel, de fond en comble, avant l'arrivée de chaque voyageur.",
      },
      {
        code: "03",
        title: "Photographie",
        description:
          "La photographie professionnelle capture le bien sous son meilleur jour, prêt pour chaque canal.",
      },
      {
        code: "04",
        title: "Synchronisation",
        description:
          "L'annonce est publiée instantanément sur Airbnb, Booking.com et tous les canaux pertinents.",
      },
      {
        code: "05",
        title: "Arrivée",
        description:
          "Le voyageur récupère les clés — ou s'enregistre lui-même — et s'installe en quelques minutes.",
      },
      {
        code: "06",
        title: "Réservation",
        description:
          "Le séjour se termine, l'avis arrive, et la prochaine réservation est déjà confirmée.",
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
  performance: {
    eyebrow: "Performance",
    heading: "À quoi ressemble l'amélioration continue.",
    intro:
      "Un scénario d'optimisation illustratif pour un bien de deux chambres sur la Costa del Sol, montrant le type d'évolution qu'un système complet peut produire sur une saison.",
    disclaimer:
      "Exemple illustratif uniquement — pas un résultat Nordic BnB vérifié. Les chiffres constituent un scénario de démonstration en attendant que de vraies données clients puissent être publiées ici.",
    metrics: [
      { value: "+18 %", label: "Tarif moyen par nuit" },
      { value: "+24 %", label: "Potentiel de revenus" },
      { value: "+13 %", label: "Occupation" },
      { value: "4,9", label: "Note des voyageurs" },
    ],
    chartLabel: "Courbe de revenus illustrative, mois par mois",
    channelLabel: "Répartition des canaux illustrative",
    directOtherLabel: "Direct et autres",
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
      "Les propriétaires ne devraient pas avoir à choisir entre un bien magnifique et un bien bien géré. Notre travail est de veiller à ce qu'ils n'aient jamais à le faire.",
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
          "Nous possédions l'appartement depuis deux ans et avions toujours du mal à le remplir en hiver. Nordic BnB a pris le relais en mars, et dès août nous étions complets jusqu'en octobre. Le mieux, c'est que je reçois un rapport simple chaque mois au lieu de devoir courir après les réponses moi-même.",
        name: "Kristian H.",
        location: "Marbella",
      },
      {
        quote:
          "Je vis à Stockholm et je n'ai pas vu l'appartement en personne depuis que Nordic BnB s'occupe de la mise en scène et du ménage. Je sais pourtant exactement ce qui se passe chaque semaine grâce à leurs rapports, et les revenus ont augmenté avec une marge confortable depuis l'été dernier.",
        name: "Annika L.",
        location: "Fuengirola",
      },
      {
        quote:
          "J'ai géré l'appartement moi-même pendant trois ans, changeant les draps entre chaque voyageur. Depuis que Nordic BnB a pris le relais en janvier, je n'ai plus eu à me soucier de rien — pas une seule plainte, et mon téléphone ne vibre plus de messages WhatsApp à minuit.",
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
};
