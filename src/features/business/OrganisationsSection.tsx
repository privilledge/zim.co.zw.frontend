import { Link, useSearchParams } from 'react-router';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { businessOrganisations } from '@/features/business/businessContent';

/**
 * Banks, insurers and companies, as monogram cards.
 *
 * The monogram tiles cycle through green, gold and neutral. That is the one
 * place in the interface where the brand's three colours appear as a set
 * rather than as status: a wall of six identical green squares reads as a
 * single company, and the rotation breaks it up without inventing a meaning
 * for each colour.
 */
const MONOGRAM_TINTS = [
  'bg-primary-soft text-primary',
  'bg-accent-soft text-review',
  'bg-surface-sunken text-muted',
] as const;

export function OrganisationsSection() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const visible = category
    ? businessOrganisations.filter((organisation) => organisation.category === category)
    : businessOrganisations;

  if (visible.length === 0) return null;

  return (
    <section className="max-w-content px-page-gutter mx-auto pb-16">
      <SectionHeader
        title="Featured organizations"
        description="Banks, insurers and companies that operate across Zimbabwe."
      />

      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((organisation, index) => (
          <li key={organisation.name}>
            <Link
              to={organisation.path}
              className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full flex-col border p-5 transition-all"
            >
              <span
                aria-hidden
                className={`rounded-control flex size-10 items-center justify-center font-serif text-xs font-bold ${
                  MONOGRAM_TINTS[index % MONOGRAM_TINTS.length]
                }`}
              >
                {organisation.initials}
              </span>

              <h3 className="mt-4 font-serif font-bold">{organisation.name}</h3>

              <p className="text-muted mt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="border-border rounded-pill border px-2 py-0.5">
                  {organisation.type}
                </span>
                {organisation.city}
              </p>

              <p className="text-muted mt-3 text-xs leading-relaxed">
                {organisation.description}
              </p>

              <div className="mt-4">
                <VerificationBadge status={organisation.status} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
