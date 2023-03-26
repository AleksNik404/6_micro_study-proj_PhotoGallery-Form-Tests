import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Form } from '.';
import { vitest } from 'vitest';

describe('inputSearch', () => {
  beforeEach(() => {
    window.URL.createObjectURL = vitest.fn(); // exists only in the web api
    crypto.randomUUID = vitest.fn(); // exists only in the web api
  });

  it('full form submission test', async () => {
    const addOneCard = vitest.fn();
    const fileForUpload = new File(['hello'], 'hello.png', { type: 'image/png' });

    render(<Form addOneCard={addOneCard} />, { wrapper: BrowserRouter });

    const textField = screen.getByLabelText('Title');
    const dateField = screen.getByLabelText('Release Date');
    const priceField = screen.getByLabelText('Price');
    const radioInput = screen.getByLabelText('yes');
    const checkbox = screen.getByLabelText('i agree to the xdd Terms');
    const fileField = screen.getByLabelText<HTMLInputElement>('Select image');

    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(textField).toBeInTheDocument();
    expect(dateField).toBeInTheDocument();
    expect(priceField).toBeInTheDocument();
    expect(radioInput).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(fileField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    await userEvent.type(textField, 'We all make choices, but in the end our choices make us'); // Error validation
    await userEvent.type(dateField, '2023-03-26');
    await userEvent.selectOptions(priceField, '19');
    await userEvent.click(radioInput);
    await userEvent.click(checkbox);
    await userEvent.upload(fileField, fileForUpload);

    expect(fileField.files![0]).toStrictEqual(fileForUpload);
    expect(fileField.files!.item(0)).toStrictEqual(fileForUpload);
    expect(fileField.files).toHaveLength(1);

    await userEvent.click(submitButton);
    expect(screen.getByText('maximum 24 characters')).toBeInTheDocument();
    expect(addOneCard).toBeCalledTimes(0);

    await userEvent.clear(textField);
    await userEvent.type(textField, 'A Real Hero');
    await userEvent.click(submitButton);
    expect(screen.queryByText('maximum 24 characters')).not.toBeInTheDocument();
    expect(addOneCard).toBeCalledTimes(1);
  });

  it('text field validation messages', async () => {
    const addOneCard = vitest.fn();

    render(<Form addOneCard={addOneCard} />, { wrapper: BrowserRouter });

    const textField = screen.getByLabelText('Title');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await userEvent.click(submitButton);
    expect(screen.getByText('Title canot be empty')).toBeInTheDocument();

    await userEvent.type(textField, 'lower case');
    await userEvent.click(submitButton);
    expect(screen.getByText('Please provide the title with a capital letter')).toBeInTheDocument();

    expect(addOneCard).toBeCalledTimes(0);
  });

  it('date field validation messages', async () => {
    const addOneCard = vitest.fn();

    render(<Form addOneCard={addOneCard} />, { wrapper: BrowserRouter });

    const dateField = screen.getByLabelText('Release Date');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await userEvent.click(submitButton);
    expect(screen.getByText('Please fill in the date field')).toBeInTheDocument();

    await userEvent.type(dateField, '2077-03-26');
    await userEvent.click(submitButton);
    expect(screen.queryByText('Specify the year between 1980 and 2025')).toBeInTheDocument();

    expect(addOneCard).toBeCalledTimes(0);
  });
});
