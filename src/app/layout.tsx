import type { Metadata } from "next";
import { fraunces, inter } from "@/lib/fonts";
import { CONTACT } from "@/lib/utils";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT.site),
  title: {
    default: "Nordic BnB — Property Management, Costa del Sol",
    template: "%s — Nordic BnB",
  },
  description:
    "Premium short-term and long-term rental management across Marbella, Mijas, Fuengirola and Benalmádena. Your property, continuously improved.",
  keywords: [
    "property management costa del sol",
    "airbnb management marbella",
    "airbnb management fuengirola",
    "airbnb management benalmadena",
    "property management mijas",
    "long term rental management costa del sol",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      no: "/no",
      es: "/es",
    },
  },
  openGraph: {
    title: "Nordic BnB — Your property. Continuously improved.",
    description:
      "Premium short-term and long-term rental management across Marbella, Mijas, Fuengirola and Benalmádena.",
    url: CONTACT.site,
    siteName: "Nordic BnB",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nordic BnB — Your property. Continuously improved.",
    description:
      "Premium short-term and long-term rental management across Marbella, Mijas, Fuengirola and Benalmádena.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Nordic BnB",
  url: CONTACT.site,
  email: CONTACT.emailGeneral,
  areaServed: ["Marbella", "Mijas", "Fuengirola", "Benalmádena", "Costa del Sol"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andalucía",
    addressCountry: "ES",
  },
  founder: {
    "@type": "Person",
    name: "Petter Solberg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
