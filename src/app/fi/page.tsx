import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("fi").meta.title,
  description: getContent("fi").meta.description,
  alternates: { canonical: "/fi" },
};

export default function Page() {
  return <HomePage locale="fi" />;
}
