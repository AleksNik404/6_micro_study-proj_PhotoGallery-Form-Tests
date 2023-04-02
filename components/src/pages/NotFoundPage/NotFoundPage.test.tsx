import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';

describe('NotFound', () => {
  it('check render heading error page', () => {
    render(<NotFoundPage />, { wrapper: BrowserRouter });

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Page not found');
  });

  it('render back button', () => {
    render(<NotFoundPage />, { wrapper: BrowserRouter });

    expect(screen.getByRole('link', { name: 'Go Home' })).toHaveAttribute('href', '/');
  });
});
