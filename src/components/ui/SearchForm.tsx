import { useState } from 'react';
import { useNavigate } from 'react-router';

import { SearchIcon } from '@/components/icons';

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
}

/**
 * The portal's search entry point.
 *
 * It submits to `/search?q=`, so the URL carries the query. That makes a
 * result page shareable and bookmarkable, and means the query can be read
 * straight from the URL rather than held in Redux.
 *
 * Lives here rather than in a feature because every area page opens with the
 * same box; only the placeholder and the width change.
 */
export function SearchForm({
  id,
  placeholder,
  label,
  className = '',
  showSubmit = true,
}: SearchFormProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = query.trim();
    if (trimmed.length === 0) return;

    void navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={`border-border bg-surface rounded-pill shadow-card focus-within:border-primary flex items-center gap-2 border py-1.5 pl-4 transition-colors ${showSubmit ? 'pr-1.5' : 'pr-4'} ${className}`}
    >
      <SearchIcon className="text-muted size-[1.125rem] shrink-0" />
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="placeholder:text-muted min-w-0 flex-1 bg-transparent py-1.5 text-sm outline-none"
      />
      <button
        type="submit"
        className={
          showSubmit
            ? 'bg-primary rounded-pill hover:bg-primary-hover shrink-0 px-5 py-2 text-sm font-semibold text-white transition-colors'
            : 'sr-only'
        }
      >
        Search
      </button>
    </form>
  );
}
