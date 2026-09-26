import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { CheckCircleIcon, InfoIcon } from '@/components/icons';
import { FormField } from '@/components/ui/FormField';
import { controlClassName } from '@/components/ui/formStyles';
import { submitInformation } from '@/services/submissionService';
import type { SubmissionKind, SubmissionPayload } from '@/services/submissionService';
import type { ApiError } from '@/services/apiClient';

const KINDS: readonly { value: SubmissionKind; label: string }[] = [
  { value: 'new-listing', label: 'A listing that is missing' },
  { value: 'correction', label: 'A correction to an existing record' },
  { value: 'out-of-date', label: 'Something that has gone out of date' },
];

const AREAS: readonly string[] = [
  'Government & Services',
  'Jobs & Opportunities',
  'Education',
  'Health',
  'Business & Money',
  'Explore Zimbabwe',
  'Directories',
  'About Zimbabwe',
];

const EMPTY: SubmissionPayload = {
  kind: 'new-listing',
  name: '',
  area: AREAS[0]!,
  location: '',
  sourceUrl: '',
  details: '',
  email: '',
};

type Errors = Partial<Record<keyof SubmissionPayload, string>>;

function validate(values: SubmissionPayload): Errors {
  const errors: Errors = {};

  if (values.name.trim().length === 0) {
    errors.name = 'Tell us what this is about.';
  }
  if (values.details.trim().length < 20) {
    errors.details = 'Please give us at least a sentence or two to work from.';
  }
  if (values.sourceUrl.trim().length > 0 && !/^https?:\/\/\S+$/i.test(values.sourceUrl)) {
    errors.sourceUrl = 'Enter a full web address, starting with http:// or https://';
  }
  if (values.email.trim().length > 0 && !/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Enter a valid email address, or leave this blank.';
  }

  return errors;
}

/**
 * The submission form.
 *
 * It posts to the real API layer rather than pretending to succeed. Until the
 * Spring Boot endpoint exists the request fails and the error is shown, which
 * is the honest outcome: a form that quietly swallows a correction would be
 * worse than one that admits it could not send it.
 */
export function SubmitForm() {
  const [values, setValues] = useState<SubmissionPayload>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});

  const mutation = useMutation<void, ApiError, SubmissionPayload>({
    mutationFn: submitInformation,
    onSuccess: () => setValues(EMPTY),
  });

  function set<K extends keyof SubmissionPayload>(key: K, value: SubmissionPayload[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length === 0) {
      mutation.mutate(values);
    }
  }

  if (mutation.isSuccess) {
    return (
      <div className="border-border bg-surface rounded-card border p-8">
        <CheckCircleIcon className="text-verified size-7" />
        <h2 className="mt-4 font-serif text-lg font-bold">Thank you</h2>
        <p className="text-muted mt-2 text-sm leading-relaxed">
          Your submission has reached us. The team checks every detail against its source
          before anything appears in the directory, so it will not go live immediately.
        </p>
        <button
          type="button"
          onClick={() => mutation.reset()}
          className="border-border rounded-control hover:border-border-strong hover:bg-surface-sunken mt-5 border px-4 py-2 text-[0.8125rem] font-medium transition-colors"
        >
          Submit something else
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <FormField htmlFor="submit-kind" label="What are you telling us about?">
        <select
          id="submit-kind"
          value={values.kind}
          onChange={(event) => set('kind', event.target.value as SubmissionKind)}
          className={controlClassName}
        >
          {KINDS.map((kind) => (
            <option key={kind.value} value={kind.value}>
              {kind.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        htmlFor="submit-name"
        label="Name of the organisation, service or place"
        error={errors.name}
      >
        <input
          id="submit-name"
          type="text"
          value={values.name}
          onChange={(event) => set('name', event.target.value)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'submit-name-error' : undefined}
          placeholder="e.g. Registrar-General's Office"
          className={controlClassName}
        />
      </FormField>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField htmlFor="submit-area" label="Which section does it belong in?">
          <select
            id="submit-area"
            value={values.area}
            onChange={(event) => set('area', event.target.value)}
            className={controlClassName}
          >
            {AREAS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </FormField>

        <FormField htmlFor="submit-location" label="Town or city" optional>
          <input
            id="submit-location"
            type="text"
            value={values.location}
            onChange={(event) => set('location', event.target.value)}
            placeholder="e.g. Bulawayo"
            className={controlClassName}
          />
        </FormField>
      </div>

      <FormField
        htmlFor="submit-source"
        label="Where can we check this?"
        hint="An official page, a published notice, anything we can trace it back to. It is the single most useful thing you can give us."
        error={errors.sourceUrl}
        optional
      >
        <input
          id="submit-source"
          type="url"
          value={values.sourceUrl}
          onChange={(event) => set('sourceUrl', event.target.value)}
          aria-invalid={errors.sourceUrl ? true : undefined}
          aria-describedby={
            [errors.sourceUrl ? 'submit-source-error' : null, 'submit-source-hint']
              .filter(Boolean)
              .join(' ') || undefined
          }
          placeholder="https://"
          className={controlClassName}
        />
      </FormField>

      <FormField
        htmlFor="submit-details"
        label="What should we know?"
        hint="If this is a correction, tell us what is currently wrong as well as what it should say."
        error={errors.details}
      >
        <textarea
          id="submit-details"
          rows={6}
          value={values.details}
          onChange={(event) => set('details', event.target.value)}
          aria-invalid={errors.details ? true : undefined}
          aria-describedby={
            [errors.details ? 'submit-details-error' : null, 'submit-details-hint']
              .filter(Boolean)
              .join(' ') || undefined
          }
          className={controlClassName}
        />
      </FormField>

      <FormField
        htmlFor="submit-email"
        label="Your email"
        hint="Only so we can come back to you if something is unclear. It is not published."
        error={errors.email}
        optional
      >
        <input
          id="submit-email"
          type="email"
          value={values.email}
          onChange={(event) => set('email', event.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={
            [errors.email ? 'submit-email-error' : null, 'submit-email-hint']
              .filter(Boolean)
              .join(' ') || undefined
          }
          placeholder="you@example.com"
          className={controlClassName}
        />
      </FormField>

      {mutation.isError && (
        <p
          role="alert"
          className="border-border bg-surface-sunken rounded-card text-muted flex items-start gap-2.5 border p-4 text-xs leading-relaxed"
        >
          <InfoIcon className="mt-px size-4 shrink-0" />
          <span>
            We could not send that: {mutation.error.message}. The submissions endpoint is
            not live yet, so nothing has been recorded. Your answers are still in the
            form.
          </span>
        </p>
      )}

      <button
        type="submit"
        disabled={mutation.isPending}
        className="bg-primary rounded-pill hover:bg-primary-hover px-6 py-2.5 text-sm font-semibold text-white transition-colors disabled:opacity-60"
      >
        {mutation.isPending ? 'Sending...' : 'Submit information'}
      </button>
    </form>
  );
}
