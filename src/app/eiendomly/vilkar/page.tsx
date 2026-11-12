import BbLegalPage from "@/components/eiendomly/legal-page";
import { getBbContent } from "@/content/eiendomly";
import { bbMetadata } from "@/content/eiendomly/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: content.legal.terms.heading,
    description: content.legal.terms.intro,
    nbPath: "/eiendomly/vilkar",
    enPath: "/eiendomly/en/terms",
  });
}

export default function Page() {
  return <BbLegalPage locale="nb" page="terms" />;
}
