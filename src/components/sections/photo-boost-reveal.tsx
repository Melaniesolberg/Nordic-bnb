import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import type { PhotoBoostRevealContent } from "@/content/types";

/** Full-width drag-to-compare of the same room before and after a photo boost. */
export default function PhotoBoostReveal({
  content,
  beforeSrc,
  afterSrc,
}: {
  content: PhotoBoostRevealContent;
  beforeSrc: string;
  afterSrc: string;
}) {
  return (
    <section className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-6">
              <Eyebrow>{content.eyebrow}</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-6 text-charcoal">{content.heading}</h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg lg:col-span-6">{content.body}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12">
            <BeforeAfterSlider
              before={beforeSrc}
              after={afterSrc}
              alt={content.afterLabel}
              beforeLabel={content.beforeLabel}
              afterLabel={content.afterLabel}
              className="aspect-[4/3] sm:aspect-[16/9]"
              sizes="(min-width: 1600px) 1500px, 100vw"
            />
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-charcoal/55">
              <svg width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M5 1L1 5l4 4M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {content.hint}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
