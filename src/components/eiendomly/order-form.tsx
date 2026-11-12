"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import BbNav from "@/components/boligboost/nav";
import BbFooter from "@/components/boligboost/footer";
import BbConsentBanner from "@/components/boligboost/consent-banner";
import { getBbContent, bbSlugHref } from "@/content/boligboost";
import type { BbLocale } from "@/content/boligboost/types";

const SERVICE_OPTION_INDEX: Record<string, number> = {
  photoBoost: 0,
  virtualStaging: 1,
  saleBoost: 2,
};

/**
 * Pre-selects the service <select> from a `?service=` query param (e.g.
 * linked from a service detail page) and fills the hidden language/UTM
 * fields. Pure progressive enhancement — the plain HTML form below works
 * for Netlify Forms with or without this running.
 */
function OrderFormHydrate({ locale }: { locale: BbLocale }) {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current?.closest("form") ?? document.querySelector('form[name="bestilling"]');
    if (!form) return;

    const serviceParam = searchParams.get("service");
    const select = form.querySelector<HTMLSelectElement>('select[name="service"]');
    if (select && serviceParam && serviceParam in SERVICE_OPTION_INDEX) {
      select.selectedIndex = SERVICE_OPTION_INDEX[serviceParam];
    }

    const langField = form.querySelector<HTMLInputElement>('input[name="language"]');
    if (langField) langField.value = locale;

    const params = new URLSearchParams(window.location.search);
    (["utm_source", "utm_medium", "utm_campaign"] as const).forEach((key) => {
      const field = form.querySelector<HTMLInputElement>(`input[name="${key}"]`);
      if (field) field.value = params.get(key) ?? "";
    });
  }, [searchParams, locale]);

  return <span ref={formRef} className="hidden" aria-hidden />;
}

export default function BbOrderForm({ locale }: { locale: BbLocale }) {
  const content = getBbContent(locale);
  const thanksHref = bbSlugHref(locale, "thanks");

  return (
    <>
      <BbNav locale={locale} nav={content.nav} />
      <main className="bg-ivory text-charcoal">
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-[640px] px-5 sm:px-8">
            <Reveal>
              <Eyebrow>{content.order.eyebrow}</Eyebrow>
              <h1 className="font-serif-display text-display-md mt-5 text-charcoal">{content.order.heading}</h1>
              <p className="mt-5 text-base leading-relaxed text-charcoal/65">{content.order.intro}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <form
                name="bestilling"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action={thanksHref}
                className="mt-10 flex flex-col gap-5"
              >
                <input type="hidden" name="form-name" value="bestilling" />
                <input type="hidden" name="language" value={locale} />
                <input type="hidden" name="utm_source" />
                <input type="hidden" name="utm_medium" />
                <input type="hidden" name="utm_campaign" />
                <p className="hidden">
                  <label>
                    Don&rsquo;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <Suspense fallback={null}>
                  <OrderFormHydrate locale={locale} />
                </Suspense>

                <label className="flex flex-col gap-1.5 text-sm text-charcoal/75">
                  {content.order.fields.name}
                  <input
                    type="text"
                    name="name"
                    required
                    className="rounded-sm border border-charcoal/15 bg-ivory-soft px-4 py-3 text-charcoal outline-none focus:border-amber-600"
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-charcoal/75">
                  {content.order.fields.email}
                  <input
                    type="email"
                    name="email"
                    required
                    className="rounded-sm border border-charcoal/15 bg-ivory-soft px-4 py-3 text-charcoal outline-none focus:border-amber-600"
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-charcoal/75">
                  {content.order.fields.customerType}
                  <select
                    name="customer_type"
                    required
                    defaultValue=""
                    className="rounded-sm border border-charcoal/15 bg-ivory-soft px-4 py-3 text-charcoal outline-none focus:border-amber-600"
                  >
                    <option value="" disabled>
                      —
                    </option>
                    {content.order.customerTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-charcoal/75">
                  {content.order.fields.service}
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="rounded-sm border border-charcoal/15 bg-ivory-soft px-4 py-3 text-charcoal outline-none focus:border-amber-600"
                  >
                    <option value="" disabled>
                      —
                    </option>
                    {content.order.serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-charcoal/75">
                  {content.order.fields.photosLink}
                  <input
                    type="url"
                    name="photos_link"
                    required
                    className="rounded-sm border border-charcoal/15 bg-ivory-soft px-4 py-3 text-charcoal outline-none focus:border-amber-600"
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-charcoal/75">
                  {content.order.fields.message}
                  <textarea
                    name="message"
                    rows={4}
                    className="rounded-sm border border-charcoal/15 bg-ivory-soft px-4 py-3 text-charcoal outline-none focus:border-amber-600"
                  />
                </label>

                <label className="flex items-start gap-3 text-sm text-charcoal/75">
                  <input type="checkbox" name="rights_confirmed" required className="mt-1" />
                  {content.order.fields.rights}
                </label>

                <label className="flex items-start gap-3 text-sm text-charcoal/75">
                  <input type="checkbox" name="marketing_consent" className="mt-1" />
                  {content.order.fields.marketing}
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-amber-700"
                >
                  {content.order.submit}
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <BbFooter locale={locale} footer={content.footer} />
      <BbConsentBanner copy={content.consent} locale={locale} />
    </>
  );
}
