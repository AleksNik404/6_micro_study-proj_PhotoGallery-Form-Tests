import { handlers, onePhotoByIdResponse, randomOneData, searchOneData } from './handlers';

import { setupServer } from 'msw/node';
import { api } from '../../utils/Api/Api';
import { RandomResponse, SearchResponse } from '../../utils/Api/types';

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('simple check that api utils work', () => {
  it('[API - random] - Check that the API request for random photos returns data', async () => {
    const params = {
      count: 15,
    };
    const data = await api.getPhotos<RandomResponse>('photos/random', params);

    expect(data.length).toBe(params.count);
    expect(data[0]).toEqual(randomOneData);
  });

  it('[API - search] - Check that the API request for search photos returns data', async () => {
    const params = {
      query: 'test',
      per_page: 22,
    };
    const data = await api.getPhotos<SearchResponse>('search/photos', params);

    expect(data.results.length).toBe(params.per_page);
    expect(data.results[0]).toEqual(searchOneData.results[0]);
  });

  it('[API - byID] - Check that the API request for one photos returns data', async () => {
    const id = '2';
    const data = await api.getPhotoByID(id);
    expect(data).toEqual(onePhotoByIdResponse);
  });
});
