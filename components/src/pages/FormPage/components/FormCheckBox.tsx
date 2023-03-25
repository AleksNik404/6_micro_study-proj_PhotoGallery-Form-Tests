import styled from '@emotion/styled';

import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';

interface CheckBoxProps {
  checkboxRef: React.Ref<HTMLInputElement>;

  name: string;
  label?: string;
  value?: number;
  ErrorMessage?: string;
}

const FormCheckBox = (props: CheckBoxProps) => {
  const { checkboxRef, name, label, value, ErrorMessage } = props;

  return (
    <CheckBoxBlock>
      <input ref={checkboxRef} name={name} id={name} type="checkbox" className="hide-behind-page" />

      <label htmlFor={name}>
        <ImCheckboxUnchecked className="icon" />
        <ImCheckboxChecked className="icon  icon--active" />

        {label}
      </label>
    </CheckBoxBlock>
  );
};

const CheckBoxBlock = styled.div`
  display: flex;
  place-items: center;

  grid-column: span 2;

  label {
    display: flex;
    place-items: center;

    position: relative;

    padding-left: 30px;
  }

  .icon {
    cursor: pointer;
    font-size: 20px;

    color: #ff6433;

    position: absolute;
    left: 0;

    transition: all 0.2s;

    &--active {
      /* display: none; */
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
