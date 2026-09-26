import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Tailwind CSS v4 is a Vite plugin. There is no tailwind.config.js and no
    // postcss.config.js - configuration lives in src/styles/theme.css.
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Lets modules import as '@/lib/env' instead of '../../lib/env'.
      // The matching path mapping is in tsconfig.app.json.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
  },
});
