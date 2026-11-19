import ServicePage from "@/components/pages/service-page";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const seo = getContent("no").seo.saleBoost;

export const metadata = pageMetadata("no", "saleBoost", {
  title: seo.title,
  description: seo.description,
  absoluteTitle: true,
});

export default function Page() {
  return <ServicePage locale="no" service="saleBoost" />;
}
