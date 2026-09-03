"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { ProblemContent } from "@/content/types";

export default function Problem({
  problem,
  imageSrc,
}: {
  problem: ProblemContent;
  imageSrc: string;
}) {
  return (
    <section className="relative bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{problem.eyebrow}</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-6 text-charcoal">
                {problem.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/65 sm:text-lg">
                {problem.intro}
              </p>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-12 hidden aspect-[4/3] w-64 overflow-hidden rounded-sm border-4 border-ivory-soft shadow-[0_24px_48px_rgba(20,17,13,0.18)] sm:block"
            >
              <Image src={imageSrc} alt="A typical, undersold listing photo" fill sizes="256px" className="object-cover grayscale" />
              <div className="absolute inset-0 bg-charcoal/10" />
              <span className="absolute bottom-3 left-3 rounded-full bg-charcoal/70 px-3 py-1 text-[10px] tracking-wide text-ivory backdrop-blur-sm">
                Before Nordic BnB
              </span>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-charcoal/10 sm:grid-cols-2">
              {problem.frictions.map((f, i) => (
                <Reveal key={f.label} delay={0.05 * i} y={16}>
                  <div className="group h-full bg-ivory p-8 transition-colors duration-500 hover:bg-charcoal sm:p-9">
                    <span className="eyebrow text-coral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-4 font-serif-display text-xl italic text-charcoal transition-colors duration-500 group-hover:text-ivory sm:text-2xl">
                      {f.label}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/60 transition-colors duration-500 group-hover:text-ivory/70">
                      {f.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-20 flex items-center gap-6 border-t border-charcoal/10 pt-12 sm:mt-28 sm:pt-16">
            <span className="hidden h-px w-16 bg-coral sm:block" aria-hidden />
            <p className="font-serif-display text-2xl italic text-charcoal sm:text-4xl lg:text-5xl">
              {problem.pivot}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
