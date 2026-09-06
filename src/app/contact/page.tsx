import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("en").contactPage.heading,
  description: getContent("en").contactPage.intro,
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage locale="en" />;
}
