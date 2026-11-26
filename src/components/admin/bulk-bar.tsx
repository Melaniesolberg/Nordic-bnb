"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

/**
 * Fixed bottom bar for the approval queue. Counts the ticked boxes that belong to
 * `formId` (boxes sit on each card and point at the form with form="…"),
 * so a phone user can tick and approve with the thumb. Render it inside
 * that <form> so the button can show the pending state.
 */
export function BulkBar({
  formId,
  label,
  confirmText,
  disabled,
  className,
}: {
  formId: string;
  label: string;
  confirmText?: string;
  disabled?: boolean;
  className: string;
}) {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const boxes = () =>
      Array.from(document.querySelectorAll<HTMLInputElement>(`input[type=checkbox][name=ids][form="${formId}"]:not(:disabled)`));
    const update = () => {
      const all = boxes();
      setTotal(all.length);
      setCount(all.filter((b) => b.checked).length);
    };
    update();
    document.addEventListener("change", update);
    return () => document.removeEventListener("change", update);
  }, [formId]);

  const toggleAll = () => {
    const all = Array.from(
      document.querySelectorAll<HTMLInputElement>(`input[type=checkbox][name=ids][form="${formId}"]:not(:disabled)`),
    );
    const next = all.some((b) => !b.checked);
    all.forEach((b) => (b.checked = next));
    setCount(next ? all.length : 0);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-charcoal/10 bg-white/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <button type="button" onClick={toggleAll} className="text-sm text-charcoal/70 underline disabled:opacity-50" disabled={!total}>
          {count && count === total ? "Fjern alle" : `Velg alle (${total})`}
        </button>
        <SubmitInner formId={formId} className={className} disabled={disabled || count === 0} confirmText={confirmText?.replace("{n}", String(count))}>
          {label} ({count})
        </SubmitInner>
      </div>
    </div>
  );
}

function SubmitInner({
  formId,
  className,
  disabled,
  confirmText,
  children,
}: {
  formId: string;
  className: string;
  disabled: boolean;
  confirmText?: string;
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      form={formId}
      className={`${className} min-h-11 px-5`}
      disabled={disabled || pending}
      onClick={(e) => {
        if (confirmText && !window.confirm(confirmText)) e.preventDefault();
      }}
    >
      {pending ? "Jobber …" : children}
    </button>
  );
}
