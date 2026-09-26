/**
 * STATIC CONTENT FOR THE LOCATION BROWSING PAGE.
 *
 * As in `homeContent.ts`, this is the copy from the approved design, shaped
 * the way the corresponding Spring Boot endpoint is expected to respond. It is
 * NOT a data layer and nothing here should be treated as verified information.
 */

export const locationIntro = {
  kicker: 'Browse by location',
  title: 'Find services and places near you',
  description:
    'Filter government offices, health facilities, schools, banks and places to explore by province, city or suburb across Zimbabwe.',
} as const;

/* ------------------------------------------------------------------------
 * Provinces and their cities
 * ---------------------------------------------------------------------- */

export interface Province {
  /** URL-safe key, used in the `province` search parameter. */
  value: string;
  label: string;
  /** Shown in full beside the result count, e.g. "Harare Province". */
  longLabel: string;
  cities: readonly string[];
}

export const provinces: readonly Province[] = [
  {
    value: 'harare',
    label: 'Harare',
    longLabel: 'Harare Province',
    cities: ['Harare', 'Chitungwiza', 'Norton', 'Ruwa', 'Epworth'],
  },
  {
    value: 'bulawayo',
    label: 'Bulawayo',
    longLabel: 'Bulawayo Province',
    cities: ['Bulawayo'],
  },
  {
    value: 'manicaland',
    label: 'Manicaland',
    longLabel: 'Manicaland',
    cities: ['Mutare', 'Rusape', 'Chipinge', 'Nyanga'],
  },
  {
    value: 'mashonaland-central',
    label: 'Mashonaland Central',
    longLabel: 'Mashonaland Central',
    cities: ['Bindura', 'Mount Darwin', 'Shamva'],
  },
  {
    value: 'mashonaland-east',
    label: 'Mashonaland East',
    longLabel: 'Mashonaland East',
    cities: ['Marondera', 'Murehwa', 'Mutoko'],
  },
  {
    value: 'mashonaland-west',
    label: 'Mashonaland West',
    longLabel: 'Mashonaland West',
    cities: ['Chinhoyi', 'Kariba', 'Kadoma', 'Chegutu'],
  },
  {
    value: 'masvingo',
    label: 'Masvingo',
    longLabel: 'Masvingo',
    cities: ['Masvingo', 'Chiredzi', 'Gutu'],
  },
  {
    value: 'matabeleland-north',
    label: 'Matabeleland North',
    longLabel: 'Matabeleland North',
    cities: ['Hwange', 'Victoria Falls', 'Binga', 'Lupane'],
  },
  {
    value: 'matabeleland-south',
    label: 'Matabeleland South',
    longLabel: 'Matabeleland South',
    cities: ['Gwanda', 'Beitbridge', 'Plumtree'],
  },
  {
    value: 'midlands',
    label: 'Midlands',
    longLabel: 'Midlands',
    cities: ['Gweru', 'Kwekwe', 'Zvishavane', 'Gokwe'],
  },
];

export const defaultProvince = 'harare';

/* ------------------------------------------------------------------------
 * Nearby records
 * ---------------------------------------------------------------------- */

export type NearbyIconKey =
  'idCard' | 'health' | 'graduation' | 'landmark' | 'mountain' | 'users';

export interface NearbyPlace {
  iconKey: NearbyIconKey;
  name: string;
  /** The category pill beside the name. */
  type: string;
  address: string;
  distanceKm: number;
  province: string;
  /** Matched exactly by the city chips. The address is display only, and a
   *  substring match on it would file Lake Chivero under Harare. */
  city: string;
  /** Short label for the map pin, where the full name will not fit. */
  pinLabel: string;
  /** Percentage positions on the illustrative map. Not real coordinates. */
  pin: { x: number; y: number };
  path: string;
}

export const nearbyPlaces: readonly NearbyPlace[] = [
  {
    iconKey: 'idCard',
    name: "Registrar-General's Office",
    type: 'Government',
    address: 'Harare CBD',
    distanceKm: 1.8,
    city: 'Harare',
    province: 'harare',
    pinLabel: "Registrar-General's",
    pin: { x: 29, y: 36 },
    path: '/directory/registrar-generals-office',
  },
  {
    iconKey: 'health',
    name: 'Parirenyatwa Group of Hospitals',
    type: 'Health',
    address: 'Mazowe Street, Harare',
    distanceKm: 3.2,
    city: 'Harare',
    province: 'harare',
    pinLabel: 'Parirenyatwa Hospitals',
    pin: { x: 67, y: 24 },
    path: '/health',
  },
  {
    iconKey: 'graduation',
    name: 'University of Zimbabwe',
    type: 'Education',
    address: 'Mount Pleasant, Harare',
    distanceKm: 6.5,
    city: 'Harare',
    province: 'harare',
    pinLabel: 'University of Zimbabwe',
    pin: { x: 84, y: 51 },
    path: '/education',
  },
  {
    iconKey: 'landmark',
    name: 'CBZ Bank',
    type: 'Banking',
    address: 'Harare CBD',
    distanceKm: 0.9,
    city: 'Harare',
    province: 'harare',
    pinLabel: 'CBZ Bank',
    pin: { x: 39, y: 62 },
    path: '/business?category=banking',
  },
  {
    iconKey: 'mountain',
    name: 'Lake Chivero Recreational Park',
    type: 'Tourism',
    address: 'Norton, Harare Province',
    distanceKm: 28,
    city: 'Norton',
    province: 'harare',
    pinLabel: 'Lake Chivero Park',
    pin: { x: 21, y: 80 },
    path: '/explore',
  },
  {
    iconKey: 'users',
    name: 'Zimbabwe Red Cross Society',
    type: 'NGO',
    address: 'Milton Park, Harare',
    distanceKm: 4.1,
    city: 'Harare',
    province: 'harare',
    pinLabel: 'Zimbabwe Red Cross',
    pin: { x: 62, y: 87 },
    path: '/directory',
  },
];

export const mapDisclaimer =
  'Map view is illustrative — pin positions are approximate and not drawn to exact scale.';

export const coverageNote =
  'Location filtering is available across services, jobs, health facilities and directories.';
