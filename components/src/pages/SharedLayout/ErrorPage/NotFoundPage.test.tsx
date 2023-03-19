import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe } from 'vitest';
import NotFoundPage from './NotFoundPage';

describe('NotFound', () => {
  it('check render heading', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
