import { useFormContext } from 'react-hook-form';

import { ErrorMesage, InputBlock } from '../../../styled/styledComponents';
import { FormData } from './Form';

interface InputProps {
  name: keyof Pick<FormData, 'name' | 'releaseDate'>;
  label?: string;
  type?: string;
  placeholder?: string;

  validate: (value: string | undefined) => string | undefined;
}

const FormInput = ({ name, label, placeholder, type = 'text', validate }: InputProps) => {
  const { register, formState } = useFormContext<FormData>();
  const { errors } = formState;

  return (
    <InputBlock>
      <label htmlFor={name}>
        {label} {errors[name] && <ErrorMesage>{errors[name]?.message}</ErrorMesage>}
      </label>
      <input
        {...register(name, { validate })}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
      />
    </InputBlock>
  );
};

export default FormInput;
