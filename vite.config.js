import { defineConfig } from 'vite';
import { headers, hostingSecurity } from './scripts/security.mjs';

export default defineConfig({
  base: './',
  build: { assetsInlineLimit: 1500000 },
  plugins: [hostingSecurity()],
  preview: { headers },
});
