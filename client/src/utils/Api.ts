import axios from 'axios';

const headers = {
  Authorization: `Client-ID AHFFhJ_VGnu3HYcJvA-Bv1XuMCj7-yFin2u26IGdYP0`,
};

export const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers,

  // headers: 'Authorization: `Client-ID ${accessKey}`,',
});
