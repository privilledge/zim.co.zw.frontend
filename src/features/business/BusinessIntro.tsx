import { PhotoBand } from '@/components/layout/PhotoBand';
import { FilterChips } from '@/components/ui/FilterChips';
import { businessCategories, businessIntro } from '@/features/business/businessContent';
import { businessCategoryIcons } from '@/features/business/iconMaps';

/**
 * The page opening and the six sector chips that scope the lists below.
 *
 * There is no search box here: the design puts the sectors first, because a
 * reader arriving at this area is usually browsing by what they do rather
 * than searching for an organisation by name.
 */
export function BusinessIntro() {
  const options = businessCategories.map((category) => ({
    value: category.value,
    label: category.label,
    Icon: businessCategoryIcons[category.value],
  }));

  return (
    <PhotoBand photo={businessIntro.photo}>
      <section className="max-w-content px-page-gutter mx-auto pt-12 pb-10 lg:pt-16">
        <p className="text-kicker text-muted font-semibold uppercase">
          {businessIntro.kicker}
        </p>

        <h1 className="text-page-title mt-5 font-serif font-bold">
          {businessIntro.title}
        </h1>

        <p className="text-muted mt-5 max-w-2xl leading-relaxed">
          {businessIntro.description}
        </p>

        <FilterChips
          param="category"
          label="Filter by sector"
          options={options}
          className="mt-8"
        />
      </section>
    </PhotoBand>
  );
}
