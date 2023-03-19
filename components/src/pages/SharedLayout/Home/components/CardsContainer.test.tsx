import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardsContainer from './CardsContainer';

const oneCard = {
  id: 1,
  name: 'TestCard',
  developer: 'Obsidian Entertainment',
  rating: 4.8,
  image: 'urlImage',
  price: 47.99,
  discountPercentage: 20,
};

const testDataCards = Array.from({ length: 10 }, (_, index) => {
  return { ...oneCard, id: String(index) };
});

describe('CardsContainer', () => {
  it('Render ten cards', () => {
    render(<CardsContainer data={testDataCards} />);

    expect(screen.getAllByRole('heading', { level: 1, name: 'TestCard' }).length).toBe(10);
  });
});
