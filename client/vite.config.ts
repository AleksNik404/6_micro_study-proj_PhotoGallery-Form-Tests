/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],

    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
      include: ['src'],
      exclude: ['src/*/**types.ts', 'src/index.tsx', 'src/vite-env.d.ts'],
    },
  },
});
