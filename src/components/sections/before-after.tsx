"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Eyebrow from "@/components/ui/eyebrow";
import type { BeforeAfterContent } from "@/content/types";

/** Fraction of the local scroll track spent fading the heading/intro away
 * before the video itself starts scrubbing forward. */
const TEXT_FADE_END = 0.16;

export default function BeforeAfter({
  beforeAfter,
  videoSrc,
  posterSrc,
}: {
  beforeAfter: BeforeAfterContent;
  videoSrc: string;
  posterSrc?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReduced = useReducedMotion();
  const [videoDuration, setVideoDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, TEXT_FADE_END], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, TEXT_FADE_END], [0, prefersReduced ? 0 : -40]);
  const scrimOpacity = useTransform(scrollYProgress, [0, TEXT_FADE_END, 1], [0.55, 0.15, 0.4]);

  // First scroll fades the text away; only after that does continued
  // scrolling scrub the video forward, step by step, from its own start.
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (prefersReduced || !videoDuration) return;
    const video = videoRef.current;
    if (!video) return;
    const videoProgress = Math.max(0, (progress - TEXT_FADE_END) / (1 - TEXT_FADE_END));
    video.currentTime = Math.min(videoDuration, Math.max(0, videoProgress * videoDuration));
  });

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

            {!prefersReduced ? (
              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
                onLoadedMetadata={(e) => setVideoDuration(e.currentTarget.duration)}
              />
            ) : (
              posterSrc && (
                <Image src={posterSrc} alt="" fill sizes="(min-width: 1024px) 1600px, 100vw" className="object-cover" />
              )
            )}

            <motion.div className="absolute inset-0 bg-charcoal" style={{ opacity: scrimOpacity }} />

            <motion.div
              style={{ opacity: prefersReduced ? 1 : textOpacity, y: prefersReduced ? 0 : textY }}
              className="absolute inset-x-0 bottom-0 p-6 sm:p-10"
            >
              <Eyebrow tone="light">{beforeAfter.eyebrow}</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-6 max-w-3xl text-ivory">
                {beforeAfter.heading}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
                {beforeAfter.intro}
              </p>
              <p className="mt-3 text-xs text-ivory/40">{beforeAfter.disclaimer}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
