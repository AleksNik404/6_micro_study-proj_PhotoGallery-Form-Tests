import { render, screen } from '@testing-library/react';

import Card from './Card';

const firstCard = {
  id: '5',
  name: 'TestCard',
  developer: 'Obsidian Entertainment',
  image: 'urlImage',
  price: 47.99,
  discountPercentage: 0,
};

const secondCard = {
  id: '5',
  name: 'TestCard',
  releaseDate: 'Obsidian Entertainment',
  image: 'urlImage',
  price: 47.99,
  discountPercentage: 0,
};

describe('CardsContainer', () => {
  it('Display a card with a developer property', () => {
    render(<Card cardData={firstCard} />);

    const regex = new RegExp(`${firstCard.price}.*€`);
    expect(screen.getByText(regex)).toBeInTheDocument();

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(firstCard.name)).toBeInTheDocument();
    expect(screen.getByAltText(firstCard.name)).toHaveAttribute('src', firstCard.image);
    expect(screen.getByText(new RegExp(`${firstCard.price}.*€`))).toBeInTheDocument();
    expect(screen.getByText(firstCard.developer)).toBeInTheDocument();
  });

  it('Display a card with a releaseDate property', () => {
    render(<Card cardData={secondCard} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(secondCard.name)).toBeInTheDocument();
    expect(screen.getByAltText(secondCard.name)).toHaveAttribute('src', secondCard.image);
    expect(screen.getByText(new RegExp(`${secondCard.price}.*€`))).toBeInTheDocument();
    expect(screen.getByText(secondCard.releaseDate)).toBeInTheDocument();
  });
});
