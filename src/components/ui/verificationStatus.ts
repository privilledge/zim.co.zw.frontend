import { AlertTriangleIcon, CheckCircleIcon, ClockIcon } from '@/components/icons';
import type { IconProps } from '@/components/icons';
import type { VerificationStatus } from '@/types/verification';

/**
 * Everything the interface knows about a verification status, in one place.
 *
 * The badge and the legend are drawn differently - a pill on a record, a card
 * in an explanatory block - but they must agree on wording. Keeping label and
 * copy here means a record can never read "Verified" in one place and
 * "Checked" in another.
 */
interface StatusConfig {
  label: string;
  /** One short line, for the compact legend where space is tight. */
  detail: string;
  /** The fuller sentence, for the legend that has room to explain itself. */
  explanation: string;
  Icon: (props: IconProps) => React.ReactElement;
  /** Foreground plus soft background - the badge pill. */
  badgeClassName: string;
  /** Solid fill - the legend's status dot. */
  dotClassName: string;
}

export const verificationStatusConfig: Record<VerificationStatus, StatusConfig> = {
  verified: {
    label: 'Verified',
    detail: 'Checked against the official source',
    explanation: 'Checked against the official source within the last review cycle.',
    Icon: CheckCircleIcon,
    badgeClassName: 'bg-verified-soft text-verified',
    dotClassName: 'bg-verified',
  },
  review: {
    label: 'Needs review',
    detail: 'Due a re-check by our team',
    explanation: 'Due a re-check by our team; details may have moved on.',
    Icon: AlertTriangleIcon,
    badgeClassName: 'bg-review-soft text-review',
    dotClassName: 'bg-accent',
  },
  outdated: {
    label: 'Outdated',
    detail: 'Kept visible, clearly marked',
    explanation: 'Kept visible and clearly marked rather than quietly removed.',
    Icon: ClockIcon,
    badgeClassName: 'bg-outdated-soft text-outdated',
    dotClassName: 'bg-outdated',
  },
};

/** Fixed display order: best state first, so a legend always reads the same way. */
export const verificationStatusOrder: readonly VerificationStatus[] = [
  'verified',
  'review',
  'outdated',
];
