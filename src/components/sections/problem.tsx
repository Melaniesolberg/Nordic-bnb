"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { Locale } from "@/i18n/config";
import type { ProblemContent } from "@/content/types";

const RING_RADIUS = 54;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

/** Counts down from `seconds` to zero in real time once it scrolls into view. */
function Countdown({ seconds, unit, locale }: { seconds: number; unit: string; locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const prefersReduced = useReducedMotion();
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (!inView || prefersReduced) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const left = Math.max(0, seconds - (now - start) / 1000);
      setRemaining(left);
      if (left > 0) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, prefersReduced, seconds]);

  const fmt = new Intl.NumberFormat(locale === "no" ? "nb-NO" : "en-GB", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const fraction = remaining / seconds;
  const done = remaining === 0;

  return (
    <div ref={ref} className="flex items-center gap-6 sm:gap-8">
      <div className="relative h-32 w-32 shrink-0 sm:h-40 sm:w-40">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden>
          <circle cx="60" cy="60" r={RING_RADIUS} stroke="rgba(246,241,232,0.15)" strokeWidth="5" fill="none" />
          <circle
            cx="60"
            cy="60"
            r={RING_RADIUS}
            stroke="#f5423f"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={RING_LENGTH}
            strokeDashoffset={RING_LENGTH * (1 - fraction)}
          />
        </svg>
        {/* Clock face with a hand that sweeps once as the seconds run out */}
        <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden>
          <circle cx="60" cy="60" r="34" stroke="rgba(246,241,232,0.55)" strokeWidth="2.5" fill="none" />
          <line
            x1="60"
            y1="60"
            x2="60"
            y2="34"
            stroke="#f6f1e8"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${(1 - fraction) * 360} 60 60)`}
          />
          <circle cx="60" cy="60" r="3.5" fill="#f5423f" />
          <rect x="54" y="18" width="12" height="5" rx="1.5" fill="rgba(246,241,232,0.55)" />
        </svg>
      </div>
      <p
        className={`font-serif-display tabular-nums leading-none transition-colors duration-300 ${
          done ? "text-coral" : "text-ivory"
        } text-[5.5rem] sm:text-[8rem]`}
        aria-label={`${fmt.format(seconds)} ${unit}`}
      >
        {fmt.format(remaining)}
        <span className="ml-2 align-top text-2xl text-ivory/60 sm:text-3xl">{unit}</span>
      </p>
    </div>
  );
}

export default function Problem({
  locale,
  problem,
  imageSrc,
}: {
  locale: Locale;
  problem: ProblemContent;
  imageSrc: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow tone="light">{problem.eyebrow}</Eyebrow>
          <div className="mt-10">
            <Countdown seconds={problem.seconds} unit={problem.unit} locale={locale} />
          </div>
          <h2 className="font-serif-display text-display-md mt-10 max-w-3xl text-ivory">{problem.heading}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/85 sm:text-xl">{problem.intro}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 flex max-w-2xl flex-col gap-4 border-t border-ivory/15 pt-10 sm:flex-row sm:items-baseline sm:gap-8">
            <p className="font-serif-display text-6xl text-coral sm:text-7xl">{problem.stat.value}</p>
            <div>
              <p className="text-base leading-relaxed text-ivory/85 sm:text-lg">{problem.stat.text}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ivory/45">{problem.stat.source}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
