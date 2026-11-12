import BbLegalPage from "@/components/eiendomly/legal-page";
import { getBbContent } from "@/content/eiendomly";
import { bbMetadata } from "@/content/eiendomly/metadata";

export function generateMetadata() {
  const content = getBbContent("en");
  return bbMetadata("en", {
    title: content.legal.privacy.heading,
    description: content.legal.privacy.intro,
    nbPath: "/eiendomly/personvern",
    enPath: "/eiendomly/en/privacy",
  });
}

export default function Page() {
  return <BbLegalPage locale="en" page="privacy" />;
}
