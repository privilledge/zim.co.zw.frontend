import type { ReactNode } from 'react';

import { Photo } from '@/components/media/Photo';
import type { PhotoKey } from '@/components/media/photoLibrary';

interface PhotoBandProps {
  photo: PhotoKey;
  children: ReactNode;
}

/**
 * A full-width photographic background for a page's opening section.
 *
 * The photo sits under a wash of the page background, so the section keeps
 * its usual dark text and needs no restyling. On wide screens the wash is
 * solid behind the copy on the left and thins out to the right, where the
 * photo shows through; on narrow screens, where the copy spans the width, it
 * is even all over. The bottom edge fades into the page so the band has no
 * hard line against the section below.
 */
export function PhotoBand({ photo, children }: PhotoBandProps) {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Photo
          photo={photo}
          sizes="100vw"
          decorative
          priority
          className="size-full object-[50%_35%]"
        />
        <div className="bg-background/85 lg:from-background lg:via-background/85 lg:to-background/30 absolute inset-0 lg:bg-transparent lg:bg-gradient-to-r" />
        <div className="to-background absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent" />
      </div>

      {children}
    </div>
  );
}
