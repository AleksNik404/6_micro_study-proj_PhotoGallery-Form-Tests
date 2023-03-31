import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { BiImageAdd } from 'react-icons/bi';

import { ErrorMesage } from '../../../styled/styledComponents';
import { FormData } from './Form';

interface FileProps {
  name: keyof Pick<FormData, 'image'>;
  label?: string;

  validate: (value: FileList | undefined) => string | undefined;
}

const FormFile = ({ name, label, validate }: FileProps) => {
  const { register, formState } = useFormContext<FormData>();
  const { errors } = formState;

  return (
    <FileBlock>
      <input
        {...register(name, { validate })}
        type="file"
        id="image"
        name={name}
        accept="image/*"
        className="hide-behind-page"
      />

      <label htmlFor="image">
        <BiImageAdd size="1.7rem" />
        {label}
        {errors[name] && <ErrorMesage>{errors[name]?.message}</ErrorMesage>}
      </label>
    </FileBlock>
  );
};

const FileBlock = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 700px) {
    grid-column: 1 / -1;
  }

  label {
    display: flex;
    place-items: center;
    gap: 10px;
    position: relative;

    background-color: #065f46;
    border-radius: 6px;
    padding: 7px 20px;
    cursor: pointer;

    box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 10px;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: rgba(0, 0, 0, 0.6) 0px 7px 20px;
    }
    &:active {
      transform: translateY(0px);
      box-shadow: rgba(0, 0, 0, 0.8) 0px 7px 10px;
    }
  }
`;

export default FormFile;
