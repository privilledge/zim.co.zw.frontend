import { Link } from 'react-router';

import { MapPinIcon } from '@/components/icons';
import { Scene } from '@/components/illustrations/Scene';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { destinations } from '@/features/home/homeContent';

/**
 * Destinations, on the dark surface.
 *
 * The inverted band is doing a job: it breaks up a long page of pale cards and
 * lets the illustrated scenes carry the section instead of competing with the
 * interface around them. The first card is given more width as the lead, but
 * all three share a fixed height so the row stays level - an aspect ratio would
 * make the wider card taller as well.
 */
export function DestinationsSection() {
  return (
    <section className="bg-surface-inverse">
      <div className="max-w-content px-page-gutter mx-auto py-16">
        <SectionHeader
          kicker="Explore Zimbabwe"
          title="Places worth the journey"
          action={{ label: 'All destinations', to: '/explore' }}
          tone="inverse"
        />

        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {destinations.map((destination) => (
            <li key={destination.name}>
              <Link
                to={destination.path}
                className="group rounded-card relative flex h-64 flex-col justify-end overflow-hidden p-5 lg:h-80"
              >
                <Scene
                  variant={destination.scene}
                  className="absolute inset-0 size-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-sand-700/95 via-sand-700/35 absolute inset-0 bg-gradient-to-t to-transparent" />

                <div className="relative">
                  <h3 className="text-lg font-bold text-white">{destination.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-white/85">
                    <MapPinIcon className="size-3.5" />
                    {destination.province}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
