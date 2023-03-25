import styled from '@emotion/styled';

interface FileProps {
  fileRef: React.Ref<HTMLInputElement>;

  name: string;
  label?: string;
  value?: number;
  ErrorMessage?: string;
}

const FormFile = (props: FileProps) => {
  const { fileRef, name, label, value, ErrorMessage } = props;

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
      <label htmlFor="image">{label}</label>
      {ErrorMessage && <p>{ErrorMessage}</p>}
    </FileBlock>
  );
};

const FileBlock = styled.div`
  grid-column: 1 / -1;
  position: relative;

  label {
    background-color: green;
    border-radius: 20px;
    padding: 10px 15px;
    cursor: pointer;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 20px;

    color: red;
    animation: toBottom 0.2s forwards;
  }

  @keyframes toBottom {
    from {
      opacity: 0;
      transform: translateY(0);
    }

    to {
      opacity: 1;
      transform: translateY(100%);
      left: 0;
    }
  }
`;

export default FormFile;
