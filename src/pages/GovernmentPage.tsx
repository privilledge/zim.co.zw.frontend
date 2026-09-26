import { DepartmentsSection } from '@/features/government/DepartmentsSection';
import { GovernmentIntro } from '@/features/government/GovernmentIntro';
import { LifeEventsSection } from '@/features/government/LifeEventsSection';
import { ServicesSection } from '@/features/government/ServicesSection';
import { SourcesSection } from '@/features/government/SourcesSection';
import { WhereToGoSection } from '@/features/government/WhereToGoSection';

/**
 * Government & Services composes its sections and nothing else - each section
 * owns its own layout, background band and content. When these move onto live
 * data, only the sections change; this file stays as it is.
 */
export function GovernmentPage() {
  return (
    <>
      <GovernmentIntro />
      <LifeEventsSection />
      <ServicesSection />
      <DepartmentsSection />
      <WhereToGoSection />
      <SourcesSection />
    </>
  );
}
