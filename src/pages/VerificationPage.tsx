import { Link } from 'react-router';

import {
  CalendarIcon,
  CertificateIcon,
  ClockIcon,
  GlobeIcon,
  InfoIcon,
  ShieldIcon,
} from '@/components/icons';
import type { IconProps } from '@/components/icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VerificationLegend } from '@/components/ui/VerificationLegend';
import {
  correctionPrompt,
  limits,
  recordFields,
  verificationIntro,
  verificationSteps,
} from '@/features/verification/verificationContent';
import type { RecordFieldIconKey } from '@/features/verification/verificationContent';

type IconComponent = (props: IconProps) => React.ReactElement;

const FIELD_ICONS: Record<RecordFieldIconKey, IconComponent> = {
  certificate: CertificateIcon,
  globe: GlobeIcon,
  calendar: CalendarIcon,
  clock: ClockIcon,
  shield: ShieldIcon,
};

/**
 * How verification works.
 *
 * No design was supplied, so this follows the system the area pages
 * established. It is the page every verification badge on the portal points
 * at, which makes it the one place the platform has to be precise about what
 * it is claiming - and, just as importantly, what it is not.
 */
export function VerificationPage() {
  return (
    <>
      <section className="max-w-content px-page-gutter mx-auto pt-12 pb-12 lg:pt-16">
        <p className="text-kicker text-muted font-semibold uppercase">
          {verificationIntro.kicker}
        </p>

        <h1 className="text-page-title mt-5 max-w-3xl font-serif font-bold">
          {verificationIntro.title}
        </h1>

        <p className="text-muted mt-5 max-w-2xl leading-relaxed">
          {verificationIntro.description}
        </p>
      </section>

      <section className="bg-surface-sunken border-border border-y">
        <div className="max-w-content px-page-gutter mx-auto py-16">
          <SectionHeader
            title="What the badges mean"
            description="Every record on the portal carries one of these three, shown on the record itself."
          />

          <div className="mt-8">
            <VerificationLegend />
          </div>
        </div>
      </section>

      <section className="max-w-content px-page-gutter mx-auto py-16">
        <SectionHeader
          title="What sits behind every record"
          description="Six fields travel with each entry. They are what makes a badge mean anything."
        />

        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recordFields.map((field) => {
            const Icon = FIELD_ICONS[field.iconKey];

            return (
              <div
                key={field.label}
                className="border-border bg-surface rounded-card border p-5"
              >
                <span className="bg-surface-sunken text-foreground rounded-control flex size-9 items-center justify-center">
                  <Icon className="size-[1.125rem]" />
                </span>
                <dt className="mt-4 text-sm font-semibold">{field.label}</dt>
                <dd className="text-muted mt-1.5 text-xs leading-relaxed">
                  {field.description}
                </dd>
              </div>
            );
          })}
        </dl>
      </section>

      <section className="bg-surface-sunken border-border border-y">
        <div className="max-w-content px-page-gutter mx-auto py-16">
          <SectionHeader
            title="How a record reaches the site"
            description="The same four steps, whether we found it or you sent it."
          />

          <ol className="mt-8 grid gap-6 lg:grid-cols-2">
            {verificationSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="bg-surface-inverse text-foreground-inverse rounded-pill flex size-7 shrink-0 items-center justify-center text-xs font-bold"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-serif font-bold">{step.title}</h3>
                  <p className="text-muted mt-1.5 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-content px-page-gutter mx-auto py-16">
        <SectionHeader
          title="What we do not claim"
          description="A directory is only useful if it is clear about where it stops."
        />

        <ul className="mt-8 grid gap-4 lg:grid-cols-2">
          {limits.map((limit) => (
            <li
              key={limit.slice(0, 32)}
              className="border-border bg-surface rounded-card flex items-start gap-3 border p-5"
            >
              <InfoIcon className="text-muted mt-0.5 size-4 shrink-0" />
              <p className="text-muted text-sm leading-relaxed">{limit}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sand-100">
        <div className="max-w-content px-page-gutter mx-auto py-12">
          <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
            <div className="max-w-xl">
              <h2 className="text-section font-serif font-bold">
                {correctionPrompt.title}
              </h2>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                {correctionPrompt.description}
              </p>
            </div>

            <Link
              to={correctionPrompt.path}
              className="bg-primary rounded-pill hover:bg-primary-hover shrink-0 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              {correctionPrompt.actionLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
