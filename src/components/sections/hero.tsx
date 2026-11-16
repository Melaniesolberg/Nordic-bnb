"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useReducedMotion, type Variants } from "framer-motion";
import Magnetic from "@/components/ui/magnetic-button";
import { useMediaQuery } from "@/lib/use-media-query";
import type { HeroContent } from "@/content/types";

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

/** Scroll progress where the text switches to the next stage. */
const STAGE_BREAKS = [0.34, 0.67];

/** How far the playhead moves toward the scroll target each frame (0–1). */
const SMOOTHING = 0.2;

function easeInOut(t: number) {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.45 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE_EDITORIAL } },
};

const textShadow = { textShadow: "0 2px 28px rgba(20,17,13,0.45)" };

export default function Hero({
  hero,
  formHref,
  secondaryHref,
  imageSrc,
  videoSrc,
  mobileVideoSrc,
}: {
  hero: HeroContent;
  formHref: string;
  secondaryHref: string;
  imageSrc?: string;
  videoSrc?: string;
  mobileVideoSrc?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const src = isMobile && mobileVideoSrc ? mobileVideoSrc : videoSrc;
  const [stage, setStage] = useState(0);

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  // iOS Safari ignores preload until a play() call; a muted play-then-pause
  // starts loading without visibly playing.
  useEffect(() => {
    if (prefersReduced) return;
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play()?.then(() => video.pause()).catch(() => {});
  }, [prefersReduced, src]);

  // Each frame: ease the playhead toward the scroll position instead of
  // jumping, and only issue a new seek once the previous one has finished,
  // so fast or jerky touch scrolling doesn't pile up seeks and stutter.
  useEffect(() => {
    if (prefersReduced) return;
    let raf = 0;
    let smoothed = 0;
    const tick = () => {
      const progress = scrollYProgress.get();
      const nextStage = progress < STAGE_BREAKS[0] ? 0 : progress < STAGE_BREAKS[1] ? 1 : 2;
      setStage((prev) => (prev === nextStage ? prev : nextStage));

      const video = videoRef.current;
      const duration = video?.duration;
      if (video && duration && !Number.isNaN(duration)) {
        const target = easeInOut(progress) * duration;
        smoothed += (target - smoothed) * SMOOTHING;
        if (!video.seeking && Math.abs(video.currentTime - smoothed) > 1 / 60) {
          video.currentTime = Math.min(duration, Math.max(0, smoothed));
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced, scrollYProgress]);

  const beat = stage > 0 ? hero.beats[stage - 1] : null;

  return (
    <section id="hero" className="relative bg-charcoal">
      <div ref={trackRef} className="relative" style={{ height: prefersReduced ? undefined : "300vh" }}>
        <div
          className={`${prefersReduced ? "relative" : "sticky top-0"} flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden grain`}
        >
          <div className="absolute inset-0">
            {src && !prefersReduced ? (
              <video
                ref={videoRef}
                src={src}
                poster={imageSrc}
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              imageSrc && <Image src={imageSrc} alt="" fill priority sizes="100vw" className="object-cover" />
            )}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal/55 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
          </div>

          <div className="relative z-10 w-full px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
            <div className="mx-auto max-w-[1600px]">
              <div className="min-h-[15rem] max-w-4xl sm:min-h-[17rem]" style={textShadow}>
                <AnimatePresence mode="wait">
                  {beat ? (
                    <motion.div
                      key={stage}
                      initial={{ opacity: 0, y: 26 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.55, ease: EASE_EDITORIAL }}
                    >
                      <p className="eyebrow mb-4 flex items-center gap-3 text-coral-soft sm:mb-6">
                        <span className="h-px w-8 bg-current opacity-70" aria-hidden />
                        {beat.eyebrow}
                      </p>
                      <h2 className="font-serif-display text-display font-normal text-ivory">{beat.heading}</h2>
                      <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/90 sm:mt-7 sm:text-lg">
                        {beat.body}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div key="intro" variants={container} initial="hidden" animate="visible" exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}>
                      <motion.p variants={item} className="eyebrow mb-4 flex items-center gap-3 text-coral-soft sm:mb-6">
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
                        className="mt-5 max-w-xl text-base leading-relaxed text-ivory/90 sm:mt-7 sm:text-lg"
                      >
                        {hero.subline}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.9, ease: EASE_EDITORIAL }}
                className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10"
              >
                <Magnetic>
                  <Link
                    href={formHref}
                    className="inline-flex items-center rounded-full bg-coral px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-coral-deep"
                  >
                    {hero.ctaPrimary}
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href={secondaryHref}
                    className="inline-flex items-center rounded-full border border-ivory/40 bg-charcoal/20 px-7 py-4 text-sm font-medium tracking-wide text-ivory backdrop-blur-sm transition-colors hover:border-ivory/70"
                  >
                    {hero.ctaSecondary}
                  </Link>
                </Magnetic>
              </motion.div>

              {!prefersReduced && (
                <div className="mt-10 flex gap-2 sm:mt-14" aria-hidden>
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i === stage ? "w-10 bg-coral" : i < stage ? "w-5 bg-ivory/60" : "w-5 bg-ivory/25"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
