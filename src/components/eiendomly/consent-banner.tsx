"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Script from "next/script";
import type { BbContent } from "@/content/eiendomly/types";

interface BbConsent {
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "bb-consent";
const storeListeners = new Set<() => void>();

// Cached so getSnapshot returns a referentially stable value when the
// underlying storage hasn't changed — required by useSyncExternalStore,
// which otherwise treats a fresh object on every call as a perpetual
// change and re-renders in a loop.
let cachedRaw: string | null | undefined;
let cachedValue: BbConsent | null = null;

function readRaw(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getSnapshot(): BbConsent | null {
  const raw = readRaw();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      cachedValue = raw ? (JSON.parse(raw) as BbConsent) : null;
    } catch {
      cachedValue = null;
    }
  }
  return cachedValue;
}

function getServerSnapshot(): BbConsent | null {
  return null;
}

function subscribe(onChange: () => void) {
  storeListeners.add(onChange);
  return () => storeListeners.delete(onChange);
}

function writeConsent(consent: BbConsent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Storage unavailable (private mode, blocked site data) — consent just
    // won't persist across visits; the banner will show again next time.
  }
  cachedRaw = undefined; // force getSnapshot to re-read on next call
  storeListeners.forEach((onChange) => onChange());
}

// Client-exposed copies of the pixel IDs. Next.js only inlines
// NEXT_PUBLIC_-prefixed env vars into the browser bundle, so that's the
// prefix these must be set under in the Netlify/Vercel environment —
// even though the brief names them META_PIXEL_ID and GA4_ID.
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function BbConsentBanner({ copy, locale }: { copy: BbContent["consent"]; locale: "nb" | "en" }) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [forcedOpen, setForcedOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState<BbConsent>(consent ?? { analytics: false, marketing: false });
  const visible = consent === null || forcedOpen;

  useEffect(() => {
    function onTriggerClick(e: MouseEvent) {
      if ((e.target as HTMLElement | null)?.closest("[data-bb-consent-trigger]")) {
        setDraft(consent ?? { analytics: false, marketing: false });
        setSettingsOpen(true);
        setForcedOpen(true);
      }
    }
    document.addEventListener("click", onTriggerClick);
    return () => document.removeEventListener("click", onTriggerClick);
  }, [consent]);

  function save(next: BbConsent) {
    writeConsent(next);
    setForcedOpen(false);
    setSettingsOpen(false);
  }

  return (
    <>
      {GA4_ID && consent?.analytics && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
          <Script id="bb-ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');`}
          </Script>
        </>
      )}
      {META_PIXEL_ID && consent?.marketing && (
        <Script id="bb-meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');`}
        </Script>
      )}

      {visible && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/10 bg-ivory px-5 py-5 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            {!settingsOpen ? (
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-charcoal/75">{copy.message}</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSettingsOpen(true)}
                    className="rounded-full border border-charcoal/20 px-5 py-2.5 text-sm font-medium text-charcoal/80 transition-colors hover:border-amber-600 hover:text-amber-700"
                  >
                    {copy.settings}
                  </button>
                  <button
                    type="button"
                    onClick={() => save({ analytics: false, marketing: false })}
                    className="rounded-full border border-charcoal/20 px-5 py-2.5 text-sm font-medium text-charcoal/80 transition-colors hover:border-amber-600 hover:text-amber-700"
                  >
                    {copy.rejectAll}
                  </button>
                  <button
                    type="button"
                    onClick={() => save({ analytics: true, marketing: true })}
                    className="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-amber-700"
                  >
                    {copy.acceptAll}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-sm text-charcoal/75">{copy.message}</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <label className="flex items-center gap-2 text-sm text-charcoal/80">
                    <input
                      type="checkbox"
                      checked={draft.analytics}
                      onChange={(e) => setDraft((d) => ({ ...d, analytics: e.target.checked }))}
                    />
                    {locale === "nb" ? "Analyse" : "Analytics"}
                  </label>
                  <label className="flex items-center gap-2 text-sm text-charcoal/80">
                    <input
                      type="checkbox"
                      checked={draft.marketing}
                      onChange={(e) => setDraft((d) => ({ ...d, marketing: e.target.checked }))}
                    />
                    {locale === "nb" ? "Markedsføring" : "Marketing"}
                  </label>
                  <button
                    type="button"
                    onClick={() => save(draft)}
                    className="ml-auto rounded-full bg-amber-600 px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-amber-700"
                  >
                    {locale === "nb" ? "Lagre valg" : "Save choices"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
