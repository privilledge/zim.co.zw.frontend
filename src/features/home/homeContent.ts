import type { SceneVariant } from '@/components/illustrations/Scene';
import type { PhotoKey } from '@/components/media/photoLibrary';
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

export interface HeroScene {
  photo: PhotoKey;
  place: string;
  province: string;
  path: string;
}

/** The strip of places under the hero copy, left to right. The first is the lead tile. */
export const heroScenes: readonly HeroScene[] = [
  {
    photo: 'victoria-falls-gorge',
    place: 'Victoria Falls',
    province: 'Matabeleland North',
    path: '/explore',
  },
  { photo: 'harare-skyline-sunset', place: 'Harare', province: 'Harare', path: '/explore' },
  { photo: 'great-zimbabwe-tower', place: 'Great Zimbabwe', province: 'Masvingo', path: '/explore' },
  { photo: 'hwange-elephants', place: 'Hwange', province: 'Matabeleland North', path: '/explore' },
];

export type HeroShortcutIconKey = 'passport' | 'briefcase' | 'health' | 'mountain';

/** Tint of the shortcut's icon tile, drawn from the brand and sand tokens. */
export type HeroShortcutTone = 'green' | 'sand' | 'gold';

export interface HeroShortcut {
  iconKey: HeroShortcutIconKey;
  tone: HeroShortcutTone;
  title: string;
  description: string;
  path: string;
}

/** The four quickest ways in, in the band along the bottom of the hero. */
export const heroShortcuts: readonly HeroShortcut[] = [
  {
    iconKey: 'passport',
    tone: 'green',
    title: 'Passports & ID',
    description: 'Requirements and offices',
    path: '/government',
  },
  {
    iconKey: 'briefcase',
    tone: 'sand',
    title: 'Jobs & scholarships',
    description: 'With dated deadlines',
    path: '/jobs',
  },
  {
    iconKey: 'health',
    tone: 'sand',
    title: 'Hospitals & clinics',
    description: 'Facilities and contacts',
    path: '/health',
  },
  {
    iconKey: 'mountain',
    tone: 'gold',
    title: 'Places to visit',
    description: 'Parks, cities, heritage',
    path: '/explore',
  },
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
  /** A photo shown on the card, when one exists for the area. */
  photo?: PhotoKey;
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
  photo: 'registry-office-counter',
} as const satisfies Area & { tags: readonly string[]; actionLabel: string };

/** The second lead card, given an illustrated background rather than text. */
export const illustratedArea = {
  iconKey: 'mountain',
  title: 'Explore Zimbabwe',
  description:
    'Victoria Falls, Hwange, Matobo, the Eastern Highlands, Kariba and the cities — destinations, attractions and practical details.',
  path: '/explore',
  scene: 'range',
  photo: 'hwange-elephants',
} as const satisfies Area & { scene: SceneVariant };

/** The remaining six areas, shown as a uniform grid. */
export const secondaryAreas: readonly Area[] = [
  {
    iconKey: 'briefcase',
    title: 'Jobs & Opportunities',
    description: 'Vacancies, internships, scholarships, fellowships and training.',
    path: '/jobs',
    photo: 'office-team',
  },
  {
    iconKey: 'graduation',
    title: 'Education',
    description: 'Universities, colleges, programmes, exams and scholarships.',
    path: '/education',
    photo: 'university-students',
  },
  {
    iconKey: 'health',
    title: 'Health',
    description: 'Hospitals, clinics, pharmacies, laboratories and emergency contacts.',
    path: '/health',
    photo: 'smiling-female-doctor',
  },
  {
    iconKey: 'wallet',
    title: 'Business & Money',
    description: 'Banks, insurance, registration, tax and trade.',
    path: '/business',
    photo: 'harare-cbd',
  },
  {
    iconKey: 'directory',
    title: 'Directories',
    description: 'Government departments, companies, NGOs, schools and banks.',
    path: '/directory',
    photo: 'government-service-counter',
  },
  {
    iconKey: 'flag',
    title: 'About Zimbabwe',
    description: 'Provinces, cities, languages, heritage and country context.',
    path: '/about',
    photo: 'great-zimbabwe',
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

export type OpportunityIconKey = 'briefcase' | 'users' | 'graduation';

/** One deadline listed inside a group card. */
export interface OpportunityListing {
  title: string;
  location: string;
  closingLabel: string;
  path: string;
}

/** A kind of opportunity, with a count of deadlines this week and the nearest few. */
export interface OpportunityGroup {
  iconKey: OpportunityIconKey;
  title: string;
  description: string;
  /** How many in this group close within the next seven days. */
  closingThisWeek: number;
  path: string;
  listings: readonly OpportunityListing[];
}

export const opportunityGroups: readonly OpportunityGroup[] = [
  {
    iconKey: 'briefcase',
    title: 'Jobs & Vacancies',
    description:
      'Vacancies, graduate programmes and trainee posts from employers across the country.',
    closingThisWeek: 14,
    path: '/jobs?type=job',
    listings: [
      { title: 'Graduate Trainee', location: 'Harare', closingLabel: 'Closes 30 Sep', path: '/jobs' },
      { title: 'Nurse Aide', location: 'Bulawayo', closingLabel: 'Closes 04 Oct', path: '/jobs' },
    ],
  },
  {
    iconKey: 'users',
    title: 'Internships',
    description:
      'Work placements and attachments for students and recent graduates.',
    closingThisWeek: 6,
    path: '/jobs?type=internship',
    listings: [
      {
        title: 'Software Engineering Intern',
        location: 'Harare',
        closingLabel: 'Closes 01 Oct',
        path: '/jobs',
      },
      { title: 'Finance Attachment', location: 'Gweru', closingLabel: 'Closes 03 Oct', path: '/jobs' },
    ],
  },
  {
    iconKey: 'graduation',
    title: 'Scholarships',
    description:
      'Funded study at home and abroad, with eligibility and deadlines set out.',
    closingThisWeek: 4,
    path: '/jobs?type=scholarship',
    listings: [
      {
        title: 'Undergraduate Bursary',
        location: 'Nationwide',
        closingLabel: 'Closes 02 Oct',
        path: '/jobs',
      },
      { title: 'Master’s Scholarship', location: 'Abroad', closingLabel: 'Closes 05 Oct', path: '/jobs' },
    ],
  },
];

/* ------------------------------------------------------------------------
 * Destinations
 * ---------------------------------------------------------------------- */

export interface Destination {
  name: string;
  province: string;
  scene: SceneVariant;
  photo?: PhotoKey;
  path: string;
}

export const destinations: readonly Destination[] = [
  {
    name: 'Victoria Falls',
    province: 'Matabeleland North',
    scene: 'falls',
    photo: 'victoria-falls',
    path: '/explore',
  },
  {
    name: 'Hwange National Park',
    province: 'Matabeleland North',
    scene: 'acacia',
    photo: 'hwange-elephants',
    path: '/explore',
  },
  {
    name: 'Matobo National Park',
    province: 'Matabeleland South',
    scene: 'boulders',
    photo: 'matobo-balancing-rocks',
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
