import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("de").contactPage.heading,
  description: getContent("de").contactPage.intro,
  alternates: { canonical: "/de/contact" },
};

export default function Page() {
  return <ContactPage locale="de" />;
}
