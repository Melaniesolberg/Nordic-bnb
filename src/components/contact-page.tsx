import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import WhatsappFab from "@/components/layout/whatsapp-fab";
import Reveal from "@/components/ui/reveal";
import Eyebrow from "@/components/ui/eyebrow";
import Magnetic from "@/components/ui/magnetic-button";
import Image from "next/image";
import { getContent } from "@/content";
import { media } from "@/content/media";
import { CONTACT } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

export default function ContactPage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { contactPage, about, nav, footer, hero } = content;

  const people = [
    { name: about.founderName, role: about.founderRole, photo: media.contactPetterPhoto, email: CONTACT.emailFounder },
    { name: about.founder2Name, role: about.founder2Role, photo: media.contactMelaniePhoto, email: CONTACT.emailMelanie },
  ];

  return (
    <>
      <Nav locale={locale} nav={nav} />
      <main>
        <section className="relative bg-ivory pb-20 pt-40 sm:pb-28 sm:pt-48 lg:pb-32">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <Eyebrow>{contactPage.eyebrow}</Eyebrow>
              <h1 className="font-serif-display text-display-md mt-6 max-w-2xl text-charcoal">
                {contactPage.heading}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
                {contactPage.intro}
              </p>
            </Reveal>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
              {people.map((p, i) => (
                <Reveal key={p.name} delay={0.08 * i}>
                  <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      sizes="(min-width: 640px) 380px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="mt-5 font-serif-display text-2xl text-charcoal">{p.name}</p>
                  <p className="mt-1 eyebrow text-charcoal/45">{p.role}</p>
                  <a
                    href={`mailto:${p.email}`}
                    className="mt-2 inline-block text-sm text-charcoal/70 transition-colors hover:text-coral"
                  >
                    {p.email}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory-soft py-20 sm:py-28">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <Eyebrow>{contactPage.teamHeading}</Eyebrow>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg">
                {contactPage.teamIntro}
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-charcoal/10 sm:grid-cols-3">
              {contactPage.roles.map((role, i) => (
                <Reveal key={role.title} delay={0.05 * i}>
                  <div className="h-full bg-ivory p-7">
                    <p className="font-serif-display text-lg italic text-charcoal">{role.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/55">{role.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-charcoal py-24 sm:py-32">
          <div className="mx-auto max-w-[1600px] px-5 text-center sm:px-8 lg:px-12">
            <Reveal>
              <Eyebrow tone="light" className="justify-center">
                {contactPage.emailHeading}
              </Eyebrow>
              <h2 className="font-serif-display text-display-md mt-6 text-ivory">
                {contactPage.ctaHeading}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg">
                {contactPage.ctaSubline}
              </p>
              <div className="mt-10 flex justify-center">
                <Magnetic>
                  <a
                    href={`mailto:${CONTACT.emailGeneral}`}
                    className="inline-flex items-center rounded-full bg-coral px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-coral-deep"
                  >
                    {contactPage.ctaButton}
                  </a>
                </Magnetic>
              </div>
              <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-ivory/45">
                {contactPage.recruitCta}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer locale={locale} footer={footer} nav={nav} locationTag={hero.locationTag} />
      <WhatsappFab label={nav.whatsapp} message={nav.whatsappMessage} />
    </>
  );
}
