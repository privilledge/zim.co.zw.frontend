import { useEffect, useState, useSyncExternalStore } from 'react';

import { PauseIcon, PlayIcon } from '@/components/icons';
import { Photo } from '@/components/media/Photo';
import { heroSlides } from '@/features/home/homeContent';

/** How long each photo stays up before the next one slides in. */
const AUTOPLAY_MS = 6000;

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

/**
 * The hero's background: a full-bleed row of photographs that slides from one to
 * the next, washed over with a dark tint so the light copy on top stays
 * readable.
 *
 * The photos are decorative, so they are hidden from assistive technology.
 * The controls are not: moving content needs a way to stop it, so there is a
 * pause button beside the slide dots. Visitors who ask for reduced motion
 * never see it move on its own.
 *
 * Render it as the first child of a `relative` container.
 */
export function HeroBackdrop() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const count = heroSlides.length;
  const playing = !paused && !reducedMotion && count > 1;

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [playing, count, active]);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="flex size-full transition-transform duration-1000 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <Photo
              key={slide.photo}
              photo={slide.photo}
              sizes="100vw"
              decorative
              priority={index === 0}
              eager
              className="size-full shrink-0"
            />
          ))}
        </div>

        {/* A dark wash over the whole band, so the light copy on top reads. */}
        <div className="bg-surface-inverse/55 absolute inset-0" />
        {/* Slightly deeper behind the centred copy, lighter towards the edges. */}
        <div className="from-surface-inverse/45 absolute inset-0 bg-radial to-transparent to-70%" />
        {/* A white fade along the bottom edge, easing into the page below. */}
        <div className="to-background via-background/40 absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent" />
      </div>

      {count > 1 && (
        <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center">
          <div className="bg-surface/85 rounded-pill flex items-center gap-3 py-1 pr-1 pl-3.5 backdrop-blur-sm">
            <p className="text-muted text-[0.6875rem] font-semibold" aria-live="polite">
              {heroSlides[active]?.caption}
            </p>

            <div className="flex gap-1.5">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.photo}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show ${slide.caption}`}
                  aria-current={index === active}
                  className={`rounded-pill h-1.5 transition-all ${
                    index === active
                      ? 'bg-foreground w-4'
                      : 'bg-border-strong hover:bg-muted w-1.5'
                  }`}
                />
              ))}
            </div>

            {!reducedMotion && (
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={
                  paused ? 'Play background slideshow' : 'Pause background slideshow'
                }
                className="rounded-pill text-foreground hover:bg-surface grid size-7 place-items-center"
              >
                {paused ? (
                  <PlayIcon className="size-3.5" />
                ) : (
                  <PauseIcon className="size-3.5" />
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
