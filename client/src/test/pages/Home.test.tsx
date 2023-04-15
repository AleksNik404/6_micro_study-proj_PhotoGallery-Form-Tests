import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../../pages/Home/Home';
import { setupStore } from '../../app/store';
import { updateQuery } from '../../features/photoAppSlice';

import { formatDate } from '../../utils/utils';
import { renderWithReduxAndRoute } from '../../utils/test.utils';
import { API_COUNT_PHOTOS } from '../../utils/constants';
import { TEST_DATA_CARD, randomOneData, TEST_RANDOM_NAME } from '../constants';
import { TEST_SEARCH_NAME, TEST_DATA_MODAL, searchOneData } from '../constants';

describe('Home Page', () => {
  it('should make a request and display RANDOM cards when search field is empty', async () => {
    renderWithReduxAndRoute(<Home />);

    const cards = await screen.findAllByTestId('home-card');
    const dateCards = await screen.findAllByText(formatDate(randomOneData.created_at));
    const nameCards = await screen.findAllByRole('heading', {
      name: randomOneData.user.name,
    });

    expect(cards.length).toBe(API_COUNT_PHOTOS);
    expect(dateCards[0]).toBeInTheDocument();
    expect(nameCards[0]).toBeInTheDocument();
    expect(nameCards[0]).toHaveTextContent(TEST_RANDOM_NAME);
    expect(nameCards[0]).not.toHaveTextContent(TEST_SEARCH_NAME);
  });

  it('should make a request and display SEARCH cards when search field is NOT empty', async () => {
    const store = setupStore();
    store.dispatch(updateQuery('set query for search response'));

    renderWithReduxAndRoute(<Home />, { store });

    const cards = await screen.findAllByTestId(TEST_DATA_CARD);
    const dateCards = await screen.findAllByText(formatDate(searchOneData.created_at));
    const nameCards = await screen.findAllByRole('heading', {
      name: searchOneData.user.name,
    });

    expect(cards.length).toBe(API_COUNT_PHOTOS);
    expect(dateCards[0]).toBeInTheDocument();
    expect(nameCards[0]).toBeInTheDocument();
    expect(nameCards[0]).toHaveTextContent(TEST_SEARCH_NAME);
    expect(nameCards[0]).not.toHaveTextContent(TEST_RANDOM_NAME);
  });

  it('should make a request by id and display MODAL when click card', async () => {
    renderWithReduxAndRoute(<Home />);

    const cards = await screen.findAllByTestId(TEST_DATA_CARD);
    expect(screen.queryByTestId(TEST_DATA_MODAL)).not.toBeInTheDocument();

    await userEvent.click(cards[0]);

    const modal = await screen.findByTestId(TEST_DATA_MODAL);
    expect(modal).toBeInTheDocument();
  });
});
