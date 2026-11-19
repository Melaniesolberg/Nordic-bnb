import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import type { PhotoBoostRevealContent } from "@/content/types";

/** Full-width drag-to-compare of the same room before and after (photo boost or virtual staging). */
export default function PhotoBoostReveal({
  content,
  beforeSrc,
  afterSrc,
  tone = "light",
  linkHref,
}: {
  content: PhotoBoostRevealContent;
  beforeSrc: string;
  afterSrc: string;
  tone?: "light" | "dark";
  linkHref?: string;
}) {
  const dark = tone === "dark";
  return (
    <section className={`relative py-24 sm:py-32 ${dark ? "bg-charcoal text-ivory" : "bg-ivory"}`}>
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-6">
              <Eyebrow tone={dark ? "light" : "dark"}>{content.eyebrow}</Eyebrow>
              <h2 className={`font-serif-display text-display-md mt-6 ${dark ? "text-ivory" : "text-charcoal"}`}>{content.heading}</h2>
            </div>
            <div className="max-w-xl lg:col-span-6">
              <p className={`text-base leading-relaxed sm:text-lg ${dark ? "text-ivory/70" : "text-charcoal/70"}`}>{content.body}</p>
              {linkHref && content.link && (
                <Link
                  href={linkHref}
                  className={`mt-5 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline ${dark ? "text-coral-soft" : "text-coral-deep"}`}
                >
                  {content.link} <span aria-hidden>→</span>
                </Link>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12">
            <BeforeAfterSlider
              before={beforeSrc}
              after={afterSrc}
              alt={content.afterAlt ?? content.afterLabel}
              beforeAlt={content.beforeAlt}
              beforeLabel={content.beforeLabel}
              afterLabel={content.afterLabel}
              className="aspect-[4/3] sm:aspect-[16/9]"
              sizes="(min-width: 1600px) 1500px, 100vw"
            />
            {content.caption && (
              <p className={`mt-5 text-center text-sm leading-relaxed sm:text-base ${dark ? "text-ivory/80" : "text-charcoal/75"}`}>
                {content.caption}
              </p>
            )}
            <p className={`mt-3 flex items-center justify-center gap-2 text-sm ${dark ? "text-ivory/55" : "text-charcoal/65"}`}>
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
