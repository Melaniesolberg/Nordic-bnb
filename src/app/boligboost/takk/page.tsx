import BbThanksPage from "@/components/boligboost/thanks-page";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: content.thanks.heading,
    description: content.thanks.body,
    nbPath: "/boligboost/takk",
    enPath: "/boligboost/en/thanks",
  });
}

export default function Page() {
  return <BbThanksPage locale="nb" />;
}
