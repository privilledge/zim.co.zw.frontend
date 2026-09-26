/// <reference types="vite/client" />

/**
 * Types for the environment variables this app reads.
 *
 * Vite only exposes variables prefixed with `VITE_` to client code. Declaring
 * them here means `import.meta.env.VITE_API_BASE_URL` is typed as `string`
 * instead of `any`, so a typo becomes a compile error.
 *
 * Add a matching entry to `.env.example` whenever you add a variable here.
 */
interface ImportMetaEnv {
  /** Base URL of the Spring Boot REST API, e.g. http://localhost:8080/api */
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
