import { useState } from 'react';
import { Link, NavLink } from 'react-router';

import { BrandMarkIcon, CloseIcon, MenuIcon, SearchIcon } from '@/components/icons';
import { BrandStripe } from '@/components/layout/BrandStripe';
import { BrandWordmark } from '@/components/layout/BrandWordmark';
import { primaryNav } from '@/components/layout/navigation';

/**
 * The site header: wordmark, the eight section links, and a search entry point.
 *
 * Below `lg` the links collapse behind a menu button, because eight labels will
 * not fit on a narrow screen.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-border bg-surface sticky top-0 z-40 border-b">
      <BrandStripe />

      <div className="max-w-content px-page-gutter mx-auto flex h-16 items-center gap-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <BrandMarkIcon className="size-7" />
          <BrandWordmark />
        </Link>

        {/* `self-stretch` lets the links run the full height of the header, so
            the active underline can sit on its bottom edge without depending
            on the label's line box to work out the offset. */}
        <nav
          aria-label="Sections"
          className="hidden flex-1 justify-center self-stretch lg:flex"
        >
          <ul className="flex h-full items-stretch gap-1">
            {primaryNav.map((item) => (
              <li key={item.path} className="flex">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      'relative flex items-center px-2.5 text-[0.8125rem] font-medium transition-colors',
                      'after:absolute after:inset-x-2.5 after:bottom-0 after:h-0.5 after:rounded-full',
                      isActive
                        ? 'text-primary after:bg-primary'
                        : 'hover:text-foreground text-neutral-600',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Link
            to="/search"
            className="border-border rounded-pill text-foreground hover:border-border-strong hover:bg-surface-sunken flex items-center gap-2 border px-3.5 py-2 text-[0.8125rem] font-medium transition-colors"
          >
            <SearchIcon className="size-4" />
            Search
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="border-border rounded-control hover:bg-surface-sunken flex size-9 items-center justify-center border transition-colors lg:hidden"
          >
            {menuOpen ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-border bg-surface border-t lg:hidden"
        >
          <ul className="px-page-gutter max-w-content mx-auto py-2">
            {primaryNav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'rounded-control block px-2 py-2.5 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-primary'
                        : 'hover:text-foreground text-neutral-600',
                    ].join(' ')
                  }
                >
                  {item.longLabel}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
