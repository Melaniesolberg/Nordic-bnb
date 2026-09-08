"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { TestimonialsContent } from "@/content/types";

const VISIBLE_COUNT = 6;

export default function Testimonials({ testimonials }: { testimonials: TestimonialsContent }) {
  const items = testimonials.items.slice(0, VISIBLE_COUNT);

  return (
    <section className="relative bg-ivory-soft py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>{testimonials.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">
            {testimonials.heading}
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-10 sm:gap-14">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col rounded-sm border border-charcoal/10 bg-ivory p-8 ${
                i % 2 === 1 ? "sm:ml-10" : "sm:mr-10"
              }`}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.4, rotate: -12 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ivory text-lg shadow-md"
                aria-hidden
              >
                👍
              </motion.span>
              <span className="font-serif-display text-4xl italic text-coral/50">&ldquo;</span>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-charcoal/70">{t.quote}</p>
              <div className="mt-6 border-t border-charcoal/10 pt-5">
                <p className="text-sm font-medium text-charcoal">{t.name}</p>
                <p className="text-xs text-charcoal/45">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
