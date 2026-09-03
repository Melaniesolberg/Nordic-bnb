import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import WhatsappFab from "@/components/layout/whatsapp-fab";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import System from "@/components/sections/system";
import BeforeAfter from "@/components/sections/before-after";
import Performance from "@/components/sections/performance";
import Services from "@/components/sections/services";
import Dashboard from "@/components/sections/dashboard";
import Operations from "@/components/sections/operations";
import Compare from "@/components/sections/compare";
import Areas from "@/components/sections/areas";
import About from "@/components/sections/about";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import FinalCta from "@/components/sections/final-cta";
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
        <Hero hero={content.hero} formHref={formHref} imageSrc={media.heroVilla} />
        <Problem problem={content.problem} />
        <System system={content.system} />
        <BeforeAfter
          beforeAfter={content.beforeAfter}
          beforeSrc={media.listingBefore}
          afterSrc={media.listingAfter}
        />
        <Performance performance={content.performance} />
        <Services services={content.services} />
        <Dashboard dashboard={content.dashboard} />
        <Operations operations={content.operations} />
        <Compare compare={content.compare} formHref={formHref} />
        <Areas areas={content.areas} imageSrc={media.coastline} />
        <About about={content.about} />
        <Team team={content.team} />
        <Testimonials testimonials={content.testimonials} />
        <FinalCta finalCta={content.finalCta} />
      </main>
      <Footer locale={locale} footer={content.footer} nav={content.nav} />
      <WhatsappFab label={content.nav.whatsapp} />
    </>
  );
}
