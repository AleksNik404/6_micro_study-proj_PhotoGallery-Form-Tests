import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';

import { ErrorMessage } from '../../../styled/smallComponents';
import { FormData } from './Form';

interface InputProps {
  name: keyof Pick<FormData, 'imageAspectRatio'>;
  label?: string;
  list: string[];
  defaultValue: string;

  validate?: (value: string | undefined) => string | undefined;
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
          return (
            <option key={index} value={priceOption}>
              {priceOption}
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
