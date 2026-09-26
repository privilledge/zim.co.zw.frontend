import { Link, useSearchParams } from 'react-router';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { programmes } from '@/features/education/educationContent';
import { programmeIcons } from '@/features/education/iconMaps';

/**
 * Funding and examination routes - the two things learners search for that
 * are not an institution.
 *
 * Like the institutions grid, it steps aside when the active category belongs
 * to the other list.
 */
export function ProgrammesSection() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const visible = category
    ? programmes.filter((programme) => programme.category === category)
    : programmes;

  if (visible.length === 0) return null;

  return (
    <section className="max-w-content px-page-gutter mx-auto py-16">
      <SectionHeader
        title="Popular programmes & scholarships"
        description="Funding and examination routes learners search for most."
      />

      <ul className="mt-8 grid gap-4 lg:grid-cols-2">
        {visible.map((programme) => {
          const Icon = programmeIcons[programme.iconKey];

          return (
            <li key={programme.title}>
              <Link
                to={programme.path}
                className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full gap-3.5 border p-5 transition-all"
              >
                <Icon className="text-primary mt-0.5 size-[1.125rem] shrink-0" />

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold">{programme.title}</h3>
                  <p className="text-muted mt-1 text-xs">{programme.organisation}</p>
                  <p className="text-muted mt-2 text-xs leading-relaxed">
                    {programme.description}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
