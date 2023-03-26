import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('inputSearch', () => {
  it('сhecking the field search display', () => {
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
});
