import type { Metadata } from "next";
import PrivacyPage from "@/components/privacy-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("en").privacyPage.heading,
  description: getContent("en").privacyPage.intro,
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <PrivacyPage locale="en" />;
}
