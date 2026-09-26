import { AreasSection } from '@/features/home/AreasSection';
import { DestinationsSection } from '@/features/home/DestinationsSection';
import { HeroSection } from '@/features/home/HeroSection';
import { OpportunitiesSection } from '@/features/home/OpportunitiesSection';
import { OrganisationsSection } from '@/features/home/OrganisationsSection';
import { PopularServicesSection } from '@/features/home/PopularServicesSection';

/**
 * The home page composes its sections and nothing else - each section owns its
 * own layout and content. When these move onto live data, only the sections
 * change; this file stays as it is.
 */
export function HomePage() {
  return (
    <>
      <HeroSection />
      <AreasSection />
      <PopularServicesSection />
      <OpportunitiesSection />
      <DestinationsSection />
      <OrganisationsSection />
    </>
  );
}
