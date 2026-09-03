import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("es").meta.title,
  description: getContent("es").meta.description,
  alternates: { canonical: "/es" },
};

export default function Page() {
  return <HomePage locale="es" />;
}
