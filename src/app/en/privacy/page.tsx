import { LegalPage } from "@/components/pages/simple-pages";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("en").legal.privacy;

export const metadata = pageMetadata("en", "privacy", { title: page.heading, description: page.intro });

export default function Page() {
  return <LegalPage locale="en" page="privacy" />;
}
