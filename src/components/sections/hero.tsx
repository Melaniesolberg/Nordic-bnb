"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import Magnetic from "@/components/ui/magnetic-button";
import { WHATSAPP_LINK } from "@/lib/utils";
import type { HeroContent } from "@/content/types";

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

/**
 * Non-linear scroll → video-timeline curve. Plain fractions of local scroll
 * progress (p) mapped to fractions of the clip's duration (v), interpolated
 * with a smoothstep ease between anchors so the joints don't kink:
 *  - 0–12%  video almost frozen (anticipation, only ~4.5% of the clip)
 *  - 12–25% acceleration begins as the UI clears away
 *  - 25–58% the big descent — most of the clip's motion happens here
 *  - 58–72% straight through the terrace opening, no lingering
 *  - 72–94% fast interior walkthrough
 *  - 94–100% slight deceleration before releasing into the next section
 */
const VIDEO_CURVE: { p: number; v: number }[] = [
  { p: 0, v: 0 },
  { p: 0.12, v: 0.045 },
  { p: 0.25, v: 0.15 },
  { p: 0.58, v: 0.72 },
  { p: 0.72, v: 0.86 },
  { p: 0.94, v: 0.975 },
  { p: 1, v: 1 },
];

/** How quickly the video's actual playhead eases toward the scroll-mapped
 * target each frame — small enough to feel like luxurious smoothing,
 * large enough to still read as directly, immediately controlled. */
const SCRUB_SMOOTHING = 0.18;

function smoothstep(t: number) {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
}

function mapScrollToVideoProgress(progress: number): number {
  const p = Math.min(1, Math.max(0, progress));
  for (let i = 0; i < VIDEO_CURVE.length - 1; i++) {
    const a = VIDEO_CURVE[i];
    const b = VIDEO_CURVE[i + 1];
    if (p <= b.p) {
      const local = b.p === a.p ? 0 : (p - a.p) / (b.p - a.p);
      return a.v + (b.v - a.v) * smoothstep(local);
    }
  }
  return 1;
}

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
  videoSrc,
}: {
  hero: HeroContent;
  formHref: string;
  imageSrc?: string;
  videoSrc?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReduced = useReducedMotion();
  const [videoDuration, setVideoDuration] = useState(0);
  const currentVideoProgressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Secondary elements (CTAs, scroll hint) fade first and fastest — the
  // headline/subline glide upward the whole time but only fade out once
  // the interface starts clearing, ~12–25% into the scroll.
  const secondaryOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const primaryOpacity = useTransform(scrollYProgress, [0.1, 0.25], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.25], [0, prefersReduced ? 0 : -90]);
  const bgScale = useTransform(scrollYProgress, [0, 0.25], [1, prefersReduced ? 1 : 1.04]);
  const vignette = useTransform(scrollYProgress, [0, 0.25, 1], [0.35, 0.5, 0.78]);

  // requestAnimationFrame loop: each frame reads the current scroll
  // progress, maps it through the non-linear curve above, then eases the
  // video's actual playhead toward that target. No autoplay — scrolling is
  // the only thing that ever advances the clip, and it freezes the instant
  // scrolling stops (and reverses cleanly on scroll-up), but the small
  // per-frame smoothing keeps it from feeling like a raw scrubber drag.
  useEffect(() => {
    if (prefersReduced || !videoDuration) return;
    let raf = 0;
    const tick = () => {
      const video = videoRef.current;
      if (video) {
        const target = mapScrollToVideoProgress(scrollYProgress.get());
        const current = currentVideoProgressRef.current;
        const next = current + (target - current) * SCRUB_SMOOTHING;
        currentVideoProgressRef.current = next;
        video.currentTime = Math.min(videoDuration, Math.max(0, next * videoDuration));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced, videoDuration, scrollYProgress]);

  return (
    <section id="hero" className="relative bg-charcoal">
      <div
        ref={trackRef}
        className="relative"
        style={{ height: prefersReduced ? undefined : "350vh" }}
      >
        <div
          className={`${prefersReduced ? "relative" : "sticky top-0"} flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden grain`}
        >
          {/* Background scene */}
          <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
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
                background: "radial-gradient(circle, #ff9a95 0%, #f5423f 45%, rgba(245,66,63,0) 72%)",
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

            {/* Cinematic scroll-scrubbed hero footage, layered above the
                crafted gradient scene. Falls back to the static photograph
                when there's no video (or the user prefers reduced motion)
                — either way the opening frame matches the exact same hero
                shot, so there's never a visible jump from image to video. */}
            {videoSrc && !prefersReduced ? (
              <video
                ref={videoRef}
                src={videoSrc}
                poster={imageSrc}
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
                onLoadedMetadata={(e) => setVideoDuration(e.currentTarget.duration)}
              />
            ) : (
              imageSrc && (
                <Image
                  src={imageSrc}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover opacity-90"
                />
              )
            )}

            <motion.div className="absolute inset-0 bg-charcoal" style={{ opacity: vignette }} />
          </motion.div>

          {/* Content */}
          <motion.div
            style={{ y: contentY }}
            className="relative z-10 w-full px-5 pb-20 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24"
          >
            <div className="mx-auto max-w-[1600px]">
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="max-w-4xl"
              >
                <motion.div style={{ opacity: primaryOpacity }}>
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
                </motion.div>

                <motion.div
                  style={{ opacity: secondaryOpacity }}
                  className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10"
                >
                  <motion.div variants={item} className="contents">
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
              </motion.div>

              <motion.div
                style={{ opacity: secondaryOpacity }}
                className="mt-10 flex items-center justify-end border-t border-ivory/15 pt-6 text-ivory/55 sm:mt-16"
              >
                <motion.div variants={item} initial="hidden" animate="visible" className="contents">
                  <span className="flex items-center gap-2 eyebrow">
                    {hero.scrollHint}
                    <motion.span
                      animate={{ y: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                      className="inline-block h-3 w-px bg-ivory/60"
                    />
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
