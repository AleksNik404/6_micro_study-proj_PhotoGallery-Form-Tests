import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

const textValidate = (value: string | undefined): string | undefined => {
  if (!value) return 'required';
  const isEmpty = !value.length;
  if (isEmpty) {
    return 'Title canot be empty';
  }

  const tooLong = value.length > 24;
  if (tooLong) {
    return 'maximum 24 characters';
  }

  const notToUpperCase = value[0] !== value[0].toLocaleUpperCase();
  if (notToUpperCase) {
    return 'Please provide the title with a capital letter';
  }
};

const dateValidate = (value: string | undefined): string | undefined => {
  if (!value) return 'data data data data dad';

  const isEmpty = !value.length;
  if (isEmpty) {
    return 'Please fill in the date field';
  }

  const isValidDate = dayjs(value).isValid();
  if (!isValidDate) {
    return 'Incorrect date';
  }

  const isValidYear = dayjs(value).isBetween('1980-01-01', dayjs('2025-12-31'));
  if (!isValidYear) {
    return 'Specify the year between 1980 and 2025';
  }
};

const selectValidate = (value: number | undefined): string | undefined => {
  const isEmpty = !value;
  if (isEmpty) {
    return 'Please select a price option';
  }
};

const fileValidate = (value: FileList | undefined): string | undefined => {
  const isEmpty = !value;
  if (isEmpty) {
    return 'Please provide image';
  }
};

const discountValidate = (value: number | undefined): string | undefined => {
  if (!value) {
    return 'Choose a discount plan';
  }
};

const termValidate = (value: string | undefined): string | undefined => {
  const isEmpty = !value;
  if (isEmpty) {
    return `Just agree, it's not scary`;
  }
};

export const validation = {
  name: textValidate,
  releaseDate: dateValidate,
  price: selectValidate,
  discountPercentage: discountValidate,
  image: fileValidate,
  check: termValidate,
};
