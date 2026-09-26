import { AboutIntro } from '@/features/about/AboutIntro';
import { AboutLinksSection } from '@/features/about/AboutLinksSection';
import { CultureSection } from '@/features/about/CultureSection';
import { ProvincesSection } from '@/features/about/ProvincesSection';
import { QuickFactsSection } from '@/features/about/QuickFactsSection';

/**
 * About Zimbabwe.
 *
 * Everything below the header shares one tinted band, so the reference
 * material reads as a single continuous document rather than as four separate
 * sections. That band is owned here rather than repeated inside each part,
 * which is why these pieces render plain containers rather than `<section>`
 * elements with their own background.
 */
export function AboutPage() {
  return (
    <>
      <AboutIntro />

      <section className="bg-surface-sunken border-border border-t">
        <QuickFactsSection />
        <ProvincesSection />
        <CultureSection />
        <AboutLinksSection />
      </section>
    </>
  );
}
