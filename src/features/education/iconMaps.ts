import { AwardIcon, BookIcon, BuildingIcon, GraduationCapIcon } from '@/components/icons';
import type { IconProps } from '@/components/icons';
import type {
  EducationCategory,
  ProgrammeIconKey,
} from '@/features/education/educationContent';

type IconComponent = (props: IconProps) => React.ReactElement;

/** Icons for the four chips in the header. */
export const educationCategoryIcons: Record<EducationCategory, IconComponent> = {
  universities: GraduationCapIcon,
  'technical-colleges': BuildingIcon,
  scholarships: AwardIcon,
  'exam-boards': BookIcon,
};

/** Icons for the programme cards, keyed by the content module's string key. */
export const programmeIcons: Record<ProgrammeIconKey, IconComponent> = {
  graduation: GraduationCapIcon,
  book: BookIcon,
};
