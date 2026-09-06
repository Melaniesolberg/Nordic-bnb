import Image from "next/image";
import { cn } from "@/lib/utils";
import { media } from "@/content/media";

/**
 * Real Nordic BnB brand mark — the user's single combined lockup file
 * (icon + "Nordic bnb" wordmark already laid out together as one image),
 * rendered as one unit. The coral artwork reads cleanly on both light and
 * dark backgrounds, so no light/dark variant is needed.
 */
const SIZES = {
  lg: "h-11 w-36 sm:h-14 sm:w-48",
  sm: "h-7 w-24",
} as const;

const ICON_SIZE = "h-10 w-10 sm:h-11 sm:w-11";

export default function Logo({
  className,
  size = "lg",
  variant = "full",
}: {
  className?: string;
  size?: keyof typeof SIZES;
  variant?: "full" | "icon";
}) {
  const isIcon = variant === "icon";
  return (
    <span className={cn("relative inline-block", isIcon ? ICON_SIZE : SIZES[size], className)}>
      <Image
        src={isIcon ? media.brandIcon : media.brandLogo}
        alt={isIcon ? "" : "Nordic BnB"}
        fill
        sizes="240px"
        className={cn("object-contain", !isIcon && "object-left")}
        priority
      />
    </span>
  );
}
