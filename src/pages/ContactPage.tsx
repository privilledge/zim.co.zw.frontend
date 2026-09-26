import { Link } from 'react-router';

import { ArrowRightIcon, InfoIcon, ShieldIcon } from '@/components/icons';
import { ContactForm } from '@/features/contact/ContactForm';

/**
 * Contact.
 *
 * No design was supplied for this page, so it follows the shape the submit
 * page established: the same header, a form on the left and a sidebar that
 * redirects the two requests this address should not receive.
 *
 * Most people who reach a contact form on a portal like this want a government
 * service or a record corrected. Sending both somewhere better before they
 * type is worth more than a faster reply afterwards.
 */
const REDIRECTS: readonly {
  title: string;
  description: string;
  actionLabel: string;
  path: string;
}[] = [
  {
    title: 'Something on the site is wrong or out of date',
    description:
      'Corrections go through the submission form, where we can ask for a source and track the fix against the record.',
    actionLabel: 'Submit a correction',
    path: '/submit',
  },
  {
    title: 'You need a government service',
    description:
      'We are an independent information project, not a government department. The service pages carry the responsible organisation and its official link.',
    actionLabel: 'Browse government services',
    path: '/government',
  },
];

export function ContactPage() {
  return (
    <>
      <section className="max-w-content px-page-gutter mx-auto pt-12 pb-10 lg:pt-16">
        <p className="text-kicker text-muted font-semibold uppercase">Platform</p>

        <h1 className="text-page-title mt-5 font-serif font-bold">Contact</h1>

        <p className="text-muted mt-5 max-w-2xl leading-relaxed">
          Questions about the portal, how it is put together, or working with us. We read
          everything that arrives, though we cannot always reply individually.
        </p>
      </section>

      <section className="bg-surface-sunken border-border border-t">
        <div className="max-w-content px-page-gutter mx-auto grid gap-10 py-12 lg:grid-cols-[1fr_20rem] lg:gap-12">
          <div className="border-border bg-surface rounded-card border p-6 lg:p-8">
            <ContactForm />
          </div>

          <aside className="space-y-4">
            {REDIRECTS.map((redirect) => (
              <div
                key={redirect.path}
                className="border-border bg-surface rounded-card border p-5"
              >
                <h2 className="text-[0.8125rem] font-semibold">{redirect.title}</h2>
                <p className="text-muted mt-2 text-xs leading-relaxed">
                  {redirect.description}
                </p>
                <Link
                  to={redirect.path}
                  className="text-primary group mt-3 flex items-center gap-1.5 text-xs font-medium"
                >
                  {redirect.actionLabel}
                  <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}

            <div className="border-border bg-surface rounded-card border p-5">
              <h2 className="flex items-center gap-2 font-serif font-bold">
                <ShieldIcon className="text-primary size-[1.125rem]" />
                How we check things
              </h2>
              <p className="text-muted mt-2.5 text-xs leading-relaxed">
                Every record on the portal carries its source and the date it was last
                checked.
              </p>
              <Link
                to="/how-verification-works"
                className="text-primary group mt-3 flex items-center gap-1.5 text-xs font-medium"
              >
                How verification works
                <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <p className="text-muted flex items-start gap-2.5 text-xs leading-relaxed">
              <InfoIcon className="mt-px size-4 shrink-0" />
              <span>
                Please do not send identity documents, application references or payment
                details. We cannot process applications or act on your behalf.
              </span>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
