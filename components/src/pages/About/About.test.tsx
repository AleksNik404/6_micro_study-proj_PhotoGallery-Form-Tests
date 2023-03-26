import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe } from 'vitest';
import About from './About';

describe('About', () => {
  it('check render About', () => {
    render(<About />, { wrapper: BrowserRouter });

    expect(screen.getByText(/About Us Page/i)).toBeInTheDocument();
  });
});
