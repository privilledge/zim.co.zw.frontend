import { useMemo, useState } from 'react';
import { Link } from 'react-router';

import { ChevronDownIcon, ChevronRightIcon, FilterIcon } from '@/components/icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import {
  verificationStatusConfig,
  verificationStatusOrder,
} from '@/components/ui/verificationStatus';
import { popularGovernmentServices } from '@/features/government/governmentContent';
import { lifeEventIcons } from '@/features/government/iconMaps';
import type { VerificationStatus } from '@/types/verification';

type SortOrder = 'popular' | 'alphabetical';
type StatusFilter = VerificationStatus | 'all';

const SORT_LABELS: Record<SortOrder, string> = {
  popular: 'Most used',
  alphabetical: 'A–Z',
};

/**
 * The service list, with the two controls the design puts beside its heading.
 *
 * Both act on the list in place rather than navigating, because the whole
 * point of the section is to scan one table. Sorting reorders the same array
 * the content module exports - there is no second list to fall out of step -
 * and filtering narrows it by verification status, which is the attribute a
 * reader is most likely to want to act on.
 */
export function ServicesSection() {
  const [sort, setSort] = useState<SortOrder>('popular');
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState<StatusFilter>('all');

  const services = useMemo(() => {
    const filtered =
      status === 'all'
        ? popularGovernmentServices
        : popularGovernmentServices.filter((service) => service.status === status);

    // `popular` is the order the content module already declares, so only the
    // alphabetical case needs a copy to sort.
    return sort === 'popular'
      ? filtered
      : [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  }, [sort, status]);

  const filters: readonly StatusFilter[] = ['all', ...verificationStatusOrder];

  return (
    <section className="max-w-content px-page-gutter mx-auto py-16">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
        <SectionHeader
          title="Popular services"
          description="The eight pages opened most often, each with its responsible organisation and verification state."
        />

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setFilterOpen((open) => !open)}
            aria-expanded={filterOpen}
            aria-controls="service-filters"
            className="border-border rounded-control hover:border-border-strong hover:bg-surface-sunken flex items-center gap-2 border px-3.5 py-2 text-[0.8125rem] font-medium transition-colors"
          >
            <FilterIcon className="size-4" />
            Filter
          </button>

          <button
            type="button"
            onClick={() =>
              setSort((current) => (current === 'popular' ? 'alphabetical' : 'popular'))
            }
            aria-label={`Sort order: ${SORT_LABELS[sort]}. Activate to change.`}
            className="border-border rounded-control hover:border-border-strong hover:bg-surface-sunken flex items-center gap-2 border px-3.5 py-2 text-[0.8125rem] font-medium transition-colors"
          >
            {SORT_LABELS[sort]}
            <ChevronDownIcon className="text-muted size-4" />
          </button>
        </div>
      </div>

      {filterOpen && (
        <ul id="service-filters" className="mt-6 flex flex-wrap gap-2">
          {filters.map((value) => {
            const label =
              value === 'all' ? 'All services' : verificationStatusConfig[value].label;
            const active = status === value;

            return (
              <li key={value}>
                <button
                  type="button"
                  onClick={() => setStatus(value)}
                  aria-pressed={active}
                  className={[
                    'rounded-pill border px-3 py-1.5 text-xs font-medium transition-colors',
                    active
                      ? 'border-primary bg-primary-soft text-primary'
                      : 'border-border text-muted hover:border-border-strong hover:text-foreground',
                  ].join(' ')}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <div className="border-border bg-surface rounded-card shadow-card mt-8 overflow-hidden border">
        {services.length === 0 ? (
          <p className="text-muted px-5 py-10 text-center text-sm">
            No services match that status.
          </p>
        ) : (
          <ul>
            {services.map((service) => {
              const Icon = lifeEventIcons[service.iconKey];

              return (
                <li
                  key={service.title}
                  className="border-border border-t first:border-t-0"
                >
                  <Link
                    to={service.path}
                    className="hover:bg-surface-sunken flex items-center gap-4 px-4 py-3.5 transition-colors sm:px-5"
                  >
                    <span className="bg-primary-soft text-primary rounded-control flex size-9 shrink-0 items-center justify-center">
                      <Icon className="size-[1.125rem]" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium">{service.title}</span>
                      <span className="text-muted mt-0.5 block text-xs lg:hidden">
                        {service.organisation}
                      </span>
                    </span>

                    <span className="text-muted hidden shrink-0 text-xs lg:block lg:w-64 xl:w-72">
                      {service.organisation}
                    </span>

                    <span className="hidden shrink-0 sm:block lg:w-32">
                      <VerificationBadge status={service.status} />
                    </span>

                    <ChevronRightIcon className="text-muted size-4 shrink-0" />
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
