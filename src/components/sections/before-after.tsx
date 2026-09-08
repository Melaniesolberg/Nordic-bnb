"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { BeforeAfterContent } from "@/content/types";

interface Listing {
  location: string;
  beforeSrc: string;
  afterSrc: string;
  beforeTitle: string;
  afterTitle: string;
  beforePrice: string;
  afterPrice: string;
  beforeRating: string;
  afterRating: string;
}

/** One "search result" card that crossfades from a dull listing to a styled
 * one as `progress` (0–1) sweeps across its own window of the shared scroll
 * range, with a diagonal light-sweep flourish riding the same window. */
function ListingCard({
  listing,
  progress,
  windowStart,
  windowEnd,
  reduced,
}: {
  listing: Listing;
  progress: MotionValue<number>;
  windowStart: number;
  windowEnd: number;
  reduced: boolean;
}) {
  const afterOpacityMotion = useTransform(progress, [windowStart, windowEnd], [0, 1]);
  const beforeOpacityMotion = useTransform(afterOpacityMotion, (v) => 1 - v);
  const sweepX = useTransform(progress, [windowStart, windowEnd], ["-30%", "160%"]);
  const badgeOpacity = useTransform(progress, [windowEnd - 0.02, windowEnd + 0.04], [0, 1]);
  const badgeScale = useTransform(progress, [windowEnd - 0.02, windowEnd + 0.06], [0.6, 1]);

  // Reduced motion: skip the scroll-driven scrub entirely and show the
  // final, best-looking state directly instead of a moving crossfade.
  const afterOpacity = reduced ? 1 : afterOpacityMotion;
  const beforeOpacity = reduced ? 0 : beforeOpacityMotion;

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_12px_28px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
        <Image src={listing.beforeSrc} alt="" fill sizes="(min-width: 768px) 32vw, 92vw" className="object-cover" />
        <motion.div className="absolute inset-0" style={{ opacity: afterOpacity }}>
          <Image src={listing.afterSrc} alt="" fill sizes="(min-width: 768px) 32vw, 92vw" className="object-cover" />
        </motion.div>

        {/* Higgsfield-style diagonal light sweep riding the transform window */}
        {!reduced && (
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent mix-blend-overlay"
            style={{ left: sweepX }}
            aria-hidden
          />
        )}

        <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-charcoal/70 shadow-sm">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden>
            <path
              d="M12 20s-7-4.35-9.5-8.8C.8 8 2 4.5 5.4 3.8 8 3.3 10 4.6 12 7c2-2.4 4-3.7 6.6-3.2C22 4.5 23.2 8 21.5 11.2 19 15.65 12 20 12 20Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <motion.span
          className="absolute left-3 top-3 rounded-full bg-charcoal px-2.5 py-1 text-[10px] font-medium tracking-wide text-white"
          style={{ opacity: reduced ? 1 : badgeOpacity, scale: reduced ? 1 : badgeScale }}
        >
          Upgraded ✓
        </motion.span>
      </div>

      <div className="relative p-4">
        <motion.div style={{ opacity: beforeOpacity }} className="absolute inset-4">
          <div className="flex items-start justify-between gap-2">
            <p className="text-[0.9rem] font-medium leading-snug text-charcoal/90">{listing.beforeTitle}</p>
            <span className="flex shrink-0 items-center gap-1 pt-0.5 text-[0.8rem] text-charcoal/70">
              ★ {listing.beforeRating}
            </span>
          </div>
          <p className="mt-1 text-[0.8rem] text-charcoal/45">{listing.location}</p>
          <p className="mt-2 text-[0.9rem] text-charcoal/80">
            <span className="font-semibold">{listing.beforePrice}</span> <span className="text-charcoal/45">night</span>
          </p>
        </motion.div>
        <motion.div style={{ opacity: afterOpacity }}>
          <div className="flex items-start justify-between gap-2">
            <p className="text-[0.9rem] font-medium leading-snug text-charcoal/90">{listing.afterTitle}</p>
            <span className="flex shrink-0 items-center gap-1 pt-0.5 text-[0.8rem] text-charcoal/70">
              ★ {listing.afterRating}
            </span>
          </div>
          <p className="mt-1 text-[0.8rem] text-charcoal/45">{listing.location}</p>
          <p className="mt-2 text-[0.9rem] text-charcoal/80">
            <span className="font-semibold text-coral-deep">{listing.afterPrice}</span>{" "}
            <span className="text-charcoal/45">night</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

const LISTINGS: Omit<Listing, "beforeSrc" | "afterSrc">[] = [
  {
    location: "Marbella, Spain 🇪🇸",
    beforeTitle: "Apartment in Marbella",
    afterTitle: "Sunlit Marbella retreat, steps from the beach",
    beforePrice: "€68",
    afterPrice: "€142",
    beforeRating: "4.2",
    afterRating: "4.9",
  },
  {
    location: "Málaga, Spain 🇪🇸",
    beforeTitle: "Flat in Málaga center",
    afterTitle: "Bright Málaga home with rooftop views",
    beforePrice: "€54",
    afterPrice: "€119",
    beforeRating: "4.0",
    afterRating: "4.8",
  },
  {
    location: "Benalmádena, Spain 🇪🇸",
    beforeTitle: "Room near Benalmádena",
    afterTitle: "Coastal escape in Benalmádena, fully styled",
    beforePrice: "€45",
    afterPrice: "€98",
    beforeRating: "4.1",
    afterRating: "4.9",
  },
];

export default function BeforeAfter({
  beforeAfter,
  listingImages,
}: {
  beforeAfter: BeforeAfterContent;
  listingImages: { beforeSrc: string; afterSrc: string }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const listings: Listing[] = LISTINGS.map((l, i) => ({ ...l, ...listingImages[i] }));
  const finalMessageOpacity = useTransform(scrollYProgress, [0.82, 0.96], [0, 1]);

  return (
    <section className="relative bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>{beforeAfter.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-3xl text-charcoal">
            {beforeAfter.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
            {beforeAfter.intro}
          </p>
          <p className="mt-3 text-xs text-charcoal/40">{beforeAfter.disclaimer}</p>
        </Reveal>
      </div>

      <div ref={trackRef} className="relative mt-14" style={{ height: prefersReduced ? undefined : "260vh" }}>
        <div className="sticky top-24 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="relative rounded-2xl border border-charcoal/8 bg-white p-3 shadow-[0_30px_90px_rgba(20,17,13,0.08)] sm:p-5">
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(55% 45% at 15% 10%, rgba(245,66,63,0.18) 0%, transparent 70%), radial-gradient(45% 40% at 90% 90%, rgba(245,66,63,0.14) 0%, transparent 70%)",
              }}
              aria-hidden
            />

            {/* Browser/app chrome — this is meant to read as a page you're viewing through a screen */}
            <div className="flex items-center gap-2 border-b border-charcoal/8 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-charcoal/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-charcoal/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-charcoal/15" />
              <div className="ml-2 flex flex-1 items-center gap-2 rounded-full bg-charcoal/5 px-4 py-1.5 text-[0.8rem] text-charcoal/45 sm:max-w-xs">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden>
                  <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Search · Costa del Sol
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 pt-5 sm:grid-cols-3">
              {listings.map((listing, i) => {
                const windowStart = 0.08 + i * 0.24;
                const windowEnd = windowStart + 0.3;
                return (
                  <ListingCard
                    key={listing.location}
                    listing={listing}
                    progress={scrollYProgress}
                    windowStart={windowStart}
                    windowEnd={windowEnd}
                    reduced={!!prefersReduced}
                  />
                );
              })}
            </div>

            <motion.p
              className="mt-6 text-center font-serif-display text-lg italic text-charcoal sm:text-xl"
              style={{ opacity: prefersReduced ? 1 : finalMessageOpacity }}
            >
              Better listings. More bookings. Higher revenue.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
