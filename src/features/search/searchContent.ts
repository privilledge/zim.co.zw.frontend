import type { VerificationStatus } from '@/types/verification';

/**
 * STATIC CONTENT FOR THE SEARCH RESULTS PAGE.
 *
 * As in `homeContent.ts`, this is the copy from the approved design, shaped
 * the way the corresponding Spring Boot endpoint is expected to respond. It is
 * NOT a data layer and nothing here should be treated as verified information.
 *
 * Real search runs on the backend. Until it exists, this fixed set stands in
 * for a response so the page, its filters and its empty states can be built
 * and reviewed. The query in the URL is echoed back but does not select these
 * rows - swapping the import for a `useQuery` keyed on `q` is what will.
 */

/**
 * The coarse tabs above the results. These are what a reader thinks they are
 * looking for.
 */
export type ResultGroup =
  'services' | 'organisations' | 'places' | 'opportunities' | 'information';

export const resultGroups: readonly { value: ResultGroup; label: string }[] = [
  { value: 'services', label: 'Services' },
  { value: 'organisations', label: 'Organisations' },
  { value: 'places', label: 'Places' },
  { value: 'opportunities', label: 'Opportunities' },
  { value: 'information', label: 'Information' },
];

/**
 * The record type, which is a different axis from the tabs above: a directory
 * listing of passport offices is a `directory` record but a "place" to look
 * for. The sidebar filters on this one.
 */
export type ResultCategory =
  'government-service' | 'directory' | 'information' | 'organisation';

export const resultCategories: readonly {
  value: ResultCategory;
  label: string;
}[] = [
  { value: 'government-service', label: 'Government service' },
  { value: 'directory', label: 'Directory' },
  { value: 'information', label: 'Information' },
  { value: 'organisation', label: 'Organisation' },
];

export interface SearchResult {
  category: ResultCategory;
  group: ResultGroup;
  title: string;
  description: string;
  location: string;
  lastVerified: string;
  status: VerificationStatus;
  /** Set where the record is an organisation, so the sidebar can filter it. */
  organisationType?: string;
  path: string;
}

export const searchResults: readonly SearchResult[] = [
  {
    category: 'government-service',
    group: 'services',
    title: 'Passport Application',
    description:
      'Requirements, supporting documents and the step-by-step application route through the Registrar-General’s Office.',
    location: 'Nationwide',
    lastVerified: 'September 2026',
    status: 'verified',
    path: '/government/passport-application',
  },
  {
    category: 'directory',
    group: 'places',
    title: 'Passport Offices',
    description:
      'Every passport office listed by province, with opening hours and the services each branch handles.',
    location: 'Harare, Bulawayo, Mutare and 7 more',
    lastVerified: 'September 2026',
    status: 'verified',
    path: '/directory',
  },
  {
    category: 'information',
    group: 'information',
    title: 'Passport Requirements',
    description:
      'What to bring for a first application, a replacement or a child’s passport, set out as one checklist.',
    location: 'Nationwide',
    lastVerified: 'September 2026',
    status: 'verified',
    path: '/government/passport-application',
  },
  {
    category: 'organisation',
    group: 'organisations',
    title: "Registrar-General's Office",
    description:
      'The department responsible for passports, national identity documents and civil registration.',
    location: 'Harare',
    lastVerified: 'September 2026',
    status: 'verified',
    organisationType: 'Government',
    path: '/directory/registrar-generals-office',
  },
  {
    category: 'information',
    group: 'information',
    title: 'Passport renewal — what changes',
    description:
      'How renewing differs from a first application, and which documents you do not need to submit again.',
    location: 'Nationwide',
    lastVerified: 'March 2026',
    status: 'review',
    path: '/government/passport-application',
  },
  {
    category: 'government-service',
    group: 'services',
    title: 'Emergency/expedited passport',
    description:
      'The faster processing route, who qualifies for it and the proof of urgency you are asked to provide.',
    location: 'Harare, Bulawayo',
    lastVerified: 'September 2026',
    status: 'verified',
    path: '/government/passport-application',
  },
  {
    category: 'information',
    group: 'information',
    title: 'Passport photo specifications',
    description:
      'Size, background, framing and the common reasons a submitted photograph is sent back.',
    location: 'Nationwide',
    lastVerified: 'August 2026',
    status: 'verified',
    path: '/government/passport-application',
  },
];

export const searchFooter = {
  description:
    'Didn’t find it? Tell us what is missing and we will trace it back to the responsible organisation.',
  actionLabel: 'Submit information',
  path: '/submit',
} as const;
