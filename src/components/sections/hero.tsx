"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion";
import Magnetic from "@/components/ui/magnetic-button";
import { WHATSAPP_LINK } from "@/lib/utils";
import type { HeroContent } from "@/content/types";

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.55 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: EASE_EDITORIAL },
  },
};

export default function Hero({
  hero,
  formHref,
  imageSrc,
}: {
  hero: HeroContent;
  formHref: string;
  imageSrc?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, prefersReduced ? 1 : 1.18]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, prefersReduced ? 0 : -60]);
  const vignette = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal grain"
    >
      {/* Background scene */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale, y: bgY }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 12%, #4a3324 0%, #22150f 38%, #14110d 72%)",
          }}
        />
        {/* Horizon glow */}
        <div
          className="absolute inset-x-0 bottom-[38%] h-[45%] opacity-90"
          style={{
            background:
              "linear-gradient(180deg, rgba(224,83,46,0.0) 0%, rgba(224,83,46,0.22) 55%, rgba(224,83,46,0.05) 100%)",
            filter: "blur(40px)",
          }}
        />
        {/* Sun disc */}
        <div
          className="absolute left-1/2 top-[34%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
          style={{
            background: "radial-gradient(circle, #f2a98a 0%, #e0532e 45%, rgba(224,83,46,0) 72%)",
            filter: "blur(6px)",
          }}
        />
        {/* Sea / horizon line */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-charcoal via-charcoal/95 to-transparent" />
        <div className="absolute inset-x-0 bottom-[38%] h-px bg-ivory/10" />

        {/* Architectural silhouette */}
        <svg
          className="absolute inset-x-0 bottom-0 h-[42%] w-full opacity-90"
          viewBox="0 0 1600 400"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          aria-hidden
        >
          <path
            d="M0 400V210H180V150H240V210H430L470 130L510 210H760V90H830V210H1050L1110 160L1170 210H1400V240H1600V400H0Z"
            fill="#14110d"
          />
          <path d="M470 130V210" stroke="#0c0a08" strokeWidth="2" />
        </svg>

        {/* Cinematic photograph, layered above the crafted gradient scene */}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90"
          />
        )}

        <motion.div
          className="absolute inset-0 bg-charcoal"
          style={{ opacity: vignette }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full px-5 pb-20 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24"
      >
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.p variants={item} className="eyebrow mb-4 text-coral-soft sm:mb-6">
              <span className="h-px w-8 bg-current opacity-70" aria-hidden />
              {hero.eyebrow}
            </motion.p>

            <h1 className="font-serif-display text-display font-normal text-ivory">
              {hero.headlineLines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    variants={item}
                    className="block"
                    style={i === 1 ? { color: "var(--color-coral-soft)" } : undefined}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-ivory/75 sm:mt-7 sm:text-lg"
            >
              {hero.subline}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <Magnetic>
                <Link
                  href={formHref}
                  className="inline-flex items-center rounded-full bg-coral px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-coral-deep"
                >
                  {hero.ctaPrimary}
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href={WHATSAPP_LINK()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-ivory/25 px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:border-ivory/60"
                >
                  {hero.ctaSecondary}
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            animate="visible"
            className="mt-10 flex items-center justify-between border-t border-ivory/15 pt-6 text-ivory/55 sm:mt-16"
          >
            <span className="eyebrow">{hero.locationTag}</span>
            <span className="flex items-center gap-2 eyebrow">
              {hero.scrollHint}
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="inline-block h-3 w-px bg-ivory/60"
              />
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
