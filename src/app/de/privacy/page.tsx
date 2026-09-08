import type { Metadata } from "next";
import PrivacyPage from "@/components/privacy-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("de").privacyPage.heading,
  description: getContent("de").privacyPage.intro,
  alternates: { canonical: "/de/privacy" },
};

export default function Page() {
  return <PrivacyPage locale="de" />;
}
