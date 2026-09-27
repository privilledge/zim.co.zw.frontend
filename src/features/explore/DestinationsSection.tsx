import { Link, useSearchParams } from 'react-router';

import { MapPinIcon } from '@/components/icons';
import { Artwork } from '@/components/media/Artwork';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { destinations } from '@/features/explore/exploreContent';

/**
 * The six featured places, as a mosaic.
 *
 * The lead card is given four times the area of the two beside it, because
 * the Falls are what most readers arrive for. The mosaic spans only apply to
 * the unfiltered set: once a category narrows the list, the remaining cards
 * fall back to an even grid rather than leaving a hole where the lead was.
 */
export function DestinationsSection() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const visible = category
    ? destinations.filter((destination) => destination.category === category)
    : destinations;

  const mosaic = !category;

  return (
    <section className="bg-surface-sunken border-border border-y">
      <div className="max-w-content px-page-gutter mx-auto py-16">
        <SectionHeader
          title="Featured destinations"
          description="Six places that between them cover the falls, the wildlife, the stone cities and the highlands."
          action={{ label: 'All destinations', to: '/search?q=Destinations' }}
        />

        {visible.length === 0 ? (
          <p className="border-border bg-surface rounded-card text-muted mt-8 border p-10 text-center text-sm">
            Nothing is listed in this category yet.
          </p>
        ) : (
          <ul
            className={`mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${
              mosaic ? 'lg:auto-rows-[11rem]' : ''
            }`}
          >
            {visible.map((destination, index) => (
              <li
                key={destination.name}
                className={
                  mosaic && index === 0 ? 'lg:col-span-2 lg:row-span-2' : undefined
                }
              >
                <Link
                  to={destination.path}
                  className="group rounded-card relative flex h-56 flex-col justify-end overflow-hidden p-5 lg:h-full"
                >
                  <Artwork
                    photo={destination.photo}
                    scene={destination.scene}
                    className="absolute inset-0 size-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="from-sand-700/95 via-sand-700/35 absolute inset-0 bg-gradient-to-t to-transparent" />

                  <div className="relative">
                    <h3 className="font-serif text-lg font-bold text-white">
                      {destination.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-white/85">
                      <MapPinIcon className="size-3.5 shrink-0" />
                      {destination.province}
                    </p>
                    {destination.description && (
                      <p className="mt-2 max-w-md text-xs leading-relaxed text-white/80">
                        {destination.description}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
