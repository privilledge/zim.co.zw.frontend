import { Link, useParams } from 'react-router';

import {
  BriefcaseIcon,
  BuildingIcon,
  ClockIcon,
  ExternalLinkIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '@/components/icons';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { DetailHeading } from '@/components/ui/DetailHeading';
import { PendingValue } from '@/components/ui/PendingValue';
import { SourcePanel } from '@/components/ui/SourcePanel';
import { VerificationBadge } from '@/components/ui/VerificationBadge';
import { getOrganisation } from '@/features/directory/organisationContent';
import { NotFoundPage } from '@/pages/NotFoundPage';

/**
 * A single organisation, in full.
 *
 * The header carries identity and trust; everything below it is the detail a
 * reader needs in order to actually reach the organisation. An unknown slug
 * falls through to the not-found page.
 */
export function OrganisationPage() {
  const { slug } = useParams();
  const organisation = getOrganisation(slug);

  if (!organisation) return <NotFoundPage />;

  return (
    <>
      <section className="max-w-content px-page-gutter mx-auto pt-6 pb-10">
        <Breadcrumb
          crumbs={[
            { label: 'Directories', to: '/directory' },
            { label: organisation.name },
          ]}
        />

        <div className="mt-6 flex flex-wrap items-start gap-5">
          <span
            aria-hidden
            className="bg-surface-inverse text-foreground-inverse rounded-card flex size-14 shrink-0 items-center justify-center font-serif text-lg font-bold"
          >
            {organisation.initials}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-page-title font-serif font-bold">
                {organisation.name}
              </h1>
              <span className="bg-surface-sunken rounded-pill text-muted px-2.5 py-1 text-[0.6875rem] font-medium">
                {organisation.type}
              </span>
            </div>

            <p className="text-muted mt-2 flex items-center gap-1.5 text-xs">
              <MapPinIcon className="size-3.5 shrink-0" />
              {organisation.city}
            </p>

            <p className="text-muted mt-4 max-w-3xl text-sm leading-relaxed">
              {organisation.description}
            </p>

            <div className="text-muted mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
              <VerificationBadge status={organisation.record.status} />
              <span className="flex items-center gap-1.5">
                <ClockIcon className="size-3.5" />
                Last verified: {organisation.record.lastVerified}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-sunken border-border border-t">
        <div className="max-w-content px-page-gutter mx-auto space-y-12 py-12">
          <div>
            <DetailHeading Icon={BriefcaseIcon}>Services</DetailHeading>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {organisation.services.map((service) => (
                <li key={service.title}>
                  <Link
                    to={service.path}
                    className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full flex-col border p-5 transition-all"
                  >
                    <span className="bg-surface-sunken text-muted rounded-control flex size-9 items-center justify-center">
                      <BuildingIcon className="size-[1.125rem]" />
                    </span>
                    <h3 className="mt-4 font-serif font-bold">{service.title}</h3>
                    <p className="text-muted mt-1 text-xs">{service.subtitle}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <DetailHeading Icon={MapPinIcon}>Location</DetailHeading>

            <div className="mt-6 max-w-2xl">
              <h3 className="text-sm font-semibold">{organisation.location.label}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                {organisation.location.description}
              </p>
              <p className="text-muted mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs">
                <span>City: {organisation.location.city}</span>
                <span>Province: {organisation.location.province}</span>
              </p>
            </div>
          </div>

          <div>
            <DetailHeading Icon={PhoneIcon}>Contact</DetailHeading>

            <ul className="mt-6 space-y-3">
              <li className="text-muted flex items-center gap-2.5 text-xs">
                <PhoneIcon className="size-4 shrink-0" />
                <PendingValue label={organisation.contact.phonePendingLabel} />
              </li>
              <li className="flex items-center gap-2.5 text-xs">
                <GlobeIcon className="text-muted size-4 shrink-0" />
                <a
                  href={organisation.contact.websiteHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-primary inline-flex items-center gap-1 font-semibold"
                >
                  Official website
                  <ExternalLinkIcon className="size-3" />
                </a>
              </li>
              <li className="text-muted flex items-center gap-2.5 text-xs">
                <MailIcon className="size-4 shrink-0" />
                <PendingValue label={organisation.contact.emailPendingLabel} />
              </li>
            </ul>
          </div>

          <div>
            <DetailHeading Icon={ClockIcon}>Opening hours</DetailHeading>

            <dl className="mt-6 max-w-lg">
              {organisation.openingHours.map((entry) => (
                <div
                  key={entry.day}
                  className="border-border flex items-center justify-between gap-4 border-b py-3"
                >
                  <dt className="text-muted text-sm">{entry.day}</dt>
                  <dd
                    className={
                      entry.hours ? 'text-sm font-semibold' : 'text-muted text-sm'
                    }
                  >
                    {entry.hours ?? 'Closed'}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-section font-serif font-bold">Related organizations</h2>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {organisation.related.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="border-border bg-surface rounded-card hover:border-border-strong hover:shadow-raised flex h-full flex-col border p-5 transition-all"
                  >
                    <span className="bg-surface-sunken text-muted rounded-control flex size-9 items-center justify-center">
                      <BuildingIcon className="size-[1.125rem]" />
                    </span>
                    <h3 className="mt-4 font-serif font-bold">{item.title}</h3>
                    <p className="text-muted mt-1 text-xs">{item.subtitle}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <SourcePanel record={organisation.record} layout="inline" />
        </div>
      </section>
    </>
  );
}
