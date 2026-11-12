import BbThanksPage from "@/components/eiendomly/thanks-page";
import { getBbContent } from "@/content/eiendomly";
import { bbMetadata } from "@/content/eiendomly/metadata";

export function generateMetadata() {
  const content = getBbContent("en");
  return bbMetadata("en", {
    title: content.thanks.heading,
    description: content.thanks.body,
    nbPath: "/eiendomly/takk",
    enPath: "/eiendomly/en/thanks",
  });
}

export default function Page() {
  return <BbThanksPage locale="en" />;
}
