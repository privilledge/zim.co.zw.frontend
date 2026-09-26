import { Link, useParams } from 'react-router';

import {
  ArrowRightIcon,
  CertificateIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ClockIcon,
  ExternalLinkIcon,
  GlobeIcon,
  MapPinIcon,
  PhoneIcon,
  ReceiptIcon,
} from '@/components/icons';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { DetailHeading } from '@/components/ui/DetailHeading';
import { PendingValue } from '@/components/ui/PendingValue';
import { SourcePanel } from '@/components/ui/SourcePanel';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { getServiceDetail } from '@/features/government/serviceDetailContent';
import { NotFoundPage } from '@/pages/NotFoundPage';

/**
 * A single government service, in full.
 *
 * The left column is the answer to "what do I do", the right column is "who
 * is responsible and how fresh is this". An unknown slug falls through to the
 * not-found page rather than rendering an empty frame.
 */
export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceDetail(slug);

  if (!service) return <NotFoundPage />;

  return (
    <>
      <section className="max-w-content px-page-gutter mx-auto pt-6 pb-8">
        <Breadcrumb
          crumbs={[
            { label: 'Government & Services', to: '/government' },
            { label: service.title },
          ]}
        />

        <p className="text-kicker text-muted mt-6 font-semibold uppercase">
          {service.kicker}
        </p>

        <h1 className="text-page-title mt-3 font-serif font-bold">{service.title}</h1>

        <p className="text-muted mt-4 max-w-3xl leading-relaxed">{service.description}</p>

        <div className="text-muted mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
          <VerificationBadge status={service.record.status} />
          <span>Source: {service.record.source}</span>
          <span className="flex items-center gap-1.5">
            <ClockIcon className="size-3.5" />
            Last verified: {service.record.lastVerified}
          </span>
        </div>
      </section>

      <section className="border-border border-t">
        <div className="max-w-content px-page-gutter mx-auto grid gap-10 py-12 lg:grid-cols-[1fr_20rem] lg:gap-12">
          <div className="space-y-12">
            <div>
              <DetailHeading Icon={CertificateIcon}>Requirements</DetailHeading>
              <ul className="mt-5 space-y-2.5">
                {service.requirements.map((requirement) => (
                  <li key={requirement} className="flex items-center gap-3 text-sm">
                    <span
                      aria-hidden
                      className="bg-accent rounded-pill size-1.5 shrink-0"
                    />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <DetailHeading Icon={CertificateIcon}>Required documents</DetailHeading>
              <ul className="mt-5">
                {service.documents.map((document) => (
                  <li
                    key={document}
                    className="border-border flex items-center gap-3 border-b py-3 text-sm"
                  >
                    <CheckCircleIcon className="text-verified size-4 shrink-0" />
                    {document}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <DetailHeading Icon={ReceiptIcon}>Fees</DetailHeading>
              <dl className="mt-5">
                {service.fees.map((fee) => (
                  <div
                    key={fee.label}
                    className="border-border flex items-center justify-between gap-4 border-b py-3.5"
                  >
                    <dt className="text-sm">{fee.label}</dt>
                    <dd>
                      <PendingValue label={fee.pendingLabel} />
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-muted mt-3 text-xs leading-relaxed">{service.feeNote}</p>
            </div>

            <div>
              <DetailHeading Icon={ArrowRightIcon}>Process</DetailHeading>
              <ol className="mt-5 space-y-5">
                {service.process.map((step, index) => (
                  <li key={step.title} className="flex gap-3.5">
                    <span
                      aria-hidden
                      className="bg-surface-inverse text-foreground-inverse rounded-pill flex size-6 shrink-0 items-center justify-center text-xs font-bold"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{step.title}</h3>
                      <p className="text-muted mt-1 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="border-border bg-surface rounded-card border p-5">
              <h2 className="font-serif font-bold">Location</h2>
              <p className="text-muted mt-3 flex items-start gap-2 text-xs leading-relaxed">
                <MapPinIcon className="mt-px size-3.5 shrink-0" />
                {service.location.summary}
              </p>
              <Link
                to={service.location.path}
                className="text-primary group mt-3 flex items-center gap-1.5 text-xs font-medium"
              >
                {service.location.actionLabel}
                <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="border-border bg-surface rounded-card border p-5">
              <h2 className="font-serif font-bold">Contact</h2>

              <p className="text-muted mt-3 flex items-center gap-2 text-xs">
                <PhoneIcon className="size-3.5 shrink-0" />
                <PendingValue label={service.contact.phonePendingLabel} />
              </p>

              <p className="mt-3 flex items-start gap-2 text-xs">
                <GlobeIcon className="text-muted mt-px size-3.5 shrink-0" />
                <span>
                  <span className="text-muted block">Official website</span>
                  <a
                    href={service.contact.websiteHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary mt-0.5 inline-flex items-center gap-1 font-medium"
                  >
                    {service.contact.websiteLabel}
                    <ExternalLinkIcon className="size-3" />
                  </a>
                </span>
              </p>
            </div>

            <div className="border-border bg-surface rounded-card border p-5">
              <h2 className="font-serif font-bold">Responsible organization</h2>

              <Link
                to={service.organisation.path}
                className="hover:bg-surface-sunken rounded-control -mx-2 mt-3 flex items-center gap-3 p-2 transition-colors"
              >
                <span
                  aria-hidden
                  className="bg-primary-soft text-primary rounded-control flex size-9 shrink-0 items-center justify-center font-serif text-xs font-bold"
                >
                  {service.organisation.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">
                    {service.organisation.name}
                  </span>
                  <span className="text-muted block text-xs">
                    {service.organisation.parent}
                  </span>
                </span>
                <ChevronRightIcon className="text-muted size-4 shrink-0" />
              </Link>
            </div>

            <SourcePanel record={service.record} />
          </aside>
        </div>
      </section>

      <section className="max-w-content px-page-gutter mx-auto pb-16">
        <h2 className="text-section font-serif font-bold">Related services</h2>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.related.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
                className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full flex-col border p-5 transition-all"
              >
                <span className="bg-surface-sunken text-muted rounded-control flex size-9 items-center justify-center">
                  <CertificateIcon className="size-[1.125rem]" />
                </span>
                <h3 className="mt-4 font-serif font-bold">{item.title}</h3>
                <p className="text-muted mt-1 text-xs">{item.subtitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
