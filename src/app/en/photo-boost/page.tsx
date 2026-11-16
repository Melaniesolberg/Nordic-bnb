import ServicePage from "@/components/pages/service-page";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("en").servicePages.photoBoost;

export const metadata = pageMetadata("en", "photoBoost", {
  title: `${page.eyebrow} – ${page.heading}`,
  description: page.whatItIs,
});

export default function Page() {
  return <ServicePage locale="en" service="photoBoost" />;
}
