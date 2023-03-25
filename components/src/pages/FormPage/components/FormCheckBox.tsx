import styled from '@emotion/styled';

import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { ErrorMesage } from '../../../styled/styledComponents';

interface CheckBoxProps {
  checkboxRef: React.Ref<HTMLInputElement>;

  name: string;
  label?: string;
  value?: number;
  ErrorMessage?: string;
}

const FormCheckBox = (props: CheckBoxProps) => {
  const { checkboxRef, name, label, ErrorMessage } = props;

  return (
    <CheckBoxBlock>
      <input ref={checkboxRef} name={name} id={name} type="checkbox" className="hide-behind-page" />

      <label htmlFor={name}>
        <ImCheckboxUnchecked className="icon" />
        <ImCheckboxChecked className="icon  icon--active" />

        {label}
        {ErrorMessage && <ErrorMesage>{ErrorMessage}</ErrorMesage>}
      </label>
    </CheckBoxBlock>
  );
};

const CheckBoxBlock = styled.div`
  display: flex;
  place-items: center;
  position: relative;

  justify-content: center;
  align-self: stretch;

  @media (max-width: 510px) {
    grid-column: 1 / -1;
  }

  label {
    display: flex;
    place-items: center;
    padding-left: 30px;

    position: relative;
  }

  .icon {
    cursor: pointer;
    color: #ff6433;
    font-size: 20px;

    position: absolute;
    left: 0;

    transition: all 0.2s;

    &--active {
      opacity: 0;
      color: #2196f3;
    }
  }

  input:checked + label .icon {
    opacity: 0;
  }

  input:checked + label .icon--active {
    display: block;
    opacity: 1;
  }
`;

export default FormCheckBox;
