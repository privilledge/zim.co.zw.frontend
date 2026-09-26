import { Link, useSearchParams } from 'react-router';

import { ArrowRightIcon, BuildingIcon, MapPinIcon } from '@/components/icons';
import { opportunityTypeIcons } from '@/features/jobs/iconMaps';
import {
  isSortValue,
  selectOpportunities,
  sortDescriptions,
  totalOpportunities,
} from '@/features/jobs/opportunityFilters';

/**
 * The opportunity list.
 *
 * The deadline is the reason this page exists, so it gets a pill of its own on
 * every card and the ones near enough to act on are highlighted rather than
 * left to be spotted.
 */
export function OpportunitiesSection() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort');

  const visible = selectOpportunities({
    type: searchParams.get('type'),
    location: searchParams.get('location'),
    sort,
  });

  const sortDescription = sortDescriptions[isSortValue(sort) ? sort : 'soonest'];

  return (
    <section className="bg-surface-sunken border-border border-y">
      <div className="max-w-content px-page-gutter mx-auto py-12">
        <p className="text-muted text-xs" role="status">
          Showing {visible.length} of {totalOpportunities} opportunities,{' '}
          {sortDescription}
        </p>

        {visible.length === 0 ? (
          <p className="border-border bg-surface rounded-card text-muted mt-6 border p-10 text-center text-sm">
            No opportunities match those filters.
          </p>
        ) : (
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((opportunity) => {
              const TypeIcon = opportunityTypeIcons[opportunity.type];

              return (
                <li key={opportunity.title}>
                  <Link
                    to={opportunity.path}
                    className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised group flex h-full flex-col border p-5 transition-all"
                  >
                    <p className="text-kicker text-muted flex items-center gap-1.5 font-semibold uppercase">
                      <TypeIcon className="size-3.5 shrink-0" />
                      {opportunity.sector
                        ? `${opportunity.sector} · ${opportunity.typeLabel}`
                        : opportunity.typeLabel}
                    </p>

                    <h3 className="mt-3 font-semibold">{opportunity.title}</h3>

                    <p className="text-muted mt-3 flex items-start gap-1.5 text-xs">
                      <BuildingIcon className="mt-px size-3.5 shrink-0" />
                      {opportunity.organisation}
                    </p>
                    <p className="text-muted mt-1.5 flex items-center gap-1.5 text-xs">
                      <MapPinIcon className="size-3.5 shrink-0" />
                      {opportunity.location}
                    </p>

                    <p className="text-muted mt-3 text-xs leading-relaxed">
                      {opportunity.description}
                    </p>

                    <div className="border-border mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-4">
                      <span
                        className={[
                          'rounded-pill px-2.5 py-1 text-[0.6875rem] font-semibold',
                          opportunity.closingSoon
                            ? 'bg-review-soft text-review'
                            : 'bg-surface-sunken text-muted',
                        ].join(' ')}
                      >
                        {opportunity.deadlineLabel}
                      </span>

                      <span className="text-primary flex items-center gap-1.5 text-xs font-medium">
                        View &amp; apply
                        <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
