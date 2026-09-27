import { PhotoBand } from '@/components/layout/PhotoBand';
import { MapPinIcon } from '@/components/icons';
import { FilterChips } from '@/components/ui/FilterChips';
import { SelectPill } from '@/components/ui/SelectPill';
import { jobsIntro, opportunityTypes } from '@/features/jobs/jobsContent';
import { opportunityLocations, sortOptions } from '@/features/jobs/opportunityFilters';
import { opportunityTypeIcons } from '@/features/jobs/iconMaps';

/**
 * The page opening and the three controls that scope the list below it.
 *
 * All three write to search parameters, so a filtered view can be linked to
 * and the results section can read the selection without this component
 * passing anything down.
 */
export function JobsIntro() {
  const typeOptions = opportunityTypes.map((type) => ({
    value: type.value,
    label: type.label,
    Icon: opportunityTypeIcons[type.value],
  }));

  return (
    <PhotoBand photo={jobsIntro.photo}>
      <section className="max-w-content px-page-gutter mx-auto pt-12 pb-12 lg:pt-16">
        <p className="text-kicker text-muted font-semibold uppercase">
          {jobsIntro.kicker}
        </p>

        <h1 className="text-page-title mt-5 font-serif font-bold">{jobsIntro.title}</h1>

        <p className="text-muted mt-5 max-w-2xl leading-relaxed">
          {jobsIntro.description}
        </p>

        <FilterChips
          param="type"
          label="Filter by opportunity type"
          options={typeOptions}
          className="mt-8"
        />

        <div className="mt-3 flex flex-wrap gap-2">
          <SelectPill
            param="location"
            label="Filter by location"
            options={opportunityLocations}
            defaultValue="all"
            Icon={MapPinIcon}
          />
          <SelectPill
            param="sort"
            label="Sort by deadline"
            options={sortOptions}
            defaultValue="soonest"
          />
        </div>
      </section>
    </PhotoBand>
  );
}
