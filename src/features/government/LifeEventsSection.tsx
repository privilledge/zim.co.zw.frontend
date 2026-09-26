import { Link } from 'react-router';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { lifeEvents } from '@/features/government/governmentContent';
import { lifeEventIcons } from '@/features/government/iconMaps';

/**
 * Services grouped by the situation that sends someone looking for them.
 *
 * People rarely arrive knowing which department owns a service - they arrive
 * having lost an ID or bought a car. Grouping by life event rather than by
 * ministry is what makes the section worth having above the A–Z list.
 */
export function LifeEventsSection() {
  return (
    <section className="bg-surface-sunken border-border border-y">
      <div className="max-w-content px-page-gutter mx-auto py-16">
        <SectionHeader
          title="Browse by life event"
          description="Eight groupings cover most of what people arrive looking for."
          action={{ label: 'Full A–Z of services', to: '/search?q=Government+services' }}
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lifeEvents.map((event) => {
            const Icon = lifeEventIcons[event.iconKey];

            return (
              <li key={event.title}>
                <Link
                  to={event.path}
                  className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full flex-col border p-5 transition-all"
                >
                  <span className="bg-surface-sunken text-foreground rounded-control flex size-9 items-center justify-center">
                    <Icon className="size-[1.125rem]" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold">{event.title}</h3>
                  <p className="text-muted mt-1.5 text-xs leading-relaxed">
                    {event.description}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
