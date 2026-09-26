import {
  BriefcaseIcon,
  BuildingIcon,
  GraduationCapIcon,
  HealthIcon,
  LandmarkIcon,
  UsersIcon,
} from '@/components/icons';
import type { IconProps } from '@/components/icons';
import type { DirectoryTypeIconKey } from '@/features/directory/directoryContent';

type IconComponent = (props: IconProps) => React.ReactElement;

export const directoryTypeIcons: Record<DirectoryTypeIconKey, IconComponent> = {
  building: BuildingIcon,
  briefcase: BriefcaseIcon,
  graduation: GraduationCapIcon,
  health: HealthIcon,
  users: UsersIcon,
  landmark: LandmarkIcon,
};
