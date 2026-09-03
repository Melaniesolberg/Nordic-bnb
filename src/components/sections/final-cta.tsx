"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import Magnetic from "@/components/ui/magnetic-button";
import { WHATSAPP_LINK } from "@/lib/utils";
import type { FinalCtaContent } from "@/content/types";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full border-b border-ivory/25 bg-transparent py-3 text-ivory placeholder:text-ivory/35 focus:border-coral focus:outline-none transition-colors";
const labelClasses = "eyebrow mb-2 block text-ivory/45";

export default function FinalCta({
  finalCta,
  imageSrc,
}: {
  finalCta: FinalCtaContent;
  imageSrc: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const f = finalCta.form.fields;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal py-24 sm:py-32 lg:py-40 grain">
      <div className="absolute inset-0 opacity-35">
        <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(80% 60% at 15% 0%, rgba(224,83,46,0.16) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="light">{finalCta.eyebrow}</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-6 text-ivory">
                {finalCta.heading}
              </h2>
              <p className="mt-7 max-w-md text-base leading-relaxed text-ivory/60 sm:text-lg">
                {finalCta.subline}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Magnetic>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center rounded-full bg-coral px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-coral-deep"
                  >
                    {finalCta.ctaPrimary}
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href={WHATSAPP_LINK("Hi Nordic BnB — I'd like to talk about my property.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-ivory/25 px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:border-ivory/60"
                  >
                    {finalCta.ctaSecondary}
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div id="contact-form" className="scroll-mt-28 rounded-md border border-ivory/10 bg-charcoal-soft p-6 sm:p-10">
                {status === "success" ? (
                  <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-coral">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                        <path d="M4 11.5L9 16.5L18 6" stroke="#F6F1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="font-serif-display mt-6 text-3xl text-ivory">
                      {finalCta.form.successTitle}
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/60">
                      {finalCta.form.successBody}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label className={labelClasses} htmlFor="name">{f.name}</label>
                      <input id="name" name="name" required className={inputClasses} />
                    </div>
                    <div>
                      <label className={labelClasses} htmlFor="email">{f.email}</label>
                      <input id="email" name="email" type="email" required className={inputClasses} />
                    </div>
                    <div>
                      <label className={labelClasses} htmlFor="phone">{f.phone}</label>
                      <input id="phone" name="phone" required className={inputClasses} />
                    </div>
                    <div>
                      <label className={labelClasses} htmlFor="location">{f.location}</label>
                      <input id="location" name="location" className={inputClasses} />
                    </div>
                    <div>
                      <label className={labelClasses} htmlFor="propertyType">{f.propertyType}</label>
                      <input id="propertyType" name="propertyType" className={inputClasses} />
                    </div>
                    <div>
                      <label className={labelClasses} htmlFor="bedrooms">{f.bedrooms}</label>
                      <input id="bedrooms" name="bedrooms" type="number" min={0} className={inputClasses} />
                    </div>
                    <div>
                      <label className={labelClasses} htmlFor="currentlyRented">{f.currentlyRented}</label>
                      <select id="currentlyRented" name="currentlyRented" className={`${inputClasses} appearance-none`}>
                        <option value="yes" className="bg-charcoal-soft">{f.yes}</option>
                        <option value="no" className="bg-charcoal-soft">{f.no}</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses} htmlFor="strategy">{f.strategy}</label>
                      <select id="strategy" name="strategy" className={`${inputClasses} appearance-none`}>
                        <option value="short" className="bg-charcoal-soft">{f.strategyOptions.short}</option>
                        <option value="long" className="bg-charcoal-soft">{f.strategyOptions.long}</option>
                        <option value="unsure" className="bg-charcoal-soft">{f.strategyOptions.unsure}</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClasses} htmlFor="message">{f.message}</label>
                      <textarea id="message" name="message" rows={3} className={`${inputClasses} resize-none`} />
                    </div>

                    <div className="sm:col-span-2 mt-2">
                      <Magnetic>
                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="inline-flex items-center rounded-full bg-coral px-8 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-coral-deep disabled:opacity-60"
                        >
                          {status === "submitting" ? "…" : finalCta.form.submit}
                        </button>
                      </Magnetic>
                      {status === "error" && (
                        <p className="mt-4 text-sm text-coral-soft">
                          Something went wrong — please try WhatsApp instead.
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
