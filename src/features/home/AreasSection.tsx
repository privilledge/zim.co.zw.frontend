import { Link } from 'react-router';

import { ArrowRightIcon } from '@/components/icons';
import { Scene } from '@/components/illustrations/Scene';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  featuredArea,
  illustratedArea,
  secondaryAreas,
} from '@/features/home/homeContent';
import { areaIcons } from '@/features/home/iconMaps';

/**
 * The eight information areas - the main way into the portal.
 *
 * The two leading sections get larger cards because they are the most-visited
 * and the most visual respectively; the other six share a uniform grid.
 */
export function AreasSection() {
  const FeaturedIcon = areaIcons[featuredArea.iconKey];
  const IllustratedIcon = areaIcons[illustratedArea.iconKey];

  return (
    <section className="bg-surface-sunken border-border border-y">
      <div className="max-w-content px-page-gutter mx-auto py-16">
        <SectionHeader
          title="Start with an area"
          description="Eight sections cover the information most people come looking for."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {/* Lead card - text, with the four services people ask for most. */}
          <Link
            to={featuredArea.path}
            className="group border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex flex-col p-6 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="bg-primary-soft text-primary rounded-control flex size-10 items-center justify-center">
                <FeaturedIcon className="size-5" />
              </span>
              <h3 className="text-lg font-bold">{featuredArea.title}</h3>
            </div>

            <p className="text-muted mt-4 text-sm leading-relaxed">
              {featuredArea.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {featuredArea.tags.map((tag) => (
                <li
                  key={tag}
                  className="border-border rounded-pill text-muted border px-2.5 py-1 text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <span className="text-primary mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium">
              {featuredArea.actionLabel}
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          {/* Lead card - illustrated, with the copy laid over the scene. */}
          <Link
            to={illustratedArea.path}
            className="group rounded-card relative flex min-h-56 flex-col justify-end overflow-hidden p-6"
          >
            <Scene
              variant={illustratedArea.scene}
              className="absolute inset-0 size-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="from-sand-700/95 via-sand-700/40 absolute inset-0 bg-gradient-to-t to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="text-accent rounded-control flex size-10 items-center justify-center bg-white/15 backdrop-blur-sm">
                  <IllustratedIcon className="size-5" />
                </span>
                <h3 className="text-lg font-bold text-white">{illustratedArea.title}</h3>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                {illustratedArea.description}
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryAreas.map((area) => {
            const Icon = areaIcons[area.iconKey];

            return (
              <Link
                key={area.path}
                to={area.path}
                className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised p-5 transition-all"
              >
                <span className="bg-surface-sunken text-foreground rounded-control flex size-9 items-center justify-center">
                  <Icon className="size-[1.125rem]" />
                </span>
                <h3 className="mt-4 font-semibold">{area.title}</h3>
                <p className="text-muted mt-1.5 text-sm leading-relaxed">
                  {area.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
