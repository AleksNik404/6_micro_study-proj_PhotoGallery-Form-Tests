import { rest } from 'msw';
import { SearchResponse, OnePhotoResponse, RandomResponse } from '../../utils/types';
import { API_COUNT_PHOTOS } from '../../utils/constants';

const photos = [
  'https://drscdn.500px.org/photo/1022320022/q%3D80_m%3D1000/v2?sig=0373a448832818cff687b1a00503fe8d6e5e0d3a7106b74de05927a6ae6960e3',
  'https://drscdn.500px.org/photo/1023494827/q%3D80_m%3D2000/v2?sig=1bfaedb5af535adf4702182954e0309170b542e79450f2f881b5721146fb0470',
];

export const TEST_DATA_CARD = 'card';
export const TEST_DATA_MODAL = `modal photo card`;

export const TEST_RANDOM_NAME = `random`;
export const TEST_SEARCH_NAME = `search`;
export const TEST_ID_NAME = `id`;

export const randomOneData = {
  id: '1',
  urls: {
    regular: photos[0],
  },
  created_at: '2022-04-08T08:15:30-04:00',
  user: {
    name: TEST_RANDOM_NAME,
  },
};

export const searchOneData = {
  total: API_COUNT_PHOTOS,
  total_pages: 10,
  results: [
    {
      id: '1',
      urls: {
        regular: photos[0],
      },
      created_at: '2022-04-07T11:30:45-04:00',
      user: {
        id: '2',
        name: TEST_SEARCH_NAME,
        username: 'topUser',
        location: 'New York',
      },
    },
  ],
};

export const onePhotoByIdResponse = {
  id: 2,
  urls: {
    regular: photos[1],
  },
  alt_description: 'awesome photo test test test',
  created_at: '2022-04-07T11:30:45-04:00',
  user: {
    name: TEST_ID_NAME,
  },
  likes: 999,
  views: 19999,
};

export const handlers = [
  rest.get('https://api.unsplash.com/photos/random', (req, res, ctx) => {
    const count = Number(req.url.searchParams.get('count'));
    const data = Array.from({ length: count }, (_, index) => {
      const id = String(index + 1);

      return { ...randomOneData, id };
    });

    return res(ctx.status(200), ctx.json<RandomResponse>(data));
  }),

  rest.get('https://api.unsplash.com/search/photos', (req, res, ctx) => {
    const per_page = Number(req.url.searchParams.get('per_page'));
    const data = Array.from({ length: per_page }, (_, index) => {
      const id = String(index + 1);

      return { ...searchOneData.results[0], id };
    });

    return res(
      ctx.status(200),
      ctx.json<SearchResponse>({ total: data.length, total_pages: data.length, results: data })
    );
  }),

  rest.get('https://api.unsplash.com/photos/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<OnePhotoResponse>(onePhotoByIdResponse));
  }),
];
//  {
//       id: '4',
//       urls: {
//         regular: photos[1],
//       },
//       created_at: '2022-04-08T08:15:30-04:00',
//       user: {
//         id: '2',
//         name: 'John Doe',
//         username: 'secondUser',
//         location: 'Iraq',
//       },
//     },
