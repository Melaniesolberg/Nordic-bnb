import Reveal from "@/components/ui/reveal";
import RichText from "@/components/ui/rich-text";
import Eyebrow from "@/components/ui/eyebrow";
import type { FaqContent } from "@/content/types";

export default function Faq({ faq }: { faq: FaqContent }) {
  return (
    <section id="faq" className="relative scroll-mt-20 bg-ivory-soft py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 text-charcoal">{faq.heading}</h2>
        </Reveal>

        <div className="divide-y divide-charcoal/10 border-y border-charcoal/10 lg:col-span-8">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={0.03 * i} y={12}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif-display text-xl text-charcoal sm:text-2xl [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-coral transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/65"><RichText text={item.a} linkClassName="text-coral-deep" /></p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
