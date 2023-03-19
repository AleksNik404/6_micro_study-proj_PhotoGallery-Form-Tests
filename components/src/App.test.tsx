import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders App', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument(); // <header></header>
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
