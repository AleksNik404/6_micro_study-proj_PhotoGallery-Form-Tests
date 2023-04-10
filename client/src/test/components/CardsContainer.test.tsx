import { render, screen } from '@testing-library/react';

import CardsContainer from '../../pages/Home/components/HomeCardsContainer';

const oneCard = {
  id: 1,
  userName: 'TestCard',
  created_at: '27/07/1993',
  image: 'urlImage',
};

const testDataCards = Array.from({ length: 10 }, (_, index) => {
  return { ...oneCard, id: String(index) };
});

describe('CardsContainer', () => {
  it('Render ten cards', () => {
    render(<CardsContainer cards={testDataCards} />);

    expect(screen.getAllByRole('heading', { level: 1, name: 'TestCard' }).length).toBe(10);
  });
});
