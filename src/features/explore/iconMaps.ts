import { BedIcon, CalendarIcon, CarIcon, CertificateIcon } from '@/components/icons';
import type { IconProps } from '@/components/icons';
import type { PlanIconKey } from '@/features/explore/exploreContent';

type IconComponent = (props: IconProps) => React.ReactElement;

export const planIcons: Record<PlanIconKey, IconComponent> = {
  calendar: CalendarIcon,
  certificate: CertificateIcon,
  car: CarIcon,
  bed: BedIcon,
};
