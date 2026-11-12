import BbServicePage from "@/components/eiendomly/service-page";
import { getBbContent } from "@/content/eiendomly";
import { bbMetadata } from "@/content/eiendomly/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: `${content.services.photoBoost.tagline} – ${content.services.photoBoost.heading}`,
    description: content.services.photoBoost.whatItIs,
    nbPath: "/eiendomly/bildeloft",
    enPath: "/eiendomly/en/photo-boost",
  });
}

export default function Page() {
  return <BbServicePage locale="nb" service="photoBoost" />;
}
