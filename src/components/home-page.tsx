import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import WhatsappFab from "@/components/layout/whatsapp-fab";
import Hero from "@/components/sections/hero";
import PropertyShowcase from "@/components/sections/property-showcase";
import System from "@/components/sections/system";
import BeforeAfter from "@/components/sections/before-after";
import Portfolio from "@/components/sections/portfolio";
import Services from "@/components/sections/services";
import Dashboard from "@/components/sections/dashboard";
import Compare from "@/components/sections/compare";
import Areas from "@/components/sections/areas";
import About from "@/components/sections/about";
import Testimonials from "@/components/sections/testimonials";
import FinalCta from "@/components/sections/final-cta";
import SectionDivider from "@/components/ui/section-divider";
import { getContent } from "@/content";
import { media } from "@/content/media";
import { localeHref, type Locale } from "@/i18n/config";

/**
 * The 7-step operational cycle re-orders the Operations content (still
 * authored once, in content.operations.steps) into a loop starting at
 * "Property inspected" rather than "Booking confirmed" — see original
 * indices: 0 booking confirmed, 1 guest prepared, 2 cleaner scheduled,
 * 3 property inspected, 4 guest arrives, 5 review collected, 6 performance
 * feeds pricing.
 */
const CYCLE_ORDER = [3, 4, 5, 6, 0, 1, 2];

export default function HomePage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const formHref = `${localeHref(locale, "/")}#contact-form`;

  const processSteps = CYCLE_ORDER.map((stepIndex, i) => {
    const step = content.operations.steps[stepIndex];
    return {
      code: String(i + 1).padStart(2, "0"),
      title: step.title,
      description: step.detail,
    };
  });

  return (
    <>
      <Nav locale={locale} nav={content.nav} />
      <main>
        <Hero hero={content.hero} formHref={formHref} imageSrc={media.villaAerial} />
        <BeforeAfter
          beforeAfter={content.beforeAfter}
          beforeSrc={media.listingBefore}
          afterSrc={media.listingAfter}
        />
        <PropertyShowcase
          imageSrc={media.seaView}
          eyebrow={content.showcase1.eyebrow}
          headline={content.showcase1.heading}
        />
        <System
          system={{ ...content.system, pillars: processSteps }}
          bgImageSrc={media.nightVilla}
          secondaryIntro={content.operations.intro}
          transformationImages={[
            media.detailShot,
            media.guestArrival,
            media.seaView,
            media.aerialCoast,
            media.interiorLiving,
            media.stylingDetail,
            media.cleaningTeam,
          ]}
        />
        <SectionDivider tone="light" />
        <Portfolio
          portfolio={content.portfolio}
          images={[
            { before: media.listingBefore, after: media.listingAfter },
            { before: media.villaBefore, after: media.villaAfter },
            { before: media.houseBefore, after: media.houseAfter },
          ]}
        />
        <Testimonials testimonials={content.testimonials} />
        <PropertyShowcase
          imageSrc={media.interiorLiving}
          eyebrow={content.showcase2.eyebrow}
          headline={content.showcase2.heading}
          align="right"
        />
        <Services services={content.services} imageSrc={media.poolDay} />
        <Areas
          areas={content.areas}
          imageSrc={media.coastline}
          detailImages={[media.marbellaLifestyle, media.mijasScene, media.fuengirolaScene, media.benalmadenaScene]}
        />
        <Dashboard
          dashboard={content.dashboard}
          bgImageSrc={media.aerialCoast}
          cardImageSrc={media.heroVilla}
        />
        <About about={content.about} bgImageSrc={media.sunsetSea} founderPhotoSrc={media.founderPetter} />
        <SectionDivider tone="light" />
        <FinalCta
          finalCta={content.finalCta}
          imageSrc={media.nightVilla}
          whatsappMessage={content.nav.whatsappMessage}
        />
        <Compare
          compare={content.compare}
          formHref={formHref}
          shortImageSrc={media.marbellaLifestyle}
          longImageSrc={media.poolNight}
        />
      </main>
      <Footer
        locale={locale}
        footer={content.footer}
        nav={content.nav}
        locationTag={content.hero.locationTag}
      />
      <WhatsappFab label={content.nav.whatsapp} message={content.nav.whatsappMessage} />
    </>
  );
}
