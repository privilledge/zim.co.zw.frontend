import { Link } from 'react-router';

import { InfoIcon } from '@/components/icons';
import { PendingValue } from '@/components/ui/PendingValue';
import { planCards, planNote } from '@/features/explore/exploreContent';
import { planIcons } from '@/features/explore/iconMaps';

/**
 * Practical notes for a trip, and the sourcing statement that qualifies them.
 *
 * The park fee is deliberately not stated: it is set per season and per
 * residency status, and a wrong figure here would be worse than none. The
 * `PendingValue` marker shows the gap rather than hiding it.
 */
export function PlanSection() {
  return (
    <section className="bg-sand-100">
      <div className="max-w-content px-page-gutter mx-auto py-16">
        <h2 className="text-section font-serif font-bold">Plan your visit</h2>
        <p className="text-muted mt-2 text-sm">
          Practical ground rules.{' '}
          <em>
            Confirm fees and opening hours with the park or operator before you travel.
          </em>
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {planCards.map((card) => {
            const Icon = planIcons[card.iconKey];

            return (
              <li
                key={card.title}
                className="border-border bg-surface rounded-card flex flex-col border p-5"
              >
                <span className="bg-surface-sunken text-foreground rounded-control flex size-9 items-center justify-center">
                  <Icon className="size-[1.125rem]" />
                </span>

                <h3 className="mt-4 text-sm font-semibold">{card.title}</h3>
                <p className="text-muted mt-2 text-xs leading-relaxed">
                  {card.description}
                  {card.pendingLabel && (
                    <>
                      {' '}
                      <PendingValue label={card.pendingLabel} /> {card.descriptionAfter}
                    </>
                  )}
                </p>
              </li>
            );
          })}
        </ul>

        <p className="border-border bg-surface rounded-card text-muted mt-4 flex items-start gap-2.5 border p-4 text-xs leading-relaxed">
          <InfoIcon className="mt-px size-4 shrink-0" />
          <span>
            {planNote}{' '}
            <Link to="/how-verification-works" className="text-primary font-semibold">
              How verification works
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
}
