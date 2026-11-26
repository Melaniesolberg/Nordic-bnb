"use client";

import { useFormStatus } from "react-dom";
import type { ReactNode } from "react";

/** Submit button that asks for confirmation and disables itself while sending. */
export function ConfirmButton({
  children,
  message,
  className,
  disabled,
}: {
  children: ReactNode;
  message: string;
  className?: string;
  disabled?: boolean;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={className}
      disabled={disabled || pending}
      onClick={(e) => {
        if (!window.confirm(message)) e.preventDefault();
      }}
    >
      {pending ? "Sender …" : children}
    </button>
  );
}
