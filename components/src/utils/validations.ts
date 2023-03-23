type SetMessage = Record<string, string>;

export const textValidate = (input: HTMLInputElement | null, errorsMap: SetMessage) => {
  if (!input) throw new Error('net inputa');

  const { name, value } = input;

  const isEmpty = !value.length;
  if (isEmpty) {
    errorsMap[name] = 'value required';
    return;
  }

  const notToUpperCase = value[0] !== value[0].toLocaleUpperCase();
  if (notToUpperCase) {
    errorsMap[name] = 'S zaglavnoy ble';
    return;
  }
};

export const dateValidate = (input: HTMLInputElement | null, errorsMap: SetMessage) => {
  if (!input) throw new Error('net inputa');

  const { name, value } = input;
  // console.log(value, name);

  const isEmpty = !value.length;
  if (isEmpty) {
    errorsMap[name] = 'date required';
    return;
  }
};

export const selectValidate = (input: HTMLSelectElement | null, errorsMap: SetMessage) => {
  if (!input) throw new Error('net inputa');

  const { name, value } = input;

  const isEmpty = !value;
  if (isEmpty) {
    errorsMap[name] = 'Choise currency';
    return;
  }
};

export const fileValidate = (input: HTMLInputElement | null, errorsMap: SetMessage) => {
  if (!input) throw new Error('net inputa');

  const { name, files } = input;
  // console.log(value, name);
  // console.log(files);

  const isEmpty = !files?.length;
  if (isEmpty) {
    errorsMap[name] = 'image is required';
    return;
  }
};

export const discountValidate = (
  input1: HTMLInputElement | null,
  input2: HTMLInputElement | null,
  errorsMap: SetMessage
) => {
  if (!input1 || !input2) throw new Error('net inputa');

  const { name, checked } = input1;
  const { checked: checked2 } = input2;

  const isEmpty = !checked && !checked2;
  if (isEmpty) {
    errorsMap[name] = 'choice doscoount plan';
    return;
  }
};

export const termValidate = (input: HTMLInputElement | null, errorsMap: SetMessage) => {
  if (!input) throw new Error('net inputa');

  const { name, checked } = input;

  const isEmpty = !checked;
  if (isEmpty) {
    errorsMap[name] = 'SOGLASIS';
    return;
  }
};
