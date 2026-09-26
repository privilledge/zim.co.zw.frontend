import { Link } from 'react-router';

import { alphabet } from '@/features/directory/directoryContent';

/**
 * The A-Z.
 *
 * Each letter is a link into search rather than an in-page filter, because
 * the full organisation list is far larger than anything this page holds and
 * belongs on the results page.
 */
export function BrowseByNameSection() {
  return (
    <div className="max-w-content px-page-gutter mx-auto pt-16">
      <h2 className="font-serif text-lg font-bold">Browse by name</h2>
      <p className="text-muted mt-2 text-sm">
        Jump straight to organisations starting with a given letter.
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {alphabet.map((letter) => (
          <li key={letter}>
            <Link
              to={`/search?q=${letter}`}
              aria-label={`Organisations starting with ${letter}`}
              className="border-border bg-surface rounded-control hover:border-primary hover:text-primary flex size-9 items-center justify-center border text-[0.8125rem] font-medium transition-colors"
            >
              {letter}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
