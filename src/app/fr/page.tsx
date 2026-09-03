import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("fr").meta.title,
  description: getContent("fr").meta.description,
  alternates: { canonical: "/fr" },
};

export default function Page() {
  return <HomePage locale="fr" />;
}
