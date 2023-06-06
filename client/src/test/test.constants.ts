export const TEST_DATA_CARD = 'home-card';
export const TEST_DATA_MODAL = `modal photo card`;

export const TEST_RANDOM_NAME = `random`;
export const TEST_SEARCH_NAME = `search`;
export const TEST_ID_NAME = `id`;

const photos = [
  'https://drscdn.500px.org/photo/1022320022/q%3D80_m%3D1000/v2?sig=0373a448832818cff687b1a00503fe8d6e5e0d3a7106b74de05927a6ae6960e3',
  'https://drscdn.500px.org/photo/1023494827/q%3D80_m%3D2000/v2?sig=1bfaedb5af535adf4702182954e0309170b542e79450f2f881b5721146fb0470',
];

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
  id: '1',
  urls: {
    regular: photos[1],
  },
  created_at: '2020-04-08T08:15:30-04:00',
  user: {
    name: TEST_SEARCH_NAME,
  },
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
