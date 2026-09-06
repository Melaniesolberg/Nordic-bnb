import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("fi").contactPage.heading,
  description: getContent("fi").contactPage.intro,
  alternates: { canonical: "/fi/contact" },
};

export default function Page() {
  return <ContactPage locale="fi" />;
}
