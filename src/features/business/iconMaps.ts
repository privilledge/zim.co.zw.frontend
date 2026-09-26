import {
  BuildingIcon,
  FactoryIcon,
  GlobeIcon,
  LandmarkIcon,
  LeafIcon,
  ReceiptIcon,
  ShieldIcon,
} from '@/components/icons';
import type { IconProps } from '@/components/icons';
import type {
  BusinessCategory,
  ServiceIconKey,
} from '@/features/business/businessContent';

type IconComponent = (props: IconProps) => React.ReactElement;

export const businessCategoryIcons: Record<BusinessCategory, IconComponent> = {
  banking: LandmarkIcon,
  insurance: ShieldIcon,
  'business-registration': BuildingIcon,
  tax: ReceiptIcon,
  agriculture: LeafIcon,
  manufacturing: FactoryIcon,
};

export const businessServiceIcons: Record<ServiceIconKey, IconComponent> = {
  building: BuildingIcon,
  receipt: ReceiptIcon,
  landmark: LandmarkIcon,
  globe: GlobeIcon,
};
