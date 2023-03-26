import { render, screen } from '@testing-library/react';

import Card from './Card';

const firstCard = {
  id: '5',
  name: 'TestCard',
  developer: 'Obsidian Entertainment',
  rating: 4.8,
  image: 'urlImage',
  price: 47.99,
  discountPercentage: 20,
};

const secondCard = {
  id: '5',
  name: 'TestCard',
  releaseDate: 'Obsidian Entertainment',
  rating: 4.8,
  image: 'urlImage',
  price: 47.99,
  discountPercentage: 20,
};

describe('CardsContainer', () => {
  it('Display a card with a developer property', () => {
    render(<Card cardData={firstCard} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(firstCard.name)).toBeInTheDocument();
    expect(screen.getByText(firstCard.developer)).toBeInTheDocument();
  });

  it('Display a card with a releaseDate property', () => {
    render(<Card cardData={secondCard} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(secondCard.name)).toBeInTheDocument();
    expect(screen.getByText(secondCard.releaseDate)).toBeInTheDocument();
  });
});
