"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { locales, localeHref, localeLabels, localeFlags, type Locale } from "@/i18n/config";

export default function LanguageSwitcher({
  locale,
  dark,
  label,
}: {
  locale: Locale;
  dark: boolean;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.78rem] font-medium tracking-wide transition-colors ${
          dark
            ? "border-charcoal/15 text-charcoal/70 hover:border-coral hover:text-coral"
            : "border-ivory/25 text-ivory/80 hover:border-coral hover:text-coral"
        }`}
      >
        <span aria-hidden>{localeFlags[locale]}</span>
        <span>{locale.toUpperCase()}</span>
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            role="listbox"
            className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory py-1.5 shadow-xl"
          >
            {locales.map((l) => (
              <Link
                key={l}
                href={localeHref(l, "/")}
                onClick={() => setOpen(false)}
                role="option"
                aria-selected={l === locale}
                className={`flex items-center gap-2.5 px-4 py-2 text-sm transition-colors hover:bg-sand/60 ${
                  l === locale ? "text-coral" : "text-charcoal/80"
                }`}
              >
                <span aria-hidden>{localeFlags[l]}</span>
                <span>{localeLabels[l]}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
