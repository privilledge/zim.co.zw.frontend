import { Link } from 'react-router';

import { MapPinIcon } from '@/components/icons';
import { provinces } from '@/features/about/aboutContent';

/**
 * The ten provinces.
 *
 * A grid rather than a wrapped row of pills, because the names vary a lot in
 * length and a wrap would leave the block looking ragged.
 */
export function ProvincesSection() {
  return (
    <div className="max-w-content px-page-gutter mx-auto pt-16">
      <h2 className="text-section font-serif font-bold">Provinces</h2>
      <p className="text-muted mt-2 text-sm">
        Zimbabwe is divided into ten provinces, each with its own local authority.
      </p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {provinces.map((province) => (
          <li key={province}>
            <Link
              to={`/search?q=${encodeURIComponent(province)}`}
              className="border-border bg-surface rounded-pill hover:border-primary hover:text-primary flex items-center gap-2 border px-3.5 py-2.5 text-[0.8125rem] font-medium transition-colors"
            >
              <MapPinIcon className="size-3.5 shrink-0" />
              {province}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
