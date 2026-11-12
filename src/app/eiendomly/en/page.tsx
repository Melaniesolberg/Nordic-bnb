import BbHomePage from "@/components/eiendomly/home-page";
import { getBbContent } from "@/content/eiendomly";
import { bbMetadata } from "@/content/eiendomly/metadata";

export function generateMetadata() {
  const content = getBbContent("en");
  return bbMetadata("en", {
    title: content.meta.title,
    description: content.meta.description,
    nbPath: "/eiendomly",
    enPath: "/eiendomly/en",
  });
}

export default function Page() {
  return <BbHomePage locale="en" />;
}
