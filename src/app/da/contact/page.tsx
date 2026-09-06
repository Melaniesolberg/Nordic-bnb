import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("da").contactPage.heading,
  description: getContent("da").contactPage.intro,
  alternates: { canonical: "/da/contact" },
};

export default function Page() {
  return <ContactPage locale="da" />;
}
