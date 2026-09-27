import { Link } from 'react-router';

import { SearchForm } from '@/components/ui/SearchForm';
import { HeroBackdrop } from '@/features/home/HeroBackdrop';
import { heroSuggestions } from '@/features/home/homeContent';
import { resultGroups } from '@/features/search/searchContent';

/**
 * The opening statement: what the portal is, and a search box to start from,
 * centred over a sliding backdrop of Zimbabwean scenes.
 *
 * The box itself is `SearchForm`, shared with the area pages, so every entry
 * point into search behaves identically.
 */
export function HeroSection() {
  return (
    <section className="relative isolate">
      <HeroBackdrop />

      <div className="max-w-content px-page-gutter relative mx-auto pt-20 pb-28 text-center lg:pt-28 lg:pb-36">
        <p className="text-kicker text-accent font-semibold uppercase">
          Zimbabwe · Information &amp; Services
        </p>

        <h1 className="text-display lg:text-hero text-foreground-inverse mx-auto mt-5 max-w-4xl font-serif font-bold">
          One place to discover
          <span className="text-primary-on-dark block italic">Zimbabwe</span>
        </h1>

        <p className="text-foreground-inverse/85 mx-auto mt-6 max-w-xl leading-relaxed">
          Government services, jobs, universities, hospitals, businesses and places to
          visit: organised, sourced and dated, so you know what you are looking at.
        </p>

        <SearchForm
          id="hero-search"
          label="Search Zimbabwe"
          placeholder="Search Zimbabwe..."
          scopes={resultGroups}
          size="large"
          className="mx-auto mt-8 max-w-2xl text-left"
        />

        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {heroSuggestions.map((suggestion) => (
            <li key={suggestion}>
              <Link
                to={`/search?q=${encodeURIComponent(suggestion)}`}
                className="rounded-pill text-foreground-inverse/85 hover:text-foreground-inverse inline-block border border-white/25 bg-white/10 px-3 py-1.5 text-xs backdrop-blur-sm transition-colors hover:border-white/50"
              >
                {suggestion}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
