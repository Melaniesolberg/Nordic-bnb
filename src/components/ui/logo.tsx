import Image from "next/image";
import { cn } from "@/lib/utils";
import { media } from "@/content/media";

/**
 * Real Nordic BnB brand mark, uploaded by the user directly. The coral
 * artwork reads cleanly on both light and dark backgrounds, so no
 * light/dark variant is needed.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block h-8 w-36", className)}>
      <Image
        src={media.brandLogo}
        alt="Nordic BnB"
        fill
        sizes="200px"
        className="object-contain object-left"
        priority
      />
    </span>
  );
}
