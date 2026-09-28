import { Link } from 'react-router';

import { heroShortcuts } from '@/features/home/homeContent';
import type { HeroShortcutTone } from '@/features/home/homeContent';
import { heroShortcutIcons } from '@/features/home/iconMaps';

const toneClasses: Record<HeroShortcutTone, string> = {
  green: 'bg-primary-soft text-primary',
  sand: 'bg-sand-100 text-foreground',
  gold: 'bg-accent-soft text-review',
};

/**
 * The band closing the hero: the four things people most often come for,
 * one click away, before they have scrolled at all.
 */
export function HeroShortcuts() {
  return (
    <div className="bg-surface-sunken border-border border-b">
      <ul className="max-w-content px-page-gutter divide-border mx-auto grid grid-cols-2 lg:grid-cols-4 lg:divide-x">
        {heroShortcuts.map((shortcut) => {
          const Icon = heroShortcutIcons[shortcut.iconKey];

          return (
            <li key={shortcut.title}>
              <Link
                to={shortcut.path}
                className="group flex items-center gap-3 px-2 py-5 lg:px-6"
              >
                <span
                  className={`rounded-control flex size-9 shrink-0 items-center justify-center ${toneClasses[shortcut.tone]}`}
                >
                  <Icon className="size-[1.125rem]" />
                </span>
                <span>
                  <span className="group-hover:text-primary block text-sm font-semibold transition-colors">
                    {shortcut.title}
                  </span>
                  <span className="text-muted block text-xs">{shortcut.description}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
