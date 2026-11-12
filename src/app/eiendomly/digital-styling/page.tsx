import BbServicePage from "@/components/boligboost/service-page";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: `${content.services.virtualStaging.tagline} – ${content.services.virtualStaging.heading}`,
    description: content.services.virtualStaging.whatItIs,
    nbPath: "/boligboost/digital-styling",
    enPath: "/boligboost/en/virtual-staging",
  });
}

export default function Page() {
  return <BbServicePage locale="nb" service="virtualStaging" />;
}
