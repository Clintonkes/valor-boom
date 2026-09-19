import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Served from the domain root (see public/CNAME). Override with
// BASE_PATH="/valor-boom/" if ever building for the default
// <user>.github.io/valor-boom/ project-page URL instead.
const base = process.env.BASE_PATH || '/';

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
