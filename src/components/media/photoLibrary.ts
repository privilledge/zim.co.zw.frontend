import clinicConsultation1600 from '@/assets/photos/clinic-consultation-1600.webp';
import clinicConsultation800 from '@/assets/photos/clinic-consultation-800.webp';
import governmentServiceCounter1600 from '@/assets/photos/government-service-counter-1600.webp';
import governmentServiceCounter800 from '@/assets/photos/government-service-counter-800.webp';
import greatZimbabwe1600 from '@/assets/photos/great-zimbabwe-1600.webp';
import greatZimbabwe800 from '@/assets/photos/great-zimbabwe-800.webp';
import harareCbd1600 from '@/assets/photos/harare-cbd-1600.webp';
import harareCbd800 from '@/assets/photos/harare-cbd-800.webp';
import harareSkylineSunset1600 from '@/assets/photos/harare-skyline-sunset-1600.webp';
import harareSkylineSunset800 from '@/assets/photos/harare-skyline-sunset-800.webp';
import hwangeElephants1600 from '@/assets/photos/hwange-elephants-1600.webp';
import hwangeElephants800 from '@/assets/photos/hwange-elephants-800.webp';
import matoboBalancingRocks1600 from '@/assets/photos/matobo-balancing-rocks-1600.webp';
import matoboBalancingRocks800 from '@/assets/photos/matobo-balancing-rocks-800.webp';
import officeTeam1600 from '@/assets/photos/office-team-1600.webp';
import officeTeam800 from '@/assets/photos/office-team-800.webp';
import registryOfficeCounter1600 from '@/assets/photos/registry-office-counter-1600.webp';
import registryOfficeCounter800 from '@/assets/photos/registry-office-counter-800.webp';
import universityStudents1600 from '@/assets/photos/university-students-1600.webp';
import universityStudents800 from '@/assets/photos/university-students-800.webp';
import victoriaFalls1600 from '@/assets/photos/victoria-falls-1600.webp';
import victoriaFalls800 from '@/assets/photos/victoria-falls-800.webp';

import hwangeSavanna1600 from '@/assets/photos/hwange-savanna-1600.webp';
import hwangeSavanna800 from '@/assets/photos/hwange-savanna-800.webp';
import greatZimbabweTower1600 from '@/assets/photos/great-zimbabwe-tower-1600.webp';
import greatZimbabweTower800 from '@/assets/photos/great-zimbabwe-tower-800.webp';
import victoriaFallsGorge1600 from '@/assets/photos/victoria-falls-gorge-1600.webp';
import victoriaFallsGorge800 from '@/assets/photos/victoria-falls-gorge-800.webp';
import smallBusinessOwner1600 from '@/assets/photos/small-business-owner-1600.webp';
import smallBusinessOwner800 from '@/assets/photos/small-business-owner-800.webp';
import nurseWithPatient1600 from '@/assets/photos/nurse-with-patient-1600.webp';
import nurseWithPatient800 from '@/assets/photos/nurse-with-patient-800.webp';
import studentsStudying1600 from '@/assets/photos/students-studying-1600.webp';
import studentsStudying800 from '@/assets/photos/students-studying-800.webp';
import officeColleagues1600 from '@/assets/photos/office-colleagues-1600.webp';
import officeColleagues800 from '@/assets/photos/office-colleagues-800.webp';
import bulawayoCity1600 from '@/assets/photos/bulawayo-city-1600.webp';
import bulawayoCity800 from '@/assets/photos/bulawayo-city-800.webp';
import farmAndFactory1600 from '@/assets/photos/farm-and-factory-1600.webp';
import farmAndFactory800 from '@/assets/photos/farm-and-factory-800.webp';
import lakeKariba1600 from '@/assets/photos/lake-kariba-1600.webp';
import lakeKariba800 from '@/assets/photos/lake-kariba-800.webp';
import easternHighlands1600 from '@/assets/photos/eastern-highlands-1600.webp';
import easternHighlands800 from '@/assets/photos/eastern-highlands-800.webp';
import smilingFemaleDoctor1600 from '@/assets/photos/smiling-female-doctor-1600.webp';
import smilingFemaleDoctor800 from '@/assets/photos/smiling-female-doctor-800.webp';
/**
 * The site's photographs, keyed by a plain string.
 *
 * Content modules refer to a photo by its `PhotoKey`, the same way they refer
 * to a scene by its `SceneVariant`, because a string is what an API can send.
 * Each photo ships at two widths so `Photo` can let the browser pick: 800px
 * for cards, the larger for full-width bands. Where the original was narrower
 * than 1600px, the large file is the original width, recorded here so the
 * `srcSet` descriptors are honest.
 *
 * The files live in `src/assets/photos/` so Vite fingerprints them.
 */

export type PhotoKey =
  | 'victoria-falls'
  | 'great-zimbabwe'
  | 'harare-skyline-sunset'
  | 'harare-cbd'
  | 'matobo-balancing-rocks'
  | 'hwange-elephants'
  | 'registry-office-counter'
  | 'government-service-counter'
  | 'clinic-consultation'
  | 'university-students'
  | 'office-team'
  | 'hwange-savanna'
  | 'great-zimbabwe-tower'
  | 'victoria-falls-gorge'
  | 'small-business-owner'
  | 'nurse-with-patient'
  | 'students-studying'
  | 'office-colleagues'
  | 'bulawayo-city'
  | 'farm-and-factory'
  | 'lake-kariba'
  | 'eastern-highlands'
  | 'smiling-female-doctor';

export interface PhotoSource {
  small: string;
  large: string;
  /** Actual pixel width of `large`. */
  largeWidth: number;
  /** Describes the picture for screen readers when it carries meaning. */
  alt: string;
}

export const photoLibrary: Record<PhotoKey, PhotoSource> = {
  'victoria-falls': {
    small: victoriaFalls800,
    large: victoriaFalls1600,
    largeWidth: 1600,
    alt: 'Victoria Falls at sunset, with a rainbow rising from the spray',
  },
  'great-zimbabwe': {
    small: greatZimbabwe800,
    large: greatZimbabwe1600,
    largeWidth: 1280,
    alt: 'The curved dry-stone walls of Great Zimbabwe in late afternoon light',
  },
  'harare-skyline-sunset': {
    small: harareSkylineSunset800,
    large: harareSkylineSunset1600,
    largeWidth: 1600,
    alt: 'The Harare skyline at sunset above tree-lined streets',
  },
  'harare-cbd': {
    small: harareCbd800,
    large: harareCbd1600,
    largeWidth: 1280,
    alt: 'Office towers in central Harare among flowering jacaranda trees',
  },
  'matobo-balancing-rocks': {
    small: matoboBalancingRocks800,
    large: matoboBalancingRocks1600,
    largeWidth: 1024,
    alt: 'Balancing granite boulders in the Matobo Hills at dusk',
  },
  'hwange-elephants': {
    small: hwangeElephants800,
    large: hwangeElephants1600,
    largeWidth: 1024,
    alt: 'A herd of elephants drinking at a waterhole at sunset',
  },
  'registry-office-counter': {
    small: registryOfficeCounter800,
    large: registryOfficeCounter1600,
    largeWidth: 1280,
    alt: 'People being served at the counters of a public registry office',
  },
  'government-service-counter': {
    small: governmentServiceCounter800,
    large: governmentServiceCounter1600,
    largeWidth: 1536,
    alt: 'A visitor filling in a form with help from an officer at a service counter',
  },
  'clinic-consultation': {
    small: clinicConsultation800,
    large: clinicConsultation1600,
    largeWidth: 1024,
    alt: 'A nurse and a doctor talking with a patient at a clinic',
  },
  'university-students': {
    small: universityStudents800,
    large: universityStudents1600,
    largeWidth: 1024,
    alt: 'University students walking and talking on campus',
  },
  'office-team': {
    small: officeTeam800,
    large: officeTeam1600,
    largeWidth: 1600,
    alt: 'Colleagues working together around a laptop in an office',
  },
  'hwange-savanna': {
    small: hwangeSavanna800,
    large: hwangeSavanna1600,
    largeWidth: 1600,
    alt: 'An elephant in open savanna with zebra grazing behind',
  },
  'great-zimbabwe-tower': {
    small: greatZimbabweTower800,
    large: greatZimbabweTower1600,
    largeWidth: 1600,
    alt: 'The conical tower and curved walls of Great Zimbabwe at golden hour',
  },
  'victoria-falls-gorge': {
    small: victoriaFallsGorge800,
    large: victoriaFallsGorge1600,
    largeWidth: 1600,
    alt: 'Victoria Falls pouring into its gorge at sunset',
  },
  'small-business-owner': {
    small: smallBusinessOwner800,
    large: smallBusinessOwner1600,
    largeWidth: 1536,
    alt: 'A small-business owner taking a call at her desk among packaged stock',
  },
  'nurse-with-patient': {
    small: nurseWithPatient800,
    large: nurseWithPatient1600,
    largeWidth: 1600,
    alt: 'A nurse talking with a patient in a clinic consulting room',
  },
  'students-studying': {
    small: studentsStudying800,
    large: studentsStudying1600,
    largeWidth: 1536,
    alt: 'Students working together at a table on a university campus',
  },
  'office-colleagues': {
    small: officeColleagues800,
    large: officeColleagues1600,
    largeWidth: 1600,
    alt: 'Two colleagues working at a laptop in an office overlooking the city',
  },
  'bulawayo-city': {
    small: bulawayoCity800,
    large: bulawayoCity1600,
    largeWidth: 1600,
    alt: 'Bulawayo city centre at sunset, with the City Hall clock tower and tree-lined streets',
  },
  'farm-and-factory': {
    small: farmAndFactory800,
    large: farmAndFactory1600,
    largeWidth: 1600,
    alt: 'A farmer checking young maize plants beside workers bottling cooking oil on a factory line',
  },
  'lake-kariba': {
    small: lakeKariba800,
    large: lakeKariba1600,
    largeWidth: 1600,
    alt: 'A boat crossing Lake Kariba at sunset, seen from a rocky shore',
  },
  'eastern-highlands': {
    small: easternHighlands800,
    large: easternHighlands1600,
    largeWidth: 1600,
    alt: 'Mist lying in the green valleys of the Eastern Highlands, with a road winding along the hillside',
  },
  'smiling-female-doctor': {
    small: smilingFemaleDoctor800,
    large: smilingFemaleDoctor1600,
    largeWidth: 1600,
    alt: 'A smiling doctor taking notes while talking with a patient in a clinic',
  },
};
