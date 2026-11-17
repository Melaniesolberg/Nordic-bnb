"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function BeforeAfterSlider({
  before,
  after,
  alt,
  beforeAlt = "",
  beforeLabel,
  afterLabel,
  className,
  sizes = "(min-width: 768px) 420px, 100vw",
}: {
  before: string;
  after: string;
  alt: string;
  beforeAlt?: string;
  beforeLabel: string;
  afterLabel: string;
  /** Sets the frame's aspect ratio, e.g. "aspect-[4/3]". */
  className?: string;
  sizes?: string;
}) {
  const [split, setSplit] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSplit(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }

  return (
    <div
      ref={containerRef}
      // pan-y keeps vertical page scrolling on touch while horizontal drags move the divider.
      className={cn("relative w-full touch-pan-y select-none overflow-hidden rounded-sm bg-charcoal-mute", className ?? "aspect-[4/3]")}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Image src={after} alt={alt} fill sizes={sizes} className="object-cover" draggable={false} />
      <span className="absolute right-3 top-3 rounded-full bg-coral px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-wide text-ivory shadow">
        {afterLabel}
      </span>

      {/* Clipped rather than resized, so the before image stays aligned with the after image. */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>
        <Image src={before} alt={beforeAlt} fill sizes={sizes} className="object-cover" draggable={false} />
        <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-wide text-ivory shadow">
          {beforeLabel}
        </span>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-ivory shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `${split}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory shadow-lg">
          <svg width="18" height="12" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path d="M5 1L1 5l4 4M9 1l4 4-4 4" stroke="#14110d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(split)}
        onChange={(e) => setSplit(Number(e.target.value))}
        aria-label={`${beforeLabel} / ${afterLabel}`}
        className="sr-only"
      />
    </div>
  );
}
