import axios from 'axios';
import { getLocationWhenEmpty } from '../utils';
import { ApiKeys } from '../constants';
import { UnsplashPhotoSearch, SearchResponse, RandomResponse } from './types';
import { CardItem } from '../../components/Card';

export const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: ApiKeys.first,
  },
});

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
