"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Eyebrow from "@/components/ui/eyebrow";
import type { StorySectionContent } from "@/content/types";

export default function StoryTimeline({ story }: { story: StorySectionContent }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          background: "radial-gradient(60% 45% at 15% 10%, rgba(245,66,63,0.5) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow tone="light">{story.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-ivory">
            {story.heading}
          </h2>
        </motion.div>

        <div ref={trackRef} className="relative mt-20">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ivory/10 sm:left-[139px]" aria-hidden />
          <motion.div
            className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-coral via-coral to-coral-soft sm:left-[139px]"
            style={{ height: lineHeight }}
            aria-hidden
          />

          <div>
            {story.milestones.map((m) => (
              <motion.div
                key={m.period}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid grid-cols-1 gap-2 py-9 pl-9 sm:grid-cols-[140px_1fr] sm:gap-10 sm:py-11 sm:pl-0"
              >
                <span
                  className="absolute left-0 top-[3.35rem] h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-coral shadow-[0_0_0_6px_rgba(245,66,63,0.18)] sm:left-[139px] sm:top-[3.6rem]"
                  aria-hidden
                />
                <p className="eyebrow text-coral-soft sm:pt-1">{m.period}</p>
                <div className="max-w-2xl">
                  <p className="font-serif-display text-2xl italic text-ivory sm:text-3xl">{m.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/60 sm:text-base">{m.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
