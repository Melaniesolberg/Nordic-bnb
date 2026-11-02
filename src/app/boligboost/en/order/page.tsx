import BbOrderForm from "@/components/boligboost/order-form";
import { getBbContent } from "@/content/boligboost";
import { bbMetadata } from "@/content/boligboost/metadata";

export function generateMetadata() {
  const content = getBbContent("en");
  return bbMetadata("en", {
    title: content.order.heading,
    description: content.order.intro,
    nbPath: "/boligboost/bestill",
    enPath: "/boligboost/en/order",
  });
}

export default function Page() {
  return <BbOrderForm locale="en" />;
}
