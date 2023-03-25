import styled from '@emotion/styled';
import React from 'react';

interface InputProps {
  name: string;
  InputRef: React.Ref<HTMLSelectElement>;
  label?: string;
  list: number[];
  defaultValue: string;

  ErrorMessage?: string;
}

const FormSelect = (props: InputProps) => {
  const { defaultValue, name, InputRef, list, ErrorMessage, label = name } = props;

  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <select ref={InputRef} name={name} id={name} defaultValue={defaultValue}>
        <option value="" hidden>
          {defaultValue}
        </option>
        {list.map((option, index) => (
          <option key={index} value={option}>
            {option} &#8364;
          </option>
        ))}
      </select>
      {ErrorMessage && <p>{ErrorMessage}</p>}
    </InputBlock>
  );
};

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  position: relative;

  flex: 1 0 50%;

  select {
    height: 2rem;
    padding: 0 20px;
    /* -webkit-appearance: none; */
    /* -moz-appearance: none; */
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
    }
  }
`;

export default FormSelect;
