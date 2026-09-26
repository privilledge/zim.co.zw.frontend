import { CityPills } from '@/components/ui/CityPills';
import { educationCities } from '@/features/education/educationContent';

/**
 * Entry points by city.
 *
 * As on the government page, each city links into search rather than
 * filtering the lists above: which institutions sit in which town is
 * per-record information the API will carry.
 */
export function NearYouSection() {
  return (
    <section className="bg-sand-100">
      <div className="max-w-content px-page-gutter mx-auto py-14">
        <h2 className="text-section font-serif font-bold">Find institutions near you</h2>

        <CityPills
          cities={educationCities}
          buildPath={(city) =>
            `/search?q=${encodeURIComponent(`Universities and colleges in ${city}`)}`
          }
          className="mt-6"
        />
      </div>
    </section>
  );
}
