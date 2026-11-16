import { cn } from "@/lib/utils";

/** Small house mark used as a decorative divider between sections. */
export default function BrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={cn("text-coral", className)} aria-hidden>
      <path
        d="M5 14.5 16 5l11 9.5V26a1 1 0 0 1-1 1h-6.5v-7h-7v7H6a1 1 0 0 1-1-1V14.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="23.5" cy="9" r="1.6" fill="currentColor" />
    </svg>
  );
}
