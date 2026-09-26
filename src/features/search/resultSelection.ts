import { searchResults } from '@/features/search/searchContent';
import type { SearchResult } from '@/features/search/searchContent';

/**
 * Selection and filtering for the results list.
 *
 * The sidebar and the results both need this, and the location and
 * organisation-type options are derived from the records rather than typed
 * out, so a new result in a new town cannot go missing from the dropdown.
 */

export const locationOptions: readonly { value: string; label: string }[] = [
  { value: 'all', label: 'Anywhere in Zimbabwe' },
  ...[...new Set(searchResults.map((result) => result.location))]
    .sort((a, b) => a.localeCompare(b))
    .map((location) => ({ value: location, label: location })),
];

export const organisationTypeOptions: readonly { value: string; label: string }[] = [
  { value: 'all', label: 'Any organisation' },
  ...[
    ...new Set(
      searchResults
        .map((result) => result.organisationType)
        .filter((type): type is string => type !== undefined),
    ),
  ]
    .sort((a, b) => a.localeCompare(b))
    .map((type) => ({ value: type, label: type })),
];

/** Multi-select filters travel as one comma-separated parameter. */
export function parseList(value: string | null): readonly string[] {
  return value ? value.split(',').filter(Boolean) : [];
}

export function toggleInList(list: readonly string[], value: string): string[] {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

interface Selection {
  group: string | null;
  categories: readonly string[];
  location: string | null;
  organisationType: string | null;
  verifiedOnly: boolean;
}

export function selectResults({
  group,
  categories,
  location,
  organisationType,
  verifiedOnly,
}: Selection): readonly SearchResult[] {
  return searchResults.filter((result) => {
    if (group !== null && result.group !== group) return false;
    if (categories.length > 0 && !categories.includes(result.category)) return false;
    if (location !== null && location !== 'all' && result.location !== location) {
      return false;
    }
    if (
      organisationType !== null &&
      organisationType !== 'all' &&
      result.organisationType !== organisationType
    ) {
      return false;
    }
    if (verifiedOnly && result.status !== 'verified') return false;

    return true;
  });
}
