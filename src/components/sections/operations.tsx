"use client";

import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { OperationsContent } from "@/content/types";

export default function Operations({
  operations,
  imageSrc,
  sequenceImages,
}: {
  operations: OperationsContent;
  imageSrc: string;
  sequenceImages: string[];
}) {
  return (
    <section className="relative bg-ivory-soft pb-24 sm:pb-32 lg:pb-40">
      <div className="relative h-[42vh] min-h-[280px] w-full overflow-hidden grain">
        <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory-soft via-charcoal/25 to-charcoal/35" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1600px]">
            <p className="font-serif-display text-3xl italic text-ivory sm:text-4xl">
              {operations.bannerHeadline}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 pt-20 sm:px-8 sm:pt-24 lg:px-12">
        <Reveal>
          <Eyebrow>{operations.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">
            {operations.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
            {operations.intro}
          </p>
        </Reveal>

        <div className="relative mt-20">
          <div className="hidden overflow-x-auto pb-4 lg:block">
            <div className="relative flex min-w-[1400px] items-start gap-0">
              <div className="absolute left-0 right-0 top-[13px] h-px bg-charcoal/15" aria-hidden />
              {operations.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08} className="relative flex-1 pr-8">
                  <div className="relative z-10 h-6 w-6 rounded-full border-2 border-coral bg-ivory-soft" />
                  <p className="mt-6 font-serif-display text-xl italic text-charcoal">{step.title}</p>
                  <p className="mt-3 max-w-[210px] text-sm leading-relaxed text-charcoal/60">
                    {step.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-0 lg:hidden">
            {operations.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05} className="relative flex gap-5 pb-10">
                <div className="flex flex-col items-center">
                  <div className="h-5 w-5 shrink-0 rounded-full border-2 border-coral bg-ivory-soft" />
                  {i !== operations.steps.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-charcoal/15" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="font-serif-display text-lg italic text-charcoal">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-3 sm:mt-24 sm:grid-cols-4 sm:gap-4">
          {sequenceImages.map((src, i) => {
            const sequenceLabels = [
              operations.sequenceLabels.styling,
              operations.sequenceLabels.cleaning,
              operations.sequenceLabels.guestArrival,
              operations.sequenceLabels.detail,
            ];
            return (
              <Reveal key={sequenceLabels[i]} delay={0.05 * i}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 22vw, 46vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs tracking-wide text-ivory">
                    {sequenceLabels[i]}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
