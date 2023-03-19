import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe } from 'vitest';
import NotFoundPage from './NotFoundPage';

describe('inputSearch', () => {
  it('check render Error', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
