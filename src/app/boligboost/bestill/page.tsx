import BbOrderForm from "@/components/boligboost/order-form";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("nb");
  return bbMetadata("nb", {
    title: content.order.heading,
    description: content.order.intro,
    nbPath: "/boligboost/bestill",
    enPath: "/boligboost/en/order",
  });
}

export default function Page() {
  return <BbOrderForm locale="nb" />;
}
