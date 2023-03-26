import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders App', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument(); // <header></header>
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
