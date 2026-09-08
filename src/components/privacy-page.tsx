import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import WhatsappFab from "@/components/layout/whatsapp-fab";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import { getContent } from "@/content";
import { CONTACT } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

export default function PrivacyPage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { privacyPage, nav, footer, hero } = content;

  return (
    <>
      <Nav locale={locale} nav={nav} />
      <main>
        <section className="relative bg-ivory pb-24 pt-40 sm:pb-32 sm:pt-48">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
            <Reveal>
              <Eyebrow>{privacyPage.eyebrow}</Eyebrow>
              <h1 className="font-serif-display text-display-md mt-6 text-charcoal">
                {privacyPage.heading}
              </h1>
              <p className="mt-4 text-sm text-charcoal/45">{privacyPage.updated}</p>
              <p className="mt-6 text-base leading-relaxed text-charcoal/65 sm:text-lg">
                {privacyPage.intro}
              </p>
            </Reveal>

            <div className="mt-14 space-y-10 border-t border-charcoal/10 pt-10">
              {privacyPage.sections.map((s, i) => (
                <Reveal key={s.heading} delay={0.04 * i}>
                  <h2 className="font-serif-display text-xl text-charcoal">{s.heading}</h2>
                  <p className="mt-3 text-base leading-relaxed text-charcoal/70">{s.body}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-14 border-t border-charcoal/10 pt-10">
                <h2 className="font-serif-display text-xl text-charcoal">{privacyPage.contactHeading}</h2>
                <p className="mt-3 text-base leading-relaxed text-charcoal/70">{privacyPage.contactBody}</p>
                <a
                  href={`mailto:${CONTACT.emailSupport}`}
                  className="mt-3 inline-block text-base text-charcoal transition-colors hover:text-coral"
                >
                  {CONTACT.emailSupport}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer locale={locale} footer={footer} nav={nav} locationTag={hero.locationTag} />
      <WhatsappFab label={nav.whatsapp} message={nav.whatsappMessage} />
    </>
  );
}
