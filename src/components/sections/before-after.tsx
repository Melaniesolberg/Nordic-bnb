"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Eyebrow from "@/components/ui/eyebrow";
import type { ProblemContent } from "@/content/types";

/** Fraction of the local scroll track spent fading the heading/intro away. */
const TEXT_FADE_END = 0.16;

/** "The problem" — scroll-linked text reveal over a dim, cluttered listing photo. */
export default function BeforeAfter({
  problem,
  posterSrc,
}: {
  problem: ProblemContent;
  posterSrc?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, TEXT_FADE_END], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, TEXT_FADE_END], [0, prefersReduced ? 0 : -40]);
  const scrimOpacity = useTransform(scrollYProgress, [0, TEXT_FADE_END, 1], [0.55, 0.15, 0.4]);

  return (
    <section className="relative bg-charcoal py-24 sm:py-32 lg:py-40">
      <div
        ref={trackRef}
        className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12"
        style={{ height: prefersReduced ? undefined : "260vh" }}
      >
        <div className="sticky top-24">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-ivory/10 bg-charcoal-mute shadow-[0_60px_140px_rgba(0,0,0,0.55)]">
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(55% 45% at 15% 10%, rgba(245,66,63,0.25) 0%, transparent 70%), radial-gradient(45% 40% at 90% 90%, rgba(245,66,63,0.18) 0%, transparent 70%)",
              }}
              aria-hidden
            />

            {posterSrc && (
              <Image src={posterSrc} alt="" fill sizes="(min-width: 1024px) 1600px, 100vw" className="object-cover" />
            )}

            <motion.div className="absolute inset-0 bg-charcoal" style={{ opacity: scrimOpacity }} />

            <motion.div
              style={{ opacity: prefersReduced ? 1 : textOpacity, y: prefersReduced ? 0 : textY }}
              className="absolute inset-x-0 bottom-0 p-6 sm:p-10"
            >
              <Eyebrow tone="light">{problem.eyebrow}</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-6 max-w-3xl text-ivory">
                {problem.heading}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
                {problem.intro}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-coral-soft">{problem.note}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
