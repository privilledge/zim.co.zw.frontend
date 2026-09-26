import { Link } from 'react-router';

import { ArrowRightIcon, DirectoryIcon, MountainIcon } from '@/components/icons';
import type { IconProps } from '@/components/icons';
import { aboutLinks } from '@/features/about/aboutContent';
import type { AboutLinkIconKey } from '@/features/about/aboutContent';

type IconComponent = (props: IconProps) => React.ReactElement;

const ICONS: Record<AboutLinkIconKey, IconComponent> = {
  mountain: MountainIcon,
  directory: DirectoryIcon,
};

/**
 * Where to go once the reference reading is done.
 *
 * Two cards rather than the four-up `CategoryLinks` band used elsewhere: this
 * page points at the two areas that continue the same subject, not at the
 * whole portal.
 */
export function AboutLinksSection() {
  return (
    <div className="max-w-content px-page-gutter mx-auto pt-16 pb-16">
      <ul className="grid gap-4 lg:grid-cols-2">
        {aboutLinks.map((link) => {
          const Icon = ICONS[link.iconKey];

          return (
            <li key={link.path}>
              <Link
                to={link.path}
                className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised group flex h-full flex-col border p-6 transition-all"
              >
                <span className="bg-primary-soft text-primary rounded-control flex size-9 items-center justify-center">
                  <Icon className="size-[1.125rem]" />
                </span>

                <h3 className="mt-4 font-serif font-bold">{link.title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {link.description}
                </p>

                <span className="text-primary mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium">
                  {link.actionLabel}
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
