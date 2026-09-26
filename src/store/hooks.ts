import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from './store';

/**
 * Typed versions of the React Redux hooks.
 *
 * Always use these instead of the plain `useDispatch` / `useSelector`. They
 * already know the shape of `RootState`, so selectors are autocompleted and
 * type-checked rather than typed as `any`.
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
