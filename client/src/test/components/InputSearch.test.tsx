import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import { Home } from '../../pages';
import { renderWithReduxAndRoute } from '../../utils/test.utils';

describe('inputSearch', () => {
  it('checking the field search display', () => {
    renderWithReduxAndRoute(<Home />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument;
  });

  it('onChange InputSearch works', async () => {
    renderWithReduxAndRoute(<Home />);

    const text = `await await`;
    const input = screen.getByRole('searchbox');

    await userEvent.type(input, text);
    expect(input).toHaveValue(text);
  });
});
