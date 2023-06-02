import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

import {
  NAME_REQUIRED_ERROR_MESSAGE,
  NAME_CAPITALIZE_ERROR_MESSAGE,
  DATE_REQUIRED_ERROR_MESSAGE,
  DATE_PERIOD_ERROR_MESSAGE,
  IMAGE_RATIO_REQUIRED_ERROR_MESSAGE,
  FILE_REQUIRED_ERROR_MESSAGE,
  DATE_FORMAT_REQUIRED_ERROR_MESSAGE,
  TERM_REQUIRED_ERROR_MESSAGE,
} from './constants';

type ValidReturn = string | undefined;

const textValidate = (value: string | undefined): ValidReturn => {
  const isEmpty = !value?.length;
  if (isEmpty) return NAME_REQUIRED_ERROR_MESSAGE;

  const notToUpperCase = value[0] !== value[0].toLocaleUpperCase();
  if (notToUpperCase) return NAME_CAPITALIZE_ERROR_MESSAGE;
};

const dateValidate = (value: string | undefined): ValidReturn => {
  const isEmpty = !value?.length;
  if (isEmpty) return DATE_REQUIRED_ERROR_MESSAGE;

  const isValidYear = dayjs(value).isBetween('1990-01-01', dayjs('2024-12-31'));
  if (!isValidYear) return DATE_PERIOD_ERROR_MESSAGE;
};

const selectValidate = (value: string | undefined): ValidReturn => {
  const isEmpty = !value;
  if (isEmpty) return IMAGE_RATIO_REQUIRED_ERROR_MESSAGE;
};

const fileValidate = (value: FileList | undefined): ValidReturn => {
  const isEmpty = !value?.length;
  if (isEmpty) return FILE_REQUIRED_ERROR_MESSAGE;
};

const radioValidate = (value: string | undefined): ValidReturn => {
  if (!value) return DATE_FORMAT_REQUIRED_ERROR_MESSAGE;
};

const termValidate = (value: boolean | undefined): ValidReturn => {
  const isEmpty = !value;
  if (isEmpty) return TERM_REQUIRED_ERROR_MESSAGE;
};

export const validation = {
  name: textValidate,
  releaseDate: dateValidate,
  aspectRatio: selectValidate,
  useDateFormatting: radioValidate,
  image: fileValidate,
  check: termValidate,
};
