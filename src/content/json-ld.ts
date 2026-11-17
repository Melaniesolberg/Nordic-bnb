import { getContent } from "./index";
import { SITE_URL, CONTACT } from "@/lib/utils";
import { htmlLang, pageHref, type Locale } from "@/i18n/config";

const priceNumber = (price: string) => price.replace(/[^\d]/g, "");

/** Organization, ProfessionalService with offers, Person and FAQPage, as one graph. */
export function homeJsonLd(locale: Locale) {
  const content = getContent(locale);
  const home = `${SITE_URL}${pageHref(locale, "home")}`;
  const inLanguage = htmlLang[locale];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Eiendomly",
        url: SITE_URL,
        email: CONTACT.email,
        founder: { "@id": `${SITE_URL}/#founder` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Eiendomly",
        url: home,
        email: CONTACT.email,
        areaServed: { "@type": "Country", name: "Norge" },
        inLanguage,
        makesOffer: content.services.items.map((s) => ({
          "@type": "Offer",
          priceCurrency: "NOK",
          price: priceNumber(s.price),
          url: `${SITE_URL}${pageHref(locale, s.key)}`,
          itemOffered: { "@type": "Service", name: s.title, description: s.description },
        })).concat(
          content.plans.items.map((plan) => ({
            "@type": "Offer",
            priceCurrency: "NOK",
            price: priceNumber(plan.price),
            url: `${SITE_URL}${pageHref(locale, "order")}?service=${plan.key}`,
            itemOffered: { "@type": "Service", name: plan.title, description: plan.features.join(". ") },
          })),
        ),
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: content.about.founderName,
        jobTitle: content.about.founderRole,
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${home}#faq`,
        inLanguage,
        mainEntity: content.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}
