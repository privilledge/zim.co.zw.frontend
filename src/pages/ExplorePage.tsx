import { CitiesSection } from '@/features/explore/CitiesSection';
import { DestinationsSection } from '@/features/explore/DestinationsSection';
import { ExploreIntro } from '@/features/explore/ExploreIntro';
import { PlanSection } from '@/features/explore/PlanSection';
import { RegionsSection } from '@/features/explore/RegionsSection';

/**
 * Explore Zimbabwe composes its sections and nothing else. The chips in the
 * intro scope the destinations mosaic through the `category` search
 * parameter, so no filter state passes through this file.
 */
export function ExplorePage() {
  return (
    <>
      <ExploreIntro />
      <DestinationsSection />
      <RegionsSection />
      <CitiesSection />
      <PlanSection />
    </>
  );
}
