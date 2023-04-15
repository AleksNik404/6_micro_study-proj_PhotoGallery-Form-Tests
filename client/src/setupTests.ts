import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { expect } from 'vitest';
import { setupStore } from './app/store';
import { unsplashApi } from './features/apiSlice';

expect.extend(matchers);
const store = setupStore({});

afterEach(() => {
  cleanup();
  store.dispatch(unsplashApi.util.resetApiState());
});
