import styled from '@emotion/styled';
import { BiImageAdd } from 'react-icons/bi';

import { ErrorMesage } from '../../../styled/styledComponents';

interface FileProps {
  fileRef: React.Ref<HTMLInputElement>;

  name: string;
  label?: string;
  value?: number;
  ErrorMessage?: string;
}

const FormFile = (props: FileProps) => {
  const { fileRef, name, label, ErrorMessage } = props;

  return (
    <FileBlock>
      <input
        ref={fileRef}
        type="file"
        id="image"
        name={name}
        accept="image/*"
        className="hide-behind-page"
      />
      <label htmlFor="image">
        <BiImageAdd size="1.7rem" />
        {label}
        {ErrorMessage && <ErrorMesage>{ErrorMessage}</ErrorMesage>}
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
