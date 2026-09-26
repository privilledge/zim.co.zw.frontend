/**
 * The portal's navigation map.
 *
 * Header and footer both read from here so a renamed section or changed path
 * only has to be edited once.
 */

export interface NavItem {
  /** Short label, used in the header where space is tight. */
  label: string;
  /** Full label, used in the footer and on mobile. */
  longLabel: string;
  path: string;
}

export const primaryNav: readonly NavItem[] = [
  { label: 'Government', longLabel: 'Government & Services', path: '/government' },
  { label: 'Jobs', longLabel: 'Jobs & Opportunities', path: '/jobs' },
  { label: 'Education', longLabel: 'Education', path: '/education' },
  { label: 'Health', longLabel: 'Health', path: '/health' },
  { label: 'Business', longLabel: 'Business & Money', path: '/business' },
  { label: 'Explore', longLabel: 'Explore Zimbabwe', path: '/explore' },
  { label: 'Directory', longLabel: 'Directories', path: '/directory' },
  { label: 'About Zimbabwe', longLabel: 'About Zimbabwe', path: '/about' },
];

/** Platform pages - secondary to the eight information areas. */
export const platformNav: readonly NavItem[] = [
  {
    label: 'Browse by location',
    longLabel: 'Browse by location',
    path: '/directory/locations',
  },
  {
    label: 'How verification works',
    longLabel: 'How verification works',
    path: '/how-verification-works',
  },
  { label: 'Submit information', longLabel: 'Submit information', path: '/submit' },
  { label: 'Contact', longLabel: 'Contact', path: '/contact' },
];
