import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe } from 'vitest';
import About from './About';

describe('inputSearch', () => {
  it('check render About', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    screen.debug();
    // expect(screen.getByText(/About Us Page/i)).toBeInTheDocument();
  });
});
