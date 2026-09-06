import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("fr").contactPage.heading,
  description: getContent("fr").contactPage.intro,
  alternates: { canonical: "/fr/contact" },
};

export default function Page() {
  return <ContactPage locale="fr" />;
}
