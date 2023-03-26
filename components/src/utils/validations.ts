import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { VALIDATION_ERROR } from './constants';
dayjs.extend(isBetween);

type SetMessage = Record<string, string>;

export const textValidate = (input: HTMLInputElement | null, errorsMap: SetMessage) => {
  if (!input) throw new Error(VALIDATION_ERROR);

  const { name, value } = input;

  const isEmpty = !value.length;
  if (isEmpty) {
    errorsMap[name] = 'Title canot be empty';
    return;
  }

  const tooLong = value.length > 24;
  if (tooLong) {
    errorsMap[name] = 'maximum 24 characters';
    return;
  }

  const notToUpperCase = value[0] !== value[0].toLocaleUpperCase();
  if (notToUpperCase) {
    errorsMap[name] = 'Please provide the title with a capital letter';
    return;
  }
};

export const dateValidate = (input: HTMLInputElement | null, errorsMap: SetMessage) => {
  if (!input) throw new Error(VALIDATION_ERROR);

  const { name, value } = input;

  const isEmpty = !value.length;
  if (isEmpty) {
    errorsMap[name] = 'Please fill in the date field';
    return;
  }

  const isValidDate = dayjs(value).isValid();
  if (!isValidDate) {
    errorsMap[name] = 'Incorrect date';
    return;
  }

  const isValidYear = dayjs(value).isBetween('1980-01-01', dayjs('2025-12-31'));
  if (!isValidYear) {
    errorsMap[name] = 'Specify the year between 1980 and 2025';
    return;
  }
};

export const selectValidate = (input: HTMLSelectElement | null, errorsMap: SetMessage) => {
  if (!input) throw new Error(VALIDATION_ERROR);

  const { name, value } = input;

  const isEmpty = !value;
  if (isEmpty) {
    errorsMap[name] = 'Please select a price option';
    return;
  }
};

export const fileValidate = (input: HTMLInputElement | null, errorsMap: SetMessage) => {
  if (!input?.files) throw new Error(VALIDATION_ERROR);

  const { name, files } = input;

  const isEmpty = !files?.length;
  if (isEmpty) {
    errorsMap[name] = 'Please provide image';
    return;
  }
};

export const discountValidate = (
  input1: HTMLInputElement | null,
  input2: HTMLInputElement | null,
  errorsMap: SetMessage
) => {
  if (!input1 || !input2) throw new Error(VALIDATION_ERROR);

  const { name, checked } = input1;
  const { checked: checked2 } = input2;

  const isEmpty = !checked && !checked2;
  if (isEmpty) {
    errorsMap[name] = 'Choose a discount plan';
    return;
  }
};

export const termValidate = (input: HTMLInputElement | null, errorsMap: SetMessage) => {
  if (!input) throw new Error(VALIDATION_ERROR);

  const { name, checked } = input;

  const isEmpty = !checked;
  if (isEmpty) {
    errorsMap[name] = `Just agree, it's not scary`;
    return;
  }
};
