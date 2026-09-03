"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Eyebrow from "@/components/ui/eyebrow";
import Reveal from "@/components/ui/reveal";
import { useWebglSupported } from "@/lib/use-webgl";
import { useMediaQuery } from "@/lib/use-media-query";
import type { SystemContent } from "@/content/types";

const SystemScene = dynamic(() => import("@/components/three/system-scene"), {
  ssr: false,
  loading: () => null,
});

function StaticGem() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="h-56 w-56 rounded-[38%] opacity-90 sm:h-72 sm:w-72"
        style={{
          background:
            "conic-gradient(from 210deg, #e0532e, #b47c4f, #4d4034, #8a8072, #e0532e)",
          filter: "blur(0.5px)",
        }}
      />
    </div>
  );
}

function PillarList({ system }: { system: SystemContent }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-ivory/10 sm:grid-cols-2">
      {system.pillars.map((p, i) => (
        <Reveal key={p.code} delay={0.04 * i} y={16}>
          <div className="h-full bg-charcoal p-8">
            <span className="eyebrow text-coral">{p.code}</span>
            <p className="mt-4 font-serif-display text-2xl italic text-ivory">{p.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-ivory/60">{p.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function System({ system }: { system: SystemContent }) {
  const prefersReduced = useReducedMotion();
  const webglSupported = useWebglSupported();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [active, setActive] = useState(0);
  const progressRef = useRef(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  const usePinned = isDesktop && !prefersReduced;

  useEffect(() => {
    if (!usePinned || !sectionRef.current || !pinRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const pillarCount = system.pillars.length;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      pin: pinRef.current,
      pinSpacing: false,
      onUpdate: (self) => {
        progressRef.current = self.progress;
        const idx = Math.min(pillarCount - 1, Math.floor(self.progress * pillarCount));
        setActive((prev) => (prev === idx ? prev : idx));
      },
    });

    return () => {
      st.kill();
    };
  }, [usePinned, system.pillars.length]);

  const pillar = system.pillars[active];

  return (
    <section id="system" className="relative bg-charcoal">
      <div className="mx-auto max-w-[1600px] px-5 pt-24 sm:px-8 sm:pt-32 lg:px-12">
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
        <div ref={sectionRef} style={{ height: `${system.pillars.length * 100}vh` }} className="mt-16">
          <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
            <div className="mx-auto grid h-full max-w-[1600px] grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={pillar.code}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="font-serif-display text-8xl italic text-coral/40">
                      {pillar.code}
                    </span>
                    <h3 className="font-serif-display mt-4 text-4xl text-ivory lg:text-5xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/65">
                      {pillar.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-14 flex gap-2">
                  {system.pillars.map((p, i) => (
                    <span
                      key={p.code}
                      className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                        i <= active ? "bg-coral" : "bg-ivory/15"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative h-[50vh] lg:h-full">
                {webglSupported === false ? (
                  <StaticGem />
                ) : (
                  <SystemScene progressRef={progressRef} />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12">
          <PillarList system={system} />
        </div>
      )}
    </section>
  );
}
