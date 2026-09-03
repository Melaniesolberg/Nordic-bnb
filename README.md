# Nordic BnB

Flagship marketing website for Nordic BnB — premium short-term and long-term
rental management across Marbella, Mijas, Fuengirola and Benalmádena, Costa
del Sol.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** — design tokens live in `src/app/globals.css`
- **Framer Motion** + **GSAP/ScrollTrigger** for scroll-driven motion
- **Lenis** for smooth scrolling (`src/components/providers/smooth-scroll-provider.tsx`)
- **React Three Fiber / drei / three.js** for the scroll-driven 3D moment in
  the "System" section (`src/components/three/system-scene.tsx`), lazy-loaded
  with a static, no-WebGL fallback

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content & i18n

All copy lives in `src/content/{en,no,es}.ts`, typed against
`src/content/types.ts`. English is served unprefixed at `/`; Norwegian and
Spanish are served at `/no` and `/es` via `src/app/no` and `src/app/es`,
both rendering the same `HomePage` component with a different `locale`.

To add a language: add the locale to `src/i18n/config.ts`, add a matching
`src/content/<locale>.ts` file, and add an `src/app/<locale>/page.tsx` route.

## Imagery

Cinematic imagery is generated via Higgsfield and referenced by URL in
`src/content/media.ts`. Swap any entry for real property photography by
replacing the URL (or moving to a local file under `public/images` and
updating the path) — no component changes required.

## SEO landing pages

Location/service-targeted pages (e.g. `/airbnb-management-marbella`) share
one template (`src/components/seo/landing-page.tsx`) driven by
`src/content/seo-pages.ts`. Add an entry there and a matching route under
`src/app/<slug>/page.tsx` to add another.

## Lead form

The contact form (`src/components/sections/final-cta.tsx`) posts to
`src/app/api/contact/route.ts`, which validates the payload and currently
just logs it — wire in a transactional email provider (e.g. Resend,
Postmark) or CRM before launch.

## Notes

- `prefers-reduced-motion` is respected throughout (Lenis, Framer Motion,
  the pinned 3D scroll sequence).
- The 3D system scene only mounts on desktop viewports with WebGL support;
  mobile and reduced-motion visitors get a static, lightweight equivalent.
