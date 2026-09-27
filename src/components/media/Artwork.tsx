import { Scene, type SceneVariant } from '@/components/illustrations/Scene';
import { Photo } from '@/components/media/Photo';
import type { PhotoKey } from '@/components/media/photoLibrary';

interface ArtworkProps {
  /** Shown when present. */
  photo?: PhotoKey | undefined;
  /** The illustrated fallback, used until a real photo of the subject exists. */
  scene: SceneVariant;
  className?: string | undefined;
  sizes?: string | undefined;
}

/**
 * The picture slot on a card or banner: a photograph when the content has
 * one, otherwise the illustrated scene.
 *
 * A photo is only given where it genuinely shows the subject, so a card about
 * Bulawayo keeps its illustration rather than borrowing a picture of Harare.
 * Slots rendered through here always sit beside or under a title that names
 * the subject, so the photo is treated as decorative.
 */
export function Artwork({ photo, scene, className, sizes }: ArtworkProps) {
  if (photo) {
    return <Photo photo={photo} className={className} sizes={sizes} decorative />;
  }
  return <Scene variant={scene} className={className ?? ''} />;
}
