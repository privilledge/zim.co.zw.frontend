import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { App } from '@/App';
import { queryClient } from '@/lib/queryClient';
import { store } from '@/store/store';

import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root was not found in index.html');
}

/*
 * Provider order, outermost first:
 *
 *   ReduxProvider      - client/UI state, available everywhere
 *   QueryClientProvider - server state fetched from the Spring Boot API
 *   BrowserRouter       - URL-driven routing
 *
 * Redux and Query are independent of routing, so they sit outside it. That way
 * the cache survives navigation instead of being torn down and rebuilt.
 */
createRoot(rootElement).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ReduxProvider>
  </StrictMode>,
);
