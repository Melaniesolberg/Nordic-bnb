"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { BeforeAfterContent } from "@/content/types";

export default function BeforeAfter({
  beforeAfter,
  videoSrc,
  posterSrc,
}: {
  beforeAfter: BeforeAfterContent;
  videoSrc: string;
  posterSrc?: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start 0.95", "start 0.35"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          background:
            "radial-gradient(55% 40% at 20% 0%, rgba(245,66,63,0.5) 0%, transparent 70%), radial-gradient(50% 40% at 85% 100%, rgba(245,66,63,0.35) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow tone="light">{beforeAfter.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-3xl text-ivory">
            {beforeAfter.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg">
            {beforeAfter.intro}
          </p>
          <p className="mt-3 text-xs text-ivory/35">{beforeAfter.disclaimer}</p>
        </Reveal>

        <motion.div ref={frameRef} style={{ scale, opacity }} className="relative mt-14">
          <div
            className="pointer-events-none absolute -inset-6 rounded-[28px] opacity-60 blur-2xl sm:-inset-10"
            style={{
              background:
                "linear-gradient(120deg, rgba(245,66,63,0.35), transparent 40%, transparent 60%, rgba(245,66,63,0.25))",
            }}
            aria-hidden
          />
          <div className="relative aspect-video w-full overflow-hidden rounded-md bg-charcoal-mute shadow-[0_60px_140px_rgba(0,0,0,0.55)] ring-1 ring-ivory/10">
            <video
              src={videoSrc}
              poster={posterSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
