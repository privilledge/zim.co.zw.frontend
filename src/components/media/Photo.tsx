import { photoLibrary, type PhotoKey } from '@/components/media/photoLibrary';

interface PhotoProps {
  photo: PhotoKey;
  className?: string | undefined;
  /**
   * The `sizes` hint for the browser. The default suits a card; pass `100vw`
   * for a full-width band.
   */
  sizes?: string | undefined;
  /**
   * Set when the photo sits behind text or beside a caption that already says
   * what it shows, so screen readers do not hear it twice.
   */
  decorative?: boolean;
  /** Load straight away, ahead of other images. Use for the first thing on screen. */
  priority?: boolean;
  /**
   * Load straight away but without jumping the queue. For images that are in
   * the page from the start but off to one side, such as later carousel
   * slides, where lazy loading would leave a blank as they slide in.
   */
  eager?: boolean;
}

/**
 * A photograph from `photoLibrary`, filling its box the way the scenes do
 * (`object-cover`).
 */
export function Photo({
  photo,
  className = '',
  sizes = '(min-width: 1024px) 40vw, 100vw',
  decorative = false,
  priority = false,
  eager = false,
}: PhotoProps) {
  const source = photoLibrary[photo];

  return (
    <img
      src={source.small}
      srcSet={`${source.small} 800w, ${source.large} ${source.largeWidth}w`}
      sizes={sizes}
      alt={decorative ? '' : source.alt}
      loading={priority || eager ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={`object-cover ${className}`}
    />
  );
}
