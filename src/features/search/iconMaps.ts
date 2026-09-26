import {
  CertificateIcon,
  DirectoryIcon,
  LandmarkIcon,
  MapPinIcon,
} from '@/components/icons';
import type { IconProps } from '@/components/icons';
import type { ResultCategory } from '@/features/search/searchContent';

type IconComponent = (props: IconProps) => React.ReactElement;

export const resultIcons: Record<ResultCategory, IconComponent> = {
  'government-service': CertificateIcon,
  directory: MapPinIcon,
  information: DirectoryIcon,
  organisation: LandmarkIcon,
};

/**
 * A government service is the thing most people came for, so its tile is
 * tinted; the rest stay neutral and let the title carry the row.
 */
export const resultIconTints: Record<ResultCategory, string> = {
  'government-service': 'bg-primary-soft text-primary',
  directory: 'bg-surface-sunken text-muted',
  information: 'bg-surface-sunken text-muted',
  organisation: 'bg-surface-sunken text-muted',
};
