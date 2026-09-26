import { Scene } from '@/components/illustrations/Scene';
import { culture } from '@/features/about/aboutContent';

/**
 * Culture and heritage, with the conical tower of Great Zimbabwe beside it.
 */
export function CultureSection() {
  return (
    <div className="max-w-content px-page-gutter mx-auto pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-kicker text-muted font-semibold uppercase">
            {culture.kicker}
          </p>
          <h2 className="text-section mt-2.5 font-serif font-bold">{culture.title}</h2>

          {culture.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-muted mt-4 text-sm leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-card relative aspect-[3/2] overflow-hidden">
          <Scene variant="monolith" className="size-full" />
          <p className="bg-surface-inverse/80 rounded-control text-kicker absolute bottom-3 left-3 px-2.5 py-1.5 font-semibold text-white uppercase backdrop-blur-sm">
            {culture.sceneLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
