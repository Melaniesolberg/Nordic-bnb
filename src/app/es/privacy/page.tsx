import type { Metadata } from "next";
import PrivacyPage from "@/components/privacy-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("es").privacyPage.heading,
  description: getContent("es").privacyPage.intro,
  alternates: { canonical: "/es/privacy" },
};

export default function Page() {
  return <PrivacyPage locale="es" />;
}
