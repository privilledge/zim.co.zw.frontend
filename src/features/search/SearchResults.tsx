import { Link, useSearchParams } from 'react-router';

import { ArrowRightIcon, ClockIcon, MapPinIcon } from '@/components/icons';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { resultIconTints, resultIcons } from '@/features/search/iconMaps';
import { searchFooter } from '@/features/search/searchContent';
import { parseList, selectResults } from '@/features/search/resultSelection';

/** Kept small so the pagination control has something to do before the API lands. */
const PAGE_SIZE = 5;

/**
 * The results list, its pagination, and the prompt that closes the page.
 *
 * Everything is read from the URL, so this component holds no filter state of
 * its own: the same URL always produces the same page.
 */
export function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';

  const matches = selectResults({
    group: searchParams.get('group'),
    categories: parseList(searchParams.get('category')),
    location: searchParams.get('location'),
    organisationType: searchParams.get('organisation'),
    verifiedOnly: searchParams.get('verified') === 'true',
  });

  const pageCount = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
  const page = Math.min(Math.max(Number(searchParams.get('page')) || 1, 1), pageCount);
  const visible = matches.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function goToPage(next: number) {
    const params = new URLSearchParams(searchParams);
    if (next === 1) params.delete('page');
    else params.set('page', String(next));
    setSearchParams(params);
  }

  return (
    <div>
      <h1 className="sr-only">
        {query ? `Search results for ${query}` : 'Search results'}
      </h1>

      {matches.length === 0 ? (
        <p className="border-border bg-surface rounded-card text-muted border p-10 text-center text-sm">
          Nothing matches those filters. Try clearing one.
        </p>
      ) : (
        <ul className="space-y-4">
          {visible.map((result) => {
            const Icon = resultIcons[result.category];

            return (
              <li key={result.title}>
                <Link
                  to={result.path}
                  className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex gap-4 border p-5 transition-all"
                >
                  <span
                    className={`rounded-control flex size-9 shrink-0 items-center justify-center ${resultIconTints[result.category]}`}
                  >
                    <Icon className="size-[1.125rem]" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <p className="text-kicker text-muted font-semibold uppercase">
                        {result.category.replace('-', ' ')}
                      </p>
                      <VerificationBadge status={result.status} />
                    </div>

                    <h2 className="text-primary mt-1.5 font-serif text-lg font-bold">
                      {result.title}
                    </h2>

                    <p className="text-muted mt-1.5 text-sm leading-relaxed">
                      {result.description}
                    </p>

                    <p className="text-muted mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
                      <span className="flex items-center gap-1.5">
                        <MapPinIcon className="size-3.5 shrink-0" />
                        {result.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ClockIcon className="size-3.5 shrink-0" />
                        Last verified: {result.lastVerified}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {pageCount > 1 && (
        <nav aria-label="Search results pages" className="mt-6 flex flex-wrap gap-2">
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
            <button
              key={number}
              type="button"
              onClick={() => goToPage(number)}
              aria-current={number === page ? 'page' : undefined}
              className={[
                'rounded-control flex size-9 items-center justify-center border text-[0.8125rem] font-medium transition-colors',
                number === page
                  ? 'border-primary bg-primary text-white'
                  : 'border-border bg-surface hover:border-border-strong',
              ].join(' ')}
            >
              {number}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === pageCount}
            className="border-border bg-surface rounded-control hover:border-border-strong flex items-center gap-1.5 border px-3.5 text-[0.8125rem] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
            <ArrowRightIcon className="size-3.5" />
          </button>
        </nav>
      )}

      <div className="bg-sand-100 rounded-card mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 p-5">
        <p className="text-muted text-xs leading-relaxed">{searchFooter.description}</p>

        <Link
          to={searchFooter.path}
          className="text-primary group flex shrink-0 items-center gap-1.5 text-xs font-semibold"
        >
          {searchFooter.actionLabel}
          <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
