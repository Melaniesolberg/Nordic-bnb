"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
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
 *  - 0–12%  video almost frozen (anticipation, only ~4.5% into the clip)
 *  - 12–25% acceleration begins
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
 * target each frame. Round 20: raised from 0.18 and the update rate is
 * capped (see UPDATE_INTERVAL_MS below) — writing video.currentTime on
 * every animation frame is what was causing the seek-stutter, since each
 * seek has to decode forward from the nearest keyframe. */
const SCRUB_SMOOTHING = 0.22;

/** Minimum ms between video.currentTime writes — throttles seek frequency
 * to keep scrubbing smooth instead of thrashing the decoder. */
const UPDATE_INTERVAL_MS = 1000 / 30;

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
  const currentVideoProgressRef = useRef(0);
  const lastUpdateRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Round 20: the text no longer fades or moves on scroll at all — it stays
  // fully visible the whole time. Scrolling only ever advances the video.
  // requestAnimationFrame loop: each frame reads the current scroll
  // progress, maps it through the non-linear curve above, then eases the
  // video's actual playhead toward that target (throttled — see
  // UPDATE_INTERVAL_MS — to avoid thrashing the decoder with seeks). No
  // autoplay — scrolling is the only thing that ever advances the clip,
  // and it freezes the instant scrolling stops, reversing cleanly on
  // scroll-up.
  //
  // Round 21: this loop used to be gated behind a `videoDuration` React
  // state value that only ever got set once, from the <video>'s
  // one-shot `onLoadedMetadata` event. On a real connection that event
  // can fire late (or be delayed well behind first paint) for a large 4K
  // file, which meant the loop — and all scroll binding — simply never
  // started. Now the loop starts immediately on mount and reads
  // `video.duration` straight off the element every frame instead,
  // so it has no dependency on that event's timing at all.
  useEffect(() => {
    if (prefersReduced) return;
    let raf = 0;
    const tick = (now: number) => {
      const video = videoRef.current;
      const duration = video?.duration;
      if (
        video &&
        duration &&
        !Number.isNaN(duration) &&
        now - lastUpdateRef.current >= UPDATE_INTERVAL_MS
      ) {
        lastUpdateRef.current = now;
        const target = mapScrollToVideoProgress(scrollYProgress.get());
        const current = currentVideoProgressRef.current;
        const next = current + (target - current) * SCRUB_SMOOTHING;
        currentVideoProgressRef.current = next;
        video.currentTime = Math.min(duration, Math.max(0, next * duration));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced, scrollYProgress]);

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
          <div className="absolute inset-0">
            {/* Cinematic scroll-scrubbed hero footage, at full native
                quality and full opacity — no dimming. Falls back to the
                static photograph when there's no video (or the user
                prefers reduced motion); either way the opening frame
                matches the exact same hero shot, so there's never a
                visible jump. */}
            {videoSrc && !prefersReduced ? (
              <video
                ref={videoRef}
                src={videoSrc}
                poster={imageSrc}
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              imageSrc && (
                <Image
                  src={imageSrc}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              )
            )}

            {/* Fixed, modest legibility scrim behind the text — constant,
                not tied to scroll, and only covers the lower portion so
                the footage itself stays bright and clear. */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal/75 via-charcoal/25 to-transparent" />
          </div>

          {/* Content — always visible, never fades or moves on scroll */}
          <div className="relative z-10 w-full px-5 pb-20 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
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
                className="mt-10 flex items-center justify-end border-t border-ivory/15 pt-6 text-ivory/55 sm:mt-16"
              >
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
          </div>
        </div>
      </div>
    </section>
  );
}
