import { EducationIntro } from '@/features/education/EducationIntro';
import { InstitutionsSection } from '@/features/education/InstitutionsSection';
import { NearYouSection } from '@/features/education/NearYouSection';
import { ProgrammesSection } from '@/features/education/ProgrammesSection';

/**
 * Education composes its sections and nothing else. The category chips in the
 * intro scope the two lists below through the `category` search parameter, so
 * no filter state passes through this file.
 */
export function EducationPage() {
  return (
    <>
      <EducationIntro />
      <InstitutionsSection />
      <ProgrammesSection />
      <NearYouSection />
    </>
  );
}
