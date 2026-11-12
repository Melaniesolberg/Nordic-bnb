import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import Magnetic from "@/components/ui/magnetic-button";
import BbNav from "@/components/eiendomly/nav";
import BbFooter from "@/components/eiendomly/footer";
import BbConsentBanner from "@/components/eiendomly/consent-banner";
import BeforeAfterSlider from "@/components/eiendomly/before-after-slider";
import { getBbContent, getBbCases, bbSlugHref, BB_EMAIL } from "@/content/eiendomly";
import { BB_CONFIG } from "@/content/eiendomly/config";
import { bbJsonLd } from "@/content/eiendomly/json-ld";
import type { BbLocale } from "@/content/eiendomly/types";

function founderPhotoSrc(): string {
  const realPhoto = path.join(process.cwd(), "public/eiendomly/melanie.jpg");
  return fs.existsSync(realPhoto) ? "/eiendomly/melanie.jpg" : "/eiendomly/melanie-placeholder.svg";
}

export default function BbHomePage({ locale }: { locale: BbLocale }) {
  const content = getBbContent(locale);
  const cases = getBbCases();
  const jsonLd = bbJsonLd(locale);
  const photoSrc = founderPhotoSrc();

  const services = [
    {
      key: "photoBoost" as const,
      href: bbSlugHref(locale, "photoBoost"),
      title: content.services.photoBoost.tagline,
      description: content.services.photoBoost.whatItIs,
      price: content.services.photoBoost.price,
    },
    {
      key: "virtualStaging" as const,
      href: bbSlugHref(locale, "virtualStaging"),
      title: content.services.virtualStaging.tagline,
      description: content.services.virtualStaging.whatItIs,
      price: content.services.virtualStaging.price,
    },
    {
      key: "saleBoost" as const,
      href: bbSlugHref(locale, "saleBoost"),
      title: content.services.saleBoostTagline,
      description: content.services.saleBoostWhatItIs,
      price: content.services.saleBoostMini.price,
    },
  ];

  const beforeAfterSection = (
    <section key="before-after" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>{content.beforeAfter.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-5 max-w-xl text-charcoal">
            {content.beforeAfter.heading}
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {cases.map((c, i) => {
            const caption = content.beforeAfter.cases[c.id]?.caption ?? "";
            return (
              <Reveal key={c.id} delay={0.06 * i}>
                <BeforeAfterSlider
                  before={c.before}
                  after={c.after}
                  alt={caption}
                  improvedLabel={content.beforeAfter.improvedLabel}
                />
                <p className="mt-4 text-sm leading-relaxed text-charcoal/60">{caption}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );

  const howItWorksSection = (
    <section key="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>{content.howItWorks.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-5 max-w-xl text-charcoal">
            {content.howItWorks.heading}
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {content.howItWorks.steps.map((step, i) => (
            <Reveal key={step} delay={0.06 * i}>
              <span className="font-serif-display text-4xl text-amber-600">{i + 1}</span>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/70 sm:text-base">{step}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BbNav locale={locale} nav={content.nav} />
      <main className="bg-ivory text-charcoal">
        {/* Hero */}
        <section className="border-b border-charcoal/10 py-24 sm:py-32">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <Reveal>
              <h1 className="font-serif-display text-display-md max-w-3xl text-charcoal">{content.hero.h1}</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
                {content.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Link
                    href={bbSlugHref(locale, "order")}
                    className="inline-flex items-center rounded-full bg-amber-600 px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-amber-700"
                  >
                    {content.hero.ctaPrimary}
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="#tjenester"
                    className="inline-flex items-center rounded-full border border-charcoal/20 px-7 py-4 text-sm font-medium tracking-wide text-charcoal/80 transition-colors hover:border-amber-600 hover:text-amber-700"
                  >
                    {content.hero.ctaSecondary}
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </section>

        {BB_CONFIG.showCases ? beforeAfterSection : howItWorksSection}

        {/* Problem */}
        <section className="bg-charcoal py-20 text-ivory sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <Reveal>
              <Eyebrow tone="light">{content.problem.eyebrow}</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-5 max-w-2xl text-ivory">
                {content.problem.heading}
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {content.problem.points.map((p, i) => (
                <Reveal key={p} delay={0.06 * i}>
                  <p className="text-sm leading-relaxed text-ivory/70 sm:text-base">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {BB_CONFIG.showCases && howItWorksSection}

        {/* Services */}
        <section id="tjenester" className="bg-ivory-soft py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <Reveal>
              <Eyebrow>{content.servicesOverview.eyebrow}</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-5 max-w-xl text-charcoal">
                {content.servicesOverview.heading}
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.key} delay={0.06 * i}>
                  <div className="flex h-full flex-col rounded-sm border border-charcoal/10 bg-ivory p-7">
                    <p className="font-serif-display text-2xl text-charcoal">{s.title}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">{s.description}</p>
                    <p className="mt-5 text-sm font-medium text-amber-700">{s.price}</p>
                    <Link
                      href={s.href}
                      className="mt-5 inline-flex items-center text-sm font-medium text-charcoal/80 underline decoration-amber-600 decoration-2 underline-offset-4 transition-colors hover:text-amber-700"
                    >
                      {content.servicesOverview.cta} →
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-xs text-charcoal/45">{content.pricingNote}</p>
          </div>
        </section>

        {/* Honesty */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <Reveal>
              <Eyebrow>{content.honesty.eyebrow}</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-5 max-w-xl text-charcoal">
                {content.honesty.heading}
              </h2>
            </Reveal>
            <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {content.honesty.points.map((p, i) => (
                <Reveal key={p} delay={0.05 * i}>
                  <li className="rounded-sm border border-charcoal/10 p-6 text-sm leading-relaxed text-charcoal/70">
                    {p}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section id="om" className="bg-charcoal py-20 text-ivory sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <Reveal className="flex flex-col items-start gap-10 sm:flex-row sm:items-center">
              <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-sm">
                <Image src={photoSrc} alt={content.about.photoAlt} fill sizes="220px" className="object-cover" />
              </div>
              <div>
                <Eyebrow tone="light">{content.about.eyebrow}</Eyebrow>
                <p className="mt-5 font-serif-display text-3xl text-ivory">{content.about.name}</p>
                <p className="mt-1 eyebrow text-ivory/45">{content.about.role}</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/70">{content.about.bio}</p>
                <p className="mt-4 text-sm text-ivory/55">{content.about.replyNote}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <Reveal>
              <Eyebrow>{content.faq.eyebrow}</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-5 max-w-xl text-charcoal">{content.faq.heading}</h2>
            </Reveal>
            <div className="mt-10 divide-y divide-charcoal/10 border-t border-b border-charcoal/10">
              {content.faq.items.map((item, i) => (
                <Reveal key={item.q} delay={0.03 * i}>
                  <details className="group py-5">
                    <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-charcoal/85 marker:content-none">
                      {item.q}
                      <span className="ml-4 text-amber-600 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/60">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-charcoal py-24 text-ivory sm:py-32">
          <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-8">
            <Reveal>
              <h2 className="font-serif-display text-display-md mx-auto max-w-2xl text-ivory">
                {content.finalCta.heading}
              </h2>
              <div className="mt-8 flex justify-center">
                <Magnetic>
                  <Link
                    href={bbSlugHref(locale, "order")}
                    className="inline-flex items-center rounded-full bg-amber-600 px-8 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-amber-700"
                  >
                    {content.finalCta.cta}
                  </Link>
                </Magnetic>
              </div>
              <a href={`mailto:${BB_EMAIL}`} className="mt-5 inline-block text-sm text-ivory/50 hover:text-ivory/80">
                {BB_EMAIL}
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <BbFooter locale={locale} footer={content.footer} />
      <BbConsentBanner copy={content.consent} locale={locale} />
    </>
  );
}
