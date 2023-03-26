import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vitest } from 'vitest';

import Toast from './Toast';

describe('NotFound', () => {
  it('check render heading error page', () => {
    const deleteToast = vitest.fn();
    render(<Toast deleteToast={deleteToast} message={'test'} />, { wrapper: BrowserRouter });

    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
