import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Netlify sets URL at build time to the site's primary address (the custom
// domain once one is connected), so canonical URLs and the sitemap follow
// the domain automatically. Server-only: it isn't inlined into client code.
export const SITE_URL = process.env.URL ?? "https://eiendomly.no";

export const CONTACT = {
  email: "hei@eiendomly.no",
  orgNumber: "930 895 008",
  orgNumberUrl: "https://virksomhet.brreg.no/oppslag/enheter/930895008",
};
