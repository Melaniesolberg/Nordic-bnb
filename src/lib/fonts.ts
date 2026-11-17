import localFont from "next/font/local";

// Self-hosted (from @fontsource-variable, SIL OFL) so production builds never
// depend on reaching Google Fonts – a failed fetch there used to break deploys.

export const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-latin-full-normal.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/fraunces-latin-full-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

export const inter = localFont({
  src: [{ path: "../fonts/inter-latin-wght-normal.woff2", style: "normal", weight: "100 900" }],
  variable: "--font-inter",
  display: "swap",
});
