import type { Metadata } from "next";
import { fraunces, inter } from "@/lib/fonts";
import { SITE_URL } from "@/lib/utils";
import { getContent } from "@/content";
import { media } from "@/content/media";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";
import "./globals.css";

const no = getContent("no");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: no.meta.title,
    template: "%s – Eiendomly",
  },
  description: no.meta.description,
  keywords: [
    "bedre bilder utleiebolig",
    "airbnb bilder forbedre",
    "digital boligstyling",
    "boligstyling før salg",
    "oppussingsobjekt selge",
    "før og etter bilder bolig",
    "improve rental listing photos",
    "airbnb photo enhancement",
    "virtual staging Norway",
  ],
  openGraph: {
    title: no.meta.title,
    description: no.meta.description,
    url: SITE_URL,
    siteName: "Eiendomly",
    locale: "nb_NO",
    type: "website",
    images: [{ url: media.heroPoster, width: 1920, height: 1080, alt: "Eiendomly" }],
  },
  twitter: {
    card: "summary_large_image",
    title: no.meta.title,
    description: no.meta.description,
    images: [media.heroPoster],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
