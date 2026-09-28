import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

/**
 * Starts each newly opened page at the top.
 *
 * The router keeps the window where it was when the route changes, so without
 * this a link clicked in the footer opens the next page at its footer.
 *
 * It watches the pathname only. Filters, queries and pagination live in the
 * search parameters, and changing one of those should leave the reader where
 * they are. Back and forward are left alone too, so returning to a page does
 * not throw away the place the reader had reached. A link to an `#anchor` is
 * left to the browser, which scrolls to the anchor itself.
 *
 * Renders nothing. Mount it once, inside the router.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'POP' || hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Only a new pathname counts as a new page; see the comment above.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
