import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import Magnetic from "@/components/ui/magnetic-button";
import { pageHref, type Locale } from "@/i18n/config";
import type { PlanItem, PlansContent } from "@/content/types";

function Check({ className = "text-coral" }: { className?: string }) {
  return (
    <svg className={`mt-1 h-3.5 w-3.5 shrink-0 ${className}`} viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlanCard({
  plan,
  href,
  ctaLabel,
  valueLabel,
}: {
  plan: PlanItem;
  href: string;
  ctaLabel: string;
  valueLabel: string;
}) {
  const featured = Boolean(plan.badge);
  return (
    <div
      className={`relative flex h-full flex-col rounded-sm p-8 sm:p-10 ${
        featured
          ? "bg-ivory text-charcoal ring-2 ring-coral shadow-[0_30px_80px_-30px_rgba(245,66,63,0.45)]"
          : "border border-ivory/15 bg-charcoal-soft text-ivory"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-coral px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-ivory sm:left-10">
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden>
            <path d="M8 1.5l1.9 4 4.4.5-3.3 3 .9 4.3L8 11.1l-3.9 2.2.9-4.3-3.3-3 4.4-.5L8 1.5z" />
          </svg>
          {plan.badge}
        </span>
      )}

      <p className={`text-xs font-medium uppercase tracking-[0.16em] ${featured ? "text-charcoal/50" : "text-ivory/50"}`}>
        {plan.audience}
      </p>
      <h3 className="font-serif-display mt-3 text-3xl sm:text-4xl">{plan.title}</h3>

      <div className="mt-8 flex flex-wrap items-end gap-x-3 gap-y-1">
        <span className="font-serif-display text-5xl text-coral sm:text-6xl">{plan.price}</span>
        <span className={`pb-2 text-sm ${featured ? "text-charcoal/55" : "text-ivory/55"}`}>{plan.pricePeriod}</span>
      </div>
      <p className={`mt-3 text-sm ${featured ? "text-charcoal/55" : "text-ivory/55"}`}>
        {valueLabel} <s>{plan.value}</s>
      </p>
      <span
        className={`mt-4 inline-flex w-fit rounded-full px-3.5 py-1.5 text-sm font-medium ${
          featured ? "bg-coral/12 text-coral-deep" : "bg-coral/20 text-coral-soft"
        }`}
      >
        {plan.savings}
      </span>

      <ul className="mt-8 space-y-3.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
            <Check />
            <span className={featured ? "text-charcoal/80" : "text-ivory/80"}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-10">
        <Magnetic>
          <Link
            href={href}
            className={`inline-flex rounded-full px-7 py-4 text-sm font-medium tracking-wide transition-colors ${
              featured ? "bg-coral text-ivory hover:bg-coral-deep" : "bg-ivory text-charcoal hover:bg-coral hover:text-ivory"
            }`}
          >
            {ctaLabel}
          </Link>
        </Magnetic>
      </div>
    </div>
  );
}

export default function Plans({ locale, plans }: { locale: Locale; plans: PlansContent }) {
  const valueLabel = locale === "no" ? "Verdi kjøpt enkeltvis:" : "Value bought separately:";
  return (
    <section id="avtaler" className="relative scroll-mt-20 overflow-hidden bg-charcoal py-24 text-ivory sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-coral/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <Eyebrow tone="light">{plans.eyebrow}</Eyebrow>
            <span className="rounded-full border border-coral/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-coral-soft">
              {plans.badge}
            </span>
          </div>
          <h2 className="font-serif-display text-display-md mt-6 max-w-3xl">{plans.heading}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg">{plans.intro}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {plans.items.map((plan, i) => (
            <Reveal key={plan.key} delay={0.05 * (i + 1)}>
              <PlanCard
                plan={plan}
                href={`${pageHref(locale, "order")}?service=${plan.key}`}
                ctaLabel={plans.ctaLabel}
                valueLabel={valueLabel}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <ul className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-10">
            {plans.terms.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-ivory/75">
                <Check className="text-coral-soft" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ivory/45">{plans.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
