import { LegalPage } from "@/components/pages/simple-pages";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("no").legal.privacy;

export const metadata = pageMetadata("no", "privacy", { title: page.heading, description: page.intro });

export default function Page() {
  return <LegalPage locale="no" page="privacy" />;
}
