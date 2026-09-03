"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { BeforeAfterContent } from "@/content/types";

export default function BeforeAfter({
  beforeAfter,
  beforeSrc,
  afterSrc,
}: {
  beforeAfter: BeforeAfterContent;
  beforeSrc: string;
  afterSrc: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <section className="relative bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>{beforeAfter.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-3xl text-charcoal">
            {beforeAfter.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
            {beforeAfter.intro}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={containerRef}
            role="slider"
            tabIndex={0}
            aria-label="Before and after listing comparison"
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            className="relative mt-14 aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-sm bg-charcoal-mute select-none sm:aspect-[16/9]"
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
              alt="Ordinary listing photography, before Nordic BnB"
              fill
              sizes="(min-width: 1024px) 1400px, 100vw"
              className="pointer-events-none object-cover"
              draggable={false}
            />
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Image
                src={afterSrc}
                alt="Styled Nordic BnB listing photography, after"
                fill
                sizes="(min-width: 1024px) 1400px, 100vw"
                className="object-cover"
                draggable={false}
              />
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-charcoal/70 px-4 py-1.5 text-xs font-medium tracking-wide text-ivory backdrop-blur-sm">
              {beforeAfter.beforeLabel}
            </div>
            <div
              className="pointer-events-none absolute right-5 top-5 rounded-full bg-coral/90 px-4 py-1.5 text-xs font-medium tracking-wide text-ivory backdrop-blur-sm"
              style={{ opacity: pos > 12 ? 1 : 0, transition: "opacity 0.3s" }}
            >
              {beforeAfter.afterLabel}
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
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-5">
            {beforeAfter.fields.map((f) => (
              <div key={f.label} className="bg-ivory p-6">
                <p className="eyebrow text-charcoal/40">{f.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/45 line-through decoration-charcoal/25">
                  {f.before}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{f.after}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
