import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import WhatsappFab from "@/components/layout/whatsapp-fab";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import PropertyShowcase from "@/components/sections/property-showcase";
import System from "@/components/sections/system";
import BeforeAfter from "@/components/sections/before-after";
import Portfolio from "@/components/sections/portfolio";
import Performance from "@/components/sections/performance";
import Services from "@/components/sections/services";
import Dashboard from "@/components/sections/dashboard";
import Operations from "@/components/sections/operations";
import Compare from "@/components/sections/compare";
import Areas from "@/components/sections/areas";
import About from "@/components/sections/about";
import Testimonials from "@/components/sections/testimonials";
import FinalCta from "@/components/sections/final-cta";
import SectionDivider from "@/components/ui/section-divider";
import { getContent } from "@/content";
import { media } from "@/content/media";
import { localeHref, type Locale } from "@/i18n/config";

export default function HomePage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const formHref = `${localeHref(locale, "/")}#contact-form`;

  return (
    <>
      <Nav locale={locale} nav={content.nav} />
      <main>
        <Hero hero={content.hero} formHref={formHref} imageSrc={media.villaAerial} />
        <Problem problem={content.problem} imageSrc={media.listingBefore} />
        <PropertyShowcase
          imageSrc={media.seaView}
          eyebrow={content.showcase1.eyebrow}
          headline={content.showcase1.heading}
        />
        <System
          system={content.system}
          bgImageSrc={media.nightVilla}
          transformationImages={[
            media.listingBefore,
            media.interiorLiving,
            media.poolDay,
            media.heroVilla,
            media.stylingDetail,
            media.listingAfter,
          ]}
        />
        <SectionDivider tone="light" />
        <BeforeAfter
          beforeAfter={content.beforeAfter}
          beforeSrc={media.listingBefore}
          afterSrc={media.listingAfter}
        />
        <Portfolio
          portfolio={content.portfolio}
          images={[
            { before: media.listingBefore, after: media.listingAfter },
            { before: media.villaBefore, after: media.villaAfter },
            { before: media.houseBefore, after: media.houseAfter },
          ]}
        />
        <Performance performance={content.performance} />
        <PropertyShowcase
          imageSrc={media.interiorLiving}
          eyebrow={content.showcase2.eyebrow}
          headline={content.showcase2.heading}
          align="right"
        />
        <Services services={content.services} imageSrc={media.poolDay} />
        <Dashboard
          dashboard={content.dashboard}
          bgImageSrc={media.aerialCoast}
          cardImageSrc={media.heroVilla}
        />
        <Operations
          operations={content.operations}
          imageSrc={media.heroVilla}
          sequenceImages={[media.stylingDetail, media.cleaningTeam, media.guestArrival, media.detailShot]}
        />
        <Compare
          compare={content.compare}
          formHref={formHref}
          shortImageSrc={media.marbellaLifestyle}
          longImageSrc={media.poolNight}
        />
        <Areas
          areas={content.areas}
          imageSrc={media.coastline}
          detailImages={[media.marbellaLifestyle, media.mijasScene, media.fuengirolaScene, media.benalmadenaScene]}
        />
        <About about={content.about} bgImageSrc={media.sunsetSea} />
        <Testimonials testimonials={content.testimonials} />
        <SectionDivider tone="light" />
        <FinalCta
          finalCta={content.finalCta}
          imageSrc={media.nightVilla}
          whatsappMessage={content.nav.whatsappMessage}
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
