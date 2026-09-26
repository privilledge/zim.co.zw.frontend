import {
  AlertTriangleIcon,
  BuildingIcon,
  FlaskIcon,
  HealthIcon,
  PillIcon,
  UsersIcon,
} from '@/components/icons';
import type { IconProps } from '@/components/icons';
import type { HealthCategory } from '@/features/health/healthContent';

type IconComponent = (props: IconProps) => React.ReactElement;

/**
 * One icon per category, shared by the filter chips, the facility cards and
 * the services grid, so a category carries the same mark wherever it appears.
 */
export const healthCategoryIcons: Record<HealthCategory, IconComponent> = {
  hospitals: HealthIcon,
  clinics: BuildingIcon,
  pharmacies: PillIcon,
  emergency: AlertTriangleIcon,
  laboratories: FlaskIcon,
  'maternal-health': UsersIcon,
};
