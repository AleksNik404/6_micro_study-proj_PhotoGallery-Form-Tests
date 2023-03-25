import styled from '@emotion/styled';
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

  @media (max-width: 510px) {
    grid-column: 1 / -1;
  }

  label {
    display: inline-block;
    background-color: green;

    border-radius: 10px;
    padding: 7px 20px;
    cursor: pointer;
  }
`;

export default FormFile;
