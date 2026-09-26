/**
 * Validated access to environment variables.
 *
 * Reading `import.meta.env` directly all over the codebase makes it easy to
 * ship a build with a missing variable. Everything goes through this module so
 * a missing value fails loudly the moment the API layer is first loaded,
 * instead of quietly producing a request to `undefined/services`.
 */

function required(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name];

  if (!value) {
    throw new Error(
      `Missing environment variable "${name}". Copy .env.example to .env and set it.`,
    );
  }

  return value;
}

export const env = {
  apiBaseUrl: required('VITE_API_BASE_URL'),
} as const;
