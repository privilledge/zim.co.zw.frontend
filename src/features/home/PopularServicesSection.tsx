import { Link } from 'react-router';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { popularServices } from '@/features/home/homeContent';
import { serviceIcons } from '@/features/home/iconMaps';

/**
 * A shortcut row for the handful of government services that account for most
 * of the traffic, so common tasks do not require going through a category page.
 */
export function PopularServicesSection() {
  return (
    <section className="bg-surface-sunken">
      <div className="max-w-content px-page-gutter mx-auto py-16">
        <SectionHeader
          title="Popular services this week"
          action={{ label: 'All government services', to: '/government' }}
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {popularServices.map((service) => {
            const Icon = serviceIcons[service.iconKey];

            return (
              <li key={service.title}>
                <Link
                  to={service.path}
                  className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full flex-col p-5 transition-all"
                >
                  <span className="bg-primary-soft text-primary rounded-control flex size-9 items-center justify-center">
                    <Icon className="size-[1.125rem]" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold">{service.title}</h3>
                  <p className="text-muted mt-1 text-xs">{service.organisation}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
