import BbHomePage from "@/components/boligboost/home-page";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: content.meta.title,
    description: content.meta.description,
    nbPath: "/boligboost",
    enPath: "/boligboost/en",
  });
}

export default function Page() {
  return <BbHomePage locale="nb" />;
}
