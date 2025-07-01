/// <reference types="vitest/config" />
// import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    setupFiles: './setupTest.ts',
    environment: 'jsdom',
  },
});
