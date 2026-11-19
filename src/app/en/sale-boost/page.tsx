import ServicePage from "@/components/pages/service-page";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const seo = getContent("en").seo.saleBoost;

export const metadata = pageMetadata("en", "saleBoost", {
  title: seo.title,
  description: seo.description,
  absoluteTitle: true,
});

export default function Page() {
  return <ServicePage locale="en" service="saleBoost" />;
}
