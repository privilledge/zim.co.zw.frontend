import { useState } from 'react';
import { useSearchParams } from 'react-router';

import { CloseIcon, SearchIcon } from '@/components/icons';

/**
 * The query box at the top of the results page.
 *
 * It is seeded from `?q=` and writes back to it on submit, so the URL stays
 * the single source of truth for what was searched. Typing alone does not
 * change the URL, because that would push a history entry per keystroke, so
 * local state holds the draft until the reader submits.
 */
export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const [draft, setDraft] = useState(query);
  const [lastQuery, setLastQuery] = useState(query);

  // Keep the box in step when the query changes from somewhere else: a
  // suggestion chip on another page, or the back button. Adjusting during
  // render is React's own pattern for this; an effect would render the stale
  // value first and then immediately render again.
  if (query !== lastQuery) {
    setLastQuery(query);
    setDraft(query);
  }

  function commit(value: string) {
    const next = new URLSearchParams(searchParams);

    if (value.trim().length === 0) {
      next.delete('q');
    } else {
      next.set('q', value.trim());
    }

    next.delete('page');
    setSearchParams(next);
  }

  return (
    <form
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        commit(draft);
      }}
      className="border-border bg-surface rounded-pill shadow-card focus-within:border-primary flex items-center gap-2 border py-2 pr-2 pl-4 transition-colors"
    >
      <SearchIcon className="text-muted size-[1.125rem] shrink-0" />

      <label htmlFor="search-page-query" className="sr-only">
        Search zim.co.zw
      </label>
      <input
        id="search-page-query"
        type="text"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        placeholder="Search zim.co.zw"
        className="placeholder:text-muted min-w-0 flex-1 bg-transparent py-1.5 text-sm outline-none"
      />

      {draft.length > 0 && (
        <button
          type="button"
          onClick={() => {
            setDraft('');
            commit('');
          }}
          aria-label="Clear search"
          className="text-muted hover:text-foreground shrink-0 transition-colors"
        >
          <CloseIcon className="size-4" />
        </button>
      )}

      <button
        type="submit"
        className="bg-primary rounded-pill hover:bg-primary-hover shrink-0 px-5 py-2 text-sm font-semibold text-white transition-colors"
      >
        Search
      </button>
    </form>
  );
}
