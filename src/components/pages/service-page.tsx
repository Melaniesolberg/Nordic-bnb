import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/layout/page-shell";
import Reveal from "@/components/ui/reveal";
import Magnetic from "@/components/ui/magnetic-button";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import RichText from "@/components/ui/rich-text";
import { getContent } from "@/content";
import { media } from "@/content/media";
import { pageHref, type Locale, type ServiceKey } from "@/i18n/config";
import type { ServiceBlock } from "@/content/types";

const HERO_IMAGES: Record<ServiceKey, string> = {
  photoBoost: media.livingAfter,
  virtualStaging: media.stagedLiving,
  saleBoost: media.kitchenRefresh,
};

const COMPARISON_IMAGES: Partial<Record<ServiceKey, { before: string; after: string }>> = {
  photoBoost: { before: media.livingBefore, after: media.livingAfter },
  virtualStaging: { before: media.emptyLiving, after: media.stagedLivingAligned },
};

function OrderButton({ href, label }: { href: string; label: string }) {
  return (
    <Magnetic>
      <Link
        href={href}
        className="inline-flex items-center rounded-full bg-coral px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-coral-deep"
      >
        {label}
      </Link>
    </Magnetic>
  );
}

function Block({ block, orderHref, cta }: { block: ServiceBlock; orderHref: string; cta: string }) {
  switch (block.type) {
    case "p":
      return (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/75 sm:text-lg">
          <RichText text={block.text} linkClassName="text-coral-deep" />
        </p>
      );
    case "note":
      return (
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-charcoal/55">
          <RichText text={block.text} linkClassName="text-coral-deep" />
        </p>
      );
    case "case":
      return (
        <div className="mt-6 max-w-2xl border-l-2 border-coral/60 pl-5">
          <h3 className="font-serif-display text-xl text-charcoal sm:text-2xl">{block.heading}</h3>
          <p className="mt-3 text-base leading-relaxed text-charcoal/75">
            <RichText text={block.text} linkClassName="text-coral-deep" />
          </p>
        </div>
      );
    case "list":
      return (
        <ul className="mt-6 space-y-4">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-charcoal/75">
              <svg className="mt-1.5 h-3.5 w-3.5 shrink-0 text-coral" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <RichText text={item} linkClassName="text-coral-deep" />
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="mt-6 overflow-x-auto rounded-sm border border-charcoal/10 bg-ivory-soft">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="sr-only">{block.caption}</caption>
            <thead>
              <tr className="border-b border-charcoal/10">
                {block.head.map((h, i) => (
                  <th key={i} scope="col" className="px-4 py-3 align-bottom font-medium text-charcoal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-charcoal/10 last:border-0">
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row" className="px-4 py-3 align-top font-medium text-charcoal">
                        {cell}
                      </th>
                    ) : (
                      <td key={c} className="px-4 py-3 align-top text-charcoal/75">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cta":
      return (
        <div className="mt-8">
          <OrderButton href={orderHref} label={cta} />
        </div>
      );
  }
}

export default function ServicePage({ locale, service }: { locale: Locale; service: ServiceKey }) {
  const content = getContent(locale);
  const page = content.servicePages[service];
  const orderHref = `${pageHref(locale, "order")}?service=${service}`;
  const pair = COMPARISON_IMAGES[service];

  return (
    <PageShell locale={locale} pageKey={service} overHero>
      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-charcoal grain">
        <Image src={HERO_IMAGES[service]} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/20" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-40 sm:px-8 sm:pb-20 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-5 text-coral-soft">{page.eyebrow}</p>
            <h1 className="font-serif-display text-display-md max-w-4xl text-ivory">{page.heading}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">{page.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
          <div className="min-w-0 lg:col-span-7">
            {page.comparison && pair && (
              <Reveal>
                <figure className="mb-16">
                  <BeforeAfterSlider
                    before={pair.before}
                    after={pair.after}
                    alt={page.comparison.afterAlt}
                    beforeAlt={page.comparison.beforeAlt}
                    beforeLabel={page.comparison.beforeLabel}
                    afterLabel={page.comparison.afterLabel}
                    className="aspect-[4/3]"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                  <figcaption className="mt-4 text-sm leading-relaxed text-charcoal/70">
                    {page.comparison.caption} <span className="text-charcoal/45">{page.comparison.hint}</span>
                  </figcaption>
                </figure>
              </Reveal>
            )}

            {page.sections.map((section, i) => (
              <Reveal key={section.heading} delay={0.03 * i}>
                <section className={i === 0 ? "" : "mt-16"}>
                  <h2 className="font-serif-display text-3xl leading-snug text-charcoal sm:text-4xl">{section.heading}</h2>
                  {section.blocks.map((block, b) => (
                    <Block key={b} block={block} orderHref={orderHref} cta={page.cta} />
                  ))}
                </section>
              </Reveal>
            ))}

            {page.links.length > 0 && (
              <Reveal>
                <nav aria-label={locale === "no" ? "Relaterte sider" : "Related pages"} className="mt-16 border-t border-charcoal/10 pt-8">
                  <ul className="space-y-3">
                    {page.links.map((link) => (
                      <li key={link.href} className="text-base text-charcoal/75">
                        {link.text}{" "}
                        <Link href={link.href} className="font-medium text-coral-deep underline-offset-4 hover:underline">
                          {link.label} <span aria-hidden>→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal delay={0.12}>
                <div className="rounded-sm bg-charcoal p-8 text-ivory sm:p-10">
                  <p className="eyebrow text-ivory/45">{page.priceHeading}</p>
                  {page.price && (
                    <>
                      <p className="mt-4 font-serif-display text-5xl text-coral">{page.price}</p>
                      {page.priceNote && <p className="mt-2 text-sm text-ivory/60">{page.priceNote}</p>}
                    </>
                  )}
                  {page.tiers && (
                    <div className="mt-4 divide-y divide-ivory/10">
                      {page.tiers.map((tier) => (
                        <div key={tier.name} className="py-5 first:pt-0">
                          <p className="font-serif-display text-xl text-ivory">{tier.name}</p>
                          <p className="mt-1 font-serif-display text-4xl text-coral">{tier.price}</p>
                          <p className="mt-2 text-sm text-ivory/60">{tier.detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="mt-6 text-xs leading-relaxed text-ivory/50">{content.services.termsNote}</p>
                  <div className="mt-8">
                    <OrderButton href={orderHref} label={page.cta} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
