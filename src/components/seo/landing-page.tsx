import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import WhatsappFab from "@/components/layout/whatsapp-fab";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import Magnetic from "@/components/ui/magnetic-button";
import Services from "@/components/sections/services";
import FinalCta from "@/components/sections/final-cta";
import { en } from "@/content/en";
import { media } from "@/content/media";
import type { SeoPageConfig } from "@/content/seo-pages";
import { localeHref } from "@/i18n/config";

export default function SeoLandingPage({ page }: { page: SeoPageConfig }) {
  const content = en;
  const formHref = `${localeHref("en", "/")}#contact-form`;

  return (
    <>
      <Nav locale="en" nav={content.nav} />
      <main>
        <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-charcoal pb-20 pt-32 grain">
          <div className="absolute inset-0 opacity-40">
            <Image src={media.heroVilla} alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(90% 70% at 20% 0%, rgba(58,40,28,0.75) 0%, rgba(20,17,13,0.9) 65%)",
            }}
          />
          <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <Eyebrow tone="light">Property management — {page.location}</Eyebrow>
              <h1 className="font-serif-display text-display-md mt-6 max-w-3xl text-ivory">
                {page.h1}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/65 sm:text-lg">
                {page.intro}
              </p>
              <div className="mt-10">
                <Magnetic>
                  <Link
                    href={formHref}
                    className="inline-flex items-center rounded-full bg-coral px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-coral-deep"
                  >
                    Request a property review
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory py-20 sm:py-28">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <Eyebrow>The system</Eyebrow>
              <h2 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">
                {content.system.heading}
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
              {content.system.pillars.map((p, i) => (
                <Reveal key={p.code} delay={i * 0.04}>
                  <div className="h-full bg-ivory-soft p-8">
                    <span className="eyebrow text-coral">{p.code}</span>
                    <p className="mt-4 font-serif-display text-xl italic text-charcoal">{p.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{p.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Services services={content.services} imageSrc={media.listingAfter} />
        <FinalCta
          finalCta={content.finalCta}
          imageSrc={media.poolNight}
          whatsappMessage={content.nav.whatsappMessage}
        />
      </main>
      <Footer
        locale="en"
        footer={content.footer}
        nav={content.nav}
        locationTag={content.hero.locationTag}
      />
      <WhatsappFab label={content.nav.whatsapp} message={content.nav.whatsappMessage} />
    </>
  );
}
