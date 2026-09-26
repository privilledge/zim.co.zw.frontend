import { VerificationBadge } from '@/components/ui/VerificationBadge';
import type { VerificationStatus } from '@/types/verification';

export interface SourceRecord {
  status: VerificationStatus;
  source: string;
  lastVerified: string;
}

interface SourcePanelProps {
  record: SourceRecord;
  /**
   * `stacked` is the sidebar card on a service page; `inline` is the wide bar
   * that closes an organisation profile. Same three fields either way - the
   * scope makes source and verification date part of every record, so they
   * are shown the same way wherever a record is displayed in full.
   */
  layout?: 'stacked' | 'inline';
}

export function SourcePanel({ record, layout = 'stacked' }: SourcePanelProps) {
  const rows = [
    { label: 'Status', value: <VerificationBadge status={record.status} /> },
    { label: 'Source', value: record.source },
    { label: 'Last verified', value: record.lastVerified },
  ];

  if (layout === 'inline') {
    return (
      <div className="border-border bg-surface rounded-card flex flex-wrap items-center justify-between gap-x-10 gap-y-5 border p-5">
        <h2 className="font-serif font-bold">Source &amp; verification</h2>

        <dl className="flex flex-wrap gap-x-10 gap-y-4">
          {rows.map((row) => (
            <div key={row.label}>
              <dt className="text-muted text-xs">{row.label}</dt>
              <dd className="mt-1 text-xs font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  return (
    <div className="border-border bg-surface rounded-card border p-5">
      <h2 className="font-serif font-bold">Source &amp; verification</h2>

      <dl className="mt-4 space-y-2.5">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-4">
            <dt className="text-muted text-xs">{row.label}</dt>
            <dd className="text-right text-xs font-medium">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
