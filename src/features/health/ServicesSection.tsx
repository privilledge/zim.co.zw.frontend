import { Link } from 'react-router';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { healthServices } from '@/features/health/healthContent';
import { healthCategoryIcons } from '@/features/health/iconMaps';

/**
 * A second way into the same facilities, by kind of care rather than by name.
 *
 * Each card sets the `category` parameter the list above reads, so choosing
 * one here is the same action as pressing the matching chip in the header.
 */
export function ServicesSection() {
  return (
    <section className="max-w-content px-page-gutter mx-auto pb-16">
      <SectionHeader
        title="Services"
        description="Browse facilities by the kind of care they offer."
      />

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {healthServices.map((service) => {
          const Icon = healthCategoryIcons[service.value];

          return (
            <li key={service.value}>
              <Link
                to={`/health?category=${service.value}`}
                className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full items-center gap-3.5 border p-5 transition-all"
              >
                <span className="bg-surface-sunken text-foreground rounded-control flex size-9 shrink-0 items-center justify-center">
                  <Icon className="size-[1.125rem]" />
                </span>
                <h3 className="font-serif font-bold">{service.label}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
