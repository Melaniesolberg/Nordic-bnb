"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { AreasContent } from "@/content/types";

const DOT_POSITIONS = [
  { x: 90, y: 150 },
  { x: 290, y: 95 },
  { x: 470, y: 130 },
  { x: 650, y: 85 },
];

export default function Areas({
  areas,
  imageSrc,
  detailImages,
}: {
  areas: AreasContent;
  imageSrc: string;
  detailImages: string[];
}) {
  const [active, setActive] = useState(0);

  return (
    <section id="areas" className="relative overflow-hidden bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow tone="light">{areas.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-ivory">
            {areas.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/60 sm:text-lg">
            {areas.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <Reveal delay={0.08}>
            <div className="hidden sm:block">
              <svg viewBox="0 0 740 220" className="w-full" aria-hidden>
                <path
                  d="M20 170 C 150 210, 220 60, 320 110 S 480 190, 560 60 S 680 40, 720 90"
                  stroke="#f6f1e8"
                  strokeOpacity={0.18}
                  strokeWidth={1.5}
                  fill="none"
                />
                {areas.areas.map((a, i) => {
                  const pos = DOT_POSITIONS[i];
                  const isActive = active === i;
                  return (
                    <g
                      key={a.name}
                      className="cursor-pointer"
                      onMouseEnter={() => setActive(i)}
                    >
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isActive ? 8 : 5}
                        fill={isActive ? "#e0532e" : "#f6f1e8"}
                        fillOpacity={isActive ? 1 : 0.5}
                        style={{ transition: "all 0.35s ease" }}
                      />
                      {isActive && (
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={16}
                          fill="none"
                          stroke="#e0532e"
                          strokeOpacity={0.5}
                        />
                      )}
                      <text
                        x={pos.x}
                        y={pos.y - 18}
                        textAnchor="middle"
                        fill={isActive ? "#f2a98a" : "#f6f1e8"}
                        fillOpacity={isActive ? 1 : 0.55}
                        fontSize={13}
                        style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.04em" }}
                      >
                        {a.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="relative mt-8 hidden aspect-[16/10] w-full overflow-hidden rounded-sm sm:block">
              <Image
                key={active}
                src={detailImages[active]}
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif-display text-xl italic text-ivory">
                {areas.areas[active].name}
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col divide-y divide-ivory/10 border-t border-ivory/10">
            {areas.areas.map((a, i) => (
              <button
                key={a.name}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`flex items-center justify-between py-6 text-left transition-colors ${
                  active === i ? "text-ivory" : "text-ivory/45"
                }`}
              >
                <span className="font-serif-display text-2xl sm:text-3xl">{a.name}</span>
                <span
                  className={`hidden max-w-xs text-right text-sm leading-relaxed sm:block ${
                    active === i ? "text-ivory/70" : "text-ivory/0"
                  }`}
                >
                  {active === i ? a.description : ""}
                </span>
              </button>
            ))}
            <p className="sm:hidden pt-6 text-sm leading-relaxed text-ivory/65">
              {areas.areas[active].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
