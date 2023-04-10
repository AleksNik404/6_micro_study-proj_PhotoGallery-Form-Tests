import axios from 'axios';
import { formatDate, getLocationWhenEmpty } from '../utils';
import { ApiKeys } from '../constants';
import { CardItem } from '../../components/Card';
import {
  UnsplashPhotoSearch,
  SearchResponse,
  RandomResponse,
  OnePhotoResponse,
  Params,
  Url,
} from './types';

export const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: ApiKeys.first,
  },
});

export function sleep(ms = 700): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

unsplashApi.interceptors.response.use(async (response) => {
  await sleep();
  return response;
});

const unsplashMapping = (data: UnsplashPhotoSearch): CardItem => {
  const { id, urls, created_at, user } = data;
  return {
    id,
    userName: user.name || getLocationWhenEmpty(),
    image: urls.regular,
    created_at: formatDate(created_at),
  };
};

const apiFetch = async <Data extends SearchResponse | RandomResponse>(
  url: Url<Data>,
  params?: Params<Data>
) => {
  const { data } = await unsplashApi<Data>(url, { params });
  return data;
};

const getPhotoByID = async (id: string) => {
  const { data } = await unsplashApi<OnePhotoResponse>(`/photos/${id}`);
  return data;
};

export const api = {
  getPhotos: apiFetch,
  getPhotoByID: getPhotoByID,
  mappingData: unsplashMapping,
};
