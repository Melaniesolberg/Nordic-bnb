import BbLegalPage from "@/components/boligboost/legal-page";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("en");
  return bbMetadata("en", {
    title: content.legal.privacy.heading,
    description: content.legal.privacy.intro,
    nbPath: "/boligboost/personvern",
    enPath: "/boligboost/en/privacy",
  });
}

export default function Page() {
  return <BbLegalPage locale="en" page="privacy" />;
}
