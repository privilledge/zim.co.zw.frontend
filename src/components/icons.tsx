import type { SVGProps } from 'react';

/**
 * The project's icon set.
 *
 * These are hand-written rather than pulled from an icon package so the set
 * stays small and every glyph matches the design. They are all stroke-based on
 * a 24x24 grid, so they inherit `currentColor` and size from the parent's
 * font size unless a class overrides it.
 *
 * Add an icon here rather than inlining an `<svg>` inside a component.
 */

export type IconProps = SVGProps<SVGSVGElement>;

/** Shared attributes so every icon lines up optically. */
function base(props: IconProps) {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  };
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.6-3.6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.75" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function AlertTriangleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10.3 4.3 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9.5v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7 3v5.5c0 4.4-3 7.8-7 9.5-4-1.7-7-5.1-7-9.5V6l7-3Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------------
 * Section icons - one per portal area.
 * ---------------------------------------------------------------------- */

export function LandmarkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 10 12 4l9 6" />
      <path d="M5 10v8" />
      <path d="M10 10v8" />
      <path d="M14 10v8" />
      <path d="M19 10v8" />
      <path d="M3 20h18" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3 13h18" />
    </svg>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4 2.5 9 12 14l9.5-5L12 4Z" />
      <path d="M6.5 11.3V16c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6v-4.7" />
      <path d="M21.5 9v5" />
    </svg>
  );
}

export function HealthIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5.5" width="17" height="14" rx="2.5" />
      <path d="M12 9.5v6" />
      <path d="M9 12.5h6" />
    </svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18a1 1 0 0 1 1 1v1.5" />
      <rect x="3" y="7.5" width="18" height="11.5" rx="2.5" />
      <path d="M16.5 13.2h.01" />
    </svg>
  );
}

export function MountainIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m2.5 19 6-10 4.2 6.8" />
      <path d="m10 19 4.8-8 6.7 8H2.5" />
    </svg>
  );
}

export function DirectoryIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4.5h12a2 2 0 0 1 2 2V20H7a2 2 0 0 1-2-2V4.5Z" />
      <path d="M5 16.5h14" />
      <path d="M9 8.5h6" />
      <path d="M9 12h4" />
    </svg>
  );
}

export function FlagIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 21V4" />
      <path d="M5 5h11.5l-1.8 3.5L16.5 12H5" />
    </svg>
  );
}

/* ------------------------------------------------------------------------
 * Service icons - one per popular government service.
 * ---------------------------------------------------------------------- */

export function PassportIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="10" r="2.75" />
      <path d="M9.5 16.5h5" />
    </svg>
  );
}

export function IdCardIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <circle cx="8.5" cy="11" r="2" />
      <path d="M5.5 15.8c.5-1.2 1.6-1.9 3-1.9s2.5.7 3 1.9" />
      <path d="M14.5 10.5h4" />
      <path d="M14.5 13.8h4" />
    </svg>
  );
}

export function CertificateIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5L13.5 3Z" />
      <path d="M13.5 3v5.5H19" />
      <path d="M8.5 13h7" />
      <path d="M8.5 16.5h4.5" />
    </svg>
  );
}

export function CarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 15.5 5.4 10a2 2 0 0 1 1.9-1.5h9.4a2 2 0 0 1 1.9 1.5L20 15.5" />
      <path d="M3.5 15.5h17V19a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1h-10v1a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1v-3.5Z" />
      <path d="M6.75 17.2h.01" />
      <path d="M17.25 17.2h.01" />
    </svg>
  );
}

export function ReceiptIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5.5 3h13v18l-2.2-1.5-2.1 1.5-2.2-1.5L9.8 21l-2.1-1.5L5.5 21V3Z" />
      <path d="M9 8.5h6" />
      <path d="M9 12.5h6" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20.5V5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 14 5v15.5" />
      <path d="M14 10h4.5A1.5 1.5 0 0 1 20 11.5v9" />
      <path d="M3 20.5h18" />
      <path d="M7.25 7.5h3.5" />
      <path d="M7.25 11.5h3.5" />
      <path d="M7.25 15.5h3.5" />
      <path d="M17 14h.01" />
      <path d="M17 17.5h.01" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 2.5 4.5 13.5h6L11 21.5 19.5 10.5h-6L13 2.5Z" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.5A2 2 0 0 1 6 3.5h13v14H6a2 2 0 0 0-2 2V5.5Z" />
      <path d="M4 19.5a2 2 0 0 1 2-2h13v3H6a2 2 0 0 1-2-1Z" />
      <path d="M8.5 8h6" />
    </svg>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.6-1.3 7.2 4.8-2.6 4.8 2.6-1.3-7.2" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9.5" cy="8.5" r="3.5" />
      <path d="M3.5 19.5c0-3.2 2.7-5 6-5s6 1.8 6 5" />
      <path d="M16.5 5.4a3.5 3.5 0 0 1 0 6.2" />
      <path d="M18 14.9c1.6.6 2.5 2 2.5 4.6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8.4 3.5c.6 0 1.1.4 1.3 1l.9 3a1.4 1.4 0 0 1-.4 1.5l-1.3 1.1a12 12 0 0 0 5 5l1.1-1.3a1.4 1.4 0 0 1 1.5-.4l3 .9c.6.2 1 .7 1 1.3v2.8a1.9 1.9 0 0 1-2.1 1.9C11.9 19.8 4.2 12.1 3.6 4.6A1.9 1.9 0 0 1 5.5 2.5h2.9Z" />
    </svg>
  );
}

export function PillIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.8" y="8.3" width="18.4" height="7.4" rx="3.7" />
      <path d="M12 8.3v7.4" />
    </svg>
  );
}

export function FlaskIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9.5 3v6.2L4.8 17.6A2 2 0 0 0 6.5 20.6h11a2 2 0 0 0 1.7-3L14.5 9.2V3" />
      <path d="M8.5 3h7" />
      <path d="M7.4 14h9.2" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 19.5c-2-6 1.5-13 15-14 1 8.5-3.5 14.5-11 14.5-1.6 0-3-.2-4-.5Z" />
      <path d="M4.5 19.5C7 14 11 10.7 15.5 9" />
    </svg>
  );
}

export function FactoryIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 20.5V10l6 3.6V10l6 3.6V6.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v14" />
      <path d="M2.5 20.5h19" />
      <path d="M7 16.8h.01" />
      <path d="M13 16.8h.01" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 12h17.6" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.8h17" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
}

export function BedIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 19.5V7" />
      <path d="M3 11.5h14a4 4 0 0 1 4 4v4" />
      <path d="M3 16.2h18" />
      <circle cx="7.6" cy="8.6" r="1.9" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2" />
      <path d="m3.4 6.8 8.6 6 8.6-6" />
    </svg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13.5 4.5H19.5V10.5" />
      <path d="m19.5 4.5-8 8" />
      <path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" />
    </svg>
  );
}

/* ------------------------------------------------------------------------
 * Interface controls.
 * ---------------------------------------------------------------------- */

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 6h17" />
      <path d="M6.5 12h11" />
      <path d="M10 18h4" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function PauseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 6v12" />
      <path d="M15 6v12" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 5.5v13l10.5-6.5z" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m14.5 6-6 6 6 6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9.5 6 6 6-6 6" />
    </svg>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 7.75h.01" />
    </svg>
  );
}

/**
 * The zim.co.zw mark: the national flag as a roundel.
 *
 * Drawn rather than shipped as an image so it stays sharp at every size and
 * carries no extra request. Its colours are the fixed brand values from
 * `styles/theme.css` and are referenced here as tokens, so the mark can never
 * drift from the palette the rest of the interface uses.
 *
 * Unlike the other icons this one is multi-colour by nature, so it does not
 * use `base()` and it ignores `currentColor`.
 */
export function BrandMarkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <defs>
        <clipPath id="zw-roundel">
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>

      <g clipPath="url(#zw-roundel)">
        {/* The seven bands, top to bottom. */}
        <rect y="0" width="24" height="3.4286" fill="var(--color-brand-green)" />
        <rect y="3.4286" width="24" height="3.4286" fill="var(--color-brand-gold)" />
        <rect y="6.8571" width="24" height="3.4286" fill="var(--color-brand-red)" />
        <rect y="10.2857" width="24" height="3.4286" fill="var(--color-brand-black)" />
        <rect y="13.7143" width="24" height="3.4286" fill="var(--color-brand-red)" />
        <rect y="17.1429" width="24" height="3.4286" fill="var(--color-brand-gold)" />
        <rect y="20.5714" width="24" height="3.4286" fill="var(--color-brand-green)" />

        {/* The hoist: a white triangle, edged in black on its two long sides. */}
        <path d="M0 0 15.2 12 0 24Z" fill="var(--color-brand-white)" />
        <path
          d="M0 2.2 13.2 12 0 21.8"
          fill="none"
          stroke="var(--color-brand-black)"
          strokeWidth="2.2"
        />

        {/* The red star, and the Zimbabwe Bird standing on it. */}
        <path
          d="M5.4 7.7 6.366 10.671 9.49 10.671 6.963 12.508 7.928 15.479 5.4 13.643 2.872 15.479 3.837 12.508 1.31 10.671 4.434 10.671Z"
          fill="var(--color-brand-red)"
        />
        <g transform="translate(5.4 12) scale(.543) translate(-12 -11.95)">
          <path
            d="M12 5.5c2.4 0 4 1.7 4 3.8 0 1.4-.8 2.5-2 3.1l1.6 5.3a.5.5 0 0 1-.5.6h-6.2a.5.5 0 0 1-.5-.6L10 12.4c-1.2-.6-2-1.7-2-3.1 0-2.1 1.6-3.8 4-3.8Z"
            fill="var(--color-brand-gold)"
          />
        </g>
      </g>
    </svg>
  );
}
