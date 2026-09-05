"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { PortfolioContent } from "@/content/types";

/**
 * Renders exactly one half (left or right) of a two-panel before/after
 * collage, filling its container with no trace of the other half. Doubling
 * the rendered width and clipping via the parent's overflow:hidden is
 * robust to any source aspect ratio — unlike object-position, it can never
 * blend or bleed the two panels together.
 */
function CollageHalf({
  src,
  alt,
  half,
  priority,
}: {
  src: string;
  alt: string;
  half: "before" | "after";
  priority?: boolean;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-y-0 w-[200%]" style={{ left: half === "before" ? "0%" : "-100%" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 66vw, 200vw"
          className="pointer-events-none object-cover"
          draggable={false}
          priority={priority}
        />
      </div>
    </div>
  );
}

function PortfolioSlider({
  src,
  beforeLabel,
  afterLabel,
}: {
  src: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [pos, setPos] = useState(100);
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
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label={`${beforeLabel} / ${afterLabel}`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-sm bg-charcoal-mute select-none"
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
      <CollageHalf src={src} alt={beforeLabel} half="before" />
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <CollageHalf src={src} alt={afterLabel} half="after" priority />
      </div>

      <div
        className="pointer-events-none absolute left-3 top-3 rounded-full bg-coral/90 px-3 py-1 text-[11px] font-medium tracking-wide text-ivory backdrop-blur-sm"
        style={{ opacity: pos > 12 ? 1 : 0, transition: "opacity 0.3s" }}
      >
        {afterLabel}
      </div>
      <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-charcoal/70 px-3 py-1 text-[11px] font-medium tracking-wide text-ivory backdrop-blur-sm">
        {beforeLabel}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 flex w-px -translate-x-1/2 flex-col items-center bg-ivory/80"
        style={{ left: `${pos}%` }}
      >
        <div className="mt-auto mb-auto flex h-9 w-9 items-center justify-center rounded-full bg-ivory shadow-lg">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M5 3L1.5 8L5 13" stroke="#14110D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3L14.5 8L11 13" stroke="#14110D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({
  portfolio,
  images,
}: {
  portfolio: PortfolioContent;
  images: string[];
}) {
  return (
    <section id="portfolio" className="relative bg-ivory-soft py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>{portfolio.eyebrow}</Eyebrow>
            <span className="rounded-full bg-coral/15 px-3 py-1 text-[11px] font-medium tracking-wide text-coral-deep">
              {portfolio.realResultsLabel}
            </span>
          </div>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">
            {portfolio.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
            {portfolio.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {portfolio.properties.map((property, i) => (
            <Reveal key={property.name} delay={0.08 * i}>
              <PortfolioSlider
                src={images[i]}
                beforeLabel={portfolio.beforeLabel}
                afterLabel={portfolio.afterLabel}
              />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-serif-display text-xl italic text-charcoal">{property.name}</p>
                  <p className="mt-1 text-sm text-charcoal/50">{property.location}</p>
                </div>
                <div className="flex shrink-0 gap-4 text-right">
                  {property.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif-display text-lg text-coral">{stat.value}</p>
                      <p className="text-[11px] uppercase tracking-wide text-charcoal/40">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-charcoal/50">
            {portfolio.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
