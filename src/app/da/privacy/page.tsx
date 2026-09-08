import type { Metadata } from "next";
import PrivacyPage from "@/components/privacy-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("da").privacyPage.heading,
  description: getContent("da").privacyPage.intro,
  alternates: { canonical: "/da/privacy" },
};

export default function Page() {
  return <PrivacyPage locale="da" />;
}
