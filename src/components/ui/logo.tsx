import Image from "next/image";
import { cn } from "@/lib/utils";
import { media } from "@/content/media";

/**
 * Real Nordic BnB brand mark, uploaded by the user directly. The coral
 * artwork reads cleanly on both light and dark backgrounds, so no
 * light/dark variant is needed.
 */
const SIZES = {
  lg: "h-16 w-72 sm:h-20 sm:w-[22rem]",
  sm: "h-9 w-40",
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
