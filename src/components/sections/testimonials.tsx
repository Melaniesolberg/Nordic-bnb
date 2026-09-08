"use client";

import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { TestimonialsContent, Testimonial } from "@/content/types";

function splitColumns(items: Testimonial[], count: number) {
  const columns: Testimonial[][] = Array.from({ length: count }, () => []);
  items.forEach((item, i) => columns[i % count].push(item));
  return columns;
}

export default function Testimonials({ testimonials }: { testimonials: TestimonialsContent }) {
  const columns = splitColumns(testimonials.items, 3);

  return (
    <section className="relative overflow-hidden bg-ivory-soft py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>{testimonials.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">
            {testimonials.heading}
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-ivory-soft to-transparent sm:h-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-ivory-soft to-transparent sm:h-28"
          aria-hidden
        />

        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
          {columns.map((col, ci) => (
            <div key={ci} className="relative h-[560px] overflow-hidden sm:h-[640px] lg:h-[720px]">
              <div
                className={ci % 2 === 0 ? "animate-testimonial-up" : "animate-testimonial-down"}
                style={{ animationDuration: `${42 + ci * 7}s` }}
              >
                {[...col, ...col].map((t, i) => (
                  <div
                    key={i}
                    className="mb-6 flex flex-col rounded-sm border border-charcoal/10 bg-ivory p-7"
                  >
                    <span className="font-serif-display text-4xl italic text-coral/50">&ldquo;</span>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-charcoal/70">{t.quote}</p>
                    <div className="mt-6 border-t border-charcoal/10 pt-5">
                      <p className="text-sm font-medium text-charcoal">{t.name}</p>
                      <p className="text-xs text-charcoal/45">{t.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
