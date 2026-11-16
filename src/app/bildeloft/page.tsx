import ServicePage from "@/components/pages/service-page";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("no").servicePages.photoBoost;

export const metadata = pageMetadata("no", "photoBoost", {
  title: `${page.eyebrow} – ${page.heading}`,
  description: page.whatItIs,
});

export default function Page() {
  return <ServicePage locale="no" service="photoBoost" />;
}
