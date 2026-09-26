/**
 * Shared class strings for form controls.
 *
 * Inputs, selects and textareas differ only in the element used, so their
 * styling lives here as constants rather than as three near-identical wrapper
 * components. Everything reads from the design tokens, as elsewhere.
 */

export const controlClassName =
  'border-border bg-surface rounded-control focus:border-primary w-full border px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted disabled:opacity-60';

export const invalidControlClassName =
  'border-danger bg-surface rounded-control w-full border px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted';

export const labelClassName = 'block text-[0.8125rem] font-medium';

export const hintClassName = 'text-muted mt-1 block text-xs';
