import { JobsCrossLinks } from '@/features/jobs/JobsCrossLinks';
import { JobsIntro } from '@/features/jobs/JobsIntro';
import { OpportunitiesSection } from '@/features/jobs/OpportunitiesSection';

/**
 * Jobs & Opportunities composes its sections and nothing else. The filters in
 * the intro scope the list below through search parameters, so no filter
 * state passes through this file.
 */
export function JobsPage() {
  return (
    <>
      <JobsIntro />
      <OpportunitiesSection />
      <JobsCrossLinks />
    </>
  );
}
