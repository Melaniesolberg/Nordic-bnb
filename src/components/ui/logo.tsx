import { cn } from "@/lib/utils";

/**
 * Typographic wordmark placeholder.
 * No logo asset files were present in the repository at build time —
 * this mark mirrors the brand's coral accent on a minimal roofline glyph
 * and is designed to be a drop-in swap for the real logo files later.
 */
export default function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <rect width="26" height="26" rx="7" className="fill-coral" />
        <path
          d="M6.5 13.5L13 7.5L19.5 13.5"
          stroke="#F6F1E8"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 12V18.5H17.5V12"
          stroke="#F6F1E8"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={cn(
          "font-sans text-[0.95rem] font-semibold tracking-[0.08em] uppercase leading-none",
          tone === "dark" ? "text-charcoal" : "text-ivory",
        )}
      >
        Nordic <span className="text-coral">BnB</span>
      </span>
    </span>
  );
}
