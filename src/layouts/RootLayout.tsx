import { Outlet } from 'react-router';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

/**
 * The shell every page renders inside.
 *
 * `<main>` is deliberately full-bleed with no max-width: sections own their own
 * width and background, which is what lets the home page run tinted and dark
 * bands edge to edge. Pages that just need a column apply the container
 * themselves.
 */
export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
