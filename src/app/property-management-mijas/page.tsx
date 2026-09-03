import type { Metadata } from "next";
import SeoLandingPage from "@/components/seo/landing-page";
import { seoPages } from "@/content/seo-pages";
import { CONTACT } from "@/lib/utils";

const page = seoPages.find((p) => p.slug === "property-management-mijas")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    title: page.title,
    description: page.description,
    url: `${CONTACT.site}/${page.slug}`,
    type: "website",
  },
};

export default function Page() {
  return <SeoLandingPage page={page} />;
}
