import React from 'react';
import { ErrorMesage, InputBlock } from '../../../styled/styledComponents';

interface InputProps {
  name: string;
  InputRef: React.Ref<HTMLInputElement>;
  label?: string;

  type?: string;
  value?: number;
  ErrorMessage?: string;
  placeholder?: string;
}

const FormInput = (props: InputProps) => {
  const {
    name,
    InputRef,
    value,
    placeholder,
    type = 'text',
    ErrorMessage = '',
    label = name,
  } = props;

  return (
    <InputBlock>
      <label htmlFor={name}>
        {label} {ErrorMessage && <ErrorMesage>{ErrorMessage}</ErrorMesage>}
      </label>
      <input
        ref={InputRef}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
      />
    </InputBlock>
  );
};

export default FormInput;
