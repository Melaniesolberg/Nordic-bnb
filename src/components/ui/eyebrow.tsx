import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light" | "coral";
}) {
  return (
    <div
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "dark" && "text-charcoal/60",
        tone === "light" && "text-ivory/60",
        tone === "coral" && "text-coral",
        className,
      )}
    >
      <span className="h-px w-8 bg-current opacity-70" aria-hidden />
      {children}
    </div>
  );
}
