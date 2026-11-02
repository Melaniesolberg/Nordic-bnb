import BbServicePage from "@/components/boligboost/service-page";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("en");
  return bbMetadata("en", {
    title: `${content.services.photoBoost.tagline} – ${content.services.photoBoost.heading}`,
    description: content.services.photoBoost.whatItIs,
    nbPath: "/boligboost/bildeloft",
    enPath: "/boligboost/en/photo-boost",
  });
}

export default function Page() {
  return <BbServicePage locale="en" service="photoBoost" />;
}
