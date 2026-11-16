import HomePage from "@/components/home-page";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const content = getContent("en");

export const metadata = pageMetadata("en", "home", {
  title: content.meta.title,
  description: content.meta.description,
  absoluteTitle: true,
});

export default function Page() {
  return <HomePage locale="en" />;
}
