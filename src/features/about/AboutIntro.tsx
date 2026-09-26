import { Scene } from '@/components/illustrations/Scene';
import { aboutIntro } from '@/features/about/aboutContent';

/**
 * The country in one paragraph, with a skyline beside it.
 *
 * This page has no search box and no filters: it is reference reading rather
 * than a list to narrow, so the header gives the text room instead.
 */
export function AboutIntro() {
  return (
    <section className="max-w-content px-page-gutter mx-auto pt-12 pb-14 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-kicker text-muted font-semibold uppercase">
            {aboutIntro.kicker}
          </p>

          <h1 className="text-page-title mt-5 font-serif font-bold">
            {aboutIntro.title}
          </h1>

          <p className="text-muted mt-5 leading-relaxed">{aboutIntro.description}</p>
        </div>

        <div className="rounded-card relative aspect-[3/2] overflow-hidden">
          <Scene variant="campus" className="size-full" />
          <p className="bg-surface-inverse/80 rounded-control text-kicker absolute bottom-3 left-3 px-2.5 py-1.5 font-semibold text-white uppercase backdrop-blur-sm">
            {aboutIntro.sceneLabel}
          </p>
        </div>
      </div>
    </section>
  );
}
