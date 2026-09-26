import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <section className="max-w-content px-page-gutter mx-auto py-20">
      <h1 className="text-section font-serif font-bold">Page not found</h1>
      <p className="text-muted mt-2 text-sm">
        The page you are looking for does not exist.{' '}
        <Link to="/" className="text-primary underline">
          Return home
        </Link>
      </p>
    </section>
  );
}
