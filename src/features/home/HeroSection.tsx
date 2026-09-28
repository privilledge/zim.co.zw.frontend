import { Link } from 'react-router';

import { BrandMarkIcon, CheckCircleIcon } from '@/components/icons';
import { SearchForm } from '@/components/ui/SearchForm';
import { HeroScenes } from '@/features/home/HeroScenes';
import { HeroShortcuts } from '@/features/home/HeroShortcuts';
import { heroSuggestions } from '@/features/home/homeContent';
import { resultGroups } from '@/features/search/searchContent';

/**
 * The opening statement: what the portal is and a search box to start from,
 * set on the page background, then a strip of places and the four quickest
 * ways in.
 *
 * The box itself is `SearchForm`, shared with the area pages, so every entry
 * point into search behaves identically.
 */
export function HeroSection() {
  return (
    <section>
      <div className="max-w-content px-page-gutter mx-auto pt-21 pb-21 text-center">
        <p className="border-border bg-surface rounded-pill text-muted inline-flex items-center gap-2 border py-1 pr-3 pl-1.5 text-xs font-medium">
          <BrandMarkIcon className="size-4" />
          Information &amp; services across all ten provinces
        </p>

        <h1 className="text-display lg:text-hero text-foreground mx-auto mt-4 max-w-4xl font-serif font-bold">
          One place to discover
          <span className="text-primary block italic">Zimbabwe</span>
        </h1>

        {/* <p className="text-muted mx-auto mt-4 max-w-xl leading-relaxed">
          Government services, jobs, universities, hospitals, businesses and places to
          visit: organised, sourced and dated, so you know what you are looking at.
        </p> */}

        <SearchForm
          id="hero-search"
          label="Search Zimbabwe"
          placeholder="Search Zimbabwe..."
          scopes={resultGroups}
          size="large"
          className="mx-auto mt-6 max-w-2xl text-left"
        />

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
          {/* <span className="text-muted">Popular:</span> */}
          <ul className="contents">
            {heroSuggestions.map((suggestion) => (
              <li key={suggestion}>
                <Link
                  to={`/search?q=${encodeURIComponent(suggestion)}`}
                  className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors"
                >
                  {suggestion}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-muted mt-4 flex items-center justify-center gap-2 text-xs">
          <CheckCircleIcon className="text-primary size-4" />
          Every record carries its source and the date it was last checked.
        </p>
      </div>

      <HeroScenes />
      <HeroShortcuts />
    </section>
  );
}
