import { Link } from 'react-router';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { departments, departmentTotal } from '@/features/government/governmentContent';

/**
 * Who is responsible for what.
 *
 * The service count on each card is the useful part: it tells a reader
 * whether a department is worth opening before they open it.
 */
export function DepartmentsSection() {
  return (
    <section className="bg-surface-sunken border-border border-y">
      <div className="max-w-content px-page-gutter mx-auto py-16">
        <SectionHeader
          title="Departments & agencies"
          description="Who is responsible for what, with offices and published contact details."
          action={{ label: `All ${departmentTotal} organisations`, to: '/directory' }}
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {departments.map((department) => (
            <li key={department.name}>
              <Link
                to={department.path}
                className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full flex-col border p-5 transition-all"
              >
                <span
                  aria-hidden
                  className="bg-surface-sunken text-muted rounded-control flex size-9 items-center justify-center text-xs font-bold"
                >
                  {department.initials}
                </span>

                <h3 className="text-primary mt-4 text-sm font-semibold">
                  {department.name}
                </h3>
                <p className="text-muted mt-1.5 text-xs">
                  {department.remit} · {department.serviceCount} services
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
