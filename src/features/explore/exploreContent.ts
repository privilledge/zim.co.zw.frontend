import type { SceneVariant } from '@/components/illustrations/Scene';
import type { PhotoKey } from '@/components/media/photoLibrary';

/**
 * STATIC CONTENT FOR THE EXPLORE ZIMBABWE PAGE.
 *
 * As in `homeContent.ts`, this is the copy from the approved design, shaped
 * the way the corresponding Spring Boot endpoint is expected to respond. It is
 * NOT a data layer and nothing here should be treated as verified information.
 */

export const exploreIntro = {
  kicker: 'Destinations · Parks · Cities',
  title: 'Explore Zimbabwe',
  description:
    'From the spray of the Falls to the granite of Matobo — where to go, what is there, and what to know before you travel.',
  searchPlaceholder: 'Search destinations, parks, cities...',
  photo: 'victoria-falls',
} as const;

export type ExploreCategory =
  | 'destinations'
  | 'national-parks'
  | 'cultural-sites'
  | 'cities'
  | 'hotels'
  | 'restaurants'
  | 'events';

export const exploreCategories: readonly {
  value: ExploreCategory;
  label: string;
}[] = [
  { value: 'destinations', label: 'Destinations' },
  { value: 'national-parks', label: 'National parks' },
  { value: 'cultural-sites', label: 'Cultural sites' },
  { value: 'cities', label: 'Cities' },
  { value: 'hotels', label: 'Hotels' },
  { value: 'restaurants', label: 'Restaurants' },
  { value: 'events', label: 'Events' },
];

/* ------------------------------------------------------------------------
 * Featured destinations
 * ---------------------------------------------------------------------- */

export interface Destination {
  name: string;
  province: string;
  /** Absent on the two small cards in the mosaic, where there is no room. */
  description?: string;
  scene: SceneVariant;
  /** A real photo of the place, when there is one. The scene is the fallback. */
  photo?: PhotoKey;
  category: ExploreCategory;
  path: string;
}

/**
 * Listed in the order the mosaic lays them out: the first is the lead card,
 * the next two stack beside it, and the last three run along the bottom.
 */
export const destinations: readonly Destination[] = [
  {
    name: 'Victoria Falls',
    province: 'Matabeleland North',
    description:
      'A mile-wide curtain of water on the Zambezi, walked from a rainforest path on the Zimbabwean bank.',
    scene: 'falls',
    category: 'destinations',
    photo: 'victoria-falls',
    path: '/search?q=Victoria+Falls',
  },
  {
    name: 'Hwange National Park',
    province: 'Matabeleland North',
    scene: 'acacia',
    category: 'national-parks',
    photo: 'hwange-elephants',
    path: '/search?q=Hwange+National+Park',
  },
  {
    name: 'Great Zimbabwe',
    province: 'Masvingo',
    scene: 'monolith',
    category: 'cultural-sites',
    photo: 'great-zimbabwe',
    path: '/search?q=Great+Zimbabwe',
  },
  {
    name: 'Matobo National Park',
    province: 'Matabeleland South',
    description:
      'Balancing granite kopjes and some of the densest rock art in southern Africa.',
    scene: 'boulders',
    category: 'national-parks',
    photo: 'matobo-balancing-rocks',
    path: '/search?q=Matobo+National+Park',
  },
  {
    name: 'Eastern Highlands',
    province: 'Manicaland',
    description:
      'Nyanga, the Vumba and Chimanimani — cool, green and cut by walking trails.',
    scene: 'range',
    photo: 'eastern-highlands',
    category: 'destinations',
    path: '/search?q=Eastern+Highlands',
  },
  {
    name: 'Lake Kariba',
    province: 'Mashonaland West',
    description: 'Houseboats, drowned forests and long evenings on an inland sea.',
    scene: 'lake',
    photo: 'lake-kariba',
    category: 'destinations',
    path: '/search?q=Lake+Kariba',
  },
];

/* ------------------------------------------------------------------------
 * By region
 * ---------------------------------------------------------------------- */

export interface Region {
  name: string;
  /** The places most itineraries in this region are built around. */
  highlights: string;
  placeCount: number;
  scene: SceneVariant;
  /** A real photo of the place, when there is one. The scene is the fallback. */
  photo?: PhotoKey;
  path: string;
}

export const regions: readonly Region[] = [
  {
    name: 'Matabeleland North',
    highlights: 'Victoria Falls, Hwange, Binga',
    placeCount: 12,
    scene: 'falls',
    photo: 'victoria-falls',
    path: '/search?q=Matabeleland+North',
  },
  {
    name: 'Masvingo',
    highlights: 'Great Zimbabwe, Lake Mutirikwi',
    placeCount: 9,
    scene: 'monolith',
    photo: 'great-zimbabwe',
    path: '/search?q=Masvingo',
  },
  {
    name: 'Manicaland',
    highlights: 'Nyanga, Vumba, Chimanimani',
    placeCount: 14,
    scene: 'range',
    photo: 'eastern-highlands',
    path: '/search?q=Manicaland',
  },
  {
    name: 'Mashonaland',
    highlights: 'Harare, Kariba, Chinhoyi',
    placeCount: 16,
    scene: 'city',
    photo: 'harare-cbd',
    path: '/search?q=Mashonaland',
  },
];

/* ------------------------------------------------------------------------
 * Cities
 * ---------------------------------------------------------------------- */

export interface City {
  name: string;
  province: string;
  description: string;
  scene: SceneVariant;
  /** A real photo of the place, when there is one. The scene is the fallback. */
  photo?: PhotoKey;
  path: string;
}

export const cities: readonly City[] = [
  {
    name: 'Harare',
    province: 'Harare Province',
    description:
      'The capital: jacaranda avenues, the National Gallery, Mbare’s markets and a CBD you can walk end to end.',
    scene: 'city',
    photo: 'harare-cbd',
    path: '/search?q=Harare',
  },
  {
    name: 'Bulawayo',
    province: 'Bulawayo Province',
    description:
      'Wide colonial-era streets, the Natural History Museum and the Railway Museum — and the gateway to Matobo.',
    scene: 'city',
    photo: 'bulawayo-city',
    path: '/search?q=Bulawayo',
  },
];

/* ------------------------------------------------------------------------
 * Plan your visit
 * ---------------------------------------------------------------------- */

export type PlanIconKey = 'calendar' | 'certificate' | 'car' | 'bed';

export interface PlanCard {
  iconKey: PlanIconKey;
  title: string;
  description: string;
  /**
   * Set where the design brackets a live figure. The card then renders the
   * description, a pending marker, and the remaining sentence.
   */
  pendingLabel?: string;
  descriptionAfter?: string;
}

export const planCards: readonly PlanCard[] = [
  {
    iconKey: 'calendar',
    title: 'Best time to visit',
    description:
      'The dry season concentrates game around waterholes in Hwange; the Falls carry most water after the rains. The Eastern Highlands stay cool year-round.',
  },
  {
    iconKey: 'certificate',
    title: 'Park entry & permits',
    description:
      'National parks charge a daily conservation fee at the gate, set separately for residents and visitors — currently',
    pendingLabel: 'park entry fee',
    descriptionAfter: 'Fishing and camping permits are issued separately.',
  },
  {
    iconKey: 'car',
    title: 'Getting around',
    description:
      'Domestic flights link Harare, Bulawayo and Victoria Falls. Long-distance coaches cover the main corridors; park roads generally need a high-clearance vehicle.',
  },
  {
    iconKey: 'bed',
    title: 'Where to stay',
    description:
      'Parks run their own lodges and campsites alongside private operators. In peak months at the Falls and Hwange, book well ahead.',
  },
];

export const planNote =
  'Destination pages cite the Zimbabwe Tourism Authority and the managing park authority, with the date each entry was last checked.';
