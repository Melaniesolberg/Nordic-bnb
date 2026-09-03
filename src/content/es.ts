import type { SiteContent } from "./types";

export const es: SiteContent = {
  meta: {
    title: "Nordic BnB — Gestión de propiedades, Costa del Sol",
    description:
      "Gestión integral de alquiler vacacional y de larga temporada en Marbella, Mijas, Fuengirola y Benalmádena. Tu propiedad, mejorada continuamente.",
  },
  nav: {
    links: [
      { label: "El sistema", href: "#system" },
      { label: "Servicios", href: "#services" },
      { label: "Zonas", href: "#areas" },
      { label: "Nosotros", href: "#about" },
    ],
    cta: "Solicita una revisión de tu propiedad",
    whatsapp: "WhatsApp",
    whatsappMessage: "Hola Nordic BnB — me gustaría hablar sobre mi propiedad.",
    toggleMenu: "Abrir menú",
    selectLanguage: "Seleccionar idioma",
  },
  hero: {
    eyebrow: "Gestión de propiedades — Costa del Sol",
    headlineLines: ["Tu propiedad.", "Mejorada continuamente."],
    subline:
      "Gestión integral de alquiler vacacional y de larga temporada en Marbella, Mijas, Fuengirola y Benalmádena — posicionamiento, precio y presentación, perfeccionados sin pausa.",
    ctaPrimary: "Solicita una revisión de tu propiedad",
    ctaSecondary: "Escríbenos por WhatsApp",
    scrollHint: "Desplázate",
    locationTag: "Costa del Sol, España",
  },
  problem: {
    eyebrow: "El problema",
    heading: "Una propiedad excepcional. Una operación fragmentada.",
    intro:
      "A la mayoría de propietarios en la Costa del Sol no les falta una gran propiedad — les falta un sistema. Las fotos están desactualizadas. El precio no cambia desde hace meses. Los mensajes se acumulan en tres aplicaciones distintas. La limpieza se coordina por chat de grupo. Y nadie mira el conjunto completo.",
    frictions: [
      { label: "Anuncio", detail: "Fotografía y textos que infravaloran la propiedad" },
      { label: "Precio", detail: "Una tarifa fija todo el año, sin importar la demanda" },
      { label: "Canales", detail: "Airbnb, Booking.com y consultas gestionadas por separado" },
      { label: "Huéspedes", detail: "Mensajes respondidos tarde, o nunca" },
      { label: "Limpieza", detail: "Coordinada de forma improvisada, sin control de calidad" },
      { label: "Mantenimiento", detail: "Los problemas los descubre el siguiente huésped, no antes" },
    ],
    pivot: "Nordic BnB toma el control de toda la operación.",
    subline:
      "Nos encargamos del anuncio, el precio, la comunicación con huéspedes, la limpieza y el mantenimiento — un sistema operativo completo para tu alquiler.",
    imageAlt: "Una foto de anuncio típica e infravalorada",
    imageBadge: "Antes de Nordic BnB",
  },
  system: {
    eyebrow: "El sistema Nordic BnB",
    heading: "Un solo sistema operativo para todo el alquiler.",
    intro:
      "Seis disciplinas que funcionan de forma continua y coordinada — no la publicación de un anuncio y ya está. Desplázate para recorrer el sistema.",
    pillars: [
      {
        code: "01",
        title: "Posicionar",
        description:
          "Fotografía, estilismo y textos del anuncio reconstruidos para mostrar la propiedad en su mejor versión, en cada canal donde aparece.",
      },
      {
        code: "02",
        title: "Fijar precio",
        description:
          "Precios dinámicos según la demanda, que se ajustan a la temporada, el calendario y la competencia — no una tarifa única.",
      },
      {
        code: "03",
        title: "Distribuir",
        description:
          "Airbnb, Booking.com y los canales relevantes para tu propiedad, sincronizados y optimizados para cada público.",
      },
      {
        code: "04",
        title: "Recibir",
        description:
          "Comunicación rápida y cercana con el huésped, desde la consulta hasta la salida, y un check-in que se gana las cinco estrellas.",
      },
      {
        code: "05",
        title: "Cuidar",
        description:
          "Limpieza profesional, ajustes de estilismo y coordinación de mantenimiento entre cada estancia.",
      },
      {
        code: "06",
        title: "Mejorar",
        description:
          "El rendimiento se revisa de forma continua, y cada decisión — precio, fotos, texto — se perfecciona según lo que muestran los datos.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Antes → después",
    heading: "La misma propiedad. Un anuncio completamente distinto.",
    intro:
      "Los anuncios corrientes infravaloran propiedades extraordinarias. Así cambia todo cuando Nordic BnB se hace cargo.",
    beforeLabel: "Antes",
    afterLabel: "Nordic BnB",
    fields: [
      {
        label: "Título",
        before: "Apartamento bonito cerca de la playa, 2 habitaciones",
        after: "Retiro luminoso en Marbella, a 90 segundos de la arena",
      },
      {
        label: "Fotografía",
        before: "Fotos de móvil, luz irregular, habitaciones desordenadas",
        after: "Estilismo profesional, fotografía cuidada, exteriores en hora dorada",
      },
      {
        label: "Precio",
        before: "90 €/noche, fijo todo el año",
        after: "68–165 €/noche, ajustado a la demanda en tiempo real",
      },
      {
        label: "Descripción",
        before: "Dos líneas. Sin historia, sin detalle.",
        after: "Escrita para vender la experiencia — y para convertir",
      },
      {
        label: "Presencia",
        before: "Publicado en una sola plataforma",
        after: "Distribuido en todos los canales relevantes",
      },
    ],
    sliderAriaLabel: "Comparación antes y después del anuncio",
    beforeAlt: "Fotografía de anuncio ordinaria, antes de Nordic BnB",
    afterAlt: "Fotografía de anuncio Nordic BnB estilizada, después",
  },
  portfolio: {
    eyebrow: "Portafolio",
    heading: "Resultados en distintos tipos de propiedad.",
    intro:
      "Una muestra de cómo el sistema Nordic BnB transforma la presentación en distintos tipos de propiedad de la Costa del Sol.",
    disclaimer: "Cifras de ejemplo ilustrativas — no son resultados verificados de Nordic BnB.",
    beforeLabel: "Antes",
    afterLabel: "Después",
    properties: [
      {
        name: "Apartamento",
        location: "Fuengirola",
        stats: [
          { value: "+29 %", label: "ingresos" },
          { value: "82 %", label: "ocupación" },
        ],
      },
      {
        name: "Villa",
        location: "Marbella",
        stats: [
          { value: "+34 %", label: "ingresos" },
          { value: "86 %", label: "ocupación" },
        ],
      },
      {
        name: "Casa",
        location: "Mijas",
        stats: [
          { value: "+27 %", label: "ingresos" },
          { value: "79 %", label: "ocupación" },
        ],
      },
    ],
  },
  performance: {
    eyebrow: "Rendimiento",
    heading: "Así es la mejora continua.",
    intro:
      "Un escenario ilustrativo de optimización para una propiedad de dos habitaciones en la Costa del Sol, mostrando el tipo de evolución que un sistema completo puede generar en una temporada.",
    disclaimer:
      "Ejemplo únicamente ilustrativo — no es un resultado verificado de Nordic BnB. Las cifras son un escenario de demostración hasta que podamos publicar aquí datos reales de clientes.",
    metrics: [
      { value: "+18 %", label: "Tarifa media por noche" },
      { value: "+24 %", label: "Potencial de ingresos" },
      { value: "+13 %", label: "Ocupación" },
      { value: "4,9", label: "Valoración de huéspedes" },
    ],
    chartLabel: "Curva de ingresos ilustrativa, mes a mes",
    channelLabel: "Distribución por canal ilustrativa",
    directOtherLabel: "Directo y otros",
  },
  services: {
    eyebrow: "Servicios",
    heading: "Dos estrategias. Un mismo nivel de cuidado.",
    intro:
      "Ya sea que tu propiedad encaje mejor con huéspedes vacacionales o con un inquilino de larga temporada, se aplica la misma disciplina: gestión integral, optimizada de forma continua.",
    shortTerm: {
      title: "Gestión de alquiler vacacional y de corta estancia",
      price: "14,9 % + IVA",
      priceNote: "de los ingresos del alquiler",
      description:
        "Gestión completa de Airbnb y Booking.com — desde el primer anuncio hasta la operativa diaria.",
      features: [
        "Creación y optimización continua del anuncio",
        "Precios dinámicos según la demanda",
        "Distribución multicanal (Airbnb, Booking.com y más)",
        "Comunicación con huéspedes y coordinación del check-in",
        "Limpieza profesional y servicio de lencería",
        "Inspecciones de la propiedad entre estancias",
        "Coordinación de mantenimiento",
        "Estilismo y coordinación de fotografía/contenido",
        "Informes para el propietario",
      ],
    },
    longTerm: {
      title: "Gestión de alquiler de larga temporada",
      price: "7,45 % + IVA",
      priceNote: "de la renta mensual",
      description:
        "Marketing, coordinación de inquilinos y supervisión continua para propietarios que buscan ingresos predecibles con baja intensidad operativa.",
      features: [
        "Marketing y búsqueda de inquilinos",
        "Coordinación y comunicación con el inquilino",
        "Cobro y gestión de la renta",
        "Supervisión de la propiedad",
        "Coordinación de mantenimiento",
        "Informes para el propietario",
      ],
    },
    termsNote:
      "Las condiciones comerciales finales pueden depender de la propiedad, su tipología y los requisitos específicos del servicio — las cifras anteriores reflejan nuestra estructura estándar.",
    ctaLabel: "Pregunta por este servicio",
    whatsappTemplate: "Hola Nordic BnB — me gustaría preguntar sobre {service}.",
  },
  dashboard: {
    eyebrow: "Experiencia del propietario",
    heading: "Tú eres el propietario. Nosotros llevamos la operación.",
    intro:
      "Una vista en tiempo real de cómo rinde tu propiedad — reservas, ocupación, estado de limpieza, mantenimiento y tu liquidación mensual, siempre visibles.",
    footnote: "Interfaz conceptual — panel de propietario ilustrativo, mostrado con datos de ejemplo.",
    windowTitle: "Villa Sunrise — Portal del propietario",
    cardAlt: "Villa Sunrise, la propiedad de este panel",
    revenueChangeNote: "+18 % respecto al mes anterior",
    payoutNote: "1 oct — transferencia bancaria",
    cleaningStatusText: "Limpieza programada",
    maintenanceStatusText: "Sin incidencias abiertas",
    labels: {
      revenue: "Ingresos este mes",
      occupancy: "Ocupación",
      upcoming: "Próximas estancias",
      cleaning: "Estado de limpieza",
      maintenance: "Mantenimiento",
      payout: "Próxima liquidación",
      guest: "Huésped",
      status: "Estado",
    },
  },
  operations: {
    eyebrow: "Operaciones",
    heading: "El sistema detrás de cada estancia.",
    intro:
      "Una red local de personal de limpieza, estilistas y coordinadores de mantenimiento, que se activa en secuencia alrededor de cada huésped, cada vez.",
    steps: [
      { title: "Reserva confirmada", detail: "La reserva se sincroniza al instante en todos los canales." },
      { title: "Huésped preparado", detail: "Se envían los datos del check-in, la guía de la casa y el mensaje de bienvenida." },
      { title: "Limpieza programada", detail: "El servicio de limpieza profesional se reserva y confirma automáticamente." },
      { title: "Propiedad inspeccionada", detail: "Se revisa el estilismo, el estado y las comodidades antes de la llegada." },
      { title: "Llegada del huésped", detail: "Check-in sin fricciones, con un equipo disponible para lo que haga falta." },
      { title: "Reseña recopilada", detail: "Se cierra la experiencia del huésped y se recoge su valoración." },
      { title: "El rendimiento ajusta el precio", detail: "Los datos de cada estancia afinan la siguiente decisión de precio." },
    ],
    bannerHeadline: "Cada estancia, preparada a mano.",
    sequenceLabels: {
      styling: "Estilismo",
      cleaning: "Limpieza",
      guestArrival: "Llegada del huésped",
      detail: "Detalle",
    },
  },
  compare: {
    eyebrow: "Corta estancia vs. larga temporada",
    heading: "¿No sabes qué estrategia conviene a tu propiedad?",
    intro:
      "Ambos caminos pueden funcionar bien en la Costa del Sol. El adecuado depende de tu propiedad, tus objetivos y cuánto quieras involucrarte.",
    shortTerm: {
      title: "Alquiler vacacional / corta estancia",
      tagline: "Mayor potencial de ingresos, gestión más activa",
      points: [
        "Mayor potencial de ingresos en temporada alta",
        "Requiere una gestión activa y continua",
        "Los ingresos varían según la temporada",
        "Más flexibilidad para usar la propiedad tú mismo",
      ],
    },
    longTerm: {
      title: "Alquiler de larga temporada",
      tagline: "Ingresos predecibles, menor intensidad operativa",
      points: [
        "Ingresos mensuales estables y predecibles",
        "Menor intensidad operativa del día a día",
        "Arrendamiento más largo y estable",
        "Menos flexibilidad para usar la propiedad tú mismo",
      ],
    },
    cta: "Encuentra la estrategia adecuada para tu propiedad",
  },
  areas: {
    eyebrow: "Dónde operamos",
    heading: "Costa del Sol, de Marbella a Benalmádena.",
    intro:
      "La presencia local a lo largo de la costa significa tiempos de respuesta más rápidos, mejor conocimiento local y precios que reflejan cada micromercado.",
    areas: [
      {
        name: "Marbella",
        description: "Villas de alto nivel y apartamentos frente al mar en el mercado de lujo más consolidado de España.",
      },
      {
        name: "Mijas",
        description: "La costa de Mijas y el pueblo en la ladera — fuerte atractivo durante todo el año.",
      },
      {
        name: "Fuengirola",
        description: "Alto volumen turístico frente a la playa con demanda constante de corta estancia.",
      },
      {
        name: "Benalmádena",
        description: "Una combinación equilibrada de alquiler vacacional familiar y vida costera de larga temporada.",
      },
    ],
  },
  about: {
    eyebrow: "Nosotros",
    heading: "Construido sobre una idea sencilla.",
    paragraphs: [
      "Nordic BnB se está construyendo alrededor de una idea sencilla: la gestión de propiedades no debería ser pasiva. Un anuncio que se publica y se deja solo rendirá por debajo de su potencial — en silencio, durante años, sin que nadie se dé cuenta.",
      "Cada propiedad que gestionamos debe revisarse, probarse y mejorarse de forma continua — precio, presentación, posicionamiento — en lugar de configurarse una vez y olvidarse.",
      "Detrás de Nordic BnB hay una red operativa local: limpieza, estilismo, mantenimiento y coordinación sobre el terreno en toda la Costa del Sol, junto a unos fundadores que creen que los propietarios merecen visibilidad total sobre cómo rinde su propiedad.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Fundador, Nordic BnB",
    founderQuote:
      "Los propietarios no deberían tener que elegir entre una propiedad hermosa y una bien gestionada. Nuestro trabajo es asegurarnos de que nunca tengan que hacerlo.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Cofundadora, Nordic BnB",
    founder2Quote:
      "Todo propietario merece ver exactamente cómo rinde su propiedad — sin conjeturas, sin caja negra.",
  },
  testimonials: {
    eyebrow: "Testimonios de propietarios",
    heading: "Lo que dirán los propietarios.",
    placeholderNotice:
      "Citas de muestra que reflejan el tono esperado de los propietarios — aún no son reseñas verificadas.",
    items: [
      {
        quote:
          "Por fin duermo tranquilo con mi apartamento en Marbella. Los ingresos han subido y ya no reviso el móvil cada cinco minutos por si un huésped necesita algo — Nordic BnB se encarga de todo.",
        name: "Kristian H.",
        location: "Propietario noruego, Marbella",
      },
      {
        quote:
          "Como propietaria a distancia desde Suecia, lo que más valoro es la comunicación. Siempre sé cómo va todo, y la villa nunca ha estado tan bien presentada.",
        name: "Annika L.",
        location: "Propietaria sueca, Fuengirola",
      },
      {
        quote:
          "Llevaba años gestionando mi propiedad yo mismo, sin resultados. En unos meses con Nordic BnB, la ocupación y el estilismo mejoraron notablemente, con mucho menos esfuerzo por mi parte.",
        name: "Carlos M.",
        location: "Propietario español, Benalmádena",
      },
    ],
  },
  finalCta: {
    eyebrow: "Hablemos",
    heading: "Veamos qué puede lograr tu propiedad.",
    subline:
      "Tu propiedad merece más que una gestión básica. Solicita una revisión gratuita y te mostraremos exactamente dónde está rindiendo por debajo de su potencial — y cómo sería la mejora continua.",
    ctaPrimary: "Solicita una revisión de tu propiedad",
    ctaSecondary: "Escríbenos por WhatsApp",
    form: {
      fields: {
        name: "Nombre",
        email: "Correo electrónico",
        phone: "Teléfono / WhatsApp",
        location: "Ubicación de la propiedad",
        propertyType: "Tipo de propiedad",
        bedrooms: "Habitaciones",
        currentlyRented: "¿Alquilada actualmente?",
        yes: "Sí",
        no: "No",
        strategy: "¿Corta estancia, larga temporada o no lo sabes?",
        strategyOptions: { short: "Corta estancia", long: "Larga temporada", unsure: "No lo sé" },
        message: "Mensaje",
      },
      submit: "Solicita tu revisión gratuita",
      successTitle: "Recibido.",
      successBody: "Gracias — te contactaremos en breve. Para algo urgente, escríbenos por WhatsApp.",
      errorMessage: "Algo salió mal — prueba a escribirnos por WhatsApp.",
    },
  },
  footer: {
    tagline: "Tu propiedad. Mejorada continuamente.",
    linksHeading: "Sitio",
    contactHeading: "Contacto",
    languageHeading: "Idioma",
    rights: "Nordic BnB. Todos los derechos reservados.",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Cada propiedad merece contar bien su historia.",
  },
  showcase2: {
    eyebrow: "Presentación",
    heading: "Estilizada, fotografiada y posicionada para rendir.",
  },
};
