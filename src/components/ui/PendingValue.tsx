interface PendingValueProps {
  /** What the value is, e.g. "park entry fee". Read by screen readers. */
  label: string;
}

/**
 * A value the platform does not yet have a verified figure for.
 *
 * The designs bracket these - [FEE], [CURRENCY IN USE] - to mark a live number
 * that has to come from a checked source. Printing the brackets would look
 * broken, and inventing a figure would be worse: a stale park fee or exchange
 * rate is exactly the kind of claim the verification system exists to prevent.
 * So the gap is shown as a gap, and the API fills it.
 */
export function PendingValue({ label }: PendingValueProps) {
  return (
    <span
      className="border-border-strong rounded-pill text-muted inline-block border border-dashed px-2 py-0.5 text-[0.6875rem] font-medium"
      title={`The ${label} is awaiting verification`}
    >
      awaiting verification
    </span>
  );
}
