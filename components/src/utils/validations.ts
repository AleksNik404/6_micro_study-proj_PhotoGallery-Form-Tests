type Input = HTMLInputElement | HTMLSelectElement | null;
type SetMessage = (name: string, message: string) => void;

export const textValidate = (input: Input, cb: SetMessage) => {
  if (!input) throw new Error('net inputa');

  const { name, value } = input;

  const isEmpty = !value.length;
  if (isEmpty) {
    return cb(name, 'value required');
  }

  const notToUpperCase = value[0] !== value[0].toLocaleUpperCase();
  if (notToUpperCase) {
    return cb(name, 'S zaglavnoy ble');
  }
};

export const dateValidate = (input: Input, cb: SetMessage) => {
  if (!input) throw new Error('net inputa');

  const { name, value } = input;
  // console.log(value, name);

  const isEmpty = !value.length;
  if (isEmpty) {
    return cb(name, 'date required');
  }
};

export const selectValidate = (input: Input, cb: SetMessage) => {
  if (!input) throw new Error('net inputa');

  const { name, value } = input;
  console.log(value, name);

  const isEmpty = !value.length;
  if (isEmpty) {
    return cb(name, 'Choise currency');
  }
};

export const fileValidate = (input: Input, cb: SetMessage) => {
  if (!input) throw new Error('net inputa');

  const { name, value } = input;
  console.log(value, name);

  const isEmpty = !value.length;
  if (isEmpty) {
    return cb(name, 'image is required');
  }
};
