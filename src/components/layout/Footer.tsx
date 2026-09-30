import { Link } from 'react-router';

import { BrandMarkIcon } from '@/components/icons';
// import { BrandStripe } from '@/components/layout/BrandStripe';
import { BrandWordmark } from '@/components/layout/BrandWordmark';
import { platformNav, primaryNav } from '@/components/layout/navigation';
import type { NavItem } from '@/components/layout/navigation';

/**
 * The site footer.
 *
 * The eight information areas are split across the first two columns in the
 * order they appear in the header, so the footer never drifts out of sync with
 * the navigation.
 */
export function Footer() {
  const discover = primaryNav.slice(0, 4);
  const explore = primaryNav.slice(4);

  return (
    <footer className="bg-surface-inverse text-foreground-inverse">
      <div className="max-w-content px-page-gutter mx-auto py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <BrandMarkIcon className="size-7" />
              <BrandWordmark tone="inverse" />
            </div>
            <p className="text-muted-inverse mt-4 text-sm leading-relaxed">
              {
                'Your gateway to Zimbabwe - government services, jobs, education, health, business and places to explore, in one organised place.'
              }
            </p>
          </div>

          <FooterColumn heading="Discover" items={discover} />
          <FooterColumn heading="Explore" items={explore} />
          <FooterColumn heading="Platform" items={platformNav} />
        </div>

        <div className="text-muted-inverse mt-12 flex flex-col gap-2 border-t border-neutral-800 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>{'© 2026 zim.co.zw - an independent information project.'}</p>
          <p>Not affiliated with the Government of Zimbabwe.</p>
        </div>
      </div>

      {/* <BrandStripe /> */}
    </footer>
  );
}

interface FooterColumnProps {
  heading: string;
  items: readonly NavItem[];
}

function FooterColumn({ heading, items }: FooterColumnProps) {
  return (
    <div>
      <h2 className="text-kicker text-muted-inverse font-semibold uppercase">
        {heading}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="text-neutral-300 transition-colors hover:text-white"
            >
              <span className="text-sm">{item.longLabel}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
