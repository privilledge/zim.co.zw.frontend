import { useSearchParams } from 'react-router';

import { FilterChips } from '@/components/ui/FilterChips';
import { SearchBar } from '@/features/search/SearchBar';
import { SearchFilters } from '@/features/search/SearchFilters';
import { SearchResults } from '@/features/search/SearchResults';
import { resultGroups } from '@/features/search/searchContent';
import { parseList, selectResults } from '@/features/search/resultSelection';

/**
 * Search results.
 *
 * This page reads its entire state from the URL. The count is worked out here
 * rather than inside the results list so it can sit above the tabs, where the
 * design puts it, without the two components having to share state.
 */
export function SearchPage() {
  const [searchParams] = useSearchParams();

  const matches = selectResults({
    group: searchParams.get('group'),
    categories: parseList(searchParams.get('category')),
    location: searchParams.get('location'),
    organisationType: searchParams.get('organisation'),
    verifiedOnly: searchParams.get('verified') === 'true',
  });

  const groupOptions = resultGroups.map((group) => ({
    value: group.value,
    label: group.label,
  }));

  return (
    <>
      <section className="max-w-content px-page-gutter mx-auto pt-8 pb-8">
        <SearchBar />

        <p className="text-muted mt-4 text-xs" role="status">
          About {matches.length} {matches.length === 1 ? 'result' : 'results'}
        </p>

        <FilterChips
          param="group"
          label="Filter by result type"
          options={groupOptions}
          className="mt-4"
        />
      </section>

      <section className="bg-surface-sunken border-border border-y">
        <div className="max-w-content px-page-gutter mx-auto grid gap-6 py-10 lg:grid-cols-[17rem_1fr]">
          <SearchFilters />
          <SearchResults />
        </div>
      </section>
    </>
  );
}
