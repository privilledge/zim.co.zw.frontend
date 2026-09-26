import { useSearchParams } from 'react-router';

import { FilterIcon } from '@/components/icons';
import { resultCategories } from '@/features/search/searchContent';
import {
  locationOptions,
  organisationTypeOptions,
  parseList,
  toggleInList,
} from '@/features/search/resultSelection';

/**
 * The filter sidebar.
 *
 * Every control writes to the URL, so a filtered search can be linked to and
 * the results list can read the selection without either component holding
 * state the other needs.
 */
export function SearchFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = parseList(searchParams.get('category'));
  const verifiedOnly = searchParams.get('verified') === 'true';

  // Anything other than the query itself counts as a filter worth clearing.
  const hasFilters = ['category', 'location', 'organisation', 'verified', 'group'].some(
    (key) => searchParams.has(key),
  );

  function update(mutate: (params: URLSearchParams) => void) {
    const next = new URLSearchParams(searchParams);
    mutate(next);
    next.delete('page');
    setSearchParams(next, { replace: true });
  }

  function clearAll() {
    const next = new URLSearchParams();
    const query = searchParams.get('q');
    if (query) next.set('q', query);
    setSearchParams(next, { replace: true });
  }

  return (
    <aside className="border-border bg-surface rounded-card border p-5">
      <h2 className="flex items-center gap-2 text-sm font-semibold">
        <FilterIcon className="size-4" />
        Filters
      </h2>

      <fieldset className="mt-5">
        <legend className="text-kicker text-muted font-semibold uppercase">
          Category
        </legend>
        <div className="mt-3 space-y-2.5">
          {resultCategories.map((category) => (
            <label
              key={category.value}
              className="flex cursor-pointer items-center gap-2.5 text-[0.8125rem]"
            >
              <input
                type="checkbox"
                checked={categories.includes(category.value)}
                onChange={() =>
                  update((params) => {
                    const nextList = toggleInList(categories, category.value);
                    if (nextList.length === 0) params.delete('category');
                    else params.set('category', nextList.join(','));
                  })
                }
                className="accent-primary size-4"
              />
              {category.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="border-border mt-5 border-t pt-5">
        <label
          htmlFor="filter-location"
          className="text-kicker text-muted font-semibold uppercase"
        >
          Location
        </label>
        <select
          id="filter-location"
          value={searchParams.get('location') ?? 'all'}
          onChange={(event) =>
            update((params) => {
              if (event.target.value === 'all') params.delete('location');
              else params.set('location', event.target.value);
            })
          }
          className="border-border rounded-control focus:border-primary mt-3 w-full border bg-transparent px-3 py-2 text-[0.8125rem] outline-none"
        >
          {locationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="border-border mt-5 border-t pt-5">
        <label
          htmlFor="filter-organisation"
          className="text-kicker text-muted font-semibold uppercase"
        >
          Organisation type
        </label>
        <select
          id="filter-organisation"
          value={searchParams.get('organisation') ?? 'all'}
          onChange={(event) =>
            update((params) => {
              if (event.target.value === 'all') params.delete('organisation');
              else params.set('organisation', event.target.value);
            })
          }
          className="border-border rounded-control focus:border-primary mt-3 w-full border bg-transparent px-3 py-2 text-[0.8125rem] outline-none"
        >
          {organisationTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <label className="border-border mt-5 flex cursor-pointer items-center gap-2.5 border-t pt-5 text-[0.8125rem]">
        <input
          type="checkbox"
          checked={verifiedOnly}
          onChange={() =>
            update((params) => {
              if (verifiedOnly) params.delete('verified');
              else params.set('verified', 'true');
            })
          }
          className="accent-primary size-4"
        />
        Only verified results
      </label>

      <button
        type="button"
        onClick={clearAll}
        disabled={!hasFilters}
        className="border-border rounded-control hover:border-border-strong hover:bg-surface-sunken mt-5 w-full border py-2 text-[0.8125rem] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
      >
        Clear filters
      </button>
    </aside>
  );
}
