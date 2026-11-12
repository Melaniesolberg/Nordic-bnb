import BbServicePage from "@/components/boligboost/service-page";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("en");
  return bbMetadata("en", {
    title: `${content.services.saleBoostTagline} – ${content.services.saleBoostHeading}`,
    description: content.services.saleBoostWhatItIs,
    nbPath: "/boligboost/salgsloftet",
    enPath: "/boligboost/en/sale-boost",
  });
}

export default function Page() {
  return <BbServicePage locale="en" service="saleBoost" />;
}
