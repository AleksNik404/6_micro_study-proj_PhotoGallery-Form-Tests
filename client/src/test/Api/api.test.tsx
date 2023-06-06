import axios from 'axios';

import { OnePhotoResponse, RandomResponse } from '../../utils/types';
import { randomOneData, onePhotoByIdResponse, searchOneData } from '../test.constants';

describe('simple check that api utils work', () => {
  it('[API - random] - Check that the API request for random photos returns data', async () => {
    const params = {
      count: 15,
    };
    const { data } = await axios<RandomResponse>('https://api.unsplash.com/photos/random', {
      params,
    });

    expect(data.length).toBe(params.count);
    expect(data[0]).toEqual(randomOneData);
  });
  it('[API - random query] - Check that the API request for random photos returns data', async () => {
    const params = {
      count: 15,
      query: 'hehe',
    };
    const { data } = await axios<RandomResponse>('https://api.unsplash.com/photos/random', {
      params,
    });

    expect(data.length).toBe(params.count);
    expect(data[0]).toEqual(searchOneData);
  });

  it('[API - byID] - Check that the API request for one photos returns data', async () => {
    const { data } = await axios<OnePhotoResponse>('https://api.unsplash.com/photos/2');
    expect(data).toEqual(onePhotoByIdResponse);
  });
});
