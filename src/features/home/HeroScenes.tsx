import { Link } from 'react-router';

import { MapPinIcon } from '@/components/icons';
import { Photo } from '@/components/media/Photo';
import { heroScenes } from '@/features/home/homeContent';

/**
 * A full-bleed strip of places under the hero copy. The first tile leads,
 * with a larger caption and its province; the rest carry only their name.
 *
 * The photos are decorative because each caption already says what it shows.
 */
export function HeroScenes() {
  return (
    <ul className="bg-surface grid grid-cols-2 gap-0.5 lg:grid-cols-4">
      {heroScenes.map((scene, index) => {
        const lead = index === 0;

        return (
          <li key={scene.place}>
            <Link
              to={scene.path}
              className="group relative block aspect-[5/3] overflow-hidden"
            >
              <Photo
                photo={scene.photo}
                sizes="(min-width: 1024px) 25vw, 50vw"
                decorative
                priority={lead}
                className="size-full transition-transform duration-500 group-hover:scale-105"
              />
              {/* A dark wash over the whole photo, then a deeper fade behind the caption. */}
              <div className="bg-surface-inverse/35 absolute inset-0" aria-hidden />
              <div
                className="from-surface-inverse/80 via-surface-inverse/20 absolute inset-0 bg-gradient-to-t to-transparent"
                aria-hidden
              />

              <div className="absolute inset-x-0 bottom-0 p-3 text-left lg:p-4">
                {lead ? (
                  <>
                    <p className="font-serif text-lg font-bold text-white lg:text-xl">
                      {scene.place}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-[0.6875rem] text-white/80">
                      <MapPinIcon className="size-3" />
                      {scene.province}
                    </p>
                  </>
                ) : (
                  <p className="text-xs font-semibold text-white">{scene.place}</p>
                )}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
