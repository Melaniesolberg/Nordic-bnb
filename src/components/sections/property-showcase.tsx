"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function PropertyShowcase({
  imageSrc,
  eyebrow,
  headline,
  align = "left",
}: {
  imageSrc: string;
  eyebrow: string;
  headline: string;
  align?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, prefersReduced ? 1.12 : 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", prefersReduced ? "-6%" : "6%"]);

  return (
    <section
      ref={ref}
      className="relative flex h-[85vh] min-h-[520px] items-end overflow-hidden bg-charcoal grain"
    >
      <motion.div className="absolute inset-0" style={{ scale }}>
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-10 w-full px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 ${
          align === "right" ? "text-right" : ""
        }`}
      >
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow mb-5 text-coral-soft">{eyebrow}</p>
          <p
            className={`font-serif-display text-display-md max-w-3xl text-ivory ${
              align === "right" ? "ml-auto" : ""
            }`}
          >
            {headline}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
