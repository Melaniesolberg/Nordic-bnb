"use client";

import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { TeamContent } from "@/content/types";

export default function Team({ team }: { team: TeamContent }) {
  return (
    <section className="relative bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>{team.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">
            {team.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
            {team.intro}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-8 inline-block rounded-full border border-charcoal/15 px-4 py-1.5 text-xs text-charcoal/50">
            {team.placeholderNotice}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] bg-charcoal/10 sm:grid-cols-3 lg:grid-cols-5">
          {team.members.map((m, i) => (
            <Reveal key={m.name} delay={0.05 * i}>
              <div className="flex h-full flex-col items-start bg-ivory-soft p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-charcoal/25 text-charcoal/30">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <circle cx="10" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M3.5 17c1-3.5 4-5 6.5-5s5.5 1.5 6.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-medium text-charcoal">{m.role}</p>
                <p className="mt-1 text-xs text-charcoal/40">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
