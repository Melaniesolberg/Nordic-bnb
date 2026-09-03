"use client";

import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import type { DashboardContent } from "@/content/types";

const UPCOMING = [
  { guest: "M. Andersen", dates: "12–17 Sep", nights: 5, channel: "Airbnb" },
  { guest: "J. Ruiz", dates: "18–21 Sep", nights: 3, channel: "Booking.com" },
  { guest: "S. Lindqvist", dates: "23–30 Sep", nights: 7, channel: "Airbnb" },
];

export default function Dashboard({ dashboard }: { dashboard: DashboardContent }) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow tone="light">{dashboard.eyebrow}</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-6 text-ivory">
                {dashboard.heading}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/60 sm:text-lg">
                {dashboard.intro}
              </p>
              <p className="mt-6 text-xs uppercase tracking-wide text-ivory/35">
                {dashboard.footnote}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-md border border-ivory/10 bg-charcoal-soft shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
                {/* Window chrome */}
                <div className="flex items-center gap-2 border-b border-ivory/10 px-5 py-3.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-ivory/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ivory/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ivory/15" />
                  <span className="eyebrow ml-3 text-ivory/35">Villa Sunrise — Owner portal</span>
                </div>

                <div className="grid grid-cols-1 gap-px bg-ivory/10 sm:grid-cols-3">
                  <div className="bg-charcoal-soft p-6">
                    <p className="eyebrow text-ivory/40">{dashboard.labels.revenue}</p>
                    <p className="font-serif-display mt-3 text-3xl text-coral-soft">€4,280</p>
                    <p className="mt-1 text-xs text-ivory/40">+18% vs. last month</p>
                  </div>
                  <div className="bg-charcoal-soft p-6">
                    <p className="eyebrow text-ivory/40">{dashboard.labels.occupancy}</p>
                    <p className="font-serif-display mt-3 text-3xl text-ivory">86%</p>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ivory/10">
                      <div className="h-full w-[86%] rounded-full bg-coral" />
                    </div>
                  </div>
                  <div className="bg-charcoal-soft p-6">
                    <p className="eyebrow text-ivory/40">{dashboard.labels.payout}</p>
                    <p className="font-serif-display mt-3 text-3xl text-ivory">€3,624</p>
                    <p className="mt-1 text-xs text-ivory/40">Oct 1 — bank transfer</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-px bg-ivory/10 lg:grid-cols-[1.4fr_1fr]">
                  <div className="bg-charcoal-soft p-6">
                    <p className="eyebrow mb-4 text-ivory/40">{dashboard.labels.upcoming}</p>
                    <div className="space-y-0">
                      {UPCOMING.map((u, i) => (
                        <div
                          key={u.guest}
                          className={`flex items-center justify-between py-3.5 text-sm ${
                            i !== UPCOMING.length - 1 ? "border-b border-ivory/8" : ""
                          }`}
                        >
                          <div>
                            <p className="text-ivory">{u.guest}</p>
                            <p className="mt-0.5 text-xs text-ivory/40">{u.dates} · {u.nights} nights</p>
                          </div>
                          <span className="rounded-full border border-ivory/15 px-3 py-1 text-[11px] text-ivory/55">
                            {u.channel}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-px bg-ivory/10">
                    <div className="flex flex-1 items-center justify-between bg-charcoal-soft p-6">
                      <div>
                        <p className="eyebrow text-ivory/40">{dashboard.labels.cleaning}</p>
                        <p className="mt-2 text-sm text-ivory">Turnover scheduled</p>
                      </div>
                      <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                    </div>
                    <div className="flex flex-1 items-center justify-between bg-charcoal-soft p-6">
                      <div>
                        <p className="eyebrow text-ivory/40">{dashboard.labels.maintenance}</p>
                        <p className="mt-2 text-sm text-ivory">No open issues</p>
                      </div>
                      <span className="h-2.5 w-2.5 rounded-full bg-ivory/25" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
