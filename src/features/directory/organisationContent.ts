import type { SourceRecord } from '@/components/ui/SourcePanel';

/**
 * STATIC CONTENT FOR THE ORGANISATION PROFILE PAGE.
 *
 * As in `homeContent.ts`, this is the copy from the approved design, shaped
 * the way the corresponding Spring Boot endpoint is expected to respond. It is
 * NOT a data layer and nothing here should be treated as verified information.
 *
 * Keyed by slug, since the page is routed as `/directory/:slug`.
 */

export interface OrganisationService {
  title: string;
  subtitle: string;
  path: string;
}

export interface OpeningHours {
  day: string;
  /** Null means closed, which reads differently from a missing record. */
  hours: string | null;
}

export interface RelatedOrganisation {
  title: string;
  subtitle: string;
  path: string;
}

export interface OrganisationProfile {
  slug: string;
  initials: string;
  name: string;
  type: string;
  city: string;
  description: string;
  services: readonly OrganisationService[];
  location: {
    label: string;
    description: string;
    city: string;
    province: string;
  };
  contact: {
    phonePendingLabel: string;
    emailPendingLabel: string;
    websiteHref: string;
  };
  openingHours: readonly OpeningHours[];
  related: readonly RelatedOrganisation[];
  record: SourceRecord;
}

const WEEKDAY_HOURS = '08:00–16:30';

const registrarGeneral: OrganisationProfile = {
  slug: 'registrar-generals-office',
  initials: 'RG',
  name: "Registrar-General's Office",
  type: 'Government Department',
  city: 'Harare',
  description:
    'The department of the Ministry of Home Affairs responsible for civil registration in Zimbabwe - issuing national identity documents, passports, and birth and death certificates for citizens and residents.',
  services: [
    {
      title: 'Passport applications',
      subtitle: 'New and renewal',
      path: '/government/passport-application',
    },
    {
      title: 'National ID registration',
      subtitle: 'First issue and replacement',
      path: '/government/national-id',
    },
    {
      title: 'Birth certificate registration',
      subtitle: 'Late and standard registration',
      path: '/government/birth-certificate',
    },
    {
      title: 'Death certificate registration',
      subtitle: 'Required for estate matters',
      path: '/government/death-certificate',
    },
  ],
  location: {
    label: 'Head office',
    description:
      'A civic administration building in central Harare, with district registry offices in Bulawayo, Mutare and the other provincial centres.',
    city: 'Harare',
    province: 'Harare',
  },
  contact: {
    phonePendingLabel: 'telephone number',
    emailPendingLabel: 'email address',
    websiteHref: 'https://www.gov.zw',
  },
  openingHours: [
    { day: 'Monday', hours: WEEKDAY_HOURS },
    { day: 'Tuesday', hours: WEEKDAY_HOURS },
    { day: 'Wednesday', hours: WEEKDAY_HOURS },
    { day: 'Thursday', hours: WEEKDAY_HOURS },
    { day: 'Friday', hours: WEEKDAY_HOURS },
    { day: 'Saturday', hours: null },
    { day: 'Sunday', hours: null },
  ],
  related: [
    {
      title: 'Ministry of Home Affairs',
      subtitle: 'Government Department',
      path: '/directory',
    },
    {
      title: 'Zimbabwe Revenue Authority',
      subtitle: 'Government Department',
      path: '/directory',
    },
    {
      title: 'Ministry of Justice',
      subtitle: 'Government Department',
      path: '/directory',
    },
  ],
  record: {
    status: 'verified',
    source: 'Ministry of Home Affairs public information',
    lastVerified: 'September 2026',
  },
};

const organisations: Record<string, OrganisationProfile> = {
  [registrarGeneral.slug]: registrarGeneral,
};

export function getOrganisation(
  slug: string | undefined,
): OrganisationProfile | undefined {
  return slug ? organisations[slug] : undefined;
}
