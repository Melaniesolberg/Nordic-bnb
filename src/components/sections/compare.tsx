"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { HonestyContent } from "@/content/types";

/**
 * What each service changes in the photos – and what stays as it is.
 * The box under the pointer, or the one last tapped, turns dark.
 */
export default function Compare({ compare, imageSrc }: { compare: HonestyContent; imageSrc: string }) {
  const [active, setActive] = useState(0);

  return (
    <section id="endringer" className="relative scroll-mt-20 bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>{compare.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-3xl text-charcoal">{compare.heading}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {compare.items.map((item, i) => {
            const isActive = active === i;
            return (
              <Reveal key={item.title} delay={0.05 * i}>
                <div
                  tabIndex={0}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`relative h-full cursor-pointer overflow-hidden rounded-sm border p-8 transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral sm:p-10 ${
                    isActive ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/10 bg-ivory-soft text-charcoal"
                  }`}
                >
                  {isActive && (
                    <>
                      <Image src={imageSrc} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover opacity-20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/70" />
                    </>
                  )}
                  <div className="relative">
                    <h3 className="font-serif-display text-2xl sm:text-3xl">{item.title}</h3>
                    <p className={`mt-4 text-base leading-relaxed ${isActive ? "text-ivory/80" : "text-charcoal/70"}`}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
