import BbLegalPage from "@/components/boligboost/legal-page";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: content.legal.privacy.heading,
    description: content.legal.privacy.intro,
    nbPath: "/boligboost/personvern",
    enPath: "/boligboost/en/privacy",
  });
}

export default function Page() {
  return <BbLegalPage locale="nb" page="privacy" />;
}
