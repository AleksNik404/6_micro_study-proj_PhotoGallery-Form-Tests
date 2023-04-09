import { render, screen } from '@testing-library/react';

import Card from '../../components/Card';

const firstCard = {
  id: '5',
  name: 'TestCard',
  developer: 'Obsidian Entertainment',
  image: 'urlImage',
};

describe('CardsContainer', () => {
  it('Display a card with a developer property', async () => {
    render(<Card cardData={firstCard} />);

    expect(screen.getByText(firstCard.name)).toBeInTheDocument();
    expect(screen.getByAltText(firstCard.name)).toHaveAttribute('src', firstCard.image);
  });
});
