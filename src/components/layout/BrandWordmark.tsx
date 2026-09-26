interface BrandWordmarkProps {
  /**
   * `inverse` is for the dark footer. The brand green is far too dark to read
   * on the inverse surface, so the mark goes monochrome there - which is also
   * how every approved design draws the footer.
   */
  tone?: 'default' | 'inverse';
  className?: string;
}

/**
 * The zim.co.zw wordmark.
 *
 * The logo colours the domain rather than the name: `zim` is set in the text
 * colour, and the suffix carries the flag - red, gold, green. Split into spans
 * rather than shipped as an image so it stays crisp, inherits the type scale
 * and can invert for the footer.
 */
export function BrandWordmark({ tone = 'default', className = '' }: BrandWordmarkProps) {
  const inverse = tone === 'inverse';

  return (
    <span
      className={`font-wordmark text-[1.1875rem] font-extrabold tracking-tight ${className}`}
    >
      <span className={inverse ? 'text-white' : 'text-foreground'}>zim</span>
      <span className={inverse ? 'text-white' : 'text-brand-red'}>.</span>
      <span className={inverse ? 'text-white' : 'text-brand-gold'}>co</span>
      <span className={inverse ? 'text-white' : 'text-brand-green'}>.zw</span>
    </span>
  );
}
