import { Link } from 'react-router';

import { ArrowRightIcon, ShieldIcon } from '@/components/icons';
import { VerificationLegend } from '@/components/ui/VerificationLegend';
import { SubmitForm } from '@/features/submit/SubmitForm';

/**
 * Submit information.
 *
 * No design was supplied for this page, so it is built from the system the
 * area pages established: the same header shape, the same card and control
 * treatment, and the verification legend that appears wherever the platform
 * explains what it will and will not vouch for.
 *
 * The sidebar sets expectations before the reader fills anything in. A
 * submission is a suggestion, not a publication, and saying so here is what
 * keeps the directory's verified badge worth anything.
 */
const STEPS: readonly { title: string; description: string }[] = [
  {
    title: 'You send it',
    description:
      'A missing listing, a correction, or a note that something has gone stale.',
  },
  {
    title: 'We trace it',
    description:
      'The team checks the detail against the responsible organisation or an official source.',
  },
  {
    title: 'It gets a date',
    description:
      'Anything published carries its source and the date it was last checked, like every other record.',
  },
];

export function SubmitPage() {
  return (
    <>
      <section className="max-w-content px-page-gutter mx-auto pt-12 pb-10 lg:pt-16">
        <p className="text-kicker text-muted font-semibold uppercase">Contribute</p>

        <h1 className="text-page-title mt-5 font-serif font-bold">Submit information</h1>

        <p className="text-muted mt-5 max-w-2xl leading-relaxed">
          Anyone can suggest a listing or flag something that has changed. Nothing you
          send appears on the portal straight away: the team checks it against the
          responsible organisation first, and publishes it with its source and the date it
          was checked.
        </p>
      </section>

      <section className="bg-surface-sunken border-border border-t">
        <div className="max-w-content px-page-gutter mx-auto grid gap-10 py-12 lg:grid-cols-[1fr_20rem] lg:gap-12">
          <div className="border-border bg-surface rounded-card border p-6 lg:p-8">
            <SubmitForm />
          </div>

          <aside className="space-y-4">
            <div className="border-border bg-surface rounded-card border p-5">
              <h2 className="font-serif font-bold">What happens next</h2>

              <ol className="mt-4 space-y-4">
                {STEPS.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span
                      aria-hidden
                      className="bg-surface-inverse text-foreground-inverse rounded-pill flex size-6 shrink-0 items-center justify-center text-xs font-bold"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-[0.8125rem] font-semibold">{step.title}</h3>
                      <p className="text-muted mt-1 text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-border bg-surface rounded-card border p-5">
              <h2 className="flex items-center gap-2 font-serif font-bold">
                <ShieldIcon className="text-primary size-[1.125rem]" />
                What the badges mean
              </h2>

              <div className="mt-4">
                <VerificationLegend layout="stack" />
              </div>

              <Link
                to="/how-verification-works"
                className="text-primary group mt-4 flex items-center gap-1.5 text-xs font-medium"
              >
                How verification works
                <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <p className="text-muted text-xs leading-relaxed">
              zim.co.zw is an independent information project and is not affiliated with
              the Government of Zimbabwe. We cannot process applications, chase a case or
              act on your behalf.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
