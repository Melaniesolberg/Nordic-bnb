"use client";

import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { TestimonialsContent } from "@/content/types";

export default function Testimonials({ testimonials }: { testimonials: TestimonialsContent }) {
  return (
    <section className="relative bg-ivory-soft py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>{testimonials.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">
            {testimonials.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <div className="flex h-full flex-col rounded-sm border border-charcoal/10 bg-ivory p-8">
                <span className="font-serif-display text-4xl italic text-coral/50">“</span>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-charcoal/70">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-charcoal/10 pt-5">
                  <p className="text-sm font-medium text-charcoal">{t.name}</p>
                  <p className="text-xs text-charcoal/45">{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
