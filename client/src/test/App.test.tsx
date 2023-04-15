import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../utils/test.utils';
import { App } from '../App';

describe('App', () => {
  it('check the main tags of the page', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('checking the availability of links for routing', () => {
    render(<Header />, { wrapper: BrowserRouter });

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Form' })).toBeInTheDocument();
  });
});
