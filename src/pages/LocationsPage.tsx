import { LocationFilters } from '@/features/locations/LocationFilters';
import { LocationResults } from '@/features/locations/LocationResults';
import { coverageNote, locationIntro } from '@/features/locations/locationContent';

/**
 * Browse by location.
 *
 * Province, city and the "Near me" toggle all live in the URL, so the filter
 * controls and the results list stay in step without this file holding any
 * state of its own.
 */
export function LocationsPage() {
  return (
    <>
      <section className="max-w-content px-page-gutter mx-auto pt-12 pb-12 lg:pt-16">
        <p className="text-kicker text-muted font-semibold uppercase">
          {locationIntro.kicker}
        </p>

        <h1 className="text-page-title mt-5 font-serif font-bold">
          {locationIntro.title}
        </h1>

        <p className="text-muted mt-5 max-w-2xl leading-relaxed">
          {locationIntro.description}
        </p>
      </section>

      <section className="bg-surface-sunken border-border border-t">
        <div className="max-w-content px-page-gutter mx-auto py-10">
          <LocationFilters />

          <div className="mt-10">
            <LocationResults />
          </div>

          <p className="bg-sand-100 rounded-card text-muted mt-12 p-6 text-center text-sm">
            {coverageNote}
          </p>
        </div>
      </section>
    </>
  );
}
