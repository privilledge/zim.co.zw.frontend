/**
 * The three brand colours as a single rule.
 *
 * It runs above the header and below the footer so green, gold and red
 * bracket every page. Everywhere else the palette stays restrained: this is
 * the one place all three appear together, which is what stops them competing
 * with the content.
 */
export function BrandStripe() {
  return (
    <div aria-hidden className="flex h-1">
      <span className="bg-brand-green flex-1" />
      <span className="bg-brand-gold flex-1" />
      <span className="bg-brand-red flex-1" />
    </div>
  );
}
