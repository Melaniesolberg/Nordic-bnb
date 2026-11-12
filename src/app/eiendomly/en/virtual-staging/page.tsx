import BbServicePage from "@/components/eiendomly/service-page";
import { getBbContent } from "@/content/eiendomly";
import { bbMetadata } from "@/content/eiendomly/metadata";

export function generateMetadata() {
  const content = getBbContent("en");
  return bbMetadata("en", {
    title: `${content.services.virtualStaging.tagline} – ${content.services.virtualStaging.heading}`,
    description: content.services.virtualStaging.whatItIs,
    nbPath: "/eiendomly/digital-styling",
    enPath: "/eiendomly/en/virtual-staging",
  });
}

export default function Page() {
  return <BbServicePage locale="en" service="virtualStaging" />;
}
