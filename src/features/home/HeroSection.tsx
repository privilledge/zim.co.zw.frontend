import { Link } from 'react-router';

import { Scene } from '@/components/illustrations/Scene';
import { SearchForm } from '@/components/ui/SearchForm';
import { heroSuggestions } from '@/features/home/homeContent';

/**
 * The opening statement: what the portal is, and a search box to start from.
 *
 * The box itself is `SearchForm`, shared with the area pages, so every entry
 * point into search behaves identically.
 */
export function HeroSection() {
  return (
    <section className="max-w-content px-page-gutter mx-auto pt-14 pb-16 lg:pt-20 lg:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div>
          <p className="text-kicker text-muted font-semibold uppercase">
            Zimbabwe · Information &amp; Services
          </p>

          <h1 className="text-display mt-5 font-serif font-bold">
            One place to discover Zimbabwe
          </h1>

          <p className="text-muted mt-5 max-w-lg leading-relaxed">
            Government services, jobs, universities, hospitals, businesses and places to
            visit - organised, sourced and dated, so you know what you are looking at.
          </p>

          <SearchForm
            id="hero-search"
            label="Search Zimbabwe"
            placeholder="Search Zimbabwe..."
            className="mt-8 max-w-md"
          />

          <ul className="mt-5 flex flex-wrap gap-2">
            {heroSuggestions.map((suggestion) => (
              <li key={suggestion}>
                <Link
                  to={`/search?q=${encodeURIComponent(suggestion)}`}
                  className="border-border rounded-pill text-muted hover:border-border-strong hover:text-foreground inline-block border px-3 py-1.5 text-xs transition-colors"
                >
                  {suggestion}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-card relative aspect-[4/3] overflow-hidden lg:aspect-[7/5]">
          <Scene variant="monolith" className="size-full" />
          <p className="bg-surface/85 rounded-control absolute bottom-3.5 left-3.5 px-2.5 py-1.5 text-[0.6875rem] font-semibold backdrop-blur-sm">
            Great Zimbabwe · Masvingo
          </p>
        </div>
      </div>
    </section>
  );
}
