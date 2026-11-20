"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import Magnetic from "@/components/ui/magnetic-button";
import { pageHref, type Locale } from "@/i18n/config";
import type { ServiceItem, ServicesContent } from "@/content/types";

function ServiceCard({
  item,
  dark,
  href,
  ctaLabel,
  imageSrc,
  onActivate,
}: {
  item: ServiceItem;
  dark?: boolean;
  onActivate: () => void;
  href: string;
  ctaLabel: string;
  imageSrc?: string;
}) {
  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      onFocus={onActivate}
      className={`relative flex h-full cursor-pointer flex-col overflow-hidden rounded-sm border p-8 transition-colors duration-500 sm:p-10 ${
        dark ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/12 bg-ivory-soft text-charcoal"
      }`}
    >
      {dark && imageSrc && (
        <>
          <Image src={imageSrc} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80" />
        </>
      )}
      <div className="relative flex h-full flex-col">
        <h3 className="font-serif-display text-2xl sm:text-3xl">{item.title}</h3>
        <p className={`mt-4 text-sm leading-relaxed ${dark ? "text-ivory/65" : "text-charcoal/65"}`}>
          {item.description}
        </p>

        <div className="mt-8">
          <span className="font-serif-display text-5xl text-coral">{item.price}</span>
          <p className={`mt-2 text-sm ${dark ? "text-ivory/50" : "text-charcoal/65"}`}>{item.priceNote}</p>
        </div>

        <ul className="mt-8 space-y-3.5">
          {item.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
              <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-coral" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className={dark ? "text-ivory/80" : "text-charcoal/75"}>{f}</span>
            </li>
          ))}
        </ul>

        {item.note && (
          <p className={`mt-6 text-xs leading-relaxed ${dark ? "text-ivory/55" : "text-charcoal/65"}`}>{item.note}</p>
        )}

        <div className="mt-auto pt-10">
          <Magnetic>
            <Link
              href={href}
              className={`inline-flex rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-colors ${
                dark ? "bg-coral text-ivory hover:bg-coral-deep" : "bg-charcoal text-ivory hover:bg-coral"
              }`}
            >
              {ctaLabel} <span aria-hidden className="ml-1.5">→</span>
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}

export default function Services({
  locale,
  services,
  imageSrc,
}: {
  locale: Locale;
  services: ServicesContent;
  imageSrc?: string;
}) {
  // The card under the pointer, or the one last tapped, is shown dark.
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="relative scroll-mt-20 bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">{services.heading}</h2>
          {services.intro && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">{services.intro}</p>
          )}
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.key} delay={0.05 * (i + 1)}>
              <ServiceCard
                item={item}
                dark={active === i}
                onActivate={() => setActive(i)}
                href={pageHref(locale, item.key)}
                ctaLabel={item.linkLabel}
                imageSrc={imageSrc}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 max-w-2xl border-t border-charcoal/10 pt-8">
            <h3 className="font-serif-display text-xl text-charcoal">{services.termsHeading}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/65 sm:text-base">{services.termsNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
