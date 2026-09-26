import { Link } from 'react-router';

import { ArrowRightIcon, InfoIcon, ShieldIcon } from '@/components/icons';
import { VerificationLegend } from '@/components/ui/VerificationLegend';
import { sourcesNote } from '@/features/government/governmentContent';

/**
 * The trust statement that closes the page.
 *
 * It sits last on purpose: a reader who has just scanned a table of fees and
 * offices is exactly the reader who needs to be told how fresh any of it is,
 * and given somewhere to report what is not.
 */
export function SourcesSection() {
  return (
    <section className="max-w-content px-page-gutter mx-auto py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <ShieldIcon className="text-primary size-[1.125rem]" />
            {sourcesNote.title}
          </h2>

          <p className="text-muted mt-3 text-sm leading-relaxed">
            {sourcesNote.description}
          </p>

          <Link
            to="/how-verification-works"
            className="text-primary group mt-5 flex items-center gap-1.5 text-sm font-medium"
          >
            How verification works
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div>
          <VerificationLegend />

          <p className="bg-surface-sunken rounded-card text-muted mt-3 flex items-start gap-2.5 p-4 text-xs leading-relaxed">
            <InfoIcon className="mt-px size-4 shrink-0" />
            <span>
              Spotted something out of date?{' '}
              <Link to="/submit" className="text-primary font-semibold">
                Submit a correction
              </Link>{' '}
              &mdash; corrections are reviewed against the source before they are
              published.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
