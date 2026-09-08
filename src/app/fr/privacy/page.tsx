import type { Metadata } from "next";
import PrivacyPage from "@/components/privacy-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("fr").privacyPage.heading,
  description: getContent("fr").privacyPage.intro,
  alternates: { canonical: "/fr/privacy" },
};

export default function Page() {
  return <PrivacyPage locale="fr" />;
}
