"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Eyebrow from "@/components/ui/eyebrow";
import Reveal from "@/components/ui/reveal";
import { useMediaQuery } from "@/lib/use-media-query";
import type { HowItWorksContent } from "@/content/types";

/** One line-icon per step, in order: send photos, we enhance, more clicks. */
const STEP_ICONS: ((props: { className?: string }) => ReactElement)[] = [
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 15V4M12 4 7.5 8.5M12 4l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 19.5 9.5 13l3.5 3.5L20 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8.5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

/** Crossfades through one photo per step as the process scrolls by. */
function ProcessVisual({
  images,
  active,
  stepLabel,
  channels,
}: {
  images: string[];
  active: number;
  stepLabel: string;
  channels: string[];
}) {
  const Icon = STEP_ICONS[active];
  const isSyncStep = active === images.length - 1;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
      {images.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1.02 : 1 }}
          transition={{
            opacity: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 1.1, ease: "easeOut" },
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(min-width: 1024px) 48vw, 92vw"
            className="object-cover"
            priority={i === 0}
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/5 to-charcoal/10" />

      <AnimatePresence>
        {isSyncStep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-wrap justify-center gap-2.5 px-6"
          >
            {channels.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
                className="rounded-full bg-ivory/95 px-4 py-2 text-xs font-medium tracking-wide text-charcoal shadow-lg"
              >
                {c}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2.5 rounded-md bg-charcoal/70 px-3 py-2 backdrop-blur-sm sm:right-auto sm:max-w-[80%]">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral text-ivory">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="text-[12px] font-medium leading-snug text-ivory">{stepLabel}</span>
      </div>
    </div>
  );
}

function PillarList({ system }: { system: HowItWorksContent }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-ivory/10 sm:grid-cols-3">
      {system.steps.map((p, i) => {
        const Icon = STEP_ICONS[i];
        return (
          <Reveal key={p.title} delay={0.04 * i} y={16}>
            <div className="h-full bg-charcoal p-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral/15 text-coral">
                <Icon className="h-4 w-4" />
              </span>
              <p className="mt-4 font-serif-display text-2xl italic text-ivory">{p.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/60">{p.description}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function System({
  system,
  bgImageSrc,
  transformationImages,
}: {
  system: HowItWorksContent;
  bgImageSrc?: string;
  transformationImages?: string[];
}) {
  const prefersReduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  const usePinned = isDesktop && !prefersReduced;

  useEffect(() => {
    if (!usePinned || !sectionRef.current || !pinRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const pillarCount = system.steps.length;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      pin: pinRef.current,
      pinSpacing: false,
      onUpdate: (self) => {
        const idx = Math.min(pillarCount - 1, Math.floor(self.progress * pillarCount));
        setActive((prev) => (prev === idx ? prev : idx));
      },
    });

    return () => {
      st.kill();
    };
  }, [usePinned, system.steps.length]);

  const pillar = system.steps[active];

  return (
    <section id="system" className="relative overflow-hidden bg-charcoal">
      {bgImageSrc && (
        <div className="absolute inset-0 opacity-20">
          <Image src={bgImageSrc} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
      )}
      <div className="relative mx-auto max-w-[1600px] px-5 pt-24 sm:px-8 sm:pt-32 lg:px-12">
        <Reveal>
          <Eyebrow tone="light">{system.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-3xl text-ivory">
            {system.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-ivory/60 sm:text-lg">
            {system.intro}
          </p>
        </Reveal>
      </div>

      {usePinned ? (
        <div ref={sectionRef} style={{ height: `${system.steps.length * 60}vh` }} className="mt-16">
          <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
            <div className="mx-auto grid h-full max-w-[1600px] grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="font-serif-display text-4xl text-ivory lg:text-5xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/65">
                      {pillar.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-14 flex gap-2">
                  {system.steps.map((p, i) => (
                    <div key={p.title} className="flex flex-1 flex-col items-start gap-2">
                      <span
                        className={`h-1 w-full rounded-full transition-colors duration-500 ${
                          i <= active ? "bg-coral" : "bg-ivory/15"
                        }`}
                      />
                      <span
                        className={`hidden text-[11px] leading-snug transition-colors duration-500 sm:block ${
                          i === active ? "text-ivory/85" : "text-ivory/35"
                        }`}
                      >
                        {p.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[50vh] lg:h-[72vh]">
                {transformationImages && transformationImages.length === system.steps.length && (
                  <ProcessVisual images={transformationImages} active={active} stepLabel={pillar.title} channels={system.channels} />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12">
          <PillarList system={system} />
        </div>
      )}
    </section>
  );
}
