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

export interface OnePhotoResponse {
  user: User;
  created_at: string;
  urls: ImageSizes;

  alt_description: string;
  likes: number;
  views: number;
}

export type RandomParams = { count?: number };
export type SearchParams = {
  query: string;
  page?: number;
  per_page?: number;
  order_by?: 'relevant' | 'latest ';
};

//////////////////////////////////

export type PhotoParams = {
  count: number;
  query?: string;
};
