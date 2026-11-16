import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import cases from "@/content/cases.json";
import type { CasesContent } from "@/content/types";

interface Case {
  id: string;
  before: string;
  after: string;
}

/** Real before/after examples. Only rendered when SITE_CONFIG.showCases is on. */
export default function Cases({ content }: { content: CasesContent }) {
  return (
    <section className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">{content.heading}</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {(cases as Case[]).map((c, i) => {
            const caption = content.captions[c.id] ?? "";
            return (
              <Reveal key={c.id} delay={0.06 * i}>
                <BeforeAfterSlider
                  before={c.before}
                  after={c.after}
                  alt={caption}
                  beforeLabel={content.beforeLabel}
                  afterLabel={content.improvedLabel}
                />
                <p className="mt-4 text-sm leading-relaxed text-charcoal/60">{caption}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
