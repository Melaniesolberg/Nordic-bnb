import Image from "next/image";
import { cn } from "@/lib/utils";
import { media } from "@/content/media";

/**
 * Real Nordic BnB brand mark, uploaded by the user directly. The coral
 * artwork reads cleanly on both light and dark backgrounds, so no
 * light/dark variant is needed.
 */
const SIZES = {
  lg: { icon: "h-11 w-11 sm:h-14 sm:w-14", wordmark: "h-8 w-44 sm:h-10 sm:w-56", gap: "gap-2.5 sm:gap-3" },
  sm: { icon: "h-7 w-7", wordmark: "h-5 w-28", gap: "gap-2" },
} as const;

export default function Logo({
  className,
  size = "lg",
}: {
  className?: string;
  size?: keyof typeof SIZES;
}) {
  const s = SIZES[size];
  return (
    <span className={cn("inline-flex items-center", s.gap, className)}>
      <span className={cn("relative inline-block shrink-0", s.icon)}>
        <Image src={media.brandIcon} alt="" fill sizes="80px" className="object-contain" priority />
      </span>
      <span className={cn("relative inline-block", s.wordmark)}>
        <Image
          src={media.brandLogo}
          alt="Nordic BnB"
          fill
          sizes="200px"
          className="object-contain object-left"
          priority
        />
      </span>
    </span>
  );
}
