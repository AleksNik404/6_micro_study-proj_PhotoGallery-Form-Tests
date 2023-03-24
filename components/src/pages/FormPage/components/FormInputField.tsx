import React from 'react';

interface InputProps {
  name: string;
  InputRef: React.Ref<HTMLInputElement>;
  label?: string;

  type?: string;
  value?: number;
  ErrorMessage?: string;
  placeholder?: string;
}

const FormInputField = (props: InputProps) => {
  const { name, InputRef, value, type = 'text', ErrorMessage = '', label = name } = props;

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
