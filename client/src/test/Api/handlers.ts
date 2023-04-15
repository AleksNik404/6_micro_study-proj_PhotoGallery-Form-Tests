import { rest } from 'msw';
import { OnePhotoResponse, RandomResponse } from '../../utils/types';
import { onePhotoByIdResponse, randomOneData, searchOneData } from '../constants';

export const handlers = [
  rest.get('https://api.unsplash.com/photos/random', (req, res, ctx) => {
    const count = Number(req.url.searchParams.get('count'));
    const query = req.url.searchParams.get('query');

    const photoData = Array.from({ length: count }, (_, index) => {
      const data = query ? searchOneData : randomOneData;

      return { ...data, id: String(index + 1) };
    });

    return res(ctx.json<RandomResponse>(photoData));
  }),

  rest.get('https://api.unsplash.com/photos/:id', (req, res, ctx) => {
    return res(ctx.json<OnePhotoResponse>(onePhotoByIdResponse));
  }),
];
