import { CategoryLinks } from '@/components/ui/CategoryLinks';
import { jobsCrossLinks } from '@/features/jobs/jobsContent';
import { crossLinkIcons } from '@/features/jobs/iconMaps';

/**
 * The closing band, for readers whose answer was not on this page.
 *
 * The content module holds icon keys rather than components, as an API would,
 * so the mapping to real icons happens here.
 */
export function JobsCrossLinks() {
  const links = jobsCrossLinks.map((link) => ({
    Icon: crossLinkIcons[link.iconKey],
    title: link.title,
    description: link.description,
    path: link.path,
  }));

  return (
    <CategoryLinks
      title="Looking in a different direction?"
      description="Browse other categories on zim.co.zw for services, learning and business."
      links={links}
    />
  );
}
