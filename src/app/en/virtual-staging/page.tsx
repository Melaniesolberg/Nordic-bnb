import ServicePage from "@/components/pages/service-page";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("en").servicePages.virtualStaging;

export const metadata = pageMetadata("en", "virtualStaging", {
  title: `${page.eyebrow} – ${page.heading}`,
  description: page.whatItIs,
});

export default function Page() {
  return <ServicePage locale="en" service="virtualStaging" />;
}
