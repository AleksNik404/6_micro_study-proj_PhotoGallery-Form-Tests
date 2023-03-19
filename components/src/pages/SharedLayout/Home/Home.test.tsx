import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import { describe } from 'vitest';
import Home from './Home';

describe('inputSearch', () => {
  it('check render input', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument;
  });

  it('onChange InputSearch works', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const text = `why it doesn't work without await`;
    const input = screen.getByRole('searchbox');

    await userEvent.type(input, text);
    expect(input).toHaveValue(text);
  });
});
