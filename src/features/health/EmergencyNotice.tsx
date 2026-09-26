import { PhoneIcon } from '@/components/icons';
import { emergencyNotice } from '@/features/health/healthContent';

/**
 * The limits of this section, stated before anyone scrolls into the list.
 *
 * The scope rules out medical advice, and a directory that looks like a health
 * service is worse than one that says plainly what it is not. Gold rather than
 * red: this is a standing caveat, not an alarm.
 */
export function EmergencyNotice() {
  return (
    <section className="max-w-content px-page-gutter mx-auto pb-14">
      <div className="border-border bg-surface rounded-card flex items-start gap-4 border p-5">
        <span className="bg-accent-soft text-review flex size-11 shrink-0 items-center justify-center rounded-full">
          <PhoneIcon className="size-5" />
        </span>

        <div>
          <h2 className="font-semibold">{emergencyNotice.title}</h2>
          <p className="text-muted mt-1.5 text-sm leading-relaxed">
            {emergencyNotice.description}
          </p>
        </div>
      </div>
    </section>
  );
}
