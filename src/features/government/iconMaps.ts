import {
  BoltIcon,
  BuildingIcon,
  CarIcon,
  CertificateIcon,
  IdCardIcon,
  LandmarkIcon,
  PassportIcon,
  ReceiptIcon,
} from '@/components/icons';
import type { IconProps } from '@/components/icons';
import type { LifeEventIconKey } from '@/features/government/governmentContent';

/**
 * Turns the string keys used in `governmentContent` into icon components.
 *
 * Same reasoning as `features/home/iconMaps.ts`: the content stands in for an
 * API response and an API can only send strings, so the lookup happens here.
 * Typing it as `Record<LifeEventIconKey, ...>` makes a missing icon a compile
 * error rather than a blank square on the page.
 */
type IconComponent = (props: IconProps) => React.ReactElement;

export const lifeEventIcons: Record<LifeEventIconKey, IconComponent> = {
  idCard: IdCardIcon,
  passport: PassportIcon,
  certificate: CertificateIcon,
  car: CarIcon,
  receipt: ReceiptIcon,
  building: BuildingIcon,
  bolt: BoltIcon,
  landmark: LandmarkIcon,
};
