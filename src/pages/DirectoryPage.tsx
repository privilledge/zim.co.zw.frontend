import { BrowseByNameSection } from '@/features/directory/BrowseByNameSection';
import { BrowseByTypeSection } from '@/features/directory/BrowseByTypeSection';
import { DirectoryIntro } from '@/features/directory/DirectoryIntro';
import { RecentlyVerifiedSection } from '@/features/directory/RecentlyVerifiedSection';
import { SubmissionPrompt } from '@/features/directory/SubmissionPrompt';

/**
 * Directories.
 *
 * The three browsing sections share one tinted band owned here, so they read
 * as a single run of ways into the same list rather than as three unrelated
 * blocks. The submission prompt then closes the page on its own band.
 */
export function DirectoryPage() {
  return (
    <>
      <DirectoryIntro />

      <section className="bg-surface-sunken border-border border-y">
        <BrowseByTypeSection />
        <BrowseByNameSection />
        <RecentlyVerifiedSection />
      </section>

      <SubmissionPrompt />
    </>
  );
}
