"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/logo";
import Magnetic from "@/components/ui/magnetic-button";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { locales, localeFlags, pageHref, type Locale, type PageKey } from "@/i18n/config";
import type { NavContent } from "@/content/types";

export default function Nav({
  locale,
  nav,
  pageKey = "home",
  overHero = false,
}: {
  locale: Locale;
  nav: NavContent;
  pageKey?: PageKey;
  /** True when the page opens on a dark full-bleed image, so the bar starts transparent. */
  overHero?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || open || !overHero;
  const orderHref = pageHref(locale, "order");

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        dark ? "bg-ivory/90 backdrop-blur-md border-b border-charcoal/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href={pageHref(locale, "home")} className="z-10" onClick={() => setOpen(false)}>
          <Logo tone={dark ? "dark" : "light"} />
        </Link>

        <nav className="hidden items-center gap-9 xl:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`eyebrow transition-colors hover:text-coral ${
                dark ? "text-charcoal/70" : "text-ivory/75"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LanguageSwitcher locale={locale} dark={dark} label={nav.selectLanguage} pageKey={pageKey} />
          <Magnetic>
            <Link
              href={orderHref}
              className={`rounded-full px-5 py-2.5 text-[0.8rem] font-medium tracking-wide transition-colors hover:bg-coral hover:text-ivory ${
                dark ? "bg-charcoal text-ivory" : "bg-ivory text-charcoal"
              }`}
            >
              {nav.cta}
            </Link>
          </Magnetic>
        </div>

        <button
          className="z-10 flex flex-col gap-1.5 xl:hidden"
          aria-label={nav.toggleMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-7 transition-transform duration-300 ${dark ? "bg-charcoal" : "bg-ivory"} ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-7 transition-transform duration-300 ${dark ? "bg-charcoal" : "bg-ivory"} ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-ivory xl:hidden"
          >
            <div className="flex flex-col gap-6 px-6 pb-10 pt-4">
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif-display text-3xl text-charcoal"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={pageHref(l, pageKey)}
                    onClick={() => setOpen(false)}
                    className={`eyebrow flex items-center gap-1.5 rounded-full border border-charcoal/15 px-3 py-1.5 ${
                      l === locale ? "border-coral text-coral" : "text-charcoal/65"
                    }`}
                  >
                    <span aria-hidden>{localeFlags[l]}</span>
                    <span>{l.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
              <Link
                href={orderHref}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-charcoal px-6 py-3.5 text-center text-sm font-medium text-ivory"
              >
                {nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
