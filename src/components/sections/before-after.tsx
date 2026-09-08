"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { BeforeAfterContent } from "@/content/types";

export default function BeforeAfter({
  beforeAfter,
  beforeSrc,
  afterSrc,
  afterVideoSrc,
}: {
  beforeAfter: BeforeAfterContent;
  beforeSrc: string;
  afterSrc: string;
  afterVideoSrc?: string;
}) {
  const [pos, setPos] = useState(90);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start 0.95", "start 0.35"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

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
          <div
            ref={containerRef}
            role="slider"
            tabIndex={0}
            aria-label={beforeAfter.sliderAriaLabel}
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            className="relative aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-md bg-charcoal-mute shadow-[0_60px_140px_rgba(0,0,0,0.55)] select-none ring-1 ring-ivory/10 sm:aspect-[21/9]"
            onPointerDown={(e) => {
              dragging.current = true;
              (e.target as HTMLElement).setPointerCapture(e.pointerId);
              updateFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (dragging.current) updateFromClientX(e.clientX);
            }}
            onPointerUp={() => (dragging.current = false)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
              if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
            }}
          >
            <Image
              src={beforeSrc}
              alt={beforeAfter.beforeAlt}
              fill
              sizes="(min-width: 1024px) 1600px, 100vw"
              className="pointer-events-none object-cover grayscale-[35%] brightness-90 contrast-95"
              draggable={false}
            />
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              {afterVideoSrc ? (
                <video
                  src={afterVideoSrc}
                  poster={afterSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={afterSrc}
                  alt={beforeAfter.afterAlt}
                  fill
                  sizes="(min-width: 1024px) 1600px, 100vw"
                  className="object-cover"
                  draggable={false}
                />
              )}
            </div>

            {/* Labels — the styled "after" media is clipped to the left portion of the
                container (0–pos%), and the base "before" image shows through on the
                right, so the labels are pinned opposite to their usual sides. */}
            <div
              className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full bg-coral/90 px-4 py-1.5 text-xs font-medium tracking-wide text-ivory backdrop-blur-sm"
              style={{ opacity: pos > 12 ? 1 : 0, transition: "opacity 0.3s" }}
            >
              {afterVideoSrc && (
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ivory" aria-hidden />
              )}
              {beforeAfter.afterLabel}
            </div>
            <div className="pointer-events-none absolute right-5 top-5 rounded-full bg-charcoal/70 px-4 py-1.5 text-xs font-medium tracking-wide text-ivory/80 backdrop-blur-sm">
              {beforeAfter.beforeLabel}
            </div>

            {/* Handle */}
            <div
              className="pointer-events-none absolute inset-y-0 flex w-px -translate-x-1/2 flex-col items-center bg-ivory/80"
              style={{ left: `${pos}%` }}
            >
              <div className="mt-auto mb-auto flex h-11 w-11 items-center justify-center rounded-full bg-ivory shadow-lg">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M5 3L1.5 8L5 13" stroke="#14110D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 3L14.5 8L11 13" stroke="#14110D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <Reveal delay={0.15}>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-ivory/10 sm:grid-cols-2 lg:grid-cols-5">
            {beforeAfter.fields.map((f) => (
              <div key={f.label} className="bg-charcoal-soft p-6">
                <p className="eyebrow text-ivory/40">{f.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-ivory/40 line-through decoration-ivory/25">
                  {f.before}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ivory">{f.after}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
