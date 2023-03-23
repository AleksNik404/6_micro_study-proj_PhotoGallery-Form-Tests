import React from 'react';

interface InputProps {
  name: string;
  InputRef: React.Ref<HTMLInputElement>;
  type: string;
  label?: string;

  ErrorMessage?: string;
  placeholder?: string;
}

const FormInputField = (props: InputProps) => {
  const { name, InputRef, type, ErrorMessage = '', label = name } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input ref={InputRef} type={type} id={name} name={name} />
      {/* {ErrorMessage && ErrorMessage} */}
      {ErrorMessage}
    </div>
  );
};

export default FormInputField;
