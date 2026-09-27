import type { VerificationStatus } from '@/types/verification';

/**
 * STATIC CONTENT FOR THE HEALTH PAGE.
 *
 * As in `homeContent.ts`, this is the copy from the approved design, shaped
 * the way the corresponding Spring Boot endpoint is expected to respond. It is
 * NOT a data layer and nothing here should be treated as verified information.
 *
 * The scope is explicit that this area is a directory: it locates care, and it
 * does not diagnose, advise or book. The emergency notice below is part of the
 * design for that reason, not decoration.
 */

/* ------------------------------------------------------------------------
 * Page header
 * ---------------------------------------------------------------------- */

export const healthIntro = {
  kicker: 'Zimbabwe health directory',
  title: 'Health',
  description:
    'Find hospitals, clinics, pharmacies and other health facilities across Zimbabwe, with locations, services and contact details \u2014 for locating care, not for booking appointments or medical advice.',
  searchPlaceholder: 'Search hospitals, clinics, pharmacies...',
  /** Background photo for the page's opening band. */
  photo: 'nurse-with-patient',
} as const;

export const emergencyNotice = {
  title: 'Emergency care',
  description:
    "For medical emergencies, call your nearest hospital's emergency line directly \u2014 zim.co.zw helps you find facility contact details, but it does not operate an emergency dispatch service.",
} as const;

/* ------------------------------------------------------------------------
 * Categories - the chip row, and the service grid at the foot of the page
 * ---------------------------------------------------------------------- */

export type HealthCategory =
  | 'hospitals'
  | 'clinics'
  | 'pharmacies'
  | 'emergency'
  | 'laboratories'
  | 'maternal-health';

/** The five offered as filters in the header. */
export const healthFilters: readonly { value: HealthCategory; label: string }[] = [
  { value: 'hospitals', label: 'Hospitals' },
  { value: 'clinics', label: 'Clinics' },
  { value: 'pharmacies', label: 'Pharmacies' },
  { value: 'emergency', label: 'Emergency' },
  { value: 'laboratories', label: 'Laboratories' },
];

/** The six shown as cards in the "Services" section, which adds maternal health. */
export const healthServices: readonly { value: HealthCategory; label: string }[] = [
  { value: 'hospitals', label: 'Hospitals' },
  { value: 'clinics', label: 'Clinics' },
  { value: 'pharmacies', label: 'Pharmacies' },
  { value: 'emergency', label: 'Emergency care' },
  { value: 'laboratories', label: 'Laboratories' },
  { value: 'maternal-health', label: 'Maternal health' },
];

/* ------------------------------------------------------------------------
 * Facilities
 * ---------------------------------------------------------------------- */

export interface Facility {
  name: string;
  city: string;
  description: string;
  category: HealthCategory;
  status: VerificationStatus;
  path: string;
}

export const facilities: readonly Facility[] = [
  {
    name: 'Parirenyatwa Group of Hospitals',
    city: 'Harare',
    description:
      'Referral hospital; emergency, maternity, surgical and outpatient services.',
    category: 'hospitals',
    status: 'verified',
    path: '/directory',
  },
  {
    name: 'Mpilo Central Hospital',
    city: 'Bulawayo',
    description: 'Referral hospital; emergency, maternity and specialist clinics.',
    category: 'hospitals',
    status: 'verified',
    path: '/directory',
  },
  {
    name: 'Avenues Clinic',
    city: 'Harare',
    description: 'Private hospital; general and specialist consultations, maternity.',
    category: 'clinics',
    status: 'verified',
    path: '/directory',
  },
  {
    name: 'United Bulawayo Hospitals',
    city: 'Bulawayo',
    description: 'General hospital; outpatient, maternity and emergency services.',
    category: 'hospitals',
    status: 'review',
    path: '/directory',
  },
  {
    name: 'West End Hospital',
    city: 'Harare',
    description: 'Private hospital; surgical, maternity and diagnostic imaging.',
    category: 'hospitals',
    status: 'verified',
    path: '/directory',
  },
  {
    name: 'Chitungwiza Central Hospital',
    city: 'Chitungwiza',
    description: 'General hospital; outpatient, maternity and emergency care.',
    category: 'hospitals',
    status: 'review',
    path: '/directory',
  },
];
