import {
  verificationStatusConfig,
  verificationStatusOrder,
} from '@/components/ui/verificationStatus';

interface VerificationLegendProps {
  /**
   * `row` is the three-across arrangement used in a full-width section.
   * `stack` keeps them in one column, for a sidebar too narrow to split.
   */
  layout?: 'row' | 'stack';
}

/**
 * The three verification states, as cards.
 *
 * This is the roomier sibling of `VerificationBadge variant="full"`: a status
 * dot rather than an icon, and the longer explanation, for sections that give
 * the legend a column of its own rather than a sidebar.
 */
export function VerificationLegend({ layout = 'row' }: VerificationLegendProps) {
  return (
    <ul className={`grid gap-3 ${layout === 'row' ? 'sm:grid-cols-3' : ''}`}>
      {verificationStatusOrder.map((status) => {
        const { label, explanation, dotClassName } = verificationStatusConfig[status];

        return (
          <li key={status} className="border-border bg-surface rounded-card border p-4">
            <span aria-hidden className={`rounded-pill block size-2 ${dotClassName}`} />
            <p className="mt-3 text-[0.8125rem] font-semibold">{label}</p>
            <p className="text-muted mt-1.5 text-xs leading-relaxed">{explanation}</p>
          </li>
        );
      })}
    </ul>
  );
}
