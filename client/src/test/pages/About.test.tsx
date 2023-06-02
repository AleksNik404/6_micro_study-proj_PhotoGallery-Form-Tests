import { screen } from '@testing-library/react';
import { describe } from 'vitest';

import About from '../../pages/About/About';
import { renderWithReduxAndRoute } from '../../utils/test.utils';

describe('About', () => {
  it('check render About', () => {
    renderWithReduxAndRoute(<About />);

    expect(screen.getByText(/About Us Page/i)).toBeInTheDocument();
    expect(screen.getByText(/this page is empty/i)).toBeInTheDocument();
  });
});
