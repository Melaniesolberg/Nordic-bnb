import type { Metadata } from "next";
import { ThanksPage } from "@/components/pages/simple-pages";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("no").thanks;

export const metadata: Metadata = {
  ...pageMetadata("no", "thanks", { title: page.heading, description: page.intro }),
  robots: { index: false },
};

export default function Page() {
  return <ThanksPage locale="no" />;
}
