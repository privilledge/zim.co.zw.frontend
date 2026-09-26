import { opportunities } from '@/features/jobs/jobsContent';
import type { Opportunity } from '@/features/jobs/jobsContent';

/**
 * Filtering and sorting for the opportunity list.
 *
 * It sits apart from the components because the header builds its dropdowns
 * from the same data the results section filters with. Deriving the location
 * options from the records themselves means a new opportunity in a new town
 * appears in the dropdown without anyone remembering to add it.
 */

export const sortOptions = [
  { value: 'soonest', label: 'Deadline soonest' },
  { value: 'latest', label: 'Deadline latest' },
] as const;

type SortValue = (typeof sortOptions)[number]['value'];

/** The tail of the count line, e.g. "…, soonest deadline first". */
export const sortDescriptions: Record<SortValue, string> = {
  soonest: 'soonest deadline first',
  latest: 'latest deadline first',
};

export const opportunityLocations: readonly { value: string; label: string }[] = [
  { value: 'all', label: 'All locations' },
  ...[...new Set(opportunities.map((opportunity) => opportunity.location))]
    .sort((a, b) => a.localeCompare(b))
    .map((location) => ({ value: location, label: location })),
];

export const totalOpportunities = opportunities.length;

interface Selection {
  /** An `OpportunityType`, or null for no type filter. */
  type: string | null;
  /** A location name, or null for all locations. */
  location: string | null;
  sort: string | null;
}

export function isSortValue(value: string | null): value is SortValue {
  return value === 'soonest' || value === 'latest';
}

export function selectOpportunities({
  type,
  location,
  sort,
}: Selection): readonly Opportunity[] {
  const filtered = opportunities.filter(
    (opportunity) =>
      (type === null || opportunity.type === type) &&
      (location === null || location === 'all' || opportunity.location === location),
  );

  const direction = sort === 'latest' ? -1 : 1;

  return [...filtered].sort((a, b) => direction * a.deadline.localeCompare(b.deadline));
}
