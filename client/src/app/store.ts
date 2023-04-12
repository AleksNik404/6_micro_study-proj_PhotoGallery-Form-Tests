import { configureStore } from '@reduxjs/toolkit';

import HomeSearchReducer from '../features/HomeSearch/HomeSearchSlice';
import { unsplashApi } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    homeSearch: HomeSearchReducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
