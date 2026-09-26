import { FilterChips } from '@/components/ui/FilterChips';
import { SearchForm } from '@/components/ui/SearchForm';
import { healthFilters, healthIntro } from '@/features/health/healthContent';
import { healthCategoryIcons } from '@/features/health/iconMaps';

/**
 * The page opening, and the five category chips that scope the facility list.
 *
 * The chips write to the `category` search parameter rather than to state held
 * here, so the list below reads the selection straight from the URL.
 */
export function HealthIntro() {
  const options = healthFilters.map((filter) => ({
    value: filter.value,
    label: filter.label,
    Icon: healthCategoryIcons[filter.value],
  }));

  return (
    <section className="max-w-content px-page-gutter mx-auto pt-12 pb-10 lg:pt-16">
      <p className="text-kicker text-muted font-semibold uppercase">
        {healthIntro.kicker}
      </p>

      <h1 className="text-page-title mt-5 font-serif font-bold">{healthIntro.title}</h1>

      <p className="text-muted mt-5 max-w-2xl leading-relaxed">
        {healthIntro.description}
      </p>

      <SearchForm
        id="health-search"
        label="Search hospitals, clinics and pharmacies"
        placeholder={healthIntro.searchPlaceholder}
        showSubmit={false}
        className="mt-8 max-w-md"
      />

      <FilterChips
        param="category"
        label="Filter by facility type"
        options={options}
        className="mt-6"
      />
    </section>
  );
}
