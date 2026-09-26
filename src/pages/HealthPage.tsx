import { EmergencyNotice } from '@/features/health/EmergencyNotice';
import { FacilitiesSection } from '@/features/health/FacilitiesSection';
import { HealthIntro } from '@/features/health/HealthIntro';
import { ServicesSection } from '@/features/health/ServicesSection';

/**
 * Health composes its sections and nothing else. The chips in the intro scope
 * the facility list through the `category` search parameter, so no filter
 * state passes through this file.
 */
export function HealthPage() {
  return (
    <>
      <HealthIntro />
      <EmergencyNotice />
      <FacilitiesSection />
      <ServicesSection />
    </>
  );
}
