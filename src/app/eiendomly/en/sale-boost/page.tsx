import BbServicePage from "@/components/eiendomly/service-page";
import { getBbContent } from "@/content/eiendomly";
import { bbMetadata } from "@/content/eiendomly/metadata";

export function generateMetadata() {
  const content = getBbContent("en");
  return bbMetadata("en", {
    title: `${content.services.saleBoostTagline} – ${content.services.saleBoostHeading}`,
    description: content.services.saleBoostWhatItIs,
    nbPath: "/eiendomly/salgsloftet",
    enPath: "/eiendomly/en/sale-boost",
  });
}

export default function Page() {
  return <BbServicePage locale="en" service="saleBoost" />;
}
