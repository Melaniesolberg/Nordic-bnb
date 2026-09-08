import type { SiteContent } from "./types";

export const es: SiteContent = {
  meta: {
    title: "Nordic BnB — Gestión de propiedades, Costa del Sol",
    description:
      "Gestión integral de alquiler vacacional y de larga temporada en Marbella, Mijas, Fuengirola y Benalmádena. Tu propiedad, mejorada continuamente.",
  },
  nav: {
    links: [
      { label: "El sistema", href: "/es#system" },
      { label: "Servicios", href: "/es#services" },
      { label: "Zonas", href: "/es#areas" },
      { label: "Nosotros", href: "/es#about" },
      { label: "Equipo", href: "/es/contact" },
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
      "Gestión integral de alquiler vacacional y de larga temporada en Marbella, Mijas, Fuengirola, Benalmádena, Torremolinos y Málaga — posicionamiento, precio y presentación, perfeccionados sin pausa.",
    ctaPrimary: "Solicita una revisión de tu propiedad",
    ctaSecondary: "Escríbenos por WhatsApp",
    scrollHint: "Desplázate",
    locationTag: "Costa del Sol, España",
  },
  system: {
    eyebrow: "Qué puedes esperar",
    heading: "¿Qué puedes esperar de nosotros?",
    intro:
      "El proceso que convierte un anuncio en un flujo de huéspedes que repiten.",
    pillars: [
      {
        code: "",
        title: "Nos hacemos cargo de la propiedad",
        description: "Desde el primer contacto hasta la responsabilidad total, sin estrés para ti.",
      },
      {
        code: "",
        title: "Inspeccionamos y mejoramos el estilismo",
        description: "Muebles, textiles y detalles ajustados para impresionar a los huéspedes.",
      },
      {
        code: "",
        title: "Fotografiamos y publicamos el anuncio",
        description: "Fotos profesionales, en todos los canales la misma semana.",
      },
      {
        code: "",
        title: "Gestionamos reservas y huéspedes",
        description: "Desde el primer mensaje hasta la entrega de llaves — nos ocupamos de todo.",
      },
      {
        code: "",
        title: "Limpiamos y mantenemos entre cada estancia",
        description: "Limpieza profesional, textiles y mantenimiento, para que la propiedad esté siempre lista para huéspedes.",
      },
      {
        code: "",
        title: "Informamos y mejoramos continuamente",
        description: "Tú sigues el progreso, nosotros ajustamos el precio y la presentación.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Antes → después",
    heading: "La misma propiedad. Un anuncio completamente distinto.",
    intro:
      "¿Qué anuncio elegirías?",
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
    disclaimer: "Ejemplo ilustrado, con fines demostrativos.",
  },
  portfolio: {
    eyebrow: "Portafolio",
    heading: "Resultados en distintos tipos de propiedad.",
    intro:
      "Una muestra de cómo el sistema Nordic BnB transforma la presentación en distintos tipos de propiedad de la Costa del Sol.",
    realResultsLabel: "Resultados reales",
    disclaimer: "Fotografías reales de antes y después, y cifras de crecimiento reales de nuestras propias propiedades.",
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
    heading: "Costa del Sol, de Málaga a Marbella.",
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
      {
        name: "Torremolinos",
        description: "Un destino de playa clásico con una demanda turística estable todo el año.",
      },
      {
        name: "Málaga",
        description: "Una capital cultural con un mercado creciente de escapadas urbanas y alquiler de larga estancia.",
      },
    ],
  },
  about: {
    eyebrow: "Nosotros",
    heading: "Construido sobre una idea sencilla.",
    paragraphs: [
      "Fundada en 2023, Nordic BnB se construye alrededor de una idea sencilla: la gestión de propiedades no debería ser pasiva. Un anuncio que se publica y se deja solo rendirá por debajo de su potencial — en silencio, durante años, sin que nadie se dé cuenta.",
      "Cada propiedad que gestionamos debe revisarse, probarse y mejorarse de forma continua — precio, presentación, posicionamiento — en lugar de configurarse una vez y olvidarse.",
      "Detrás de Nordic BnB hay una red operativa local: limpieza, estilismo, mantenimiento y coordinación sobre el terreno en toda la Costa del Sol, junto a unos fundadores que creen que los propietarios merecen visibilidad total sobre cómo rinde su propiedad.",
    ],
    founderName: "Petter Solberg",
    founderRole: "Founder & Head of Growth",
    founderQuote:
      "No nos limitamos a gestionar un anuncio — construimos y damos forma a una propiedad que realmente convierte. Conocemos el mercado de la Costa del Sol, y conocemos a los huéspedes, especialmente a los escandinavos que reservan aquí.",
    founder2Name: "Melanie Solberg",
    founder2Role: "Head of Operations & Marketing",
    founder2Quote:
      "Todo propietario merece ver exactamente cómo rinde su propiedad — sin conjeturas, sin caja negra.",
  },
  testimonials: {
    eyebrow: "Testimonios de propietarios",
    heading: "Lo que dice la gente.",
    items: [
      {
        quote:
          "Nos costaba llenar el apartamento en invierno. Nordic BnB se hizo cargo en marzo, y en agosto ya teníamos todo reservado hasta octubre. Ahora recibo un informe al mes en vez de perseguir respuestas yo mismo.",
        name: "Kristian H.",
        location: "Marbella",
      },
      {
        quote:
          "Vivo en Estocolmo, no he visto el apartamento en más de un año. Nordic BnB se encarga de todo, y los ingresos han subido.",
        name: "Annika L.",
        location: "Fuengirola",
      },
      {
        quote:
          "Lo gestioné yo mismo durante tres años. Ahora no tengo que preocuparme — ni una queja, y el móvil ya no suena a medianoche.",
        name: "Carlos M.",
        location: "Benalmádena",
      },
      {
        quote:
          "Lo gestionan mejor de lo que lo hacía yo mismo, y antes llevaba tres propiedades.",
        name: "Erik B.",
        location: "Mijas",
      },
      {
        quote:
          "Era escéptico sobre entregar todo, pero los informes son más detallados que los que me da mi gestor. Veo la ocupación, la limpieza, todo.",
        name: "Sofia T.",
        location: "Marbella",
      },
      {
        quote:
          "Heredamos el apartamento de mis padres y no sabíamos qué hacer con él. Nordic BnB lo fotografió, lo volvió a publicar, y en seis semanas teníamos nuestras primeras reservas. Un año después rinde mejor que unidades similares cercanas, y nunca he tenido que tratar directamente con un huésped.",
        name: "Henrik J.",
        location: "Fuengirola",
      },
      {
        quote:
          "Responden rápido, y la limpieza es realmente impecable cada vez.",
        name: "Maja P.",
        location: "Benalmádena",
      },
      {
        quote:
          "Cambié de otra agencia que apenas comunicaba. Nordic BnB de verdad llama cuando algo necesita una decisión, en lugar de resolverlo en silencio y esperar que no me dé cuenta.",
        name: "Thomas R.",
        location: "Marbella",
      },
      {
        quote:
          "Antes alquilaba a largo plazo. El inquilino dejó el piso en mal estado y perdí dos meses de ingresos arreglándolo. Ahora es alquiler de corta estancia con Nordic BnB, y aun con la limpieza extra entre huéspedes, gano más que con un solo inquilino.",
        name: "Ingrid S.",
        location: "Mijas",
      },
      {
        quote:
          "Reservado casi todos los fines de semana antes de que terminara siquiera el papeleo de traspaso.",
        name: "Daniel K.",
        location: "Torremolinos",
      },
      {
        quote:
          "Mi villa estuvo vacía la mitad del año con el anuncio antiguo. Ahora rara vez está libre más de unos días seguidos, y las fotos de verdad parecen mi casa.",
        name: "Camilla W.",
        location: "Fuengirola",
      },
      {
        quote:
          "Lo que me convenció fue el precio. Antes fijaba una tarifa y me olvidaba de ella. Ellos la ajustan a diario según la demanda, y veo exactamente por qué en el informe mensual. Los ingresos han subido casi un tercio desde que cambié.",
        name: "Anders G.",
        location: "Benalmádena",
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
    orgNumberLabel: "N.º de registro 931 905 856",
    privacyLabel: "Privacidad",
  },
  showcase1: {
    eyebrow: "Costa del Sol",
    heading: "Cada propiedad cuenta una historia que merece contarse bien — nos aseguramos de que se escuche.",
  },
  showcase2: {
    eyebrow: "Presentación",
    heading: "Estilizada, fotografiada y posicionada para rendir.",
  },
  contactPage: {
    eyebrow: "Equipo",
    heading: "El equipo detrás de Nordic BnB.",
    intro:
      "Seguimos de cerca tu propiedad cada día — junto con nuestro propio equipo fijo. No dudes en contactarnos directamente.",
    teamName: "Nuestro equipo operativo",
    teamHeading: "El equipo sobre el terreno",
    teamIntro:
      "Este es nuestro propio equipo — incluido nuestro propio personal de limpieza — que mantiene cada propiedad funcionando, día tras día.",
    roles: [
      { title: "Mantenimiento", description: "Reparaciones, mantenimiento y revisiones entre estancias." },
      { title: "Equipo de limpieza", description: "Limpieza profesional y cambio de textiles tras cada huésped." },
      { title: "Fotógrafo/a y estilista", description: "Estilismo y fotografía para cada nuevo anuncio." },
    ],
    emailHeading: "Escríbenos directamente",
    ctaHeading: "Hablemos de tu propiedad.",
    ctaSubline:
      "¿Tienes una pregunta, o quieres ver qué podría hacer Nordic BnB por tu propiedad? Envíanos un correo — respondemos personalmente, normalmente en menos de un día.",
    ctaButton: "Escribinos",
    recruitEyebrow: "Únete al equipo",
    recruitHeading: "¿Quieres trabajar con nosotros?",
    recruitSubline:
      "Siempre estamos abiertos a gente buena. Si eres personal de limpieza, mantenimiento o fotógrafo/a en la Costa del Sol, nos gustaría saber de ti.",
    story: {
      eyebrow: "Nuestra historia",
      heading: "Del marketing a la hospitalidad.",
      milestones: [
        {
          period: "Agosto de 2023",
          title: "Dónde empezó todo",
          body: "Nordic BnB comenzó en Noruega con marketing digital, ayudando a empresas e inversores inmobiliarios a presentarse mejor — a sí mismos y a sus propiedades — en internet. Aprendimos algo muy pronto: la presentación cambia la percepción, y la percepción cambia el valor.",
        },
        {
          period: "2024",
          title: "Más cerca del sector inmobiliario",
          body: "Para entonces ya llevábamos años relacionados con el alquiler de propiedades nosotros mismos — comprando, reformando y alquilando viviendas en Noruega, tanto a corto como a largo plazo. Nuestro trabajo se centró cada vez más en la propiedad, el contenido, la fotografía, el posicionamiento y la forma en que se presentaban las viviendas en internet. Vimos el mismo problema una y otra vez: propiedades excelentes comercializadas muy por debajo de su potencial.",
        },
        {
          period: "2025",
          title: "De Noruega a España 🇪🇸",
          body: "Nos mudamos de Noruega a España y vivimos el mercado del alquiler de la Costa del Sol desde dentro — como residentes y como propietarios y operadores de propiedades. Lo que empezó como conocimiento de marketing, combinado con años de experiencia alquilando nuestras propias viviendas en casa, se convirtió en algo mayor: entender qué esperan los huéspedes internacionales, con qué luchan los propietarios y qué hace que una propiedad rinda mejor que otra.",
        },
        {
          period: "Finales de 2025",
          title: "La idea evolucionó",
          body: "Empezamos a combinar todo lo que ya sabíamos — marketing, presentación, interiorismo, experiencia del huésped y gestión práctica del alquiler — en un servicio completo para propietarios de alquileres vacacionales, construido sobre lo aprendido ayudando a inversores a crear valor a partir de sus propiedades, tanto en Noruega como en España.",
        },
        {
          period: "2026",
          title: "Nordic BnB hoy",
          body: "Nordic BnB se convirtió en una empresa de servicio completo de alquiler vacacional y gestión de propiedades en la Costa del Sol. Desde preparar y mejorar la propiedad hasta: Estilismo • Fotografía • Anuncios • Precios • Comunicación con huéspedes • Limpieza • Mantenimiento • Gestión integral. Una sola empresa. Un único punto de contacto. Todo resuelto.",
        },
        {
          period: "2026 →",
          title: "El próximo capítulo",
          body: "Nuestro objetivo es sencillo: crear un nuevo estándar para la gestión del alquiler vacacional en la Costa del Sol — combinando servicio escandinavo, presentación potente y ejecución local. Mejoramos. Estilizamos. Gestionamos.",
        },
      ],
    },
  },
  privacyPage: {
    eyebrow: "Privacidad",
    heading: "Política de privacidad.",
    updated: "Última actualización: septiembre de 2026",
    intro:
      "Esta página explica en términos sencillos qué datos recopilamos cuando te pones en contacto con Nordic BnB, y cómo los usamos.",
    sections: [
      {
        heading: "Qué recopilamos",
        body: "Cuando rellenas nuestro formulario de contacto o nos escribes por correo electrónico o WhatsApp, recopilamos los datos que nos proporcionas — normalmente tu nombre, correo electrónico, número de teléfono y detalles sobre tu propiedad o consulta.",
      },
      {
        heading: "Cómo lo usamos",
        body: "Usamos estos datos únicamente para responder a tu consulta y, si te conviertes en cliente, para gestionar tu propiedad. Nunca vendemos ni alquilamos tus datos a terceros.",
      },
      {
        heading: "Cuánto tiempo los conservamos",
        body: "Conservamos tus datos solo el tiempo necesario para responder a tu consulta o mantener nuestra colaboración, salvo que la ley exija un plazo mayor.",
      },
      {
        heading: "Tus derechos",
        body: "Puedes solicitar en cualquier momento acceder, corregir o eliminar los datos que tenemos sobre ti. Simplemente contáctanos y atenderemos tu solicitud con prontitud.",
      },
    ],
    contactHeading: "¿Preguntas sobre privacidad?",
    contactBody: "Si tienes preguntas sobre esta política o sobre tus datos, contáctanos directamente.",
  },
};
