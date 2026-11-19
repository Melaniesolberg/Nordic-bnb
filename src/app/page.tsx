import HomePage from "@/components/home-page";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const seo = getContent("no").seo.home;

export const metadata = pageMetadata("no", "home", {
  title: seo.title,
  description: seo.description,
  absoluteTitle: true,
});

export default function Page() {
  return <HomePage locale="no" />;
}
