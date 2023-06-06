import { screen } from '@testing-library/react';

import App from '../App';
import Header from '../components/Header';
import { renderWithReduxAndRoute } from '../utils/test.utils';

describe('App', () => {
  it('check the main tags of the page', () => {
    renderWithReduxAndRoute(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('checking the availability of links for routing', () => {
    renderWithReduxAndRoute(<Header />);

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Form' })).toBeInTheDocument();
  });
});
