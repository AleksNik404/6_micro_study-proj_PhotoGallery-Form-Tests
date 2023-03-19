import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';

const oneCard = {
  name: 'TestCard',
  developer: 'Obsidian Entertainment',
  rating: 4.8,
  image: 'urlImage',
  price: 47.99,
  discountPercentage: 20,
};

describe('CardsContainer', () => {
  it('Render one card', () => {
    render(<Card data={oneCard} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(oneCard.name)).toBeInTheDocument();
  });
});
