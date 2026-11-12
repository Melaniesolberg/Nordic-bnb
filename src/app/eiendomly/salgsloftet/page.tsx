import BbServicePage from "@/components/boligboost/service-page";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: `${content.services.saleBoostTagline} – ${content.services.saleBoostHeading}`,
    description: content.services.saleBoostWhatItIs,
    nbPath: "/boligboost/salgsloftet",
    enPath: "/boligboost/en/sale-boost",
  });
}

export default function Page() {
  return <BbServicePage locale="nb" service="saleBoost" />;
}
