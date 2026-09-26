import { Link } from 'react-router';

import { submissionPrompt } from '@/features/directory/directoryContent';

/**
 * The one place on the portal that asks the reader for something.
 *
 * It closes the directory rather than opening it: the invitation to add a
 * listing makes more sense after someone has looked and not found what they
 * came for.
 */
export function SubmissionPrompt() {
  return (
    <section className="bg-sand-100">
      <div className="max-w-content px-page-gutter mx-auto py-12">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
          <div className="max-w-md">
            <h2 className="text-section font-serif font-bold">
              {submissionPrompt.title}
            </h2>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              {submissionPrompt.description}
            </p>
          </div>

          <Link
            to={submissionPrompt.path}
            className="bg-primary rounded-pill hover:bg-primary-hover shrink-0 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            {submissionPrompt.actionLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
