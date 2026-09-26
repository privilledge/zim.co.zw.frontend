import { Link } from 'react-router';

import { MapPinIcon } from '@/components/icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { opportunities } from '@/features/home/homeContent';

/**
 * Jobs, scholarships and internships with a deadline attached.
 *
 * The closing date is the reason this section exists, so it gets a pill of its
 * own and the most urgent one is highlighted rather than left to be spotted.
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
        {opportunities.map((opportunity) => (
          <li key={opportunity.title}>
            <Link
              to={opportunity.path}
              className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full flex-col p-5 transition-all"
            >
              <p className="text-kicker text-muted font-semibold uppercase">
                {opportunity.category} · {opportunity.type}
              </p>

              <h3 className="mt-3 font-semibold">{opportunity.title}</h3>
              <p className="text-muted mt-1 text-sm">{opportunity.organisation}</p>

              <div className="border-border mt-auto flex items-center justify-between gap-3 border-t pt-4">
                <span className="text-muted flex items-center gap-1.5 text-xs">
                  <MapPinIcon className="size-3.5" />
                  {opportunity.location}
                </span>

                <span
                  className={[
                    'rounded-pill px-2.5 py-1 text-[0.6875rem] font-semibold',
                    opportunity.closingSoon
                      ? 'bg-review-soft text-review'
                      : 'bg-surface-sunken text-muted',
                  ].join(' ')}
                >
                  {opportunity.closingLabel}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
