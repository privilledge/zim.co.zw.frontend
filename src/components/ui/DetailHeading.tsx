import type { IconProps } from '@/components/icons';

interface DetailHeadingProps {
  Icon: (props: IconProps) => React.ReactElement;
  children: string;
}

/**
 * A section heading on a detail page: a tinted icon tile beside a serif title.
 *
 * Detail pages are long and made of short blocks, so the headings carry a
 * little more weight than the plain `SectionHeader` used on listing pages -
 * the icon is what lets someone scanning for "Fees" find it without reading.
 */
export function DetailHeading({ Icon, children }: DetailHeadingProps) {
  return (
    <h2 className="flex items-center gap-3">
      <span className="bg-surface-sunken text-muted rounded-control flex size-9 shrink-0 items-center justify-center">
        <Icon className="size-[1.125rem]" />
      </span>
      <span className="text-section font-serif font-bold">{children}</span>
    </h2>
  );
}
