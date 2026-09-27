import { Photo } from '@/components/media/Photo';
import { FilterChips } from '@/components/ui/FilterChips';
import { SearchForm } from '@/components/ui/SearchForm';
import { exploreCategories, exploreIntro } from '@/features/explore/exploreContent';

/**
 * The page opening, set over an illustrated banner.
 *
 * This is the only area page whose header sits on a scene rather than on the
 * page background: the section is about places, so it opens with one.
 */
export function ExploreIntro() {
  const options = exploreCategories.map((category) => ({
    value: category.value,
    label: category.label,
  }));

  return (
    <section className="max-w-content px-page-gutter mx-auto pt-8 pb-12">
      <div className="rounded-card relative flex min-h-56 flex-col justify-center overflow-hidden p-8 lg:min-h-64 lg:p-10">
        <Photo
          photo={exploreIntro.photo}
          sizes="(min-width: 1280px) 1200px, 100vw"
          priority
          decorative
          className="absolute inset-0 size-full"
        />
        <div className="from-sand-700/95 via-sand-700/70 absolute inset-0 bg-gradient-to-r to-transparent" />

        <div className="relative max-w-xl">
          <p className="text-kicker text-accent font-semibold uppercase">
            {exploreIntro.kicker}
          </p>

          <h1 className="text-page-title mt-3 font-serif font-bold text-white">
            {exploreIntro.title}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white/85">
            {exploreIntro.description}
          </p>
        </div>
      </div>

      <SearchForm
        id="explore-search"
        label="Search destinations, parks and cities"
        placeholder={exploreIntro.searchPlaceholder}
        className="mt-6 max-w-md"
      />

      <FilterChips
        param="category"
        label="Filter by category"
        options={options}
        className="mt-4"
      />
    </section>
  );
}
