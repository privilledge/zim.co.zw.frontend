import axios, { type AxiosInstance } from 'axios';

import { env } from '@/lib/env';

/**
 * The single Axios instance used to talk to the Spring Boot backend.
 *
 * Every service module in this folder imports this client rather than calling
 * `axios` directly, so base URL, timeouts, headers and error handling are
 * configured in exactly one place.
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * The shape of an error after it passes through the interceptor below.
 * `status` is undefined when the request never reached the server
 * (network failure, CORS rejection, timeout).
 *
 * The explicit `| undefined` is required by `exactOptionalPropertyTypes` in
 * tsconfig: it distinguishes "the key is absent" from "the key is present and
 * set to undefined". Here both are legitimate, so both are allowed.
 */
export interface ApiError {
  status?: number | undefined;
  message: string;
}

/**
 * Normalise failures into one predictable shape.
 *
 * Without this, every caller has to unpick an AxiosError to find out what went
 * wrong. With it, TanStack Query's `error` is always an `ApiError`.
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      // Spring Boot's default error body is { timestamp, status, error, message, path }
      const serverMessage = (error.response?.data as { message?: string } | undefined)
        ?.message;

      const apiError: ApiError = {
        status: error.response?.status,
        message: serverMessage ?? error.message,
      };

      return Promise.reject(apiError);
    }

    return Promise.reject({
      message: 'An unexpected error occurred.',
    } satisfies ApiError);
  },
);
