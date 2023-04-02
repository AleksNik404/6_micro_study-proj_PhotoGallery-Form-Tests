import { fireEvent, render, screen } from '@testing-library/react';
import { vitest } from 'vitest';

import Toast from './Toast';

describe('Toast component', () => {
  it('calls the `deleteToast` prop function after the animation ends ', async () => {
    const deleteToast = vitest.fn();
    render(<Toast deleteToast={deleteToast} message="testToast" />);

    const toast = screen.getByText(/testToast/i);
    expect(toast).toBeInTheDocument();

    fireEvent.animationEnd(toast);
    expect(deleteToast).toHaveBeenCalled();
  });
});
