interface PagePlaceholderProps {
  title: string;
}

/**
 * Temporary stand-in so every route renders something while the rest of the
 * portal is built. Replace each usage with the real page as that area is done.
 *
 * It applies its own container because `RootLayout` leaves `<main>` full-bleed.
 */
export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section className="max-w-content px-page-gutter mx-auto py-20">
      <h1 className="text-section font-serif font-bold">{title}</h1>
      <p className="text-muted mt-2 text-sm">This page has not been built yet.</p>
    </section>
  );
}
