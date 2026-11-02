import BbLegalPage from "@/components/boligboost/legal-page";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("en");
  return bbMetadata("en", {
    title: content.legal.terms.heading,
    description: content.legal.terms.intro,
    nbPath: "/boligboost/vilkar",
    enPath: "/boligboost/en/terms",
  });
}

export default function Page() {
  return <BbLegalPage locale="en" page="terms" />;
}
