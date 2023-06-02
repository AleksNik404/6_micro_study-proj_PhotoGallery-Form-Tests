import { fireEvent, screen } from '@testing-library/react';
import { vitest } from 'vitest';

import Toast from '../../components/Toast';
import { renderWithReduxAndRoute } from '../../utils/test.utils';

describe('Toast component', () => {
  it('calls the `deleteToast` prop function after the animation ends ', async () => {
    const deleteToast = vitest.fn();
    renderWithReduxAndRoute(<Toast deleteToast={deleteToast} message="testToast" />);

    const toast = screen.getByText(/testToast/i);
    expect(toast).toBeInTheDocument();

    fireEvent.animationEnd(toast);
    expect(deleteToast).toHaveBeenCalled();
  });
});
