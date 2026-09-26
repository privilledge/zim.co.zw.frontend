import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { CheckCircleIcon, InfoIcon } from '@/components/icons';
import { FormField } from '@/components/ui/FormField';
import { controlClassName } from '@/components/ui/formStyles';
import { sendContactMessage } from '@/services/contactService';
import type { ContactPayload, ContactTopic } from '@/services/contactService';
import type { ApiError } from '@/services/apiClient';

const TOPICS: readonly { value: ContactTopic; label: string }[] = [
  { value: 'general', label: 'General enquiry' },
  { value: 'correction', label: 'Something on the site looks wrong' },
  { value: 'partnership', label: 'Working with us' },
  { value: 'problem', label: 'Report a technical problem' },
];

const EMPTY: ContactPayload = {
  name: '',
  email: '',
  topic: 'general',
  message: '',
};

type Errors = Partial<Record<keyof ContactPayload, string>>;

function validate(values: ContactPayload): Errors {
  const errors: Errors = {};

  if (values.name.trim().length === 0) {
    errors.name = 'Please tell us your name.';
  }
  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'We need a valid email address to reply to.';
  }
  if (values.message.trim().length < 20) {
    errors.message = 'Please give us at least a sentence or two to work from.';
  }

  return errors;
}

/**
 * The contact form.
 *
 * As with the submission form, this posts to the real API layer rather than
 * feigning success, so the day the Spring Boot endpoint exists it starts
 * working without a rewrite.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});

  const mutation = useMutation<void, ApiError, ContactPayload>({
    mutationFn: sendContactMessage,
    onSuccess: () => setValues(EMPTY),
  });

  function set<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
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
        <h2 className="mt-4 font-serif text-lg font-bold">Message sent</h2>
        <p className="text-muted mt-2 text-sm leading-relaxed">
          Thank you. We read everything that comes in, though we cannot always reply
          individually.
        </p>
        <button
          type="button"
          onClick={() => mutation.reset()}
          className="border-border rounded-control hover:border-border-strong hover:bg-surface-sunken mt-5 border px-4 py-2 text-[0.8125rem] font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField htmlFor="contact-name" label="Your name" error={errors.name}>
          <input
            id="contact-name"
            type="text"
            value={values.name}
            onChange={(event) => set('name', event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={controlClassName}
          />
        </FormField>

        <FormField htmlFor="contact-email" label="Your email" error={errors.email}>
          <input
            id="contact-email"
            type="email"
            value={values.email}
            onChange={(event) => set('email', event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            placeholder="you@example.com"
            className={controlClassName}
          />
        </FormField>
      </div>

      <FormField htmlFor="contact-topic" label="What is this about?">
        <select
          id="contact-topic"
          value={values.topic}
          onChange={(event) => set('topic', event.target.value as ContactTopic)}
          className={controlClassName}
        >
          {TOPICS.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField htmlFor="contact-message" label="Your message" error={errors.message}>
        <textarea
          id="contact-message"
          rows={7}
          value={values.message}
          onChange={(event) => set('message', event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
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
            We could not send that: {mutation.error.message}. The contact endpoint is not
            live yet, so nothing has been recorded. Your message is still in the form.
          </span>
        </p>
      )}

      <button
        type="submit"
        disabled={mutation.isPending}
        className="bg-primary rounded-pill hover:bg-primary-hover px-6 py-2.5 text-sm font-semibold text-white transition-colors disabled:opacity-60"
      >
        {mutation.isPending ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}
