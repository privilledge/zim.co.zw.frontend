import { Link } from 'react-router';

import { ChevronRightIcon } from '@/components/icons';

export interface Crumb {
  label: string;
  /** Omitted on the final crumb, which is the page you are already on. */
  to?: string;
}

/**
 * The trail back up from a detail page.
 *
 * Detail pages are the one place on the portal a reader can arrive without
 * having passed through the section above them - straight from search, or
 * from a link someone sent - so they need to say where they sit.
 */
export function Breadcrumb({ crumbs }: { crumbs: readonly Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="text-muted flex flex-wrap items-center gap-1.5 text-xs">
        {crumbs.map((crumb, index) => (
          <li key={crumb.label} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRightIcon aria-hidden className="size-3" />}
            {crumb.to ? (
              <Link to={crumb.to} className="hover:text-foreground transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
