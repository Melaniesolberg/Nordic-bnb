"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import Magnetic from "@/components/ui/magnetic-button";
import type { CompareContent } from "@/content/types";

export default function Compare({
  compare,
  formHref,
  shortImageSrc,
  longImageSrc,
}: {
  compare: CompareContent;
  formHref: string;
  shortImageSrc: string;
  longImageSrc: string;
}) {
  const images = [shortImageSrc, longImageSrc];
  const [active, setActive] = useState<"short" | "long">("short");

  return (
    <section className="relative bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>{compare.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">
            {compare.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
            {compare.intro}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 inline-flex rounded-full border border-charcoal/15 p-1">
            <button
              onClick={() => setActive("short")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === "short" ? "bg-charcoal text-ivory" : "text-charcoal/60"
              }`}
            >
              {compare.shortTerm.title}
            </button>
            <button
              onClick={() => setActive("long")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === "long" ? "bg-charcoal text-ivory" : "text-charcoal/60"
              }`}
            >
              {compare.longTerm.title}
            </button>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[compare.shortTerm, compare.longTerm].map((col, i) => {
            const key = i === 0 ? "short" : "long";
            const isActive = active === key;
            return (
              <div
                key={col.title}
                onMouseEnter={() => setActive(key)}
                className={`relative overflow-hidden rounded-sm border p-8 transition-all duration-500 sm:p-10 ${
                  isActive
                    ? "border-coral/30 bg-charcoal text-ivory shadow-[0_30px_80px_rgba(20,17,13,0.15)]"
                    : "border-charcoal/10 bg-ivory-soft text-charcoal opacity-70"
                }`}
              >
                {isActive && (
                  <>
                    <Image
                      src={images[i]}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/70" />
                  </>
                )}
                <div className="relative">
                <h3 className="font-serif-display text-2xl sm:text-3xl">{col.title}</h3>
                <p className={`mt-2 text-sm ${isActive ? "text-coral-soft" : "text-charcoal/50"}`}>
                  {col.tagline}
                </p>
                <ul className="mt-8 space-y-4">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          isActive ? "bg-coral" : "bg-charcoal/30"
                        }`}
                      />
                      <span className={isActive ? "text-ivory/80" : "text-charcoal/65"}>{p}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <Magnetic>
              <Link
                href={formHref}
                className="inline-flex items-center rounded-full bg-coral px-8 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-coral-deep"
              >
                {compare.cta}
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
