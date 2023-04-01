import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

export const REQUIRED_ERROR_MESSAGE = 'This field is required';

export const DATE_REQUIRED_ERROR_MESSAGE = 'Please fill in the date field';
export const DATE_PERIOD_ERROR_MESSAGE = 'Specify the year between 1990 and 2024';

export const NAME_REQUIRED_ERROR_MESSAGE = 'Title cannot be empty';
export const NAME_TOO_LONG_ERROR_MESSAGE = 'Maximum length of 15 characters';
export const NAME_CAPITALIZE_ERROR_MESSAGE = 'Please capitalize the title';

export const FILE_REQUIRED_ERROR_MESSAGE = 'Please provide image';
export const DISCOUNT_REQUIRED_ERROR_MESSAGE = 'Choose a discount plan';
export const PRICE_REQUIRED_ERROR_MESSAGE = 'Please select a price option';
export const TERM_REQUIRED_ERROR_MESSAGE = 'Just agree, it`s not scary';

const textValidate = (value: string | undefined): string | undefined => {
  const isEmpty = !value?.length;
  if (isEmpty) return NAME_REQUIRED_ERROR_MESSAGE;

  const notToUpperCase = value[0] !== value[0].toLocaleUpperCase();
  if (notToUpperCase) return NAME_CAPITALIZE_ERROR_MESSAGE;
};

const dateValidate = (value: string | undefined): string | undefined => {
  const isEmpty = !value?.length;
  if (isEmpty) return DATE_REQUIRED_ERROR_MESSAGE;

  const isValidYear = dayjs(value).isBetween('1990-01-01', dayjs('2024-12-31'));
  if (!isValidYear) return DATE_PERIOD_ERROR_MESSAGE;
};

const selectValidate = (value: number | undefined): string | undefined => {
  const isEmpty = !value;
  if (isEmpty) return PRICE_REQUIRED_ERROR_MESSAGE;
};

const fileValidate = (value: FileList | undefined): string | undefined => {
  const isEmpty = !value?.length;
  if (isEmpty) return FILE_REQUIRED_ERROR_MESSAGE;
};

const discountValidate = (value: number | undefined): string | undefined => {
  if (!value) return DISCOUNT_REQUIRED_ERROR_MESSAGE;
};

const termValidate = (value: string | undefined): string | undefined => {
  const isEmpty = !value;
  if (isEmpty) return TERM_REQUIRED_ERROR_MESSAGE;
};

export const validation = {
  name: textValidate,
  releaseDate: dateValidate,
  price: selectValidate,
  discountPercentage: discountValidate,
  image: fileValidate,
  check: termValidate,
};
