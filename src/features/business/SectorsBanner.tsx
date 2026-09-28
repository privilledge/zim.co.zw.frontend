import { Link } from 'react-router';

import { Photo } from '@/components/media/Photo';
import { sectorsBanner } from '@/features/business/businessContent';

/**
 * The closing banner: the two sectors that carry most of the country's
 * employment, shown side by side in one photograph.
 *
 * A banner this shallow keeps only a band of the picture, so the crop sits a
 * little above centre, where the people's faces are. The caption names the
 * subject, so the photo is decorative.
 */
export function SectorsBanner() {
  return (
    <section className="max-w-content px-page-gutter mx-auto pb-16">
      <h2 className="font-serif text-lg font-bold">{sectorsBanner.title}</h2>

      <Link
        to={sectorsBanner.path}
        className="rounded-card group relative mt-5 block aspect-[4/1] overflow-hidden"
      >
        <Photo
          photo={sectorsBanner.photo}
          sizes="(min-width: 1024px) 1200px, 100vw"
          decorative
          className="size-full object-[50%_35%] transition-transform duration-500 group-hover:scale-105"
        />
        <p className="bg-surface-inverse/80 rounded-control absolute bottom-3 left-3 px-2.5 py-1.5 text-[0.6875rem] font-semibold text-white backdrop-blur-sm">
          {sectorsBanner.title}
        </p>
      </Link>
    </section>
  );
}
