import { PhotoBand } from '@/components/layout/PhotoBand';
import { FilterChips } from '@/components/ui/FilterChips';
import { SearchForm } from '@/components/ui/SearchForm';
import {
  educationCategories,
  educationIntro,
} from '@/features/education/educationContent';
import { educationCategoryIcons } from '@/features/education/iconMaps';

/**
 * The page opening, and the four category chips that scope the rest of it.
 *
 * The chips write to the `category` search parameter rather than to state
 * held here, so the sections below can read the selection without this
 * component or the page having to pass it down.
 */
export function EducationIntro() {
  const options = educationCategories.map((category) => ({
    value: category.value,
    label: category.label,
    Icon: educationCategoryIcons[category.value],
  }));

  return (
    <PhotoBand photo={educationIntro.photo}>
      <section className="max-w-content px-page-gutter mx-auto pt-12 pb-14 lg:pt-16">
        <p className="text-kicker text-muted font-semibold uppercase">
          {educationIntro.kicker}
        </p>

        <h1 className="text-page-title mt-5 font-serif font-bold">
          {educationIntro.title}
        </h1>

        <p className="text-muted mt-5 max-w-2xl leading-relaxed">
          {educationIntro.description}
        </p>

        <SearchForm
          id="education-search"
          label="Search universities, colleges and courses"
          placeholder={educationIntro.searchPlaceholder}
          showSubmit={false}
          className="mt-8 max-w-md"
        />

        <FilterChips
          param="category"
          label="Filter by category"
          options={options}
          className="mt-6"
        />
      </section>
    </PhotoBand>
  );
}
