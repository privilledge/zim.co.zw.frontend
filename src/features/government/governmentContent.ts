import type { VerificationStatus } from '@/types/verification';

/**
 * STATIC CONTENT FOR THE GOVERNMENT & SERVICES PAGE.
 *
 * This is the copy from the approved design, held here so the page can be
 * built and reviewed before the backend exists. It is NOT a data layer and
 * nothing here should be treated as verified information.
 *
 * As in `homeContent.ts`, each export is shaped the way the corresponding
 * Spring Boot endpoint is expected to respond, so replacing it later is a
 * matter of swapping the import for a `useQuery` call - the components do not
 * change. `iconKey` is a plain string rather than a component because that is
 * what an API can actually send.
 */

/* ------------------------------------------------------------------------
 * Page header
 * ---------------------------------------------------------------------- */

export const governmentIntro = {
  kicker: 'Government & Services',
  title: 'Public services, explained in order',
  description:
    'Every entry lists the responsible department, the documents you are asked to bring, and where the service is delivered. Each record shows its source and the date it was last checked, so you can judge it for yourself.',
  searchPlaceholder: 'Search services, departments, documents...',
  /** Background photo for the page's opening band. */
  photo: 'registry-office-counter',
} as const;

/**
 * The counts under the search box. The design leaves the review date as a
 * placeholder because it is a live value; the date below stands in for it
 * until the API supplies one.
 */
export const governmentStats: readonly string[] = [
  '142 services listed',
  '24 departments and agencies',
  'Last review pass: 12 September 2026',
];

/* ------------------------------------------------------------------------
 * Browse by life event
 * ---------------------------------------------------------------------- */

export type LifeEventIconKey =
  | 'idCard'
  | 'passport'
  | 'certificate'
  | 'car'
  | 'receipt'
  | 'building'
  | 'bolt'
  | 'landmark';

export interface LifeEvent {
  iconKey: LifeEventIconKey;
  title: string;
  description: string;
  path: string;
}

export const lifeEvents: readonly LifeEvent[] = [
  {
    iconKey: 'idCard',
    title: 'Identity documents',
    description: 'National ID, replacements, name changes.',
    path: '/search?q=National+ID',
  },
  {
    iconKey: 'passport',
    title: 'Passports & travel',
    description: 'Applications, renewals, emergency travel.',
    path: '/search?q=Passport',
  },
  {
    iconKey: 'certificate',
    title: 'Births, marriages & deaths',
    description: 'Civil registration and certified copies.',
    path: '/search?q=Civil+registration',
  },
  {
    iconKey: 'car',
    title: 'Vehicles & driving',
    description: 'Licences, registration, roadworthiness.',
    path: '/search?q=Vehicle+registration',
  },
  {
    iconKey: 'receipt',
    title: 'Tax & revenue',
    description: 'Registration, returns, clearance certificates.',
    path: '/search?q=Tax',
  },
  {
    iconKey: 'building',
    title: 'Business registration',
    description: 'Company names, incorporation, licences.',
    path: '/search?q=Company+registration',
  },
  {
    iconKey: 'bolt',
    title: 'Utilities',
    description: 'Electricity, water, meters and accounts.',
    path: '/search?q=Utilities',
  },
  {
    iconKey: 'landmark',
    title: 'Land & housing',
    description: 'Title deeds, rates, council applications.',
    path: '/search?q=Title+deeds',
  },
];

/* ------------------------------------------------------------------------
 * Popular services
 * ---------------------------------------------------------------------- */

export interface GovernmentService {
  iconKey: LifeEventIconKey;
  title: string;
  organisation: string;
  status: VerificationStatus;
  path: string;
}

/**
 * Listed in the design's order, which is most-opened first. The A–Z ordering
 * offered by `ServicesSection` is derived from this same array rather than
 * being a second list that could fall out of step.
 */
export const popularGovernmentServices: readonly GovernmentService[] = [
  {
    iconKey: 'passport',
    title: 'Passport application',
    organisation: "Registrar-General's Office",
    status: 'verified',
    path: '/search?q=Passport+application',
  },
  {
    iconKey: 'idCard',
    title: 'National ID (first issue & replacement)',
    organisation: "Registrar-General's Office",
    status: 'verified',
    path: '/search?q=National+ID',
  },
  {
    iconKey: 'certificate',
    title: 'Birth certificate',
    organisation: "Registrar-General's Office",
    status: 'verified',
    path: '/search?q=Birth+certificate',
  },
  {
    iconKey: 'certificate',
    title: 'Death certificate',
    organisation: "Registrar-General's Office",
    status: 'review',
    path: '/search?q=Death+certificate',
  },
  {
    iconKey: 'car',
    title: "Driver's licence (provisional & class 4)",
    organisation: 'Vehicle Inspection Department',
    status: 'verified',
    path: '/search?q=Drivers+licence',
  },
  {
    iconKey: 'car',
    title: 'Vehicle registration',
    organisation: 'Central Vehicle Registry',
    status: 'verified',
    path: '/search?q=Vehicle+registration',
  },
  {
    iconKey: 'receipt',
    title: 'Tax clearance certificate',
    organisation: 'Zimbabwe Revenue Authority (ZIMRA)',
    status: 'review',
    path: '/search?q=Tax+clearance+certificate',
  },
  {
    iconKey: 'building',
    title: 'Company registration',
    organisation: 'Deeds, Companies & Intellectual Property',
    status: 'verified',
    path: '/search?q=Company+registration',
  },
];

/* ------------------------------------------------------------------------
 * Departments & agencies
 * ---------------------------------------------------------------------- */

export interface Department {
  /** Short monogram shown in place of a logo. */
  initials: string;
  name: string;
  remit: string;
  serviceCount: number;
  path: string;
}

export const departments: readonly Department[] = [
  {
    initials: 'RG',
    name: "Registrar-General's Office",
    remit: 'Civil registration',
    serviceCount: 38,
    path: '/directory',
  },
  {
    initials: 'ZR',
    name: 'Zimbabwe Revenue Authority',
    remit: 'Tax & customs',
    serviceCount: 21,
    path: '/directory',
  },
  {
    initials: 'HA',
    name: 'Ministry of Home Affairs',
    remit: 'Parent ministry',
    serviceCount: 12,
    path: '/directory',
  },
  {
    initials: 'VID',
    name: 'Vehicle Inspection Department',
    remit: 'Licensing & testing',
    serviceCount: 9,
    path: '/directory',
  },
  {
    initials: 'ZP',
    name: 'ZIMPOST',
    remit: 'Postal services',
    serviceCount: 7,
    path: '/directory',
  },
];

/** Total across all agencies, not just the five featured above. */
export const departmentTotal = 24;

/* ------------------------------------------------------------------------
 * Where to go
 * ---------------------------------------------------------------------- */

export const serviceCities: readonly string[] = [
  'Harare',
  'Bulawayo',
  'Mutare',
  'Gweru',
  'Masvingo',
];

/* ------------------------------------------------------------------------
 * Where information comes from
 * ---------------------------------------------------------------------- */

export const sourcesNote = {
  title: 'Where information comes from',
  description:
    'Every record carries its source and the date it was last checked. Nothing is presented as official that has not been traced back to the responsible organisation. Fees and processing times change - always confirm with the department before you travel.',
} as const;
