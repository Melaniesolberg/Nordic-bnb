import BbOrderForm from "@/components/eiendomly/order-form";
import { getBbContent } from "@/content/eiendomly";
import { bbMetadata } from "@/content/eiendomly/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: content.order.heading,
    description: content.order.intro,
    nbPath: "/eiendomly/bestill",
    enPath: "/eiendomly/en/order",
  });
}

export default function Page() {
  return <BbOrderForm locale="nb" />;
}
