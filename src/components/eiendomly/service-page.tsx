import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import Magnetic from "@/components/ui/magnetic-button";
import BbNav from "@/components/boligboost/nav";
import BbFooter from "@/components/boligboost/footer";
import BbConsentBanner from "@/components/boligboost/consent-banner";
import { getBbContent, bbSlugHref } from "@/content/boligboost";
import type { BbLocale } from "@/content/boligboost/types";

export default function BbServicePage({
  locale,
  service,
}: {
  locale: BbLocale;
  service: "photoBoost" | "virtualStaging" | "saleBoost";
}) {
  const content = getBbContent(locale);
  const isSaleBoost = service === "saleBoost";

  const heading = isSaleBoost ? content.services.saleBoostHeading : content.services[service].heading;
  const tagline = isSaleBoost ? content.services.saleBoostTagline : content.services[service].tagline;
  const forWho = isSaleBoost ? content.services.saleBoostForWho : content.services[service].forWho;
  const whatItIs = isSaleBoost ? content.services.saleBoostWhatItIs : content.services[service].whatItIs;
  const includes = isSaleBoost ? content.services.saleBoostIncludes : content.services[service].includes;
  const note = isSaleBoost ? content.services.saleBoostValueNote : content.services[service].note;

  const orderHref = `${bbSlugHref(locale, "order")}?service=${service}`;

  return (
    <>
      <BbNav locale={locale} nav={content.nav} />
      <main className="bg-ivory text-charcoal">
        <section className="border-b border-charcoal/10 py-24 sm:py-28">
          <div className="mx-auto max-w-[900px] px-5 sm:px-8">
            <Reveal>
              <Eyebrow>{tagline}</Eyebrow>
              <h1 className="font-serif-display text-display-md mt-5 text-charcoal">{heading}</h1>
              {forWho && <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/65">{forWho}</p>}
            </Reveal>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[900px] px-5 sm:px-8">
            <Reveal>
              <p className="max-w-2xl text-base leading-relaxed text-charcoal/70">{whatItIs}</p>
            </Reveal>

            {includes.length > 0 && (
              <Reveal delay={0.05}>
                <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/75">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {!isSaleBoost && (
              <Reveal delay={0.08}>
                <div className="mt-12 rounded-sm border border-charcoal/10 bg-ivory-soft p-8">
                  <p className="font-serif-display text-3xl text-charcoal">{content.services[service].price}</p>
                  {content.services[service].priceNote && (
                    <p className="mt-1 text-sm text-charcoal/60">{content.services[service].priceNote}</p>
                  )}
                  <Magnetic>
                    <Link
                      href={orderHref}
                      className="mt-6 inline-flex items-center rounded-full bg-amber-600 px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-amber-700"
                    >
                      {content.nav.orderCta}
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>
            )}

            {isSaleBoost && (
              <Reveal delay={0.08}>
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {[content.services.saleBoostMini, content.services.saleBoostLarge].map((tier) => (
                    <div key={tier.heading} className="rounded-sm border border-charcoal/10 bg-ivory-soft p-8">
                      <p className="eyebrow text-charcoal/45">{tier.heading}</p>
                      <p className="mt-3 font-serif-display text-3xl text-charcoal">{tier.price}</p>
                      <p className="mt-1 text-sm text-charcoal/60">{tier.priceNote}</p>
                    </div>
                  ))}
                </div>
                <Magnetic>
                  <Link
                    href={orderHref}
                    className="mt-8 inline-flex items-center rounded-full bg-amber-600 px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-amber-700"
                  >
                    {content.nav.orderCta}
                  </Link>
                </Magnetic>
              </Reveal>
            )}

            {note && (
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-charcoal/55">{note}</p>
              </Reveal>
            )}

            <p className="mt-10 text-xs text-charcoal/45">{content.pricingNote}</p>
          </div>
        </section>
      </main>
      <BbFooter locale={locale} footer={content.footer} />
      <BbConsentBanner copy={content.consent} locale={locale} />
    </>
  );
}
