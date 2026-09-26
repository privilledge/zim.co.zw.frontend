import { useSearchParams } from 'react-router';

import { ChevronDownIcon } from '@/components/icons';
import type { IconProps } from '@/components/icons';

interface SelectPillProps {
  /** The URL search parameter this control reads and writes. */
  param: string;
  /** Screen-reader label, e.g. "Filter by location". */
  label: string;
  options: readonly { value: string; label: string }[];
  /** The option treated as "no filter"; selecting it drops the parameter. */
  defaultValue: string;
  Icon?: (props: IconProps) => React.ReactElement;
}

/**
 * A dropdown styled as a pill, backed by the URL.
 *
 * This is a real `<select>` rather than a button and a custom menu. It gets
 * keyboard support, type-ahead and the platform's own picker on touch devices
 * for free, which a hand-rolled menu would have to re-earn. The chevron is
 * drawn on top; `appearance-none` removes the one the browser supplies.
 */
export function SelectPill({
  param,
  label,
  options,
  defaultValue,
  Icon,
}: SelectPillProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(param) ?? defaultValue;

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const next = new URLSearchParams(searchParams);

    if (event.target.value === defaultValue) {
      next.delete(param);
    } else {
      next.set(param, event.target.value);
    }

    setSearchParams(next, { replace: true });
  }

  return (
    <div className="border-border bg-surface rounded-pill focus-within:border-primary relative flex items-center border transition-colors">
      {Icon && (
        <Icon className="text-muted pointer-events-none absolute left-3.5 size-4" />
      )}

      <label htmlFor={`select-${param}`} className="sr-only">
        {label}
      </label>
      <select
        id={`select-${param}`}
        value={value}
        onChange={handleChange}
        className={`appearance-none bg-transparent py-2 pr-9 text-[0.8125rem] font-medium outline-none ${
          Icon ? 'pl-9' : 'pl-3.5'
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDownIcon className="text-muted pointer-events-none absolute right-3.5 size-4" />
    </div>
  );
}
