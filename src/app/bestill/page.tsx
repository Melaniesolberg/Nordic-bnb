import { OrderPage } from "@/components/pages/simple-pages";
import { getContent } from "@/content";
import { pageMetadata } from "@/content/metadata";

const seo = getContent("no").seo.order;

export const metadata = pageMetadata("no", "order", {
  title: seo.title,
  description: seo.description,
  absoluteTitle: true,
});

export default function Page() {
  return <OrderPage locale="no" />;
}
