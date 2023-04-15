import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test.utils';
import { App } from '../../App';

describe('inputSearch', () => {
  it('check display form page', async () => {
    const { debug } = renderWithProviders(
      // <MemoryRouter initialEntries={['/form']}>
      <App />
      // </MemoryRouter>
    );
    debug();
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/form page/i);
  });
});
