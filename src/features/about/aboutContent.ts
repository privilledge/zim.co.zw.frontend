/**
 * STATIC CONTENT FOR THE ABOUT ZIMBABWE PAGE.
 *
 * As in `homeContent.ts`, this is the copy from the approved design, shaped
 * the way the corresponding Spring Boot endpoint is expected to respond. It is
 * NOT a data layer and nothing here should be treated as verified information.
 */

export const aboutIntro = {
  kicker: 'About the country',
  title: 'About Zimbabwe',
  description:
    'Zimbabwe is a landlocked country in Southern Africa, bordered by Zambia, Mozambique, South Africa and Botswana. Its capital, Harare, sits on the high central plateau, while the country is home to the thundering Victoria Falls and the ancient stone city of Great Zimbabwe. Sixteen official languages reflect a nation built from many peoples and cultures.',
  sceneLabel: 'Zimbabwe',
  photo: 'harare-skyline-sunset',
} as const;

/* ------------------------------------------------------------------------
 * Quick facts
 * ---------------------------------------------------------------------- */

export interface QuickFact {
  label: string;
  value: string;
}

/**
 * The design brackets the currency because it is the one figure here that
 * genuinely moves. The value below is the standing multi-currency position
 * rather than a rate, so it does not go stale the way a number would - but it
 * is still the first field that should come from a dated, sourced record.
 */
export const quickFacts: readonly QuickFact[] = [
  { label: 'Capital', value: 'Harare' },
  { label: 'Provinces', value: '10' },
  { label: 'Official languages', value: '16' },
  { label: 'Currency', value: 'ZiG & US dollar' },
  { label: 'World heritage sites', value: '5' },
];

/* ------------------------------------------------------------------------
 * Provinces
 * ---------------------------------------------------------------------- */

export const provinces: readonly string[] = [
  'Harare',
  'Bulawayo',
  'Manicaland',
  'Mashonaland Central',
  'Mashonaland East',
  'Mashonaland West',
  'Masvingo',
  'Matabeleland North',
  'Matabeleland South',
  'Midlands',
];

/* ------------------------------------------------------------------------
 * Culture & heritage
 * ---------------------------------------------------------------------- */

export const culture = {
  kicker: 'Culture & heritage',
  title: 'A nation of many peoples',
  paragraphs: [
    "Zimbabwe's cultural life draws on Shona, Ndebele and many smaller communities, each carrying its own language, music, dress and oral tradition. That diversity is written into daily life, from the mbira and marimba music heard at gatherings to the sculpture and textile work sold in markets across the country.",
    "The country's heritage sites tell an older story still: the stone walls of Great Zimbabwe, the rock art scattered through the Matobo Hills, and the spray of Victoria Falls all draw visitors and researchers from across the world, and remain central to how Zimbabweans understand their own history.",
  ],
  sceneLabel: 'Great Zimbabwe',
  photo: 'great-zimbabwe',
} as const;

/* ------------------------------------------------------------------------
 * Where to go next
 * ---------------------------------------------------------------------- */

export type AboutLinkIconKey = 'mountain' | 'directory';

export interface AboutLink {
  iconKey: AboutLinkIconKey;
  title: string;
  description: string;
  actionLabel: string;
  path: string;
}

export const aboutLinks: readonly AboutLink[] = [
  {
    iconKey: 'mountain',
    title: 'Explore Zimbabwe',
    description:
      'Victoria Falls, Great Zimbabwe, Hwange, Matobo and the Eastern Highlands \u2014 places to plan a visit around.',
    actionLabel: 'Go to Explore',
    path: '/explore',
  },
  {
    iconKey: 'directory',
    title: 'Directories',
    description:
      'Look up government departments, companies, universities, hospitals, NGOs and banks by name.',
    actionLabel: 'Go to Directories',
    path: '/directory',
  },
];
