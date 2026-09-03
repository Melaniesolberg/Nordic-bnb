"use client";

import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { OperationsContent } from "@/content/types";

export default function Operations({ operations }: { operations: OperationsContent }) {
  return (
    <section className="relative bg-ivory-soft py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
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
      </div>
    </section>
  );
}
