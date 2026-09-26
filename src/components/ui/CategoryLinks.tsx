import { Link } from 'react-router';

import type { IconProps } from '@/components/icons';

export interface CategoryLink {
  Icon: (props: IconProps) => React.ReactElement;
  title: string;
  description: string;
  path: string;
}

interface CategoryLinksProps {
  title: string;
  description: string;
  links: readonly CategoryLink[];
}

/**
 * A closing band that points at the other information areas.
 *
 * It lives in `components/ui` rather than with a feature because it is
 * wayfinding for the portal as a whole - a reader who did not find what they
 * came for should not have to scroll back to the header to try elsewhere.
 */
export function CategoryLinks({ title, description, links }: CategoryLinksProps) {
  return (
    <section className="bg-sand-100">
      <div className="max-w-content px-page-gutter mx-auto py-14">
        <h2 className="text-section font-serif font-bold">{title}</h2>
        <p className="text-muted mt-2 text-sm">{description}</p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full flex-col border p-5 transition-all"
              >
                <link.Icon className="text-primary size-5" />
                <h3 className="mt-4 text-sm font-semibold">{link.title}</h3>
                <p className="text-muted mt-1 text-xs">{link.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
