import { LegalPage } from "@/components/pages/simple-pages";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("no").legal.cookies;

export const metadata = pageMetadata("no", "cookies", { title: page.heading, description: page.intro });

export default function Page() {
  return <LegalPage locale="no" page="cookies" />;
}
