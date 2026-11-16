import ServicePage from "@/components/pages/service-page";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("no").servicePages.virtualStaging;

export const metadata = pageMetadata("no", "virtualStaging", {
  title: `${page.eyebrow} – ${page.heading}`,
  description: page.whatItIs,
});

export default function Page() {
  return <ServicePage locale="no" service="virtualStaging" />;
}
