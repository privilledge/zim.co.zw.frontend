/**
 * Illustrated landscape scenes.
 *
 * The design uses flat, abstract landscapes rather than photography, so these
 * are drawn as inline SVG. Two reasons that beats shipping images: they scale
 * to any card size without a second asset, and they read their colours from
 * the sand tokens in `styles/theme.css`, so the palette stays in one place.
 *
 * Each scene fills its container the way `object-fit: cover` would, via
 * `preserveAspectRatio="xMidYMid slice"`.
 */

export type SceneVariant =
  | 'monolith' /* Great Zimbabwe - the hero */
  | 'range' /* generic mountain range */
  | 'falls' /* Victoria Falls */
  | 'acacia' /* Hwange - flat-topped trees */
  | 'boulders' /* Matobo - balancing rocks */
  | 'campus' /* a university or college skyline */
  | 'lake' /* Kariba - open water and drowned trees */
  | 'city' /* Harare, Bulawayo - towers and lit windows */
  | 'industry'; /* farmland and factories - a wide banner */

interface SceneProps {
  variant: SceneVariant;
  className?: string;
}

/**
 * Most scenes are drawn on a 400x300 canvas. The banner variants get a
 * shallower one, because `slice` on a wide container would crop a 4:3 scene
 * down to its middle band and throw the ground away.
 */
const SCENE_HEIGHT: Partial<Record<SceneVariant, number>> = {
  industry: 100,
};

const SAND = {
  sky: 'var(--color-sand-200)',
  skyLow: 'var(--color-sand-300)',
  far: 'var(--color-sand-400)',
  mid: 'var(--color-sand-500)',
  near: 'var(--color-sand-600)',
  deep: 'var(--color-sand-700)',
  pale: 'var(--color-sand-100)',
  sun: 'var(--color-brand-gold)',
} as const;

export function Scene({ variant, className }: SceneProps) {
  const gradientId = `scene-sky-${variant}`;
  const height = SCENE_HEIGHT[variant] ?? 300;

  return (
    <svg
      viewBox={`0 0 400 ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="presentation"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={SAND.sky} />
          <stop offset="100%" stopColor={SAND.skyLow} />
        </linearGradient>
      </defs>

      <rect width="400" height={height} fill={`url(#${gradientId})`} />

      {variant === 'monolith' && <Monolith />}
      {variant === 'range' && <Range />}
      {variant === 'falls' && <Falls />}
      {variant === 'acacia' && <Acacia />}
      {variant === 'boulders' && <Boulders />}
      {variant === 'campus' && <Campus />}
      {variant === 'lake' && <Lake />}
      {variant === 'city' && <City />}
      {variant === 'industry' && <Industry />}
    </svg>
  );
}

/* ------------------------------------------------------------------------
 * Individual scenes. Each draws back-to-front: sun, far hills, then near.
 * ---------------------------------------------------------------------- */

function Monolith() {
  return (
    <>
      <circle cx="312" cy="74" r="26" fill={SAND.sun} />
      <path d="M0 196 96 116l74 80Z" fill={SAND.far} />
      <path d="M140 196 236 104l104 92Z" fill={SAND.mid} />
      <path d="M0 300V196h400v104Z" fill={SAND.near} />
      {/* The conical tower of Great Zimbabwe, tapering slightly. */}
      <path d="M186 196V118c0-12 5-19 12-19s12 7 12 19v78Z" fill={SAND.deep} />
      <ellipse cx="300" cy="252" rx="74" ry="20" fill={SAND.pale} opacity="0.75" />
    </>
  );
}

function Range() {
  return (
    <>
      <circle cx="322" cy="70" r="24" fill={SAND.sun} />
      <path d="M0 210 88 122l82 88Z" fill={SAND.far} />
      <path d="M124 210 224 98l116 112Z" fill={SAND.mid} />
      <path d="M0 300V210h400v90Z" fill={SAND.near} />
    </>
  );
}

function Falls() {
  return (
    <>
      <path d="M0 188 92 120l78 68Z" fill={SAND.far} />
      <path d="M220 188 300 126l100 62Z" fill={SAND.mid} />
      <path d="M0 300V188h400v112Z" fill={SAND.near} />
      {/* The curtain of falling water, and its spray at the base. */}
      <rect x="150" y="128" width="74" height="86" rx="4" fill={SAND.pale} />
      <ellipse cx="187" cy="222" rx="60" ry="16" fill={SAND.pale} opacity="0.7" />
    </>
  );
}

function Acacia() {
  return (
    <>
      <circle cx="318" cy="78" r="22" fill={SAND.sun} />
      <path d="M0 204 104 134l86 70Z" fill={SAND.far} />
      <path d="M0 300V204h400v96Z" fill={SAND.near} />
      {/* Flat-topped acacia, large then small for depth. */}
      <g fill={SAND.deep}>
        <rect x="112" y="150" width="7" height="58" />
        <ellipse cx="115.5" cy="146" rx="52" ry="15" />
        <rect x="270" y="170" width="5" height="38" />
        <ellipse cx="272.5" cy="167" rx="34" ry="10" />
      </g>
    </>
  );
}

function Campus() {
  return (
    <>
      <circle cx="330" cy="72" r="24" fill={SAND.sun} />
      <path d="M0 214 98 156l90 58Z" fill={SAND.far} />
      {/* Faculty blocks of varied height, with a clock tower off centre. */}
      <g fill={SAND.mid}>
        <rect x="34" y="158" width="56" height="56" />
        <rect x="98" y="180" width="46" height="34" />
        <rect x="152" y="140" width="34" height="74" />
        <path d="M169 122l17 18h-34Z" />
        <rect x="196" y="168" width="62" height="46" />
        <rect x="266" y="150" width="36" height="64" />
        <rect x="310" y="182" width="52" height="32" />
      </g>
      <path d="M0 300V214h400v86Z" fill={SAND.near} />
    </>
  );
}

function Industry() {
  return (
    <>
      {/* Terraced farmland on the left, contour lines following the slope. */}
      <path d="M0 100V54l40-34 33 29 30-25 41 76Z" fill={SAND.far} />
      <g stroke={SAND.mid} strokeWidth="3.5" fill="none" opacity=".85">
        <path d="M6 72h132" />
        <path d="M2 83h138" />
        <path d="M0 94h142" />
      </g>
      {/* Plant and silos on the right, standing on the same baseline. */}
      <g fill={SAND.near}>
        <rect x="168" y="34" width="26" height="66" />
        <rect x="201" y="52" width="23" height="48" />
        <rect x="231" y="24" width="28" height="76" />
        <rect x="266" y="58" width="23" height="42" />
        <rect x="296" y="40" width="26" height="60" />
        <rect x="329" y="64" width="23" height="36" />
        <rect x="359" y="48" width="24" height="52" />
      </g>
    </>
  );
}

function Lake() {
  return (
    <>
      <circle cx="322" cy="70" r="24" fill={SAND.sun} />
      <path d="M0 150 90 104l84 46Z" fill={SAND.far} />
      <path d="M150 150 244 112l106 38Z" fill={SAND.mid} />
      <path d="M0 300V150h400v150Z" fill={SAND.near} />
      {/* The drowned forest Kariba is known for, still standing in the water. */}
      <g fill={SAND.deep}>
        <rect x="88" y="168" width="5" height="48" />
        <rect x="150" y="180" width="4" height="36" />
        <rect x="286" y="174" width="5" height="42" />
      </g>
      <g fill={SAND.pale} opacity="0.55">
        <rect x="40" y="236" width="120" height="5" rx="2.5" />
        <rect x="210" y="258" width="150" height="5" rx="2.5" />
      </g>
    </>
  );
}

function City() {
  return (
    <>
      <circle cx="332" cy="76" r="24" fill={SAND.sun} />
      <g fill={SAND.mid}>
        <rect x="18" y="152" width="54" height="148" />
        <rect x="82" y="106" width="46" height="194" />
        <rect x="138" y="172" width="40" height="128" />
        <rect x="188" y="126" width="52" height="174" />
        <rect x="250" y="162" width="42" height="138" />
        <rect x="302" y="134" width="48" height="166" />
        <rect x="360" y="184" width="38" height="116" />
      </g>
      {/* A scatter of lit windows, enough to read as a city after dark. */}
      <g fill={SAND.pale} opacity="0.7">
        <rect x="30" y="168" width="9" height="9" />
        <rect x="50" y="190" width="9" height="9" />
        <rect x="94" y="124" width="9" height="9" />
        <rect x="112" y="150" width="9" height="9" />
        <rect x="94" y="176" width="9" height="9" />
        <rect x="200" y="144" width="9" height="9" />
        <rect x="220" y="170" width="9" height="9" />
        <rect x="200" y="196" width="9" height="9" />
        <rect x="314" y="152" width="9" height="9" />
        <rect x="332" y="180" width="9" height="9" />
      </g>
      <path d="M0 300V264h400v36Z" fill={SAND.near} />
    </>
  );
}

function Boulders() {
  return (
    <>
      <circle cx="326" cy="72" r="25" fill={SAND.sun} />
      <path d="M0 212 110 140l94 72Z" fill={SAND.far} />
      <path d="M0 300V212h400v88Z" fill={SAND.near} />
      {/* Stacked granite - the balancing rocks the Matobo hills are known for. */}
      <g fill={SAND.deep}>
        <ellipse cx="128" cy="204" rx="56" ry="26" />
        <ellipse cx="128" cy="168" rx="38" ry="22" />
        <ellipse cx="128" cy="138" rx="22" ry="16" />
        <ellipse cx="286" cy="206" rx="42" ry="20" />
        <ellipse cx="286" cy="180" rx="26" ry="15" />
      </g>
    </>
  );
}
