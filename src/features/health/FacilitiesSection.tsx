import { Link, useSearchParams } from 'react-router';

import { MapPinIcon } from '@/components/icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { facilities } from '@/features/health/healthContent';
import { healthCategoryIcons } from '@/features/health/iconMaps';

/**
 * The facility list.
 *
 * Unlike the education page, an empty result says so rather than hiding the
 * section: this list is the whole point of the page, and a reader who filtered
 * to "Pharmacies" needs to be told none are listed yet, not shown a page that
 * silently lost its middle.
 */
export function FacilitiesSection() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const visible = category
    ? facilities.filter((facility) => facility.category === category)
    : facilities;

  return (
    <section className="max-w-content px-page-gutter mx-auto pb-16">
      <SectionHeader
        title="Find a facility"
        description="Hospitals, clinics, pharmacies and laboratories across Zimbabwe's cities and towns, with the services each one offers."
      />

      {visible.length === 0 ? (
        <p className="border-border bg-surface rounded-card text-muted mt-8 border p-10 text-center text-sm">
          No facilities are listed in this category yet.
        </p>
      ) : (
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((facility) => {
            const Icon = healthCategoryIcons[facility.category];

            return (
              <li key={facility.name}>
                <Link
                  to={facility.path}
                  className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full flex-col border p-5 transition-all"
                >
                  <span className="bg-surface-sunken text-foreground rounded-control flex size-9 items-center justify-center">
                    <Icon className="size-[1.125rem]" />
                  </span>

                  <h3 className="mt-4 font-serif font-bold">{facility.name}</h3>

                  <p className="text-muted mt-1.5 flex items-center gap-1.5 text-xs">
                    <MapPinIcon className="size-3.5 shrink-0" />
                    {facility.city}
                  </p>

                  <p className="text-muted mt-2.5 text-xs leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="mt-4">
                    <VerificationBadge status={facility.status} />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
