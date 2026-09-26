import { Link } from 'react-router';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { directoryTypes } from '@/features/directory/directoryContent';
import { directoryTypeIcons } from '@/features/directory/iconMaps';

/**
 * The six categories every listed organisation falls into.
 *
 * Each card carries its record count, which is the part that tells a reader
 * whether the category is worth opening.
 */
export function BrowseByTypeSection() {
  return (
    <div className="max-w-content px-page-gutter mx-auto pt-16">
      <SectionHeader
        title="Browse by organisation type"
        description="Six broad categories cover every listed organisation on the platform."
      />

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {directoryTypes.map((type) => {
          const Icon = directoryTypeIcons[type.iconKey];

          return (
            <li key={type.title}>
              <Link
                to={type.path}
                className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full flex-col border p-5 transition-all"
              >
                <span className="bg-primary-soft text-primary rounded-control flex size-9 items-center justify-center">
                  <Icon className="size-[1.125rem]" />
                </span>
                <h3 className="mt-4 font-semibold">{type.title}</h3>
                <p className="text-muted mt-1 text-xs">{type.count} listed</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
