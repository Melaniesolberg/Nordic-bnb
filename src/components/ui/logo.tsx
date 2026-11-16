import { cn } from "@/lib/utils";

/** Eiendomly wordmark: serif name with a coral full stop. */
export default function Logo({
  className,
  tone = "dark",
  size = "md",
}: {
  className?: string;
  tone?: "dark" | "light";
  size?: "md" | "lg";
}) {
  return (
    <span
      className={cn(
        "font-serif-display tracking-tight transition-colors duration-500",
        size === "lg" ? "text-4xl sm:text-5xl" : "text-2xl sm:text-[1.7rem]",
        tone === "light" ? "text-ivory" : "text-charcoal",
        className,
      )}
    >
      Eiendomly<span className="text-coral">.</span>
    </span>
  );
}
