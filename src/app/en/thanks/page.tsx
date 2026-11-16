import type { Metadata } from "next";
import { ThanksPage } from "@/components/pages/simple-pages";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("en").thanks;

export const metadata: Metadata = {
  ...pageMetadata("en", "thanks", { title: page.heading, description: page.intro }),
  robots: { index: false },
};

export default function Page() {
  return <ThanksPage locale="en" />;
}
