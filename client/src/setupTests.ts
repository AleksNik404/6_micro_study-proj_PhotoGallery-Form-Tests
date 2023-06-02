import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { expect } from 'vitest';

import { setupStore } from './app/store';
import { unsplashApi } from './features/apiSlice';
import { server } from './test/Api/server';

import { fetch, Headers, Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

expect.extend(matchers);
const store = setupStore({});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  store.dispatch(unsplashApi.util.resetApiState());

  cleanup();
});

afterAll(() => server.close());
