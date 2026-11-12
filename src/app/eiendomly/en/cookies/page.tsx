import BbLegalPage from "@/components/eiendomly/legal-page";
import { getBbContent } from "@/content/eiendomly";
import { bbMetadata } from "@/content/eiendomly/metadata";

export function generateMetadata() {
  const content = getBbContent("en");
  return bbMetadata("en", {
    title: content.legal.cookies.heading,
    description: content.legal.cookies.intro,
    nbPath: "/eiendomly/cookies",
    enPath: "/eiendomly/en/cookies",
  });
}

export default function Page() {
  return <BbLegalPage locale="en" page="cookies" />;
}
