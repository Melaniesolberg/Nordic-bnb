import ServicePage from "@/components/pages/service-page";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const seo = getContent("en").seo.virtualStaging;

export const metadata = pageMetadata("en", "virtualStaging", {
  title: seo.title,
  description: seo.description,
  absoluteTitle: true,
});

export default function Page() {
  return <ServicePage locale="en" service="virtualStaging" />;
}
