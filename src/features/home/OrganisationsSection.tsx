import { Link } from 'react-router';

import { ArrowRightIcon, ShieldIcon } from '@/components/icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { organisations } from '@/features/home/homeContent';

/**
 * Featured organisations, paired with the verification legend.
 *
 * These two sit together deliberately: the badges on the cards only mean
 * something if the legend explaining them is in the same eyeline.
 */
export function OrganisationsSection() {
  return (
    <section className="max-w-content px-page-gutter mx-auto py-16">
      <SectionHeader
        title="Featured organisations"
        description="Profiles with services, locations, contact details and where the information came from."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
        {/* `content-start` keeps the cards at their natural height instead of
            stretching them to match the taller legend beside them. */}
        <ul className="grid content-start gap-4 sm:grid-cols-2">
          {organisations.map((organisation) => (
            <li key={organisation.name}>
              <Link
                to={organisation.path}
                className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full items-start gap-3.5 p-4 transition-all"
              >
                <span
                  aria-hidden
                  className="bg-surface-sunken text-muted rounded-control flex size-10 shrink-0 items-center justify-center text-xs font-bold"
                >
                  {organisation.initials}
                </span>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold">{organisation.name}</h3>
                  <p className="text-muted mt-0.5 text-xs">
                    {organisation.type} · {organisation.city}
                  </p>
                  <div className="mt-2.5">
                    <VerificationBadge status={organisation.status} />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <aside className="border-border bg-surface rounded-card p-6">
          <h3 className="flex items-center gap-2 font-semibold">
            <ShieldIcon className="text-primary size-[1.125rem]" />
            Where information comes from
          </h3>

          <p className="text-muted mt-3 text-sm leading-relaxed">
            Every record carries its source and the date it was last checked. Nothing is
            presented as official that has not been traced back to the responsible
            organisation.
          </p>

          <div className="mt-5 space-y-2">
            <VerificationBadge status="verified" variant="full" />
            <VerificationBadge status="review" variant="full" />
            <VerificationBadge status="outdated" variant="full" />
          </div>

          <Link
            to="/how-verification-works"
            className="text-primary group mt-5 flex items-center gap-1.5 text-sm font-medium"
          >
            How verification works
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </aside>
      </div>
    </section>
  );
}
