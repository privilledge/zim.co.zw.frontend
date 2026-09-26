import { Link } from 'react-router';

import { MapPinIcon } from '@/components/icons';
import { Scene } from '@/components/illustrations/Scene';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cities } from '@/features/explore/exploreContent';

/** Harare and Bulawayo, given a card each rather than a line in a list. */
export function CitiesSection() {
  return (
    <section className="bg-surface-sunken border-border border-y">
      <div className="max-w-content px-page-gutter mx-auto py-16">
        <SectionHeader
          title="Cities"
          description="Two very different centres, each worth a few days on its own terms."
        />

        <ul className="mt-8 grid gap-4 lg:grid-cols-2">
          {cities.map((city) => (
            <li key={city.name}>
              <Link
                to={city.path}
                className="group rounded-card relative flex h-64 flex-col justify-end overflow-hidden p-6"
              >
                <Scene
                  variant={city.scene}
                  className="absolute inset-0 size-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-sand-700/95 via-sand-700/40 absolute inset-0 bg-gradient-to-t to-transparent" />

                <div className="relative">
                  <h3 className="font-serif text-lg font-bold text-white">{city.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-white/85">
                    <MapPinIcon className="size-3.5 shrink-0" />
                    {city.province}
                  </p>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-white/80">
                    {city.description}
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
