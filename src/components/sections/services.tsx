"use client";

import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import Magnetic from "@/components/ui/magnetic-button";
import type { ServiceItem, ServicesContent } from "@/content/types";
import { WHATSAPP_LINK } from "@/lib/utils";

function ServiceCard({
  item,
  dark,
  ctaLabel,
  imageSrc,
  whatsappTemplate,
}: {
  item: ServiceItem;
  dark?: boolean;
  ctaLabel: string;
  imageSrc?: string;
  whatsappTemplate: string;
}) {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-sm p-8 sm:p-10 ${
        dark ? "bg-charcoal text-ivory" : "border border-charcoal/12 bg-ivory-soft text-charcoal"
      }`}
    >
      {dark && imageSrc && (
        <>
          <Image src={imageSrc} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80" />
        </>
      )}
      <div className="relative flex h-full flex-col">
      <h3 className="font-serif-display text-2xl sm:text-3xl">{item.title}</h3>
      <p className={`mt-4 text-sm leading-relaxed ${dark ? "text-ivory/65" : "text-charcoal/60"}`}>
        {item.description}
      </p>

      <div className="mt-8 flex items-baseline gap-2">
        <span className="font-serif-display text-5xl text-coral sm:text-6xl">{item.price}</span>
        <span className={`text-sm ${dark ? "text-ivory/50" : "text-charcoal/50"}`}>
          {item.priceNote}
        </span>
      </div>

      <ul className="mt-9 space-y-3.5">
        {item.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
            <svg
              className="mt-1 h-3.5 w-3.5 shrink-0 text-coral"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M2.5 7.5L5.5 10.5L11.5 3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={dark ? "text-ivory/80" : "text-charcoal/75"}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Magnetic>
          <a
            href={WHATSAPP_LINK(whatsappTemplate.replace("{service}", item.title.toLowerCase()))}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-colors ${
              dark
                ? "bg-coral text-ivory hover:bg-coral-deep"
                : "bg-charcoal text-ivory hover:bg-coral"
            }`}
          >
            {ctaLabel}
          </a>
        </Magnetic>
      </div>
      </div>
    </div>
  );
}

export default function Services({
  services,
  imageSrc,
}: {
  services: ServicesContent;
  imageSrc?: string;
}) {
  return (
    <section id="services" className="relative bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">
            {services.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
            {services.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <ServiceCard
              item={services.shortTerm}
              dark
              ctaLabel={services.ctaLabel}
              imageSrc={imageSrc}
              whatsappTemplate={services.whatsappTemplate}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ServiceCard
              item={services.longTerm}
              ctaLabel={services.ctaLabel}
              whatsappTemplate={services.whatsappTemplate}
            />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-charcoal/50">
            {services.termsNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
