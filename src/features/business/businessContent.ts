import type { PhotoKey } from '@/components/media/photoLibrary';
import type { VerificationStatus } from '@/types/verification';

/**
 * STATIC CONTENT FOR THE BUSINESS & MONEY PAGE.
 *
 * As in `homeContent.ts`, this is the copy from the approved design, shaped
 * the way the corresponding Spring Boot endpoint is expected to respond. It is
 * NOT a data layer and nothing here should be treated as verified information.
 */

/* ------------------------------------------------------------------------
 * Page header
 * ---------------------------------------------------------------------- */

export const businessIntro = {
  kicker: 'Zimbabwe business directory',
  title: 'Business & Money',
  description:
    'Banking, insurance, business registration, tax and licensing information for running a business in Zimbabwe, plus the organisations behind each service.',
  /** Background photo for the page's opening band. */
  photo: 'small-business-owner',
} as const;

export type BusinessCategory =
  | 'banking'
  | 'insurance'
  | 'business-registration'
  | 'tax'
  | 'agriculture'
  | 'manufacturing';

export const businessCategories: readonly {
  value: BusinessCategory;
  label: string;
}[] = [
  { value: 'banking', label: 'Banking' },
  { value: 'insurance', label: 'Insurance' },
  { value: 'business-registration', label: 'Business Registration' },
  { value: 'tax', label: 'Tax' },
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'manufacturing', label: 'Manufacturing' },
];

/* ------------------------------------------------------------------------
 * Popular services
 * ---------------------------------------------------------------------- */

export type ServiceIconKey = 'building' | 'receipt' | 'landmark' | 'globe';

export interface BusinessService {
  iconKey: ServiceIconKey;
  title: string;
  description: string;
  category: BusinessCategory;
  path: string;
}

export const businessServices: readonly BusinessService[] = [
  {
    iconKey: 'building',
    title: 'Business registration \u2014 Companies Office',
    description:
      'Register a new company or update existing details with the Companies and Intellectual Property Commission.',
    category: 'business-registration',
    path: '/government',
  },
  {
    iconKey: 'receipt',
    title: 'Tax registration & returns \u2014 ZIMRA',
    description:
      'Register for tax and find filing information and contact details for the Zimbabwe Revenue Authority.',
    category: 'tax',
    path: '/government',
  },
  {
    iconKey: 'landmark',
    title: 'Open a business bank account',
    description:
      "Compare requirements across Zimbabwe's commercial banks for a new business account.",
    category: 'banking',
    path: '/directory',
  },
  {
    iconKey: 'globe',
    title: 'Import/export licensing',
    description:
      "Licences and permits for importing and exporting goods through Zimbabwe's border posts.",
    category: 'business-registration',
    path: '/government',
  },
];

/* ------------------------------------------------------------------------
 * Featured organizations
 * ---------------------------------------------------------------------- */

export interface BusinessOrganisation {
  /** Monogram shown in place of a logo. */
  initials: string;
  name: string;
  /** Shown on the card as a small pill. */
  type: string;
  city: string;
  description: string;
  /**
   * Optional: an organisation whose sector has no chip (Econet is a telecom)
   * simply drops out when a filter is applied, rather than being forced into
   * a category it does not belong to.
   */
  category?: BusinessCategory;
  status: VerificationStatus;
  path: string;
}

export const businessOrganisations: readonly BusinessOrganisation[] = [
  {
    initials: 'CBZ',
    name: 'CBZ Bank',
    type: 'Bank',
    city: 'Harare',
    description: 'Retail and corporate banking with branches across Zimbabwe.',
    category: 'banking',
    status: 'verified',
    path: '/directory',
  },
  {
    initials: 'OM',
    name: 'Old Mutual Zimbabwe',
    type: 'Insurance',
    city: 'Harare',
    description: 'Life assurance, investments and asset management.',
    category: 'insurance',
    status: 'verified',
    path: '/directory',
  },
  {
    initials: 'SB',
    name: 'Steward Bank',
    type: 'Bank',
    city: 'Harare',
    description: 'Digital-first banking and mobile money services.',
    category: 'banking',
    status: 'verified',
    path: '/directory',
  },
  {
    initials: 'EW',
    name: 'Econet Wireless',
    type: 'Telecom',
    city: 'Harare',
    description: 'Mobile network, internet and mobile money provider.',
    status: 'verified',
    path: '/directory',
  },
  {
    initials: 'DC',
    name: 'Delta Corporation',
    type: 'Manufacturing',
    city: 'Harare',
    description: 'Beverages and consumer goods manufacturer.',
    category: 'manufacturing',
    status: 'verified',
    path: '/directory',
  },
  {
    initials: 'ZB',
    name: 'ZB Financial Holdings',
    type: 'Bank',
    city: 'Harare',
    description: 'Banking, insurance and asset management group.',
    category: 'banking',
    status: 'verified',
    path: '/directory',
  },
];

/* ------------------------------------------------------------------------
 * Agriculture & Manufacturing banner
 * ---------------------------------------------------------------------- */

export const sectorsBanner = {
  title: 'Agriculture & Manufacturing',
  path: '/directory',
  photo: 'farm-and-factory',
} as const satisfies { title: string; path: string; photo: PhotoKey };
