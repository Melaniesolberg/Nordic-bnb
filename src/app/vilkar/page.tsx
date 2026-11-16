import { LegalPage } from "@/components/pages/simple-pages";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("no").legal.terms;

export const metadata = pageMetadata("no", "terms", { title: page.heading, description: page.intro });

export default function Page() {
  return <LegalPage locale="no" page="terms" />;
}
