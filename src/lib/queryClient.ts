import { QueryClient } from '@tanstack/react-query';

/**
 * TanStack Query manages all SERVER state: anything that lives in the Spring
 * Boot database and is fetched over HTTP. It handles caching, background
 * refetching, loading and error states, so that data never needs to be copied
 * into Redux by hand.
 *
 * These defaults apply to every query unless a specific query overrides them.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Portal content (services, directories, places) changes rarely, so
      // treat fetched data as fresh for a minute before refetching.
      staleTime: 60_000,

      // Refetching on every window focus is noisy for a content-heavy site.
      refetchOnWindowFocus: false,

      // Retry transient network failures, but never a 4xx - a 404 will still
      // be a 404 on the third attempt.
      retry: (failureCount, error) => {
        const status = (error as { status?: number }).status;

        if (status !== undefined && status >= 400 && status < 500) {
          return false;
        }

        return failureCount < 2;
      },
    },
  },
});
