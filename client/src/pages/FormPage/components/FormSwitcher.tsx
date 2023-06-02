import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';

import { ErrorMessage } from '../../../styled/smallComponents';
import { FormData } from './Form';

interface SwitchProps {
  name: keyof Pick<FormData, 'useDateFormatting'>;
  label?: string;
  value?: number;

  validate?: (value: string | undefined) => string | undefined;
}

const FormSwitcher = ({ name, label, validate }: SwitchProps) => {
  const { register, formState } = useFormContext<FormData>();
  const { errors } = formState;
  return (
    <SwitchBlock>
      <p>{label}</p>

      <div className="switch">
        <input
          {...register(name, { validate })}
          type="radio"
          id="no"
          value="false"
          name={name}
          className="hide-behind-page"
        />
        <label htmlFor="no">no</label>

        <input
          {...register(name, { validate })}
          type="radio"
          id="yes"
          value="true"
          name={name}
          className="hide-behind-page"
        />
        <label htmlFor="yes">
          yes
          {errors[name] && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
        </label>
      </div>
    </SwitchBlock>
  );
};

const SwitchBlock = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  padding: 5px 10px;

  .switch {
    border-radius: var(--border-radius-md);
    text-transform: capitalize;

    position: relative;
  }

  label {
    display: inline-flex;
    cursor: pointer;

    height: 30px;
    width: 60px;

    place-items: center;
    place-content: center;

    border: 2px solid rgba(0, 0, 0, 0.3);
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.4), 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.2s;

    color: inherit;
    background-color: #10181f;
  }

  input:checked + label {
    background-color: #1e3a8a;
  }
`;

export default FormSwitcher;
