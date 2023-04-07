type User = {
  id: string;
  username: string;
  name: string;
  location: string | null;
};

type ImageSizes = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
};

export type RandomResponse = Array<{
  id: string;
  created_at: string;

  location: {
    name: string;
    city: string;
    country: string;
    position: {
      latitude: number;
      longitude: number;
    };
  } | null;

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
