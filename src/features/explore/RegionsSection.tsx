import { Link } from 'react-router';

import { Artwork } from '@/components/media/Artwork';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { regions } from '@/features/explore/exploreContent';

/**
 * Provinces grouped the way itineraries are actually planned, rather than the
 * way the country is administratively divided - which is why Mashonaland
 * appears once here but as three provinces on the About page.
 */
export function RegionsSection() {
  return (
    <section className="max-w-content px-page-gutter mx-auto py-16">
      <SectionHeader
        title="By region"
        description="Provinces grouped the way most itineraries are actually planned."
        action={{ label: 'All ten provinces', to: '/about' }}
      />

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {regions.map((region) => (
          <li key={region.name}>
            <Link
              to={region.path}
              className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised group flex h-full flex-col overflow-hidden border transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <Artwork
                  photo={region.photo}
                  scene={region.scene}
                  className="size-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-primary text-sm font-semibold">{region.name}</h3>
                <p className="text-muted mt-1 text-xs">
                  {region.highlights} &middot; {region.placeCount} places
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
