import Image from "next/image";
import { cn } from "@/lib/utils";
import { media } from "@/content/media";

/** Standalone Nordic BnB house+key mark — the real uploaded asset. */
export default function BrandIcon({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block", className)}>
      <Image
        src={media.brandIcon}
        alt=""
        fill
        sizes="80px"
        className="object-contain"
      />
    </span>
  );
}
