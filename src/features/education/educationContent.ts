import type { SceneVariant } from '@/components/illustrations/Scene';

/**
 * STATIC CONTENT FOR THE EDUCATION PAGE.
 *
 * As in `homeContent.ts`, this is the copy from the approved design, shaped
 * the way the corresponding Spring Boot endpoint is expected to respond. It is
 * NOT a data layer and nothing here should be treated as verified information.
 */

/* ------------------------------------------------------------------------
 * Page header
 * ---------------------------------------------------------------------- */

export const educationIntro = {
  kicker: 'Learning & qualifications',
  title: 'Education',
  description:
    'Universities, technical colleges, exam boards and the scholarships that fund study in Zimbabwe and abroad — one organised starting point for learners, parents and institutions.',
  searchPlaceholder: 'Search universities, colleges, courses...',
} as const;

/**
 * The four categories in the chip row. Selecting one narrows both lists
 * below; the `category` field on each record is what it matches against.
 */
export type EducationCategory =
  'universities' | 'technical-colleges' | 'scholarships' | 'exam-boards';

export const educationCategories: readonly {
  value: EducationCategory;
  label: string;
}[] = [
  { value: 'universities', label: 'Universities' },
  { value: 'technical-colleges', label: 'Technical Colleges' },
  { value: 'scholarships', label: 'Scholarships' },
  { value: 'exam-boards', label: 'Exam Boards' },
];

/* ------------------------------------------------------------------------
 * Institutions
 * ---------------------------------------------------------------------- */

export interface Institution {
  name: string;
  /** Short form shown on the scene, where the full name will not fit. */
  shortName: string;
  city: string;
  description: string;
  scene: SceneVariant;
  category: Extract<EducationCategory, 'universities' | 'technical-colleges'>;
  path: string;
}

export const institutions: readonly Institution[] = [
  {
    name: 'University of Zimbabwe',
    shortName: 'University of Zimbabwe',
    city: 'Harare',
    description:
      "Zimbabwe's oldest and largest university, with faculties spanning medicine, law, engineering and the arts.",
    scene: 'campus',
    category: 'universities',
    path: '/directory',
  },
  {
    name: 'National University of Science & Technology',
    shortName: 'NUST',
    city: 'Bulawayo',
    description:
      "Zimbabwe's leading science and engineering university, with strong industry-linked applied programmes.",
    scene: 'campus',
    category: 'universities',
    path: '/directory',
  },
  {
    name: 'Midlands State University',
    shortName: 'Midlands State University',
    city: 'Gweru',
    description:
      'A fast-growing multi-campus university known for its commerce, media and natural-resource programmes.',
    scene: 'campus',
    category: 'universities',
    path: '/directory',
  },
  {
    name: 'Great Zimbabwe University',
    shortName: 'Great Zimbabwe University',
    city: 'Masvingo',
    description:
      'Named for the nearby national monument, with strengths in education, heritage studies and agriculture.',
    scene: 'monolith',
    category: 'universities',
    path: '/directory',
  },
  {
    name: 'Harare Polytechnic',
    shortName: 'Harare Polytechnic',
    city: 'Harare',
    description:
      'A leading technical college offering national diplomas in engineering, business and applied arts.',
    scene: 'campus',
    category: 'technical-colleges',
    path: '/directory',
  },
];

/* ------------------------------------------------------------------------
 * Popular programmes & scholarships
 * ---------------------------------------------------------------------- */

export type ProgrammeIconKey = 'graduation' | 'book';

export interface Programme {
  iconKey: ProgrammeIconKey;
  title: string;
  organisation: string;
  description: string;
  category: Extract<EducationCategory, 'scholarships' | 'exam-boards'>;
  path: string;
}

export const programmes: readonly Programme[] = [
  {
    iconKey: 'graduation',
    title: 'Presidential Scholarship Scheme',
    organisation: 'Ministry of Higher Education, Science & Technology Development',
    description:
      'Fully funded undergraduate study at approved local and international universities.',
    category: 'scholarships',
    path: '/jobs?type=scholarship',
  },
  {
    iconKey: 'graduation',
    title: "Commonwealth Master's Scholarships",
    organisation: 'Commonwealth Scholarship Commission',
    description: 'Postgraduate study in the United Kingdom for Zimbabwean graduates.',
    category: 'scholarships',
    path: '/jobs?type=scholarship',
  },
  {
    iconKey: 'book',
    title: 'O-Level & A-Level exam registration',
    organisation: 'Zimbabwe Schools Examinations Council (ZIMSEC)',
    description: 'Registration windows for the June and November examination series.',
    category: 'exam-boards',
    path: '/directory',
  },
  {
    iconKey: 'book',
    title: 'Cambridge International registration',
    organisation: 'Cambridge Assessment International Education',
    description: 'Entry point for O-Level and AS/A-Level Cambridge-curriculum schools.',
    category: 'exam-boards',
    path: '/directory',
  },
  {
    iconKey: 'graduation',
    title: 'Zimdef training grants',
    organisation: 'Zimbabwe Manpower Development Fund',
    description:
      'Apprenticeship and vocational-training grants for registered training providers.',
    category: 'scholarships',
    path: '/jobs?type=training',
  },
  {
    iconKey: 'book',
    title: 'NUST postgraduate research scholarships',
    organisation: 'National University of Science & Technology',
    description: "Funded master's and PhD research places in science and engineering.",
    category: 'exam-boards',
    path: '/jobs?type=scholarship',
  },
];

/* ------------------------------------------------------------------------
 * Find institutions near you
 * ---------------------------------------------------------------------- */

export const educationCities: readonly string[] = [
  'Harare',
  'Bulawayo',
  'Gweru',
  'Mutare',
  'Masvingo',
];
