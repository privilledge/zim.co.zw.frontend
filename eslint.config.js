import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * ESLint flat config.
 *
 * Config objects are applied in order; later entries override earlier ones,
 * which is why `prettierConfig` is last - it switches off every stylistic rule
 * that would otherwise fight with Prettier's formatting.
 */
export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },

  js.configs.recommended,

  // Syntax-based TypeScript rules. Fast, and enough for day-to-day work.
  //
  // There is a stronger option: `tseslint.configs.recommendedTypeChecked`
  // reads the actual TypeScript types and catches things syntax rules cannot,
  // such as an un-awaited promise. It requires adding `projectService: true`
  // to `parserOptions` below, and it is dramatically slower - measured at over
  // a minute per file on this machine. Switch to it if and when the trade-off
  // becomes worthwhile.
  tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Allow `_unused` as an intentional "I know this is unused" marker.
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  // Config files run in Node, not in the browser.
  {
    files: ['*.config.{js,ts}', 'eslint.config.js'],
    languageOptions: { globals: globals.node },
  },

  prettierConfig,
);
