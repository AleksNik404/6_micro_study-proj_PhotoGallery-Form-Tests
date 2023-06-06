import { screen } from '@testing-library/react';

import App from '../../App';
import { renderWithReduxAndRoute } from '../../utils/test.utils';

describe('inputSearch', () => {
  it('check display form page', async () => {
    renderWithReduxAndRoute(<App />, { route: '/form' });

    expect(
      screen.getByRole('heading', {
        name: /form page/i,
        level: 1,
      })
    ).toBeInTheDocument();
  });
});
