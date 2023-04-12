/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,

    // coverage: {
    //   enabled: true,
    //   provider: 'istanbul',
    //   reporter: ['text'],
    //   all: true,
    // },

    // coverage: {
    //   enabled: true,
    //   provider: 'c8',
    //   reporter: ['text'],
    //   all: true,
    //   include: ['src'],
    //   exclude: ['src/types'],
    // },
  },
});
