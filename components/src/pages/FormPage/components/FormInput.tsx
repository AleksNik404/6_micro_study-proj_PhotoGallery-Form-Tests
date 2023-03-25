import styled from '@emotion/styled';
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
      <label htmlFor={name}>{label}</label>
      <Input
        ref={InputRef}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
      />
      {ErrorMessage && <p>{ErrorMessage}</p>}
    </InputBlock>
  );
};

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  position: relative;
  min-width: 10px;

  &:has(input[type='text']) {
    /* grid-column: 1 / 3; */
  }

  /* @media (min-width: 500px) {
    grid-column: 1 / -1;
  } */

  input {
    height: 2rem;
    /* padding: 0 20px; */
  }

  p {
    position: absolute;
    bottom: 0;
    left: 20px;

    color: red;
    animation: toBottom 0.2s forwards;
  }

  @keyframes toBottom {
    from {
      opacity: 0;
      transform: translateY(0);
    }

    to {
      opacity: 1;
      transform: translateY(100%);
      left: 0;
    }
  }
`;
const Input = styled.input``;

export default FormInput;
