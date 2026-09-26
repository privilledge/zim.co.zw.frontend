import { CityPills } from '@/components/ui/CityPills';
import { serviceCities } from '@/features/government/governmentContent';

/**
 * Entry points by city, for services that still have to be done in person.
 *
 * The band uses the sand tint rather than the sunken neutral so it separates
 * from the departments grid directly above it without a third border.
 *
 * Each city links into search rather than filtering the list above, because
 * which services are offered in which town is per-record information the API
 * will supply - inventing it here would be exactly the kind of unsourced
 * claim the rest of the page is built to avoid.
 */
export function WhereToGoSection() {
  return (
    <section className="bg-sand-100">
      <div className="max-w-content px-page-gutter mx-auto py-14">
        <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-6">
          <div className="max-w-md">
            <h2 className="text-section font-serif font-bold">Where to go</h2>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Filter services by the town or city where you can be served in person,
              including district offices outside the provincial capitals.
            </p>
          </div>

          <CityPills
            cities={serviceCities}
            buildPath={(city) =>
              `/search?q=${encodeURIComponent(`Government services in ${city}`)}`
            }
            className="lg:max-w-md lg:justify-end"
          />
        </div>
      </div>
    </section>
  );
}
