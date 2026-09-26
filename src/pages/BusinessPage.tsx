import { BusinessIntro } from '@/features/business/BusinessIntro';
import { OrganisationsSection } from '@/features/business/OrganisationsSection';
import { PopularServicesSection } from '@/features/business/PopularServicesSection';
import { SectorsBanner } from '@/features/business/SectorsBanner';

/**
 * Business & Money composes its sections and nothing else. The sector chips in
 * the intro scope the two lists through the `category` search parameter, so no
 * filter state passes through this file.
 */
export function BusinessPage() {
  return (
    <>
      <BusinessIntro />
      <PopularServicesSection />
      <OrganisationsSection />
      <SectorsBanner />
    </>
  );
}
