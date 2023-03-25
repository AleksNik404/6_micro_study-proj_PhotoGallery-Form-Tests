import styled from '@emotion/styled';

interface SwitchProps {
  refNone: React.Ref<HTMLInputElement>;
  refTrue: React.Ref<HTMLInputElement>;

  name: string;
  label?: string;
  value?: number;

  ErrorMessage?: string;
}

const FormSwitcher = (props: SwitchProps) => {
  const { refNone, refTrue, name, label, value, ErrorMessage } = props;
  return (
    <SwitchBlock>
      <h3>25% discount</h3>

      <div className="switch">
        <input
          ref={refNone}
          type="radio"
          id="no"
          value={0}
          name={name}
          className="hide-behind-page"
        />
        <label htmlFor="no">no</label>

        <input
          ref={refTrue}
          type="radio"
          id="yes"
          value={25}
          name={name}
          className="hide-behind-page"
        />
        <label htmlFor="yes">yes</label>
      </div>
    </SwitchBlock>
  );
};

const SwitchBlock = styled.div`
  display: flex;
  flex-direction: column;

  place-items: center;
  overflow: hidden;

  .switch {
    overflow: hidden;
    border-radius: 6px;
    text-transform: capitalize;
  }

  input:checked + label {
    background-color: blue;
  }

  label {
    display: inline-flex;
    cursor: pointer;

    height: 30px;
    width: 50px;

    place-items: center;
    place-content: center;

    background-color: #e4e4e4;
    color: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.2);

    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.2s;
  }

  /* @media (max-width: 550px) { */
  grid-column: 1 / -1;
  /* } */
`;

export default FormSwitcher;
