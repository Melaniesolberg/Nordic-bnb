"use client";

import { motion } from "framer-motion";
import BrandIcon from "@/components/ui/brand-icon";
import { cn } from "@/lib/utils";

/** Subtle branded transition mark used between major homepage sections. */
export default function SectionDivider({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center py-10",
        tone === "dark" ? "bg-charcoal" : "bg-ivory",
        className,
      )}
    >
      <div
        className={cn(
          "h-px flex-1",
          tone === "dark" ? "bg-ivory/10" : "bg-charcoal/10",
        )}
      />
      <motion.div
        initial={{ opacity: 0, rotate: -8, scale: 0.85 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <BrandIcon className="mx-6 h-6 w-6 opacity-80" />
      </motion.div>
      <div
        className={cn(
          "h-px flex-1",
          tone === "dark" ? "bg-ivory/10" : "bg-charcoal/10",
        )}
      />
    </div>
  );
}
