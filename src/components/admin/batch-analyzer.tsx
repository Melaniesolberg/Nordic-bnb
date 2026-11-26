"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { analyzeForBatch, nextUnanalysedIds } from "@/lib/crm/actions";

/**
 * Runs AI analysis one company at a time (one request each) and shows
 * progress. Uses the ticked boxes in the list, or the 10 newest unanalysed.
 */
export function BatchAnalyzer({ formId, disabled }: { formId: string; disabled?: boolean }) {
  const router = useRouter();
  const [progress, setProgress] = useState<string | null>(null);
  const [running, startTransition] = useTransition();

  function run() {
    startTransition(async () => {
      const form = document.getElementById(formId);
      const checked = form
        ? [...form.querySelectorAll<HTMLInputElement>('input[name="id"]:checked')].map((i) => i.value)
        : [];
      const ids = [...new Set(checked)].slice(0, 10);
      const queue = ids.length ? ids : await nextUnanalysedIds();
      if (!queue.length) {
        setProgress("Ingen selskaper å analysere.");
        return;
      }
      let ok = 0;
      const errors: string[] = [];
      for (let i = 0; i < queue.length; i++) {
        setProgress(`Analyserer ${i + 1} av ${queue.length} …`);
        const r = await analyzeForBatch(queue[i]);
        if (r.ok) ok++;
        else if (r.error) errors.push(r.error);
      }
      setProgress(
        `Ferdig: ${ok} analysert${errors.length ? `, ${errors.length} feilet (${errors[0]})` : ""}. Utkastene venter på godkjenning under Outreach.`,
      );
      router.refresh();
    });
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <button
        type="button"
        onClick={run}
        disabled={disabled || running}
        className="inline-flex items-center justify-center rounded-md bg-charcoal px-3.5 py-2 text-sm font-medium text-ivory hover:bg-charcoal/85 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {running ? "Analyserer …" : "AI-analyser valgte (maks 10)"}
      </button>
      <span className="text-charcoal/70" role="status" aria-live="polite">
        {progress ?? "Uten valg analyseres de 10 nyeste som ikke er analysert."}
      </span>
    </div>
  );
}
