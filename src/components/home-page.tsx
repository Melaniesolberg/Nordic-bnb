import PageShell from "@/components/layout/page-shell";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import PhotoBoostReveal from "@/components/sections/photo-boost-reveal";
import PropertyShowcase from "@/components/sections/property-showcase";
import System from "@/components/sections/system";
import Cases from "@/components/sections/cases";
import Services from "@/components/sections/services";
import Areas from "@/components/sections/areas";
import About from "@/components/sections/about";
import Compare from "@/components/sections/compare";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";
import SectionDivider from "@/components/ui/section-divider";
import { getContent } from "@/content";
import { media } from "@/content/media";
import { SITE_CONFIG } from "@/content/config";
import { homeJsonLd } from "@/content/json-ld";
import { localeHref, type Locale } from "@/i18n/config";

export default function HomePage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const formHref = localeHref(locale, "/#contact-form");

  return (
    <PageShell locale={locale} pageKey="home" overHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd(locale)) }} />
      <Hero
        hero={content.hero}
        formHref={formHref}
        secondaryHref={localeHref(locale, "/#services")}
        imageSrc={media.heroPoster}
        videoSrc={media.heroVideo}
        mobileVideoSrc={media.heroVideoMobile}
      />
      <Problem locale={locale} problem={content.problem} imageSrc={media.livingBefore} />
      <PhotoBoostReveal content={content.photoBoost} beforeSrc={media.livingBefore} afterSrc={media.livingAfter} />
      <System
        system={content.howItWorks}
        bgImageSrc={media.houseDusk}
        transformationImages={[media.stepPhone, media.stepEditing, media.stepListing]}
      />
      {SITE_CONFIG.showCases && <Cases content={content.cases} />}
      <SectionDivider tone="light" iconClassName="h-10 w-10" />
      <PropertyShowcase
        imageSrc={media.stagedLiving}
        eyebrow={content.showcase2.eyebrow}
        headline={content.showcase2.heading}
        align="right"
      />
      <Services locale={locale} services={content.services} imageSrc={media.kitchenRefresh} />
      <Areas
        areas={content.audiences}
        imageSrc={media.harbourTown}
        detailImages={[
          media.audienceCabin,
          media.audienceRental,
          media.audienceSeller,
          media.audienceAgent,
          media.audienceHotel,
          media.audienceRestaurant,
        ]}
      />
      <About about={content.about} bgImageSrc={media.livingAfter} founderPhotoSrc={media.founderPhoto} />
      <SectionDivider tone="light" iconClassName="h-10 w-10" />
      <Compare
        compare={content.honesty}
        formHref={formHref}
        shortImageSrc={media.livingAfter}
        longImageSrc={media.heroAerial}
      />
      <Faq faq={content.faq} />
      <FinalCta locale={locale} finalCta={content.finalCta} imageSrc={media.houseDusk} />
    </PageShell>
  );
}
