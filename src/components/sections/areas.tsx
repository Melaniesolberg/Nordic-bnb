"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { AudiencesContent } from "@/content/types";

export default function Areas({
  areas,
  imageSrc,
  detailImages,
}: {
  areas: AudiencesContent;
  imageSrc: string;
  detailImages: string[];
}) {
  const [active, setActive] = useState(0);

  return (
    <section id="areas" className="relative scroll-mt-20 overflow-hidden bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow tone="light">{areas.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-ivory">
            {areas.heading}
          </h2>
          {areas.intro && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/60 sm:text-lg">{areas.intro}</p>
          )}
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <Reveal delay={0.08}>
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm">
              <Image
                key={active}
                src={detailImages[active]}
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif-display text-xl italic text-ivory">
                {areas.items[active].name}
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col divide-y divide-ivory/10 border-t border-ivory/10">
            {areas.items.map((a, i) => (
              <button
                key={a.name}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`flex flex-col gap-2 py-6 text-left transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                  active === i ? "text-ivory" : "text-ivory/45"
                }`}
              >
                <span className="font-serif-display text-2xl sm:text-3xl">{a.name}</span>
                <span
                  className={`text-sm leading-relaxed sm:max-w-xs sm:text-right ${
                    active === i ? "text-ivory/70" : "text-ivory/50 sm:text-ivory/0"
                  }`}
                >
                  {a.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
