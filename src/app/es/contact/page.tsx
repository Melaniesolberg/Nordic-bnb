import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("es").contactPage.heading,
  description: getContent("es").contactPage.intro,
  alternates: { canonical: "/es/contact" },
};

export default function Page() {
  return <ContactPage locale="es" />;
}
