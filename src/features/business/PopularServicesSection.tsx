import { Link, useSearchParams } from 'react-router';

import { ArrowRightIcon } from '@/components/icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { businessServices } from '@/features/business/businessContent';
import { businessServiceIcons } from '@/features/business/iconMaps';

/**
 * The handful of tasks people come to this area to do.
 *
 * Like the education page, the section steps aside when the active sector has
 * nothing in it, leaving the organisations list to answer.
 */
export function PopularServicesSection() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const visible = category
    ? businessServices.filter((service) => service.category === category)
    : businessServices;

  if (visible.length === 0) return null;

  return (
    <section className="max-w-content px-page-gutter mx-auto pb-16">
      <SectionHeader title="Popular services" />

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((service) => {
          const Icon = businessServiceIcons[service.iconKey];

          return (
            <li key={service.title}>
              <Link
                to={service.path}
                className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised group flex h-full flex-col border p-5 transition-all"
              >
                <span className="bg-surface-sunken text-foreground rounded-control flex size-9 items-center justify-center">
                  <Icon className="size-[1.125rem]" />
                </span>

                <h3 className="mt-4 font-serif font-bold">{service.title}</h3>

                <p className="text-muted mt-2.5 text-xs leading-relaxed">
                  {service.description}
                </p>

                <span className="text-primary mt-auto flex items-center gap-1.5 pt-5 text-xs font-medium">
                  Learn more
                  <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
