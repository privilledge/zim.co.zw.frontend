import type { SceneVariant } from '@/components/illustrations/Scene';
import type { VerificationStatus } from '@/types/verification';

/**
 * STATIC CONTENT FOR THE HOME PAGE LAYOUT.
 *
 * This is the copy from the approved design, held here so the page can be
 * built and reviewed before the backend exists. It is NOT a data layer and
 * nothing here should be treated as verified information.
 *
 * Each export below is shaped the way the corresponding Spring Boot endpoint
 * is expected to respond, so replacing it later is a matter of swapping the
 * import for a `useQuery` call - the components do not change. The `iconKey`
 * and `scene` fields are deliberately plain strings rather than components,
 * because that is what an API can actually send.
 */

/* ------------------------------------------------------------------------
 * Hero
 * ---------------------------------------------------------------------- */

/** Example searches offered under the hero search box. */
export const heroSuggestions: readonly string[] = [
  'Find a passport office',
  'Universities in Harare',
  'Jobs in Zimbabwe',
  'Places to visit in Victoria Falls',
];

/* ------------------------------------------------------------------------
 * The eight information areas
 * ---------------------------------------------------------------------- */

export type AreaIconKey =
  | 'landmark'
  | 'briefcase'
  | 'graduation'
  | 'health'
  | 'wallet'
  | 'mountain'
  | 'directory'
  | 'flag';

export interface Area {
  iconKey: AreaIconKey;
  title: string;
  description: string;
  path: string;
}

/** The lead card: the section most people arrive looking for. */
export const featuredArea = {
  iconKey: 'landmark',
  title: 'Government & Services',
  description:
    'Passports, national ID, birth certificates, vehicle registration, tax and utilities — what you need, what it costs and where to go.',
  path: '/government',
  tags: ['Passport', 'National ID', 'Birth certificate', 'Tax'],
  actionLabel: 'Browse services',
} as const satisfies Area & { tags: readonly string[]; actionLabel: string };

/** The second lead card, given an illustrated background rather than text. */
export const illustratedArea = {
  iconKey: 'mountain',
  title: 'Explore Zimbabwe',
  description:
    'Victoria Falls, Hwange, Matobo, the Eastern Highlands, Kariba and the cities — destinations, attractions and practical details.',
  path: '/explore',
  scene: 'range',
} as const satisfies Area & { scene: SceneVariant };

/** The remaining six areas, shown as a uniform grid. */
export const secondaryAreas: readonly Area[] = [
  {
    iconKey: 'briefcase',
    title: 'Jobs & Opportunities',
    description: 'Vacancies, internships, scholarships, fellowships and training.',
    path: '/jobs',
  },
  {
    iconKey: 'graduation',
    title: 'Education',
    description: 'Universities, colleges, programmes, exams and scholarships.',
    path: '/education',
  },
  {
    iconKey: 'health',
    title: 'Health',
    description: 'Hospitals, clinics, pharmacies, laboratories and emergency contacts.',
    path: '/health',
  },
  {
    iconKey: 'wallet',
    title: 'Business & Money',
    description: 'Banks, insurance, registration, tax and trade.',
    path: '/business',
  },
  {
    iconKey: 'directory',
    title: 'Directories',
    description: 'Government departments, companies, NGOs, schools and banks.',
    path: '/directory',
  },
  {
    iconKey: 'flag',
    title: 'About Zimbabwe',
    description: 'Provinces, cities, languages, heritage and country context.',
    path: '/about',
  },
];

/* ------------------------------------------------------------------------
 * Popular services
 * ---------------------------------------------------------------------- */

export type ServiceIconKey = 'passport' | 'idCard' | 'certificate' | 'car' | 'receipt';

export interface PopularService {
  iconKey: ServiceIconKey;
  title: string;
  organisation: string;
  path: string;
}

export const popularServices: readonly PopularService[] = [
  {
    iconKey: 'passport',
    title: 'Apply for a passport',
    organisation: "Registrar-General's Office",
    path: '/government',
  },
  {
    iconKey: 'idCard',
    title: 'National ID information',
    organisation: "Registrar-General's Office",
    path: '/government',
  },
  {
    iconKey: 'certificate',
    title: 'Birth certificate',
    organisation: "Registrar-General's Office",
    path: '/government',
  },
  {
    iconKey: 'car',
    title: 'Vehicle registration',
    organisation: 'Central Vehicle Registry',
    path: '/government',
  },
  {
    iconKey: 'receipt',
    title: 'Tax services',
    organisation: 'ZIMRA',
    path: '/government',
  },
];

/* ------------------------------------------------------------------------
 * Opportunities closing soon
 * ---------------------------------------------------------------------- */

export interface Opportunity {
  category: string;
  type: string;
  title: string;
  organisation: string;
  location: string;
  closingLabel: string;
  /** Highlights the deadline when it is the most urgent on the list. */
  closingSoon: boolean;
  path: string;
}

export const opportunities: readonly Opportunity[] = [
  {
    category: 'Government',
    type: 'Graduate trainee',
    title: 'Graduate Trainee Programme',
    organisation: 'Zimbabwe Revenue Authority (ZIMRA)',
    location: 'Harare',
    closingLabel: 'Closes 30 Sep',
    closingSoon: true,
    path: '/jobs',
  },
  {
    category: 'Education',
    type: 'Scholarship',
    title: 'Presidential Scholarship Scheme',
    organisation: 'Ministry of Higher and Tertiary Education',
    location: 'Nationwide',
    closingLabel: 'Closes 15 Oct',
    closingSoon: false,
    path: '/jobs',
  },
  {
    category: 'Technology',
    type: 'Internship',
    title: 'Software Engineering Internship',
    organisation: 'Econet Wireless Zimbabwe',
    location: 'Harare',
    closingLabel: 'Closes 22 Oct',
    closingSoon: false,
    path: '/jobs',
  },
];

/* ------------------------------------------------------------------------
 * Destinations
 * ---------------------------------------------------------------------- */

export interface Destination {
  name: string;
  province: string;
  scene: SceneVariant;
  path: string;
}

export const destinations: readonly Destination[] = [
  {
    name: 'Victoria Falls',
    province: 'Matabeleland North',
    scene: 'falls',
    path: '/explore',
  },
  {
    name: 'Hwange National Park',
    province: 'Matabeleland North',
    scene: 'acacia',
    path: '/explore',
  },
  {
    name: 'Matobo National Park',
    province: 'Matabeleland South',
    scene: 'boulders',
    path: '/explore',
  },
];

/* ------------------------------------------------------------------------
 * Featured organisations
 * ---------------------------------------------------------------------- */

export interface Organisation {
  /** Two-letter monogram shown in place of a logo. */
  initials: string;
  name: string;
  type: string;
  city: string;
  status: VerificationStatus;
  path: string;
}

export const organisations: readonly Organisation[] = [
  {
    initials: 'RG',
    name: "Registrar-General's Office",
    type: 'Government department',
    city: 'Harare',
    status: 'verified',
    path: '/directory',
  },
  {
    initials: 'UZ',
    name: 'University of Zimbabwe',
    type: 'University',
    city: 'Harare',
    status: 'verified',
    path: '/directory',
  },
  {
    initials: 'PG',
    name: 'Parirenyatwa Group of Hospitals',
    type: 'Referral hospital',
    city: 'Harare',
    status: 'review',
    path: '/directory',
  },
  {
    initials: 'ZT',
    name: 'Zimbabwe Tourism Authority',
    type: 'Government agency',
    city: 'Harare',
    status: 'verified',
    path: '/directory',
  },
];
