/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { getLocationWhenEmpty } from './utils';
import { ApiKeys } from './constants';

export const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: ApiKeys.first,
  },
});

const unsplashRandomMapping = ({ id, urls, created_at, location, user }: any) => {
  return {
    id,
    name: location.name || user.location || getLocationWhenEmpty(),
    image: urls.regular,
    releaseDate: created_at,

    price: 22,
    discountPercentage: 0,
  };
};

const unsplashSearchMapping = ({ id, urls, created_at, user }: any) => {
  return {
    id,
    name: user.location || getLocationWhenEmpty(),
    image: urls.regular,
    releaseDate: created_at,

    price: 22,
    discountPercentage: 0,
  };
};

const getRandom = async (params: { count?: number }) => {
  try {
    const { data } = await unsplashApi(`photos/random`, { params });
    return data;
  } catch (error) {
    console.log(error, 'error random');
  }
};

const getSearch = async (params: {
  query: string;
  page?: number;
  per_page?: number;
  order_by?: 'relevant' | 'latest ';
}) => {
  try {
    const { data } = await unsplashApi(`search/photos`, { params });
    return data.results;
  } catch (error) {
    console.log(error, 'error search');
  }
};

export const api = {
  photos: {
    random: getRandom,
    search: getSearch,
  },

  mappingData: {
    random: unsplashRandomMapping,
    search: unsplashSearchMapping,
  },
};
