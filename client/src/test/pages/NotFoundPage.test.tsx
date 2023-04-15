import { screen } from '@testing-library/react';

import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { renderWithReduxAndRoute } from '../../utils/test.utils';

describe('NotFound', () => {
  it('check render heading error page', () => {
    renderWithReduxAndRoute(<NotFoundPage />);

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Page not found');
  });

  it('render back button', () => {
    renderWithReduxAndRoute(<NotFoundPage />);

    expect(screen.getByRole('link', { name: 'Go Home' })).toHaveAttribute('href', '/');
  });
});
