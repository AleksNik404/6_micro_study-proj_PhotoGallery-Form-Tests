import { OnePhotoResponse, PhotoParams } from '../utils/Api/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiKeys } from '../utils/constants';
import { RandomResponse } from '../utils/Api/types';
import { CardItem } from '../components/Card';
import { api } from '../utils/Api/Api';

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com',
    headers: {
      Authorization: ApiKeys.second,
    },
  }),

  endpoints: (builder) => ({
    getRandomPhotos: builder.query<CardItem[], PhotoParams>({
      query: (params) => ({
        url: '/photos/random',
        params,
      }),
      transformResponse: (response: RandomResponse) => {
        return response.map(api.mappingData);
      },
    }),

    getPhotoByID: builder.query<OnePhotoResponse, { id: string }>({
      query: ({ id }) => `/photos/${id}`,
    }),
  }),
});

export const { useGetRandomPhotosQuery, useLazyGetRandomPhotosQuery, useLazyGetPhotoByIDQuery } =
  unsplashApi;

// getRandomPhotos: builder.query<RandomResponse, RandomParams>({
//   query: (params) => ({
//     url: '/photos/random',
//     params,
//   }),
// }),

// getSearchPhotos: builder.query<SearchResponse, SearchParams>({
//   query: (params) => ({
//     url: '/search/photos',
//     params,
//   }),
// }),

// getPhotoByID: builder.query<OnePhotoResponse, { id: string }>({
//   query: (id) => `/photos/${id}`,
// }),
