import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App } from '../../App';

describe('inputSearch', () => {
  it('check display form page', async () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/form page/i);
  });
});
