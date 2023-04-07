import axios from 'axios';
import { getLocationWhenEmpty } from '../utils';
import { ApiKeys } from '../constants';
import { CardItem } from '../../pages/Home/components/Card';
import { UnsplashPhotoSearch, SearchResponse, RandomResponse } from './types';

export const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: ApiKeys.first,
  },
});

// const unsplashRandomMapping = (data: RandomResponse): CardItem => {
//   const { id, urls, created_at, location, user } = data;

//   return {
//     id,
//     name: user.name || location?.name || user.location || getLocationWhenEmpty(),
//     image: urls.regular,
//     releaseDate: created_at,
//   };
// };

// const unsplashSearchMapping = (data: UnsplashPhotoSearch): CardItem => {
//   const { id, urls, created_at, user } = data;
//   return {
//     id,
//     name: user.name || user.location || getLocationWhenEmpty(),
//     image: urls.regular,
//     releaseDate: created_at,
//   };
// };

// const getRandom = async <Data>(url: Url<Data>, params: Params<Data>) => {
//   const { data } = await unsplashApi<Data[]>(url, { params });
//   return data;
// };

// const getSearch = async <Data>(url: Url<Data>, params: Params<Data>) => {
//   const { data } = await unsplashApi<Data[]>(url, { params });
//   return data;
// };
// `photos/random`
// `search/photos`

const unsplashMapping = (data: UnsplashPhotoSearch): CardItem => {
  const { id, urls, created_at, user } = data;
  return {
    id,
    name: user.name || user.location || getLocationWhenEmpty(),
    image: urls.regular,
    releaseDate: created_at,
  };
};

type RandomParams = { count?: number };
type SearchParams = {
  query: string;
  page?: number;
  per_page?: number;
  order_by?: 'relevant' | 'latest ';
};

export type Params<T> = T extends SearchResponse ? SearchParams : RandomParams;
export type Url<T> = T extends SearchResponse ? `search/photos` : `photos/random`;

const apiFetch = async <Data extends SearchResponse | RandomResponse>(
  url: Url<Data>,
  params: Params<Data>
) => {
  const { data } = await unsplashApi<Data>(url, { params });
  return data;
};

export const api = {
  photos: apiFetch,
  mappingData: unsplashMapping,
  // mappingData: {
  //   random: unsplashRandomMapping,
  //   search: unsplashSearchMapping,
  // },
};
