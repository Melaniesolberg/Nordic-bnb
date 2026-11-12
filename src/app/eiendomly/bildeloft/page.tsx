import BbServicePage from "@/components/boligboost/service-page";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: `${content.services.photoBoost.tagline} – ${content.services.photoBoost.heading}`,
    description: content.services.photoBoost.whatItIs,
    nbPath: "/boligboost/bildeloft",
    enPath: "/boligboost/en/photo-boost",
  });
}

export default function Page() {
  return <BbServicePage locale="nb" service="photoBoost" />;
}
