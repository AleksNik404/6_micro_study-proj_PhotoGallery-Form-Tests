import React from 'react';

interface InputProps {
  name: string;
  InputRef: React.Ref<HTMLInputElement>;
  type: string;
  label?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: number;
  ErrorMessage?: string;
  placeholder?: string;
}

const FormInputField = (props: InputProps) => {
  const { name, InputRef, type, value, ErrorMessage = '', label = name } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input ref={InputRef} type={type} id={name} name={name} value={value} autoComplete="off" />
      {/* {ErrorMessage && ErrorMessage} */}
      {ErrorMessage}
    </div>
  );
};

export default FormInputField;
