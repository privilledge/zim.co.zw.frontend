import type { VerificationStatus } from '@/types/verification';

/**
 * STATIC CONTENT FOR THE DIRECTORIES PAGE.
 *
 * As in `homeContent.ts`, this is the copy from the approved design, shaped
 * the way the corresponding Spring Boot endpoint is expected to respond. It is
 * NOT a data layer and nothing here should be treated as verified information.
 */

export const directoryIntro = {
  kicker: 'Directory',
  title: 'Directories',
  description:
    "Find any organisation operating in Zimbabwe by name or by type \u2014 government departments, companies, universities, hospitals, NGOs and banks. Every entry is checked before it is marked as verified, so you can trust who you're dealing with.",
  searchPlaceholder: 'Search organizations...',
} as const;

/* ------------------------------------------------------------------------
 * Browse by organisation type
 * ---------------------------------------------------------------------- */

export type DirectoryTypeIconKey =
  'building' | 'briefcase' | 'graduation' | 'health' | 'users' | 'landmark';

export interface DirectoryType {
  iconKey: DirectoryTypeIconKey;
  title: string;
  /** How many records the platform holds in this category. */
  count: number;
  path: string;
}

export const directoryTypes: readonly DirectoryType[] = [
  {
    iconKey: 'building',
    title: 'Government Departments',
    count: 128,
    path: '/government',
  },
  { iconKey: 'briefcase', title: 'Companies', count: 342, path: '/business' },
  {
    iconKey: 'graduation',
    title: 'Universities & Colleges',
    count: 18,
    path: '/education',
  },
  { iconKey: 'health', title: 'Hospitals & Clinics', count: 64, path: '/health' },
  {
    iconKey: 'users',
    title: 'NGOs & Community Groups',
    count: 96,
    path: '/search?q=NGOs',
  },
  {
    iconKey: 'landmark',
    title: 'Banks & Financial Services',
    count: 27,
    path: '/business?category=banking',
  },
];

/* ------------------------------------------------------------------------
 * Browse by name
 * ---------------------------------------------------------------------- */

/** A-Z, generated rather than typed out so a letter cannot go missing. */
export const alphabet: readonly string[] = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index),
);

/* ------------------------------------------------------------------------
 * Recently verified
 * ---------------------------------------------------------------------- */

export interface DirectoryEntry {
  name: string;
  type: string;
  city: string;
  status: VerificationStatus;
  path: string;
}

export const recentlyVerified: readonly DirectoryEntry[] = [
  {
    name: 'Zimbabwe Revenue Authority (ZIMRA)',
    type: 'Government',
    city: 'Harare',
    status: 'verified',
    path: '/search?q=ZIMRA',
  },
  {
    name: 'CBZ Bank',
    type: 'Bank',
    city: 'Harare',
    status: 'verified',
    path: '/search?q=CBZ+Bank',
  },
  {
    name: 'National University of Science and Technology',
    type: 'University',
    city: 'Bulawayo',
    status: 'verified',
    path: '/search?q=NUST',
  },
  {
    name: 'Parirenyatwa Group of Hospitals',
    type: 'Hospital',
    city: 'Harare',
    status: 'verified',
    path: '/search?q=Parirenyatwa',
  },
  {
    name: 'Zimbabwe Tourism Authority',
    type: 'Government',
    city: 'Harare',
    status: 'verified',
    path: '/search?q=Zimbabwe+Tourism+Authority',
  },
];

/* ------------------------------------------------------------------------
 * Submission prompt
 * ---------------------------------------------------------------------- */

export const submissionPrompt = {
  title: "Know an organisation we're missing?",
  description:
    'Anyone can suggest a listing. Our team checks the details before it appears in the directory.',
  actionLabel: 'Submit information',
  path: '/submit',
} as const;
