import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("de").meta.title,
  description: getContent("de").meta.description,
  alternates: { canonical: "/de" },
};

export default function Page() {
  return <HomePage locale="de" />;
}
