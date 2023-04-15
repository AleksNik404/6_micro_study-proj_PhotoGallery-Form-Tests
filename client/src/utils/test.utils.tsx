import { PreloadedState } from '@reduxjs/toolkit';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '../app/store';
import { render, RenderOptions } from '@testing-library/react';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { MemoryRouter } from 'react-router-dom';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  route?: string;
}

export function renderWithReduxAndRoute(
  component: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    route = '/',
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  setupListeners(store.dispatch);

  const Wrapper = ({ children }: PropsWithChildren) => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </Provider>
    );
  };
  return { ...render(component, { wrapper: Wrapper, ...renderOptions }), store };
}
