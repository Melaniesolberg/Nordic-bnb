import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("no").contactPage.heading,
  description: getContent("no").contactPage.intro,
  alternates: { canonical: "/no/contact" },
};

export default function Page() {
  return <ContactPage locale="no" />;
}
