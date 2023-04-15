import { OnePhotoResponse, PhotoParams } from '../utils/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiKeys } from '../utils/constants';
import { RandomResponse } from '../utils/types';
import { CardItem } from '../components/Card';
import { unsplashMapping } from '../utils/utils';

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com',
    headers: {
      Authorization: ApiKeys.first,
    },
  }),

  endpoints: (builder) => ({
    getRandomPhotos: builder.query<CardItem[], PhotoParams>({
      query: (params) => ({
        url: '/photos/random',
        params,
      }),
      transformResponse: (response: RandomResponse) => {
        return response.map(unsplashMapping);
      },
    }),

    getPhotoByID: builder.query<OnePhotoResponse, { id: string }>({
      query: ({ id }) => `/photos/${id}`,
    }),
  }),
});

export const { useGetRandomPhotosQuery, useLazyGetRandomPhotosQuery, useLazyGetPhotoByIDQuery } =
  unsplashApi;
