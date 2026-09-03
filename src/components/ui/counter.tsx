"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Animates the numeric portion of a value string (e.g. "+18%", "4.9", "€1,240") on scroll into view. */
export default function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const prefersReduced = useReducedMotion();
  const [animated, setAnimated] = useState<string | null>(null);

  const match = value.match(/-?\d+(\.\d+)?/);
  const shouldAnimate = inView && !prefersReduced && !!match;

  useEffect(() => {
    if (!shouldAnimate || !match) return;

    const target = parseFloat(match[0]);
    const duration = 1400;
    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setAnimated(formatWith(value, target * eased, match![0]));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldAnimate, value]);

  const display = !inView
    ? formatWith(value, 0)
    : shouldAnimate
      ? (animated ?? formatWith(value, 0))
      : value;

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

function formatWith(template: string, current: number, matchStr?: string) {
  const m = matchStr ?? template.match(/-?\d+(\.\d+)?/)?.[0] ?? "0";
  const decimals = m.includes(".") ? m.split(".")[1].length : 0;
  const formatted = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
  return template.replace(m, formatted);
}
