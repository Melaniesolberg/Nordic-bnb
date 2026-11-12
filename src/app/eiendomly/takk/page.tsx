import BbThanksPage from "@/components/eiendomly/thanks-page";
import { getBbContent } from "@/content/eiendomly";
import { bbMetadata } from "@/content/eiendomly/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: content.thanks.heading,
    description: content.thanks.body,
    nbPath: "/eiendomly/takk",
    enPath: "/eiendomly/en/thanks",
  });
}

export default function Page() {
  return <BbThanksPage locale="nb" />;
}
