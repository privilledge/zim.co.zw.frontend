import { PhotoBand } from '@/components/layout/PhotoBand';
import { SearchForm } from '@/components/ui/SearchForm';
import { directoryIntro } from '@/features/directory/directoryContent';

/** The page opening: what the directory covers, and a box to search it. */
export function DirectoryIntro() {
  return (
    <PhotoBand photo={directoryIntro.photo}>
      <section className="max-w-content px-page-gutter mx-auto pt-12 pb-14 lg:pt-16">
        <p className="text-kicker text-muted font-semibold uppercase">
          {directoryIntro.kicker}
        </p>

        <h1 className="text-page-title mt-5 font-serif font-bold">
          {directoryIntro.title}
        </h1>

        <p className="text-muted mt-5 max-w-2xl leading-relaxed">
          {directoryIntro.description}
        </p>

        <SearchForm
          id="directory-search"
          label="Search organisations"
          placeholder={directoryIntro.searchPlaceholder}
          showSubmit={false}
          className="mt-8 max-w-md"
        />
      </section>
    </PhotoBand>
  );
}
