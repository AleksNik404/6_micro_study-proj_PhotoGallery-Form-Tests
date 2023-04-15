import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';

import HomeSearchReducer from '../features/photoAppSlice';
import { unsplashApi } from '../features/apiSlice';

export const rootReducer = combineReducers({
  homeSearch: HomeSearchReducer,
  [unsplashApi.reducerPath]: unsplashApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
