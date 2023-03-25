import styled from '@emotion/styled';
import React from 'react';
import { ErrorMesage } from '../../../styled/styledComponents';

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
      <label htmlFor={name}>
        {label} {ErrorMessage && <ErrorMesage>{ErrorMessage}</ErrorMesage>}
      </label>
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
    </InputBlock>
  );
};

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  position: relative;
`;

export default FormSelect;
