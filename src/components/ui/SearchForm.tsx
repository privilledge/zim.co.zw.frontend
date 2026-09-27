import { useState } from 'react';
import { useNavigate } from 'react-router';

import { ChevronDownIcon, SearchIcon } from '@/components/icons';

interface SearchScope {
  value: string;
  label: string;
}

interface SearchFormProps {
  /** Must be unique on the page - it ties the visible input to its label. */
  id: string;
  placeholder: string;
  /** Screen-reader label for the input. */
  label: string;
  /** Applied to the form, so a page can set its own width. */
  className?: string;
  /**
   * Some pages show the box without its submit button, relying on Enter. The
   * button still exists for pointer users - it is visually hidden, not gone,
   * so the form stays operable without a keyboard.
   */
  showSubmit?: boolean;
  /**
   * Optional list of result groups offered in a dropdown before the input.
   * The chosen one travels as `group`, which the search page already filters
   * on. An "Everything" option is always first and sends no `group`.
   */
  scopes?: readonly SearchScope[];
  /**
   * `large` is the home hero's version: a taller box with squarer corners,
   * sized to sit under a display heading.
   */
  size?: 'default' | 'large';
}

const ALL_SCOPES = 'all';

/**
 * The portal's search entry point.
 *
 * It submits to `/search?q=`, so the URL carries the query. That makes a
 * result page shareable and bookmarkable, and means the query can be read
 * straight from the URL rather than held in Redux.
 *
 * Lives here rather than in a feature because every area page opens with the
 * same box; only the placeholder, the width and, on the home page, the size
 * and scope dropdown change.
 */
export function SearchForm({
  id,
  placeholder,
  label,
  className = '',
  showSubmit = true,
  scopes,
  size = 'default',
}: SearchFormProps) {
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState(ALL_SCOPES);
  const navigate = useNavigate();
  const large = size === 'large';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = query.trim();
    if (trimmed.length === 0) return;

    const params = new URLSearchParams({ q: trimmed });
    if (scope !== ALL_SCOPES) params.set('group', scope);

    void navigate(`/search?${params.toString()}`);
  }

  const shape = large
    ? 'rounded-card gap-3 p-2 shadow-raised'
    : `rounded-pill gap-2 py-1.5 pl-4 shadow-card ${showSubmit ? 'pr-1.5' : 'pr-4'}`;

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={`border-border bg-surface focus-within:border-primary flex items-center border transition-colors ${shape} ${className}`}
    >
      {scopes && (
        <>
          <label htmlFor={`${id}-scope`} className="sr-only">
            Search in
          </label>
          <div className="relative flex shrink-0 items-center">
            <select
              id={`${id}-scope`}
              value={scope}
              onChange={(event) => setScope(event.target.value)}
              className="bg-sand-100 text-foreground rounded-control hover:bg-sand-200 cursor-pointer appearance-none py-2.5 pr-9 pl-4 text-sm font-medium transition-colors outline-none"
            >
              <option value={ALL_SCOPES}>Everything</option>
              {scopes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="text-muted pointer-events-none absolute right-3 size-4" />
          </div>
          <span className="bg-border h-6 w-px shrink-0" aria-hidden />
        </>
      )}

      {!scopes && <SearchIcon className="text-muted size-[1.125rem] shrink-0" />}

      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className={`placeholder:text-muted min-w-0 flex-1 bg-transparent outline-none ${large ? 'py-2 text-base' : 'py-1.5 text-sm'}`}
      />
      <button
        type="submit"
        className={
          showSubmit
            ? `bg-primary hover:bg-primary-hover flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-colors ${large ? 'rounded-control px-5 py-2.5' : 'rounded-pill px-5 py-2'}`
            : 'sr-only'
        }
      >
        {large && <SearchIcon className="size-4" />}
        {/* On a phone the large box has three controls in a row, so the
            button keeps only its icon there; the word stays for screen readers. */}
        <span className={large ? 'max-sm:sr-only' : undefined}>Search</span>
      </button>
    </form>
  );
}
