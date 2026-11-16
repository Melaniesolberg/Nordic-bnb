"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import Magnetic from "@/components/ui/magnetic-button";
import { pageHref, type Locale } from "@/i18n/config";
import { CONTACT } from "@/lib/utils";
import type { FinalCtaContent } from "@/content/types";

const FORM_NAME = "bestilling";

const inputClasses =
  "w-full border-b border-ivory/25 bg-transparent py-3 text-ivory placeholder:text-ivory/35 focus:border-coral focus:outline-none transition-colors";
const labelClasses = "eyebrow mb-2 block text-ivory/45";

/**
 * Pre-selects the service from a `?service=` link (from a service page) and
 * fills the hidden UTM fields. Writes to the DOM directly so the form stays
 * plain HTML and needs no extra React state.
 */
function FormHydrate() {
  const searchParams = useSearchParams();
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const form = ref.current?.closest("form");
    if (!form) return;
    const service = searchParams.get("service");
    const select = form.querySelector<HTMLSelectElement>('select[name="service"]');
    if (select && service && [...select.options].some((o) => o.dataset.key === service)) {
      select.value = [...select.options].find((o) => o.dataset.key === service)!.value;
    }
    for (const key of ["utm_source", "utm_medium", "utm_campaign"]) {
      const field = form.querySelector<HTMLInputElement>(`input[name="${key}"]`);
      if (field) field.value = searchParams.get(key) ?? "";
    }
  }, [searchParams]);

  return <span ref={ref} hidden />;
}

export default function FinalCta({
  locale,
  finalCta,
  imageSrc,
  headingAs = "h2",
}: {
  locale: Locale;
  finalCta: FinalCtaContent;
  imageSrc: string;
  /** The order page renders this section as its main heading. */
  headingAs?: "h1" | "h2";
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const f = finalCta.form.fields;
  const Heading = headingAs;

  // Netlify Forms on the Next.js runtime only accepts submissions posted to a
  // static file, so this posts to the blueprint in public/__forms.html.
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = new URLSearchParams(new FormData(e.currentTarget) as unknown as Record<string, string>);
    setStatus("submitting");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`form_submit_${res.status}`);
      router.push(pageHref(locale, "thanks"));
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className={`relative overflow-hidden bg-charcoal grain ${
        headingAs === "h1" ? "pb-24 pt-36 sm:pb-32 sm:pt-44" : "py-24 sm:py-32 lg:py-40"
      }`}
    >
      <div className="absolute inset-0 opacity-35">
        <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(80% 60% at 15% 0%, rgba(224,83,46,0.16) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="light">{finalCta.eyebrow}</Eyebrow>
              <Heading className="font-serif-display text-display-md mt-6 text-ivory">{finalCta.heading}</Heading>
              <p className="mt-7 max-w-md text-base leading-relaxed text-ivory/60 sm:text-lg">{finalCta.subline}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-6 inline-block text-sm text-ivory/55 transition-colors hover:text-coral"
              >
                {CONTACT.email}
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div id="contact-form" className="scroll-mt-28 rounded-md border border-ivory/10 bg-charcoal-soft p-6 sm:p-10">
                <form
                  name={FORM_NAME}
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
                >
                  <input type="hidden" name="form-name" value={FORM_NAME} />
                  <input type="hidden" name="language" value={locale} />
                  <input type="hidden" name="utm_source" />
                  <input type="hidden" name="utm_medium" />
                  <input type="hidden" name="utm_campaign" />
                  <p hidden>
                    <label>
                      Ikke fyll ut dette feltet: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>
                  <Suspense fallback={null}>
                    <FormHydrate />
                  </Suspense>

                  <div>
                    <label className={labelClasses} htmlFor="name">{f.name}</label>
                    <input id="name" name="name" required autoComplete="name" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses} htmlFor="email">{f.email}</label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses} htmlFor="customer_type">{f.customerType}</label>
                    <select id="customer_type" name="customer_type" required defaultValue="" className={`${inputClasses} appearance-none`}>
                      <option value="" disabled className="bg-charcoal-soft">{finalCta.form.selectPlaceholder}</option>
                      {finalCta.form.customerTypes.map((t) => (
                        <option key={t} value={t} className="bg-charcoal-soft">{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses} htmlFor="service">{f.service}</label>
                    <select id="service" name="service" required defaultValue="" className={`${inputClasses} appearance-none`}>
                      <option value="" disabled className="bg-charcoal-soft">{finalCta.form.selectPlaceholder}</option>
                      {finalCta.form.serviceOptions.map((s) => (
                        <option key={s.key} value={s.label} data-key={s.key} className="bg-charcoal-soft">{s.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClasses} htmlFor="photos_link">{f.photosLink}</label>
                    <input id="photos_link" name="photos_link" type="url" required placeholder="https://" className={inputClasses} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClasses} htmlFor="message">{f.message}</label>
                    <textarea id="message" name="message" rows={3} className={`${inputClasses} resize-none`} />
                  </div>

                  <label className="flex items-start gap-3 text-sm leading-relaxed text-ivory/75 sm:col-span-2">
                    <input type="checkbox" name="rights_confirmed" value="ja" required className="mt-1 accent-coral" />
                    {f.rights}
                  </label>
                  <label className="flex items-start gap-3 text-sm leading-relaxed text-ivory/60 sm:col-span-2">
                    <input type="checkbox" name="marketing_consent" value="ja" className="mt-1 accent-coral" />
                    {f.marketing}
                  </label>

                  <div className="mt-2 sm:col-span-2">
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
                      <p role="alert" className="mt-4 text-sm text-coral-soft">
                        {finalCta.form.errorMessage}{" "}
                        <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a>.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
