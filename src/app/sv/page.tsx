import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("sv").meta.title,
  description: getContent("sv").meta.description,
  alternates: { canonical: "/sv" },
};

export default function Page() {
  return <HomePage locale="sv" />;
}
