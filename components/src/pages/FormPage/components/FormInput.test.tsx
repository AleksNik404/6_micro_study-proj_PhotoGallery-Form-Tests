import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import FormInput from './FormInput';

describe('inputSearch', () => {
  it('check FormInput component change value', async () => {
    const InputRef = React.createRef<HTMLInputElement>();
    render(<FormInput name="name" />, { wrapper: BrowserRouter });
    const text = `Nuclear - Mike Oldfield`;
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    await userEvent.type(input, text);
    expect(input).toHaveValue(text);
  });
});
