import Image from "next/image";
import { cn } from "@/lib/utils";
import { media } from "@/content/media";

/**
 * Real Nordic BnB brand mark, uploaded by the user directly. The coral
 * artwork reads cleanly on both light and dark backgrounds, so no
 * light/dark variant is needed.
 */
const SIZES = {
  lg: "h-12 w-52 sm:h-14 sm:w-60",
  sm: "h-8 w-36",
} as const;

export default function Logo({
  className,
  size = "lg",
}: {
  className?: string;
  size?: keyof typeof SIZES;
}) {
  return (
    <span className={cn("relative inline-block", SIZES[size], className)}>
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
