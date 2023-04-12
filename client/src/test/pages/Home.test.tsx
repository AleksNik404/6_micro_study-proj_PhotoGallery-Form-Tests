import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import { API_COUNT_PHOTOS } from '../../utils/constants';
import { formatDate } from '../../utils/utils';
import { server } from '../Api/api.test';
import {
  TEST_DATA_CARD,
  TEST_DATA_MODAL,
  TEST_RANDOM_NAME,
  TEST_SEARCH_NAME,
  randomOneData,
  searchOneData,
} from '../Api/handlers';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('inputSearch', () => {
  it('checking the field search display', () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument;
  });

  it('onChange InputSearch works', async () => {
    render(<Home />, { wrapper: BrowserRouter });

    const text = `await await`;
    const input = screen.getByRole('searchbox');

    await userEvent.type(input, text);
    expect(input).toHaveValue(text);
  });

  it('should make a request and display RANDOM cards when localStorage is empty', async () => {
    localStorage.clear();

    render(<Home />, { wrapper: BrowserRouter });

    const cards = await screen.findAllByTestId(TEST_DATA_CARD);

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

  it.skip('should make a request and display SEARCH cards when localStorage is NOT empty', async () => {
    render(<Home />, { wrapper: BrowserRouter });

    const cards = await screen.findAllByTestId(TEST_DATA_CARD);

    const nameCards = await screen.findAllByRole('heading', {
      name: searchOneData.results[0].user.name,
    });

    expect(cards.length).toBe(API_COUNT_PHOTOS);
    expect(nameCards[0]).toBeInTheDocument();
    expect(nameCards[0]).toHaveTextContent(TEST_SEARCH_NAME);
    expect(nameCards[0]).not.toHaveTextContent(TEST_RANDOM_NAME);
  });

  it.skip('should make a request by id and display MODAL when click card', async () => {
    render(<Home />, { wrapper: BrowserRouter });

    const cards = await screen.findAllByTestId(TEST_DATA_CARD);
    expect(screen.queryByTestId(TEST_DATA_MODAL)).not.toBeInTheDocument();

    await userEvent.click(cards[0]);

    const modal = await screen.findByTestId(TEST_DATA_MODAL);
    expect(modal).toBeInTheDocument();
  });
});
