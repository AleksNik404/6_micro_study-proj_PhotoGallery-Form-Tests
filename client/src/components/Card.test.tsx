import { render, screen, waitFor } from '@testing-library/react';

import Card from './Card';

const firstCard = {
  id: '5',
  name: 'TestCard',
  developer: 'Obsidian Entertainment',
  image: 'urlImage',
};

const secondCard = {
  id: '5',
  name: 'TestCard',
  releaseDate: 'Obsidian Entertainment',
  image: 'urlImage',
};

describe('CardsContainer', () => {
  it('Display a card with a developer property', async () => {
    render(<Card cardData={firstCard} />);

    expect(screen.getByText(firstCard.name)).toBeInTheDocument();
    expect(screen.getByAltText(firstCard.name)).toHaveAttribute('src', firstCard.image);
  });

  it('Display a card with a releaseDate property', () => {
    render(<Card cardData={secondCard} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(secondCard.name)).toBeInTheDocument();
  });
});
