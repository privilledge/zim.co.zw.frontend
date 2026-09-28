import { Link } from 'react-router';

import { CalendarClockIcon } from '@/components/icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { opportunityGroups } from '@/features/home/homeContent';
import { opportunityIcons } from '@/features/home/iconMaps';

/**
 * Jobs, internships and scholarships, grouped by kind.
 *
 * Each card leads with how many deadlines fall this week, because the closing
 * date is the reason this section exists, then lists the nearest two. The
 * card title and each listing are separate links, so the card itself is not
 * one: a link cannot contain other links.
 */
export function OpportunitiesSection() {
  return (
    <section className="max-w-content px-page-gutter mx-auto py-16">
      <SectionHeader
        title="Opportunities closing soon"
        description="Jobs, internships and scholarships with dated deadlines and a link to the source."
        action={{ label: 'All opportunities', to: '/jobs' }}
      />

      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {opportunityGroups.map((group) => {
          const Icon = opportunityIcons[group.iconKey];

          return (
            <li
              key={group.title}
              className="border-border bg-surface rounded-card shadow-raised flex h-full flex-col border p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="bg-primary-soft text-primary rounded-card flex size-12 shrink-0 items-center justify-center">
                  <Icon className="size-6" />
                </span>

                <span className="bg-danger-soft text-danger rounded-pill flex items-center gap-1.5 px-3 py-1 text-xs font-semibold">
                  <CalendarClockIcon className="size-3.5" />
                  {group.closingThisWeek} closing this week
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold">
                <Link to={group.path} className="hover:text-primary transition-colors">
                  {group.title}
                </Link>
              </h3>
              <p className="text-muted mt-2 mb-8 text-sm leading-relaxed">{group.description}</p>

              <ul className="border-border mt-auto border-t pt-4">
                {group.listings.map((listing) => (
                  <li key={listing.title}>
                    <Link
                      to={listing.path}
                      className="group flex items-baseline justify-between gap-3 py-1.5 text-sm"
                    >
                      <span className="group-hover:text-primary transition-colors">
                        {listing.title} · {listing.location}
                      </span>
                      <span className="text-muted shrink-0 text-xs">{listing.closingLabel}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
