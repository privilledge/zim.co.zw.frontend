import { Link } from 'react-router';

import { ChevronRightIcon } from '@/components/icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { recentlyVerified } from '@/features/directory/directoryContent';

/**
 * The most recently re-checked records.
 *
 * Same row treatment as the service list on the government page: this is a
 * table to scan, and the two should not diverge.
 */
export function RecentlyVerifiedSection() {
  return (
    <div className="max-w-content px-page-gutter mx-auto pt-16 pb-16">
      <SectionHeader
        title="Recently verified"
        description="The latest organisations our team confirmed as accurate and current."
      />

      <div className="border-border bg-surface rounded-card shadow-card mt-8 overflow-hidden border">
        <ul>
          {recentlyVerified.map((entry) => (
            <li key={entry.name} className="border-border border-t first:border-t-0">
              <Link
                to={entry.path}
                className="hover:bg-surface-sunken flex items-center gap-4 px-4 py-3.5 transition-colors sm:px-5"
              >
                <span className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
                  <span className="text-sm font-medium">{entry.name}</span>
                  <span className="bg-surface-sunken rounded-pill text-muted px-2 py-0.5 text-[0.6875rem] font-medium">
                    {entry.type}
                  </span>
                </span>

                <span className="text-muted hidden shrink-0 text-xs sm:block sm:w-24">
                  {entry.city}
                </span>

                <span className="hidden shrink-0 sm:block">
                  <VerificationBadge status={entry.status} />
                </span>

                <ChevronRightIcon className="text-muted size-4 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
