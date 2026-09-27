import { PhotoBand } from '@/components/layout/PhotoBand';
import { CheckCircleIcon } from '@/components/icons';
import { SearchForm } from '@/components/ui/SearchForm';
import {
  governmentIntro,
  governmentStats,
} from '@/features/government/governmentContent';

/**
 * The page opening: what this area covers, and a search box scoped to it.
 *
 * The counts underneath are deliberately part of the header rather than a
 * separate band - they qualify the promise the paragraph makes, so they read
 * as one block.
 */
export function GovernmentIntro() {
  return (
    <PhotoBand photo={governmentIntro.photo}>
      <section className="max-w-content px-page-gutter mx-auto pt-12 pb-14 lg:pt-16">
        <p className="text-kicker text-muted font-semibold uppercase">
          {governmentIntro.kicker}
        </p>

        <h1 className="text-page-title mt-5 max-w-3xl font-serif font-bold">
          {governmentIntro.title}
        </h1>

        <p className="text-muted mt-5 max-w-2xl leading-relaxed">
          {governmentIntro.description}
        </p>

        <SearchForm
          id="government-search"
          label="Search government services"
          placeholder={governmentIntro.searchPlaceholder}
          className="mt-8 max-w-xl"
        />

        <ul className="text-muted mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs">
          {governmentStats.map((stat, index) => (
            <li key={stat} className="flex items-center gap-2">
              {index === 0 ? (
                <CheckCircleIcon className="text-verified size-3.5" />
              ) : (
                <span aria-hidden>·</span>
              )}
              {stat}
            </li>
          ))}
        </ul>
      </section>
    </PhotoBand>
  );
}
