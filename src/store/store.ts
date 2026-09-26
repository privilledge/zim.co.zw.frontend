import { configureStore } from '@reduxjs/toolkit';

/**
 * The Redux store holds CLIENT state only - things the user interface owns,
 * such as an open mobile menu, an active filter panel, or a saved UI
 * preference. Data fetched from the backend belongs to TanStack Query and is
 * deliberately NOT copied in here.
 *
 * `reducer` is empty on purpose: slices are added under `store/slices/` when a
 * feature genuinely needs shared client state.
 */
export const store = configureStore({
  reducer: {},
});

/** The shape of the whole store, inferred rather than hand-written. */
export type RootState = ReturnType<typeof store.getState>;

/** The store's dispatch, including any middleware-provided extras. */
export type AppDispatch = typeof store.dispatch;
