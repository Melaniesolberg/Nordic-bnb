import Link from "next/link";
import PageShell from "@/components/layout/page-shell";
import FinalCta from "@/components/sections/final-cta";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import { getContent } from "@/content";
import { media } from "@/content/media";
import { CONTACT } from "@/lib/utils";
import { pageHref, type Locale } from "@/i18n/config";

export function OrderPage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const finalCta = {
    ...content.finalCta,
    eyebrow: content.orderPage.eyebrow,
    heading: content.orderPage.heading,
    subline: content.orderPage.intro,
  };
  return (
    <PageShell locale={locale} pageKey="order" overHero>
      <FinalCta locale={locale} finalCta={finalCta} imageSrc={media.houseDusk} headingAs="h1" />
    </PageShell>
  );
}

function MessagePage({
  locale,
  pageKey,
  copy,
}: {
  locale: Locale;
  pageKey: "thanks" | "home";
  copy: { eyebrow: string; heading: string; intro: string; back: string };
}) {
  return (
    <PageShell locale={locale} pageKey={pageKey}>
      <section className="bg-ivory pb-32 pt-44 text-center sm:pb-40 sm:pt-52">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow className="justify-center">{copy.eyebrow}</Eyebrow>
            <h1 className="font-serif-display text-display-md mt-6 text-charcoal">{copy.heading}</h1>
            <p className="mt-6 text-base leading-relaxed text-charcoal/65 sm:text-lg">{copy.intro}</p>
            <Link
              href={pageHref(locale, "home")}
              className="mt-10 inline-flex items-center rounded-full bg-charcoal px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-coral"
            >
              {copy.back}
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

export function ThanksPage({ locale }: { locale: Locale }) {
  return <MessagePage locale={locale} pageKey="thanks" copy={getContent(locale).thanks} />;
}

export function NotFoundPage({ locale }: { locale: Locale }) {
  return <MessagePage locale={locale} pageKey="home" copy={getContent(locale).notFound} />;
}

// Legal copy is a working draft — have it reviewed by a lawyer before relying on it.
export function LegalPage({ locale, page }: { locale: Locale; page: "privacy" | "terms" | "cookies" }) {
  const legal = getContent(locale).legal[page];
  return (
    <PageShell locale={locale} pageKey={page}>
      <section className="relative bg-ivory pb-24 pt-40 sm:pb-32 sm:pt-48">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <Eyebrow>{legal.eyebrow}</Eyebrow>
            <h1 className="font-serif-display text-display-md mt-6 text-charcoal">{legal.heading}</h1>
            <p className="mt-4 text-sm text-charcoal/65">{legal.updated}</p>
            <p className="mt-6 text-base leading-relaxed text-charcoal/65 sm:text-lg">{legal.intro}</p>
          </Reveal>
          <div className="mt-14 space-y-10 border-t border-charcoal/10 pt-10">
            {legal.sections.map((s, i) => (
              <Reveal key={s.heading} delay={0.04 * i}>
                <h2 className="font-serif-display text-xl text-charcoal">{s.heading}</h2>
                <p className="mt-3 text-base leading-relaxed text-charcoal/70">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-14 inline-block border-t border-charcoal/10 pt-10 text-base text-charcoal transition-colors hover:text-coral"
            >
              {CONTACT.email}
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
