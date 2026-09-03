"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import Counter from "@/components/ui/counter";
import type { PerformanceContent } from "@/content/types";

const REVENUE_POINTS = [22, 26, 24, 31, 38, 52, 68, 74, 58, 42, 30, 27];
const CHANNELS = [
  { label: "Airbnb", pct: 58, color: "var(--color-coral)" },
  { label: "Booking.com", pct: 30, color: "var(--color-charcoal)" },
  { label: "Direct & other", pct: 12, color: "var(--color-mist)" },
];

function RevenueChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const prefersReduced = useReducedMotion();

  const w = 640;
  const h = 220;
  const max = Math.max(...REVENUE_POINTS);
  const min = Math.min(...REVENUE_POINTS);
  const pad = 16;

  const points = REVENUE_POINTS.map((v, i) => {
    const x = (i / (REVENUE_POINTS.length - 1)) * (w - pad * 2) + pad;
    const y = h - pad - ((v - min) / (max - min)) * (h - pad * 2);
    return [x, y] as const;
  });

  const path = points
    .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
    .join(" ");
  const areaPath = `${path} L ${points[points.length - 1][0]} ${h} L ${points[0][0]} ${h} Z`;

  return (
    <svg ref={ref} viewBox={`0 0 ${w} ${h}`} className="w-full overflow-visible" aria-hidden>
      <defs>
        <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-coral)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-coral)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={areaPath}
        fill="url(#revenueFill)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      />
      {[0.25, 0.5, 0.75].map((f) => (
        <line
          key={f}
          x1={pad}
          x2={w - pad}
          y1={pad + f * (h - pad * 2)}
          y2={pad + f * (h - pad * 2)}
          stroke="var(--color-charcoal)"
          strokeOpacity={0.06}
        />
      ))}
      <motion.path
        d={path}
        fill="none"
        stroke="var(--color-coral)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: prefersReduced ? 0 : 1.8, ease: [0.16, 1, 0.3, 1] }}
      />
      {points.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={3.5}
          fill="var(--color-ivory-soft)"
          stroke="var(--color-coral)"
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.15 + i * 0.09, duration: 0.4 }}
        />
      ))}
    </svg>
  );
}

function ChannelBars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <div ref={ref} className="space-y-5">
      {CHANNELS.map((c, i) => (
        <div key={c.label}>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-charcoal/70">{c.label}</span>
            <span className="font-medium text-charcoal">{c.pct}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-charcoal/8">
            <motion.div
              className="h-full rounded-full"
              style={{ background: c.color }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${c.pct}%` } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Performance({ performance }: { performance: PerformanceContent }) {
  return (
    <section className="relative bg-ivory-soft py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow>{performance.eyebrow}</Eyebrow>
            <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">
              {performance.heading}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
              {performance.intro}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-10 flex items-start gap-3 rounded-sm border border-coral/25 bg-coral-mist/40 px-5 py-4">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral text-[11px] font-bold text-ivory">
              i
            </span>
            <p className="text-sm leading-relaxed text-charcoal/75">{performance.disclaimer}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-charcoal/10 py-10 sm:mt-20 sm:grid-cols-4 sm:gap-6">
          {performance.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <Counter
                value={m.value}
                className="font-serif-display text-4xl text-coral sm:text-5xl"
              />
              <p className="mt-2 text-xs text-charcoal/55 sm:text-sm">{m.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-6 text-charcoal/45">{performance.chartLabel}</p>
            <RevenueChart />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-6 text-charcoal/45">{performance.channelLabel}</p>
            <ChannelBars />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
