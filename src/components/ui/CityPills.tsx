import { Link } from 'react-router';

import { MapPinIcon } from '@/components/icons';

interface CityPillsProps {
  cities: readonly string[];
  /** Builds the destination for one city, so each area can scope its own. */
  buildPath: (city: string) => string;
  className?: string;
}

/**
 * The row of towns and cities that closes an area page.
 *
 * Only the pills are shared: each page wraps them in its own band, because the
 * heading and the amount of explanation around them differ.
 */
export function CityPills({ cities, buildPath, className = '' }: CityPillsProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {cities.map((city) => (
        <li key={city}>
          <Link
            to={buildPath(city)}
            className="border-border-strong bg-surface rounded-pill hover:border-primary hover:text-primary flex items-center gap-1.5 border px-3.5 py-2 text-[0.8125rem] font-medium transition-colors"
          >
            <MapPinIcon className="size-3.5" />
            {city}
          </Link>
        </li>
      ))}
    </ul>
  );
}
