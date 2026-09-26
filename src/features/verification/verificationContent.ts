/**
 * CONTENT FOR THE "HOW VERIFICATION WORKS" PAGE.
 *
 * No design was supplied for this page. The copy below is written from the
 * data-quality rules in `docs/scope.md`: the fields every record carries, the
 * statuses they can hold, and the limits the platform sets on itself.
 *
 * Unlike the area pages, this is not standing in for an API response. It
 * describes how the platform works, so it belongs in the front end.
 */

export const verificationIntro = {
  kicker: 'Platform',
  title: 'How verification works',
  description:
    'Everything on zim.co.zw is collected from somewhere, by someone, on a date. This page explains what the badges mean, what sits behind every record, and what we will not claim.',
} as const;

/* ------------------------------------------------------------------------
 * What every record carries
 * ---------------------------------------------------------------------- */

export type RecordFieldIconKey =
  'certificate' | 'globe' | 'calendar' | 'clock' | 'shield';

export interface RecordField {
  iconKey: RecordFieldIconKey;
  label: string;
  description: string;
}

export const recordFields: readonly RecordField[] = [
  {
    iconKey: 'certificate',
    label: 'Source',
    description:
      'The organisation or publication the information came from, named in plain words.',
  },
  {
    iconKey: 'globe',
    label: 'Source URL',
    description:
      'A link to the page it was taken from, so you can check it against the original yourself.',
  },
  {
    iconKey: 'calendar',
    label: 'Date added',
    description: 'When the record first appeared on the platform.',
  },
  {
    iconKey: 'clock',
    label: 'Last updated',
    description: 'When its details were last changed by our team.',
  },
  {
    iconKey: 'clock',
    label: 'Last verified',
    description:
      'When someone last went back to the source and confirmed it still says the same thing. This is the date the badge is based on.',
  },
  {
    iconKey: 'shield',
    label: 'Verification status',
    description:
      'Verified, needs review, or outdated. Shown on the record itself, never only in an audit log.',
  },
];

/* ------------------------------------------------------------------------
 * How a record reaches the site
 * ---------------------------------------------------------------------- */

export interface VerificationStep {
  title: string;
  description: string;
}

export const verificationSteps: readonly VerificationStep[] = [
  {
    title: 'It is proposed',
    description:
      'Either our team finds it while researching an area, or a reader submits it through the submission form.',
  },
  {
    title: 'It is traced to a responsible organisation',
    description:
      'A fee, an address or an opening time has to come from the body that actually sets it. Anything we cannot trace does not get published, however plausible it looks.',
  },
  {
    title: 'The source and date are recorded',
    description:
      'The record stores where the information came from and when it was checked, and both are shown to you alongside it.',
  },
  {
    title: 'It re-enters the review cycle',
    description:
      'Records are re-checked on a rolling basis. One that falls behind is marked as needing review rather than quietly left to age.',
  },
];

/* ------------------------------------------------------------------------
 * The limits of the platform
 * ---------------------------------------------------------------------- */

export const limits: readonly string[] = [
  'We are an independent information project. We are not the Government of Zimbabwe, and no part of this site is an official government channel.',
  'We do not process applications, take payments, book appointments or chase a case on your behalf. Where an official online service exists, we link to it.',
  'We do not give medical, legal or financial advice. The health section is a directory of facilities, not a clinical service.',
  'Fees, opening hours and requirements change, sometimes without notice. Confirm anything that matters with the responsible organisation before you travel or pay.',
];

export const correctionPrompt = {
  title: 'Found something that is wrong?',
  description:
    'Tell us what is out of date and, if you can, where the correct version lives. Corrections are checked against the source before they are published.',
  actionLabel: 'Submit a correction',
  path: '/submit',
} as const;
