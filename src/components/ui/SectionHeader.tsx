import { Link } from 'react-router';

import { ArrowRightIcon } from '@/components/icons';

interface SectionHeaderProps {
  /** Small uppercase label above the title. */
  kicker?: string;
  title: string;
  description?: string;
  /** Optional "see everything" link, right-aligned against the title. */
  action?: { label: string; to: string };
  /** `inverse` is for sections sitting on the dark surface. */
  tone?: 'default' | 'inverse';
}

/**
 * The heading block that opens each home page section.
 *
 * Every section repeats the same title / description / "view all" arrangement,
 * so it lives here once rather than being rebuilt six times.
 */
export function SectionHeader({
  kicker,
  title,
  description,
  action,
  tone = 'default',
}: SectionHeaderProps) {
  const inverse = tone === 'inverse';

  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div>
        {kicker && (
          <p
            className={[
              'text-kicker font-semibold uppercase',
              inverse ? 'text-accent' : 'text-muted',
            ].join(' ')}
          >
            {kicker}
          </p>
        )}
        <h2
          className={[
            'text-section font-serif font-bold',
            kicker ? 'mt-2.5' : '',
            inverse ? 'text-foreground-inverse' : 'text-foreground',
          ].join(' ')}
        >
          {title}
        </h2>
        {description && (
          <p
            className={[
              'mt-2 max-w-2xl text-sm',
              inverse ? 'text-muted-inverse' : 'text-muted',
            ].join(' ')}
          >
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          to={action.to}
          className={[
            'group flex items-center gap-1.5 text-sm font-medium transition-colors',
            inverse ? 'text-neutral-300 hover:text-white' : 'text-primary',
          ].join(' ')}
        >
          {action.label}
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
