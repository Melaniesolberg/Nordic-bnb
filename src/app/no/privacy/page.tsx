import type { Metadata } from "next";
import PrivacyPage from "@/components/privacy-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("no").privacyPage.heading,
  description: getContent("no").privacyPage.intro,
  alternates: { canonical: "/no/privacy" },
};

export default function Page() {
  return <PrivacyPage locale="no" />;
}
