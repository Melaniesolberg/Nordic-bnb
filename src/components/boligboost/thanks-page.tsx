import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import BbNav from "@/components/boligboost/nav";
import BbFooter from "@/components/boligboost/footer";
import { getBbContent, bbHref } from "@/content/boligboost";
import type { BbLocale } from "@/content/boligboost/types";

export default function BbThanksPage({ locale }: { locale: BbLocale }) {
  const content = getBbContent(locale);

  return (
    <>
      <BbNav locale={locale} nav={content.nav} />
      <main className="bg-ivory text-charcoal">
        <section className="py-32 text-center sm:py-40">
          <div className="mx-auto max-w-[600px] px-5 sm:px-8">
            <Reveal>
              <h1 className="font-serif-display text-display-md text-charcoal">{content.thanks.heading}</h1>
              <p className="mt-5 text-base leading-relaxed text-charcoal/65">{content.thanks.body}</p>
              <Link
                href={bbHref(locale)}
                className="mt-8 inline-flex items-center rounded-full border border-charcoal/20 px-7 py-4 text-sm font-medium tracking-wide text-charcoal/80 transition-colors hover:border-amber-600 hover:text-amber-700"
              >
                {content.thanks.back}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <BbFooter locale={locale} footer={content.footer} />
    </>
  );
}
