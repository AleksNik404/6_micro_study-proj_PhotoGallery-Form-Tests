import { screen } from '@testing-library/react';

import Card from '../../components/Card';
import { renderWithProviders } from '../../utils/test.utils';

const firstCard = {
  id: '5',
  userName: 'TestCard',
  created_at: '20/03/2003',
  image: 'urlImage',
};

describe('CardsContainer', () => {
  it('Display a card with a developer property', async () => {
    renderWithProviders(<Card cardData={firstCard} />);

    expect(screen.getByText(firstCard.userName)).toBeInTheDocument();
    expect(screen.getByAltText(firstCard.userName)).toHaveAttribute('src', firstCard.image);
  });
});
