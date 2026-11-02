import BbLegalPage from "@/components/boligboost/legal-page";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: content.legal.cookies.heading,
    description: content.legal.cookies.intro,
    nbPath: "/boligboost/cookies",
    enPath: "/boligboost/en/cookies",
  });
}

export default function Page() {
  return <BbLegalPage locale="nb" page="cookies" />;
}
