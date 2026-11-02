"use client";

import { useState } from "react";
import Link from "next/link";
import Magnetic from "@/components/ui/magnetic-button";
import { bbHref, bbSlugHref } from "@/content/boligboost";
import type { BbContent, BbLocale } from "@/content/boligboost/types";

export default function BbNav({ locale, nav }: { locale: BbLocale; nav: BbContent["nav"] }) {
  const [open, setOpen] = useState(false);
  const otherLocale: BbLocale = locale === "nb" ? "en" : "nb";

  const links = [
    { href: bbHref(locale), label: nav.home },
    { href: bbHref(locale, "#tjenester"), label: nav.services },
    { href: bbHref(locale, "#om"), label: nav.about },
    { href: bbHref(locale, "#faq"), label: nav.faq },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href={bbHref(locale)} className="font-serif-display text-xl text-charcoal">
          Boligboost
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-charcoal/75 lg:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="transition-colors hover:text-amber-700">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={bbHref(otherLocale)}
            aria-label={nav.langLabel}
            className="rounded-full border border-charcoal/15 px-3 py-1.5 text-[0.78rem] font-medium tracking-wide text-charcoal/70 transition-colors hover:border-amber-600 hover:text-amber-700"
          >
            {locale === "nb" ? "NO | EN" : "EN | NO"}
          </Link>
          <Magnetic>
            <Link
              href={bbSlugHref(locale, "order")}
              className="inline-flex items-center rounded-full bg-amber-600 px-5 py-2.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-amber-700"
            >
              {nav.orderCta}
            </Link>
          </Magnetic>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={nav.langLabel}
          className="flex items-center gap-2 rounded-full border border-charcoal/15 px-3 py-1.5 text-sm text-charcoal/80 lg:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal/10 bg-ivory px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm text-charcoal/80">
            {links.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href={bbHref(otherLocale)} onClick={() => setOpen(false)}>
              {locale === "nb" ? "English" : "Norsk"}
            </Link>
            <Link
              href={bbSlugHref(locale, "order")}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-amber-600 px-5 py-2.5 font-medium text-ivory"
            >
              {nav.orderCta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
