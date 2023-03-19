export interface GameCard {
  id: string;
  name: string;
  developer: string;
  price: number;
  image: string;
  discountPercentage: number;
  description?: string;
  ReleaseDate?: string;
  rating?: number;
}
