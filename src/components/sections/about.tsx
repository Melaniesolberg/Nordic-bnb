"use client";

import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { AboutContent } from "@/content/types";

export default function About({
  about,
  bgImageSrc,
}: {
  about: AboutContent;
  bgImageSrc?: string;
}) {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory-soft py-24 sm:py-32 lg:py-40">
      {bgImageSrc && (
        <div className="absolute inset-0 opacity-[0.08]">
          <Image src={bgImageSrc} alt="" fill sizes="100vw" className="object-cover" />
        </div>
      )}
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{about.eyebrow}</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-6 text-charcoal">
                {about.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 border-t border-charcoal/15 pt-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-charcoal font-serif-display text-lg text-ivory">
                  PS
                </div>
                <p className="mt-5 font-serif-display text-2xl text-charcoal">{about.founderName}</p>
                <p className="mt-1 eyebrow text-charcoal/45">{about.founderRole}</p>
                <p className="mt-6 max-w-sm font-serif-display text-xl italic leading-snug text-charcoal/80">
                  “{about.founderQuote}”
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-3">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="mb-7 max-w-2xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
