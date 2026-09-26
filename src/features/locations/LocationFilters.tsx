import { useState } from 'react';
import { useSearchParams } from 'react-router';

import { ChevronDownIcon, MapPinIcon } from '@/components/icons';
import { defaultProvince, provinces } from '@/features/locations/locationContent';

type NearState = 'idle' | 'locating' | 'active' | 'unavailable';

/**
 * The province and city controls, and the "Near me" button.
 *
 * Selection lives in the URL, as everywhere else on the portal, so a filtered
 * view can be linked to and the list beside the map reads the same source.
 *
 * "Near me" asks the browser for a position because that is what the finished
 * feature will do, but the distances in the list are illustrative until the
 * API returns real coordinates. The page says so rather than implying the
 * ordering is measured from where the reader is standing.
 */
export function LocationFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [nearState, setNearState] = useState<NearState>(
    searchParams.get('near') === '1' ? 'active' : 'idle',
  );

  const provinceValue = searchParams.get('province') ?? defaultProvince;
  const province =
    provinces.find((item) => item.value === provinceValue) ?? provinces[0]!;
  const cityValue = searchParams.get('city');

  function update(mutate: (params: URLSearchParams) => void) {
    const next = new URLSearchParams(searchParams);
    mutate(next);
    setSearchParams(next, { replace: true });
  }

  function selectProvince(value: string) {
    update((params) => {
      params.set('province', value);
      // A city from the previous province would filter everything away.
      params.delete('city');
    });
  }

  function toggleNear() {
    if (nearState === 'active') {
      setNearState('idle');
      update((params) => params.delete('near'));
      return;
    }

    const apply = () => {
      setNearState('active');
      update((params) => params.set('near', '1'));
    };

    if (!('geolocation' in navigator)) {
      setNearState('unavailable');
      apply();
      return;
    }

    setNearState('locating');
    navigator.geolocation.getCurrentPosition(
      () => apply(),
      () => {
        setNearState('unavailable');
        apply();
      },
      { timeout: 8000 },
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="border-border bg-surface rounded-card focus-within:border-primary relative flex items-center gap-2.5 border px-4 py-2.5 transition-colors">
          <MapPinIcon className="text-primary size-4 shrink-0" />

          <div>
            <label
              htmlFor="province-select"
              className="text-kicker text-muted block font-semibold uppercase"
            >
              Location
            </label>
            <select
              id="province-select"
              value={province.value}
              onChange={(event) => selectProvince(event.target.value)}
              className="mt-0.5 w-full appearance-none bg-transparent pr-6 text-sm font-semibold outline-none"
            >
              {provinces.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.longLabel}
                </option>
              ))}
            </select>
          </div>

          <ChevronDownIcon className="text-muted pointer-events-none absolute right-3.5 size-4" />
        </div>

        <button
          type="button"
          onClick={toggleNear}
          aria-pressed={nearState === 'active'}
          className={[
            'rounded-pill flex items-center gap-2 border px-4 py-2.5 text-[0.8125rem] font-medium transition-colors',
            nearState === 'active'
              ? 'border-primary bg-primary text-white'
              : 'border-border bg-surface hover:border-border-strong',
          ].join(' ')}
        >
          <MapPinIcon className="size-4" />
          {nearState === 'locating' ? 'Locating...' : 'Near me'}
        </button>
      </div>

      {nearState === 'active' && (
        <p className="text-muted mt-3 text-xs">
          Sorted by distance. Distances are illustrative until the API supplies real
          coordinates.
        </p>
      )}
      {nearState === 'unavailable' && (
        <p className="text-muted mt-3 text-xs">
          Your location is unavailable, so the list is sorted by the distances already on
          record.
        </p>
      )}

      <p className="text-muted mt-6 text-xs font-medium">Provinces</p>
      <ul className="mt-2.5 flex flex-wrap gap-2">
        {provinces.map((item) => {
          const active = item.value === province.value;

          return (
            <li key={item.value}>
              <button
                type="button"
                onClick={() => selectProvince(item.value)}
                aria-pressed={active}
                className={[
                  'rounded-pill border px-3.5 py-2 text-[0.8125rem] font-medium transition-colors',
                  active
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-surface hover:border-border-strong',
                ].join(' ')}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>

      <p className="text-muted mt-6 text-xs font-medium">
        Cities in {province.longLabel}
      </p>
      <ul className="mt-2.5 flex flex-wrap gap-2">
        {province.cities.map((city) => {
          const active = city === cityValue;

          return (
            <li key={city}>
              <button
                type="button"
                onClick={() =>
                  update((params) => {
                    if (active) params.delete('city');
                    else params.set('city', city);
                  })
                }
                aria-pressed={active}
                className={[
                  'rounded-pill border px-3.5 py-2 text-[0.8125rem] font-medium transition-colors',
                  active
                    ? 'border-primary bg-primary-soft text-primary'
                    : 'border-border bg-surface hover:border-border-strong',
                ].join(' ')}
              >
                {city}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
