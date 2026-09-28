import {
  BriefcaseIcon,
  CarIcon,
  CertificateIcon,
  DirectoryIcon,
  FlagIcon,
  GraduationCapIcon,
  HealthIcon,
  IdCardIcon,
  LandmarkIcon,
  MountainIcon,
  PassportIcon,
  ReceiptIcon,
  UsersIcon,
  WalletIcon,
} from '@/components/icons';
import type { IconProps } from '@/components/icons';
import type {
  AreaIconKey,
  HeroShortcutIconKey,
  OpportunityIconKey,
  ServiceIconKey,
} from '@/features/home/homeContent';

/**
 * Turns the string keys used in `homeContent` into actual icon components.
 *
 * The content holds keys rather than components because it stands in for an
 * API response, and an API can only send strings. The lookup happens here.
 *
 * Typing these as `Record<AreaIconKey, ...>` means adding a new area without
 * giving it an icon is a compile error rather than a blank space on the page.
 */
type IconComponent = (props: IconProps) => React.ReactElement;

export const areaIcons: Record<AreaIconKey, IconComponent> = {
  landmark: LandmarkIcon,
  briefcase: BriefcaseIcon,
  graduation: GraduationCapIcon,
  health: HealthIcon,
  wallet: WalletIcon,
  mountain: MountainIcon,
  directory: DirectoryIcon,
  flag: FlagIcon,
};

export const serviceIcons: Record<ServiceIconKey, IconComponent> = {
  passport: PassportIcon,
  idCard: IdCardIcon,
  certificate: CertificateIcon,
  car: CarIcon,
  receipt: ReceiptIcon,
};

export const opportunityIcons: Record<OpportunityIconKey, IconComponent> = {
  briefcase: BriefcaseIcon,
  users: UsersIcon,
  graduation: GraduationCapIcon,
};

export const heroShortcutIcons: Record<HeroShortcutIconKey, IconComponent> = {
  passport: PassportIcon,
  briefcase: BriefcaseIcon,
  health: HealthIcon,
  mountain: MountainIcon,
};
