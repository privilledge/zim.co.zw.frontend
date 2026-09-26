import {
  AwardIcon,
  BookIcon,
  BriefcaseIcon,
  CertificateIcon,
  GraduationCapIcon,
  HealthIcon,
  LandmarkIcon,
  ShieldIcon,
  UsersIcon,
} from '@/components/icons';
import type { IconProps } from '@/components/icons';
import type { CrossLinkIconKey, OpportunityType } from '@/features/jobs/jobsContent';

type IconComponent = (props: IconProps) => React.ReactElement;

/**
 * One icon per opportunity type, used by both the filter chips and the kicker
 * on each card - so the chip a reader pressed and the cards they get back
 * carry the same mark.
 */
export const opportunityTypeIcons: Record<OpportunityType, IconComponent> = {
  job: BriefcaseIcon,
  internship: CertificateIcon,
  scholarship: AwardIcon,
  fellowship: UsersIcon,
  training: BookIcon,
};

export const crossLinkIcons: Record<CrossLinkIconKey, IconComponent> = {
  shield: ShieldIcon,
  graduation: GraduationCapIcon,
  health: HealthIcon,
  landmark: LandmarkIcon,
};
