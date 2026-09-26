/**
 * STATIC CONTENT FOR THE JOBS & OPPORTUNITIES PAGE.
 *
 * As in `homeContent.ts`, this is the copy from the approved design, shaped
 * the way the corresponding Spring Boot endpoint is expected to respond. It is
 * NOT a data layer and nothing here should be treated as verified information.
 */

/* ------------------------------------------------------------------------
 * Page header
 * ---------------------------------------------------------------------- */

export const jobsIntro = {
  kicker: 'Careers, internships & scholarships',
  title: 'Jobs & Opportunities',
  description:
    'Vacancies, internships, scholarships, fellowships and short courses from government, employers and institutions across Zimbabwe, organised so you never miss a closing date.',
} as const;

export type OpportunityType =
  'job' | 'internship' | 'scholarship' | 'fellowship' | 'training';

export const opportunityTypes: readonly { value: OpportunityType; label: string }[] = [
  { value: 'job', label: 'Job' },
  { value: 'internship', label: 'Internship' },
  { value: 'scholarship', label: 'Scholarship' },
  { value: 'fellowship', label: 'Fellowship' },
  { value: 'training', label: 'Training/Course' },
];

/* ------------------------------------------------------------------------
 * Opportunities
 * ---------------------------------------------------------------------- */

export interface Opportunity {
  /** First half of the card's kicker. Absent where the type says it all. */
  sector?: string;
  /** Second half of the kicker - the wording the design uses, not the key. */
  typeLabel: string;
  /** What the type chips filter on. */
  type: OpportunityType;
  title: string;
  organisation: string;
  location: string;
  description: string;
  /** ISO date, used for sorting. The label below is what a reader sees. */
  deadline: string;
  deadlineLabel: string;
  /** Highlights the deadline when it is near enough to act on now. */
  closingSoon: boolean;
  path: string;
}

export const opportunities: readonly Opportunity[] = [
  {
    sector: 'Government',
    typeLabel: 'Internship',
    type: 'internship',
    title: 'Graduate Trainee Programme — ZIMRA',
    organisation: 'Zimbabwe Revenue Authority',
    location: 'Harare',
    description:
      'Two-year rotational placement across customs, domestic taxes and revenue-collection divisions.',
    deadline: '2026-10-10',
    deadlineLabel: 'Deadline: 10 Oct 2026',
    closingSoon: true,
    path: '/search?q=ZIMRA+Graduate+Trainee+Programme',
  },
  {
    sector: 'Private sector',
    typeLabel: 'Internship',
    type: 'internship',
    title: 'Software Engineering Internship — Econet Wireless',
    organisation: 'Econet Wireless',
    location: 'Harare',
    description:
      'Six-month placement across the mobile applications and network engineering teams.',
    deadline: '2026-09-30',
    deadlineLabel: 'Deadline: 30 Sep 2026',
    closingSoon: true,
    path: '/search?q=Econet+Software+Engineering+Internship',
  },
  {
    sector: 'Scholarship',
    typeLabel: 'Postgraduate',
    type: 'scholarship',
    title: 'Commonwealth Scholarship — postgraduate study',
    organisation: 'Commonwealth Scholarship Commission',
    location: 'Study in the United Kingdom',
    description:
      "Fully funded master's and PhD study in the UK for Zimbabwean graduates.",
    deadline: '2026-12-15',
    deadlineLabel: 'Deadline: 15 Dec 2026',
    closingSoon: false,
    path: '/search?q=Commonwealth+Scholarship',
  },
  {
    sector: 'Government',
    typeLabel: 'Fellowship',
    type: 'fellowship',
    title: 'Youth Fellowship Programme — Ministry of Youth Affairs',
    organisation: 'Ministry of Youth Affairs, Sport, Arts & Recreation',
    location: 'Harare',
    description:
      'One-year fellowship placing young professionals in provincial youth-development offices.',
    deadline: '2026-10-05',
    deadlineLabel: 'Deadline: 5 Oct 2026',
    closingSoon: true,
    path: '/search?q=Youth+Fellowship+Programme',
  },
  {
    sector: 'Private sector',
    typeLabel: 'Job',
    type: 'job',
    title: 'Junior Accountant — CBZ Bank',
    organisation: 'CBZ Bank',
    location: 'Harare',
    description:
      'Entry-level role in the finance division supporting reconciliations and reporting.',
    deadline: '2026-11-20',
    deadlineLabel: 'Deadline: 20 Nov 2026',
    closingSoon: false,
    path: '/search?q=CBZ+Junior+Accountant',
  },
  {
    sector: 'Education',
    typeLabel: 'Job',
    type: 'job',
    title: 'Teaching Assistant — University of Zimbabwe',
    organisation: 'University of Zimbabwe',
    location: 'Harare',
    description:
      'Supporting undergraduate tutorials in the Faculty of Social Studies for the 2027 intake.',
    deadline: '2026-11-01',
    deadlineLabel: 'Deadline: 1 Nov 2026',
    closingSoon: false,
    path: '/search?q=University+of+Zimbabwe+Teaching+Assistant',
  },
  {
    sector: 'Government',
    typeLabel: 'Job',
    type: 'job',
    title: 'Agricultural Extension Officer — Ministry of Lands',
    organisation: 'Ministry of Lands, Agriculture, Fisheries, Water & Rural Development',
    location: 'Masvingo',
    description:
      'Field-based role advising smallholder farmers on irrigation and crop management.',
    deadline: '2026-09-25',
    deadlineLabel: 'Deadline: 25 Sep 2026',
    closingSoon: true,
    path: '/search?q=Agricultural+Extension+Officer',
  },
  {
    sector: 'Private sector',
    typeLabel: 'Job',
    type: 'job',
    title: 'Data Analyst — Old Mutual Zimbabwe',
    organisation: 'Old Mutual Zimbabwe',
    location: 'Harare',
    description:
      'Analysing policyholder data to support the actuarial and product teams.',
    deadline: '2026-10-30',
    deadlineLabel: 'Deadline: 30 Oct 2026',
    closingSoon: false,
    path: '/search?q=Old+Mutual+Data+Analyst',
  },
  {
    typeLabel: 'Training/Course',
    type: 'training',
    title: 'ZIMSEC Examiner & Marker Training',
    organisation: 'Zimbabwe Schools Examinations Council (ZIMSEC)',
    location: 'Bulawayo',
    description:
      'Short accreditation course for prospective O-Level and A-Level markers.',
    deadline: '2027-01-15',
    deadlineLabel: 'Deadline: 15 Jan 2027',
    closingSoon: false,
    path: '/search?q=ZIMSEC+Examiner+Training',
  },
];

/* ------------------------------------------------------------------------
 * Looking in a different direction?
 * ---------------------------------------------------------------------- */

export type CrossLinkIconKey = 'shield' | 'graduation' | 'health' | 'landmark';

export interface JobsCrossLink {
  iconKey: CrossLinkIconKey;
  title: string;
  description: string;
  path: string;
}

export const jobsCrossLinks: readonly JobsCrossLink[] = [
  {
    iconKey: 'shield',
    title: 'Government & Services',
    description: 'Documents, permits, tax',
    path: '/government',
  },
  {
    iconKey: 'graduation',
    title: 'Education',
    description: 'Universities & colleges',
    path: '/education',
  },
  {
    iconKey: 'health',
    title: 'Health',
    description: 'Hospitals & clinics',
    path: '/health',
  },
  {
    iconKey: 'landmark',
    title: 'Business & Money',
    description: 'Banking, tax, registration',
    path: '/business',
  },
];
