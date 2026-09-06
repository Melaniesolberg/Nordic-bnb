import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("sv").contactPage.heading,
  description: getContent("sv").contactPage.intro,
  alternates: { canonical: "/sv/contact" },
};

export default function Page() {
  return <ContactPage locale="sv" />;
}
