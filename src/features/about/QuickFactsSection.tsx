import { quickFacts } from '@/features/about/aboutContent';

/**
 * The five figures people most often want from a country page.
 *
 * Each value is set in the serif at display size: these are the answer, and
 * the label above it is only there to say what was asked.
 */
export function QuickFactsSection() {
  return (
    <div className="max-w-content px-page-gutter mx-auto pt-16">
      <p className="text-kicker text-muted font-semibold uppercase">At a glance</p>
      <h2 className="text-section mt-2.5 font-serif font-bold">Quick facts</h2>

      <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {quickFacts.map((fact) => (
          <div
            key={fact.label}
            className="border-border bg-surface rounded-card border p-5"
          >
            <dt className="text-kicker text-muted font-semibold uppercase">
              {fact.label}
            </dt>
            <dd className="mt-2.5 font-serif text-xl font-bold">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
