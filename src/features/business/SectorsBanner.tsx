import { Link } from 'react-router';

import { Scene } from '@/components/illustrations/Scene';
import { sectorsBanner } from '@/features/business/businessContent';

/**
 * The closing banner: the two sectors that carry most of the country's
 * employment, drawn rather than photographed like every other scene on the
 * portal.
 *
 * It uses the wide `industry` canvas, since a 4:3 scene sliced into a banner
 * this shallow would keep only its middle band.
 */
export function SectorsBanner() {
  return (
    <section className="max-w-content px-page-gutter mx-auto pb-16">
      <h2 className="font-serif text-lg font-bold">{sectorsBanner.title}</h2>

      <Link
        to={sectorsBanner.path}
        className="rounded-card group relative mt-5 block aspect-[4/1] overflow-hidden"
      >
        <Scene
          variant="industry"
          className="size-full transition-transform duration-500 group-hover:scale-105"
        />
        <p className="bg-surface-inverse/80 rounded-control absolute bottom-3 left-3 px-2.5 py-1.5 text-[0.6875rem] font-semibold text-white backdrop-blur-sm">
          {sectorsBanner.title}
        </p>
      </Link>
    </section>
  );
}
