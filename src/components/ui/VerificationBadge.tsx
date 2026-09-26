import { verificationStatusConfig } from '@/components/ui/verificationStatus';
import type { VerificationStatus } from '@/types/verification';

interface VerificationBadgeProps {
  status: VerificationStatus;
  /** `full` adds the explanatory line used in the compact home page legend. */
  variant?: 'compact' | 'full';
}

/**
 * The platform's trust signal, shown wherever a record appears.
 *
 * Label, colour and icon all come from `verificationStatus.ts`, which the
 * legend reads too, so the two can never disagree about what a status is
 * called.
 */
export function VerificationBadge({
  status,
  variant = 'compact',
}: VerificationBadgeProps) {
  const { label, detail, Icon, badgeClassName } = verificationStatusConfig[status];

  if (variant === 'full') {
    return (
      <div className={`rounded-control flex items-start gap-2.5 p-3 ${badgeClassName}`}>
        <Icon className="mt-0.5 size-4 shrink-0" />
        <div>
          <p className="text-[0.8125rem] font-semibold">{label}</p>
          <p className="mt-0.5 text-xs opacity-80">{detail}</p>
        </div>
      </div>
    );
  }

  return (
    <span
      className={`rounded-pill inline-flex items-center gap-1.5 px-2 py-1 text-[0.6875rem] font-semibold ${badgeClassName}`}
    >
      <Icon className="size-3.5" />
      {label}
    </span>
  );
}
