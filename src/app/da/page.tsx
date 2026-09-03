import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { getContent } from "@/content";

export const metadata: Metadata = {
  title: getContent("da").meta.title,
  description: getContent("da").meta.description,
  alternates: { canonical: "/da" },
};

export default function Page() {
  return <HomePage locale="da" />;
}
