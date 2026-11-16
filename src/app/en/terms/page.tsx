import { LegalPage } from "@/components/pages/simple-pages";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("en").legal.terms;

export const metadata = pageMetadata("en", "terms", { title: page.heading, description: page.intro });

export default function Page() {
  return <LegalPage locale="en" page="terms" />;
}
