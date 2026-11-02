import Reveal from "@/components/ui/reveal";
import BbNav from "@/components/boligboost/nav";
import BbFooter from "@/components/boligboost/footer";
import { getBbContent } from "@/content/boligboost";
import type { BbLocale } from "@/content/boligboost/types";

// Legal copy on this page and the terms/cookies pages is a working draft —
// have it quality-checked by a lawyer before relying on it in production.
export default function BbLegalPage({
  locale,
  page,
}: {
  locale: BbLocale;
  page: "privacy" | "terms" | "cookies";
}) {
  const content = getBbContent(locale);
  const legal = content.legal[page];
  const updated = "updated" in legal ? legal.updated : undefined;

  return (
    <>
      <BbNav locale={locale} nav={content.nav} />
      <main className="bg-ivory text-charcoal">
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-[720px] px-5 sm:px-8">
            <Reveal>
              <h1 className="font-serif-display text-display-md text-charcoal">{legal.heading}</h1>
              {updated && <p className="mt-3 text-sm text-charcoal/50">{updated}</p>}
              <p className="mt-6 text-base leading-relaxed text-charcoal/65">{legal.intro}</p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-8">
              {legal.sections.map((section, i) => (
                <Reveal key={section.heading} delay={0.04 * i}>
                  <h2 className="font-serif-display text-xl text-charcoal">{section.heading}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{section.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <BbFooter locale={locale} footer={content.footer} />
    </>
  );
}
