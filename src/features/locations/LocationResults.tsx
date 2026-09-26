import { Link, useSearchParams } from 'react-router';

import {
  ChevronRightIcon,
  GraduationCapIcon,
  HealthIcon,
  IdCardIcon,
  LandmarkIcon,
  MapPinIcon,
  MountainIcon,
  UsersIcon,
} from '@/components/icons';
import type { IconProps } from '@/components/icons';
import {
  defaultProvince,
  mapDisclaimer,
  nearbyPlaces,
  provinces,
} from '@/features/locations/locationContent';
import type { NearbyIconKey } from '@/features/locations/locationContent';

type IconComponent = (props: IconProps) => React.ReactElement;

const ICONS: Record<NearbyIconKey, IconComponent> = {
  idCard: IdCardIcon,
  health: HealthIcon,
  graduation: GraduationCapIcon,
  landmark: LandmarkIcon,
  mountain: MountainIcon,
  users: UsersIcon,
};

/**
 * The nearby list and the illustrative map beside it.
 *
 * The map is drawn from the same records as the list, so a pin can never show
 * a place the list has filtered away. It is explicitly not a real map: the
 * pins carry approximate positions, and the caption says so, because a
 * plausible-looking map that is wrong would undercut the rest of the page.
 */
export function LocationResults() {
  const [searchParams] = useSearchParams();

  const provinceValue = searchParams.get('province') ?? defaultProvince;
  const province =
    provinces.find((item) => item.value === provinceValue) ?? provinces[0]!;
  const city = searchParams.get('city');
  const sortByDistance = searchParams.get('near') === '1';

  const matches = nearbyPlaces.filter(
    (place) =>
      place.province === province.value && (city === null || place.city === city),
  );

  const visible = sortByDistance
    ? [...matches].sort((a, b) => a.distanceKm - b.distanceKm)
    : matches;

  return (
    <div>
      <h2 className="text-section font-serif font-bold">
        {visible.length} {visible.length === 1 ? 'result' : 'results'} near{' '}
        {city ?? province.longLabel}
      </h2>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        {visible.length === 0 ? (
          <p className="border-border bg-surface rounded-card text-muted border p-10 text-center text-sm">
            Nothing is listed here yet.
          </p>
        ) : (
          <div className="border-border bg-surface rounded-card overflow-hidden border">
            <ul>
              {visible.map((place) => {
                const Icon = ICONS[place.iconKey];

                return (
                  <li
                    key={place.name}
                    className="border-border border-t first:border-t-0"
                  >
                    <Link
                      to={place.path}
                      className="hover:bg-surface-sunken flex items-center gap-3.5 p-4 transition-colors"
                    >
                      <span className="bg-surface-sunken text-muted rounded-control flex size-9 shrink-0 items-center justify-center">
                        <Icon className="size-[1.125rem]" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold">{place.name}</span>
                          <span className="bg-surface-sunken rounded-pill text-muted px-2 py-0.5 text-[0.625rem] font-medium">
                            {place.type}
                          </span>
                        </span>
                        <span className="text-muted mt-0.5 block text-xs">
                          {place.address} &middot; {place.distanceKm} km away
                        </span>
                      </span>

                      <ChevronRightIcon className="text-muted size-4 shrink-0" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div>
          <div className="border-border bg-sand-100 rounded-card relative aspect-[4/3] overflow-hidden border">
            <svg
              aria-hidden
              className="text-sand-300 absolute inset-0 size-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              {Array.from({ length: 9 }, (_, index) => (index + 1) * 10).map((offset) => (
                <g key={offset} stroke="currentColor" strokeWidth="0.3">
                  <line x1={offset} y1="0" x2={offset} y2="100" />
                  <line x1="0" y1={offset} x2="100" y2={offset} />
                </g>
              ))}
            </svg>

            <p className="bg-surface-inverse/85 rounded-control absolute top-3 left-3 px-2.5 py-1.5 text-[0.6875rem] font-semibold text-white">
              Map view &middot; illustrative
            </p>

            {visible.map((place) => (
              <span
                key={place.name}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                style={{ left: `${place.pin.x}%`, top: `${place.pin.y}%` }}
              >
                <span className="bg-surface text-primary shadow-card flex size-7 items-center justify-center rounded-full">
                  <MapPinIcon className="size-3.5" />
                </span>
                <span className="bg-surface rounded-control shadow-card px-1.5 py-0.5 text-[0.5625rem] font-medium whitespace-nowrap">
                  {place.pinLabel}
                </span>
              </span>
            ))}
          </div>

          <p className="text-muted mt-3 text-xs">{mapDisclaimer}</p>
        </div>
      </div>
    </div>
  );
}
