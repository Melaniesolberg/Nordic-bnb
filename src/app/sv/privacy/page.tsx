import type { Metadata } from "next";
import PrivacyPage from "@/components/privacy-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("sv").privacyPage.heading,
  description: getContent("sv").privacyPage.intro,
  alternates: { canonical: "/sv/privacy" },
};

export default function Page() {
  return <PrivacyPage locale="sv" />;
}
