import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';

import { ErrorMessage } from '../../../styled/styledComponents';
import { FormData } from './Form';

interface InputProps {
  name: keyof Pick<FormData, 'price'>;
  label?: string;
  list: number[];
  defaultValue: string;

  validate?: (value: number | undefined) => string | undefined;
}

const FormSelect = ({ name, label, defaultValue, list, validate }: InputProps) => {
  const { register, formState } = useFormContext<FormData>();
  const { errors } = formState;

  return (
    <InputBlock>
      <label htmlFor={name}>
        {label}
        {errors[name] && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
      </label>
      <select id={name} defaultValue={defaultValue} {...register(name, { validate })}>
        <option value="" hidden>
          {defaultValue}
        </option>
        {list.map((priceOption, index) => {
          const price = priceOption.toFixed(2);
          return (
            <option key={index} value={price}>
              {price} &#8364;
            </option>
          );
        })}
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
