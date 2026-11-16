import { LegalPage } from "@/components/pages/simple-pages";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("en").legal.cookies;

export const metadata = pageMetadata("en", "cookies", { title: page.heading, description: page.intro });

export default function Page() {
  return <LegalPage locale="en" page="cookies" />;
}
