import type { SourceRecord } from '@/components/ui/SourcePanel';

/**
 * STATIC CONTENT FOR THE SERVICE DETAIL PAGE.
 *
 * As in `homeContent.ts`, this is the copy from the approved design, shaped
 * the way the corresponding Spring Boot endpoint is expected to respond. It is
 * NOT a data layer and nothing here should be treated as verified information.
 *
 * Keyed by slug because the page is routed as `/government/:slug`. One service
 * is written out in full; the rest arrive with the API, and an unknown slug
 * renders the not-found page rather than an empty shell.
 */

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FeeLine {
  label: string;
  /** What the fee is called when the platform has a verified figure for it. */
  pendingLabel: string;
}

export interface RelatedItem {
  title: string;
  subtitle: string;
  path: string;
}

export interface ServiceDetail {
  slug: string;
  kicker: string;
  title: string;
  description: string;
  requirements: readonly string[];
  documents: readonly string[];
  fees: readonly FeeLine[];
  feeNote: string;
  process: readonly ProcessStep[];
  location: { summary: string; actionLabel: string; path: string };
  contact: { phonePendingLabel: string; websiteLabel: string; websiteHref: string };
  organisation: { initials: string; name: string; parent: string; path: string };
  record: SourceRecord;
  related: readonly RelatedItem[];
}

const passportApplication: ServiceDetail = {
  slug: 'passport-application',
  kicker: 'Government service',
  title: 'Passport Application',
  description:
    'Apply for a new Zimbabwean passport or renew an existing one through the Registrar-General’s Office, the department responsible for issuing travel documents to citizens.',
  requirements: [
    'Valid national ID',
    'Birth certificate',
    'Proof of payment',
    'Passport photographs',
  ],
  documents: [
    'National ID — original and one copy',
    'Birth certificate — original and one copy',
    'Proof of payment or receipt',
    'Two recent passport photographs',
  ],
  fees: [
    { label: 'Standard processing', pendingLabel: 'standard processing fee' },
    {
      label: 'Emergency / expedited processing',
      pendingLabel: 'expedited processing fee',
    },
  ],
  feeNote:
    'Fees are set by the Registrar-General’s Office and reviewed periodically — confirm the current amount at a passport office before applying.',
  process: [
    {
      title: 'Gather documents',
      description:
        'Collect your national ID, birth certificate, proof of payment and passport photographs.',
    },
    {
      title: 'Visit passport office or apply online',
      description:
        'Submit your application in person at a passport office, or start it through the online portal.',
    },
    {
      title: 'Pay the fee',
      description:
        'Pay the standard or expedited processing fee at the counter or via the accepted payment channel.',
    },
    {
      title: 'Collect passport when ready',
      description:
        'Return with your receipt to collect the passport once it has been processed.',
    },
  ],
  location: {
    summary: 'Passport offices — Harare, Bulawayo, Mutare + regional offices',
    actionLabel: 'View all locations',
    path: '/directory',
  },
  contact: {
    phonePendingLabel: 'telephone number',
    websiteLabel: 'gov.zw',
    websiteHref: 'https://www.gov.zw',
  },
  organisation: {
    initials: 'RG',
    name: "Registrar-General's Office",
    parent: 'Ministry of Home Affairs',
    path: '/directory/registrar-generals-office',
  },
  record: {
    status: 'verified',
    source: 'Ministry of Home Affairs website',
    lastVerified: 'September 2026',
  },
  related: [
    {
      title: 'National ID',
      subtitle: 'Government Service',
      path: '/government/national-id',
    },
    {
      title: 'Birth Certificate',
      subtitle: 'Government Service',
      path: '/government/birth-certificate',
    },
    {
      title: 'Vehicle Registration',
      subtitle: 'Government Service',
      path: '/government/vehicle-registration',
    },
  ],
};

const services: Record<string, ServiceDetail> = {
  [passportApplication.slug]: passportApplication,
};

export function getServiceDetail(slug: string | undefined): ServiceDetail | undefined {
  return slug ? services[slug] : undefined;
}
