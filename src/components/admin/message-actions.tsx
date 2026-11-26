import { approveMessage, cancelMessage, sendMessage } from "@/lib/crm/actions";
import { btnAccent, btnPrimary, btnSecondary } from "@/components/admin/ui";
import { ConfirmButton } from "@/components/admin/confirm-button";

/**
 * Approve → Send are two separate manual steps. «Send» is shown disabled with
 * the reason whenever a rule blocks it.
 */
export function MessageActions({
  id,
  status,
  blockers,
  returnTo,
}: {
  id: string;
  status: string;
  blockers: string[];
  returnTo: string;
}) {
  if (!["draft", "approved", "failed"].includes(status)) return null;
  // Blockers that matter before approval (the rest only apply to sending).
  const approvalBlockers = blockers.filter((b) => !b.startsWith("Utsending er slått av") && !b.startsWith("E-postserveren") && !b.startsWith("Meldingen er ikke godkjent"));

  return (
    <div className="mt-3 flex flex-wrap items-start gap-2">
      {status === "draft" && (
        <form action={approveMessage}>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="return_to" value={returnTo} />
          <button type="submit" className={btnPrimary} disabled={approvalBlockers.length > 0}>Godkjenn</button>
        </form>
      )}
      {status === "approved" && (
        <form action={sendMessage}>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="return_to" value={returnTo} />
          <ConfirmButton className={btnAccent} disabled={blockers.length > 0} message="Sende denne e-posten nå?">
            Send e-post
          </ConfirmButton>
        </form>
      )}
      <form action={cancelMessage}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="return_to" value={returnTo} />
        <button type="submit" className={btnSecondary}>Stopp</button>
      </form>
      {blockers.length > 0 && (
        <ul className="w-full list-disc pl-5 text-xs text-charcoal/60">
          {(status === "draft" ? approvalBlockers : blockers).map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}
    </div>
  );
}
