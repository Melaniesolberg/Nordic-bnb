import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("no").meta.title,
  description: getContent("no").meta.description,
  alternates: { canonical: "/no" },
};

export default function Page() {
  return <HomePage locale="no" />;
}
