"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({
  before,
  after,
  alt,
  improvedLabel,
}: {
  before: string;
  after: string;
  alt: string;
  improvedLabel: string;
}) {
  const [split, setSplit] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.min(100, Math.max(0, pct)));
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-sm bg-ivory-deep"
      onPointerDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <Image src={after} alt={alt} fill sizes="(min-width: 768px) 420px, 100vw" className="object-cover" draggable={false} />
      <span className="absolute right-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-ivory">
        {improvedLabel}
      </span>

      <div className="absolute inset-0 overflow-hidden" style={{ width: `${split}%` }}>
        <Image src={before} alt={alt} fill sizes="(min-width: 768px) 420px, 100vw" className="object-cover" draggable={false} />
        <span className="absolute left-3 top-3 rounded-full bg-ivory/85 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-charcoal/70">
          FØR
        </span>
      </div>

      <div
        className="absolute inset-y-0 w-0.5 cursor-ew-resize bg-ivory shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `${split}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory shadow-md">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M5 1L1 5l4 4M9 1l4 4-4 4" stroke="#30291f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
