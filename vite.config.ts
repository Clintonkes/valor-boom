import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Served from https://<user>.github.io/valor-boom/ until a custom domain
// is configured (see public/CNAME). Override with BASE_PATH="/" for local
// builds or once a custom domain is live.
const base = process.env.BASE_PATH || '/valor-boom/';

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
