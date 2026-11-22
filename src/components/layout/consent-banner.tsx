"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Script from "next/script";
import type { ConsentContent } from "@/content/types";

interface Consent {
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "eiendomly-consent";
const storeListeners = new Set<() => void>();

// Cached so getSnapshot returns a stable value while storage is unchanged;
// useSyncExternalStore re-renders forever if every call returns a new object.
let cachedRaw: string | null | undefined;
let cachedValue: Consent | null = null;

function readRaw(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getSnapshot(): Consent | null {
  const raw = readRaw();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      cachedValue = raw ? (JSON.parse(raw) as Consent) : null;
    } catch {
      cachedValue = null;
    }
  }
  return cachedValue;
}

function getServerSnapshot(): Consent | null {
  return null;
}

function subscribe(onChange: () => void) {
  storeListeners.add(onChange);
  return () => storeListeners.delete(onChange);
}

function writeConsent(consent: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Storage unavailable: the choice applies for this visit only.
  }
  cachedRaw = undefined;
  storeListeners.forEach((onChange) => onChange());
}

// Next.js only exposes NEXT_PUBLIC_-prefixed env vars to the browser, so the
// pixel IDs must be set under these names in Netlify.
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
// Google Tag Manager containers (Google tag + Google Analytics are set up inside
// them). Public by nature; override with a comma-separated NEXT_PUBLIC_GTM_IDS.
const GTM_IDS = (process.env.NEXT_PUBLIC_GTM_IDS ?? "GTM-KKN4BF9K,GTM-M7GG6XJN,GTM-MM4HHW8R")
  .split(",")
  .map((id) => id.trim())
  .filter(Boolean);
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
// Google Ads tag (gtag.js). Loaded on every page with Google Consent Mode v2:
// until the visitor accepts marketing, ad storage is denied, so no cookies are
// set and Google only gets cookieless pings. That lets Google Ads find the tag
// and count orders and free sample requests on the thank-you page.
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18581465439";

function consentState(c: Consent) {
  const ads = c.marketing ? "granted" : "denied";
  return {
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
    analytics_storage: c.analytics ? "granted" : "denied",
  };
}

const outlineButton =
  "rounded-full border border-charcoal/20 px-5 py-2.5 text-sm font-medium text-charcoal/80 transition-colors hover:border-coral hover:text-coral";
const solidButton =
  "rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-coral-deep";

export default function ConsentBanner({ copy }: { copy: ConsentContent }) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [forcedOpen, setForcedOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState<Consent>(consent ?? { analytics: false, marketing: false });
  const visible = consent === null || forcedOpen;

  useEffect(() => {
    if (!consent) return;
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    // gtag.js only accepts the arguments object (not an array), so mirror the
    // standard snippet exactly.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const gtag = function (..._args: unknown[]) {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    gtag("consent", "update", consentState(consent));
    gtag("set", "ads_data_redaction", !consent.marketing);
  }, [consent]);

  useEffect(() => {
    function onTriggerClick(e: MouseEvent) {
      if ((e.target as HTMLElement | null)?.closest("[data-consent-trigger]")) {
        setDraft(consent ?? { analytics: false, marketing: false });
        setSettingsOpen(true);
        setForcedOpen(true);
      }
    }
    document.addEventListener("click", onTriggerClick);
    return () => document.removeEventListener("click", onTriggerClick);
  }, [consent]);

  function save(next: Consent) {
    writeConsent(next);
    setForcedOpen(false);
    setSettingsOpen(false);
  }

  return (
    <>
      {/* Consent Mode defaults. Read straight from storage so the defaults are
          right even if this runs before React has hydrated. Must come first. */}
      <Script id="google-consent-default" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var c = {};
          try { c = JSON.parse(localStorage.getItem('${STORAGE_KEY}')) || {}; } catch (e) {}
          var ads = c.marketing ? 'granted' : 'denied';
          gtag('consent', 'default', {
            ad_storage: ads,
            ad_user_data: ads,
            ad_personalization: ads,
            analytics_storage: c.analytics ? 'granted' : 'denied'
          });
          gtag('set', 'ads_data_redaction', !c.marketing);
          gtag('js', new Date());
          ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}`}
      </Script>
      {GOOGLE_ADS_ID && (
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="afterInteractive" />
      )}
      {GTM_IDS.length > 0 && consent?.analytics && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            ${JSON.stringify(GTM_IDS)}.forEach(function(i){
              var w=window,d=document;w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName('script')[0],j=d.createElement('script');
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);
            });`}
        </Script>
      )}
      {GA4_ID && consent?.analytics && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');`}
          </Script>
        </>
      )}
      {META_PIXEL_ID && consent?.marketing && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
            if (/^\/(takk|en\/thanks)\/?$/.test(location.pathname)) fbq('track', 'Lead');`}
        </Script>
      )}

      {visible && (
        <div
          role="dialog"
          aria-label={copy.settings}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-charcoal/10 bg-ivory px-5 py-5 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] sm:px-8"
        >
          <div className="mx-auto max-w-[1600px] lg:px-4">
            {!settingsOpen ? (
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-charcoal/75">{copy.message}</p>
                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={() => setSettingsOpen(true)} className={outlineButton}>
                    {copy.settings}
                  </button>
                  <button
                    type="button"
                    onClick={() => save({ analytics: false, marketing: false })}
                    className={outlineButton}
                  >
                    {copy.rejectAll}
                  </button>
                  <button
                    type="button"
                    onClick={() => save({ analytics: true, marketing: true })}
                    className={solidButton}
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
                    {copy.analytics}
                  </label>
                  <label className="flex items-center gap-2 text-sm text-charcoal/80">
                    <input
                      type="checkbox"
                      checked={draft.marketing}
                      onChange={(e) => setDraft((d) => ({ ...d, marketing: e.target.checked }))}
                    />
                    {copy.marketing}
                  </label>
                  <button type="button" onClick={() => save(draft)} className={`${solidButton} sm:ml-auto`}>
                    {copy.save}
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
