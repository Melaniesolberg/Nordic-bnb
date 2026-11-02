import { getBbContent, bbHref, bbSlugHref, BB_EMAIL } from "./index";
import type { BbLocale } from "./types";
import { CONTACT } from "@/lib/utils";

/**
 * Organization, ProfessionalService, per-service Offer, Person and
 * FAQPage structured data for the Boligboost home page, in the given
 * language. Rendered as a single @graph so search engines and AI
 * crawlers see one connected entity rather than duplicate nodes.
 */
export function bbJsonLd(locale: BbLocale) {
  const content = getBbContent(locale);
  const site = `${CONTACT.site}${bbHref(locale)}`;
  const inLanguage = locale === "nb" ? "nb-NO" : "en";

  const offers = [
    {
      "@type": "Offer",
      name: content.services.photoBoost.tagline,
      url: `${CONTACT.site}${bbSlugHref(locale, "photoBoost")}`,
      priceCurrency: "NOK",
      price: content.services.photoBoost.price.replace(/[^\d]/g, ""),
    },
    {
      "@type": "Offer",
      name: content.services.virtualStaging.tagline,
      url: `${CONTACT.site}${bbSlugHref(locale, "virtualStaging")}`,
      priceCurrency: "NOK",
      price: content.services.virtualStaging.price.replace(/[^\d]/g, ""),
    },
    {
      "@type": "Offer",
      name: content.services.saleBoostTagline,
      url: `${CONTACT.site}${bbSlugHref(locale, "saleBoost")}`,
      priceCurrency: "NOK",
      price: content.services.saleBoostMini.price.replace(/[^\d]/g, ""),
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site}#organization`,
        name: "Boligboost",
        url: site,
        email: BB_EMAIL,
        founder: { "@type": "Person", name: content.about.name },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site}#service`,
        name: "Boligboost",
        url: site,
        email: BB_EMAIL,
        areaServed: "NO",
        inLanguage,
        makesOffer: offers,
      },
      {
        "@type": "Person",
        "@id": `${site}#founder`,
        name: content.about.name,
        jobTitle: content.about.role,
        worksFor: { "@id": `${site}#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${site}#faq`,
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
