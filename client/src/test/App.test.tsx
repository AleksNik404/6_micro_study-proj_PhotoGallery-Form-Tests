import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import { AppWrapper } from '../App';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('check the main tags of the page', () => {
    render(<AppWrapper />);

    expect(screen.getByRole('banner')).toBeInTheDocument(); // <header>
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('checking the availability of links for routing', () => {
    render(<Header />, { wrapper: BrowserRouter });

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Form' })).toBeInTheDocument();
  });
});
