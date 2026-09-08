import type { Metadata } from "next";
import PrivacyPage from "@/components/privacy-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("fi").privacyPage.heading,
  description: getContent("fi").privacyPage.intro,
  alternates: { canonical: "/fi/privacy" },
};

export default function Page() {
  return <PrivacyPage locale="fi" />;
}
