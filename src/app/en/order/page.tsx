import { OrderPage } from "@/components/pages/simple-pages";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const page = getContent("en").orderPage;

export const metadata = pageMetadata("en", "order", { title: page.heading, description: page.intro });

export default function Page() {
  return <OrderPage locale="en" />;
}
