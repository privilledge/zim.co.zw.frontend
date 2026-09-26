import { Link, useSearchParams } from 'react-router';

import { MapPinIcon } from '@/components/icons';
import { Scene } from '@/components/illustrations/Scene';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { institutions } from '@/features/education/educationContent';

/**
 * Universities and colleges, as illustrated cards.
 *
 * The section drops out entirely when the active category is one it holds
 * nothing for - picking "Scholarships" should leave the programmes list, not
 * an empty grid with an apology in it.
 */
export function InstitutionsSection() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const visible = category
    ? institutions.filter((institution) => institution.category === category)
    : institutions;

  if (visible.length === 0) return null;

  return (
    <section className="bg-surface-sunken border-border border-y">
      <div className="max-w-content px-page-gutter mx-auto py-16">
        <SectionHeader
          title="Institutions"
          description="A first look at Zimbabwe's leading public universities and colleges."
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {visible.map((institution) => (
            <li key={institution.name}>
              <Link
                to={institution.path}
                className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised group flex h-full flex-col overflow-hidden border transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Scene
                    variant={institution.scene}
                    className="size-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <p className="bg-surface-inverse/80 rounded-control absolute bottom-2.5 left-2.5 px-2 py-1 text-[0.625rem] font-semibold text-white backdrop-blur-sm">
                    {institution.shortName}
                  </p>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold">{institution.name}</h3>
                  <p className="text-muted mt-1.5 flex items-center gap-1.5 text-xs">
                    <MapPinIcon className="size-3.5 shrink-0" />
                    {institution.city}
                  </p>
                  <p className="text-muted mt-2.5 text-xs leading-relaxed">
                    {institution.description}
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
