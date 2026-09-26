import { useSearchParams } from 'react-router';

import type { IconProps } from '@/components/icons';

export interface FilterChipOption {
  /** What gets written to the URL. */
  value: string;
  label: string;
  Icon?: (props: IconProps) => React.ReactElement;
}

interface FilterChipsProps {
  /** The URL search parameter this row reads and writes. */
  param: string;
  options: readonly FilterChipOption[];
  /** Names the group for screen readers, e.g. "Filter by type". */
  label: string;
  className?: string;
}

/**
 * A single-select row of filter chips, backed by the URL.
 *
 * The selection lives in a search parameter rather than in component state for
 * the same reason the search query does: it makes a filtered page shareable
 * and bookmarkable, and it lets sections further down the page read the
 * selection without the page component having to hold and pass it down.
 *
 * Pressing the active chip clears the filter, so there is always a way back to
 * the unfiltered list without a separate "All" chip.
 */
export function FilterChips({ param, options, label, className = '' }: FilterChipsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get(param);

  function select(value: string) {
    const next = new URLSearchParams(searchParams);

    if (active === value) {
      next.delete(param);
    } else {
      next.set(param, value);
    }

    setSearchParams(next, { replace: true });
  }

  return (
    <ul aria-label={label} className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((option) => {
        const isActive = active === option.value;

        return (
          <li key={option.value}>
            <button
              type="button"
              onClick={() => select(option.value)}
              aria-pressed={isActive}
              className={[
                'rounded-pill flex items-center gap-2 border px-3.5 py-2 text-[0.8125rem] font-medium transition-colors',
                isActive
                  ? 'border-primary bg-primary text-white'
                  : 'border-border bg-surface hover:border-border-strong hover:text-foreground text-neutral-600',
              ].join(' ')}
            >
              {option.Icon && <option.Icon className="size-4" />}
              {option.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
