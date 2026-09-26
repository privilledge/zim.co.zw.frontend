import { hintClassName, labelClassName } from '@/components/ui/formStyles';

interface FormFieldProps {
  /** Must match the control's `id`, so clicking the label focuses it. */
  htmlFor: string;
  label: string;
  hint?: string;
  error?: string | undefined;
  /** Optional fields say so; required ones are the default and stay unmarked. */
  optional?: boolean;
  children: React.ReactNode;
}

/**
 * One labelled control, with its hint and validation message.
 *
 * The error is tied to the control through `aria-describedby` on the caller
 * side; this component owns the id so the two cannot drift apart.
 */
export function FormField({
  htmlFor,
  label,
  hint,
  error,
  optional,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
        {optional && <span className="text-muted font-normal"> (optional)</span>}
      </label>

      {hint && (
        <span id={`${htmlFor}-hint`} className={hintClassName}>
          {hint}
        </span>
      )}

      <div className="mt-2">{children}</div>

      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-danger mt-1.5 text-xs">
          {error}
        </p>
      )}
    </div>
  );
}
