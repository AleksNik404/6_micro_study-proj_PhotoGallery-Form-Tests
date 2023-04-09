type User = {
  name: string;
};

type ImageSizes = {
  regular: string;
};

export type RandomResponse = Array<{
  id: string;
  created_at: string;
  urls: ImageSizes;
  user: User;
}>;

export type UnsplashPhotoSearch = {
  id: string;
  created_at: string;
  urls: ImageSizes;
  user: User;
};

export type SearchResponse = {
  total: number;
  total_pages: number;
  results: UnsplashPhotoSearch[];
};

export interface OnePhotoResponse {
  user: User;
  created_at: string;
  urls: ImageSizes;

  alt_description: string;
  likes: number;
  views: number;
}

type RandomParams = { count?: number };
type SearchParams = {
  query: string;
  page?: number;
  per_page?: number;
  order_by?: 'relevant' | 'latest ';
};

export type Params<T> = T extends SearchResponse ? SearchParams : RandomParams;
export type Url<T> = T extends SearchResponse ? `search/photos` : `photos/random`;
