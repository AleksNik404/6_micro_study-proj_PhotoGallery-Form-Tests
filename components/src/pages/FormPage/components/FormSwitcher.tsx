import styled from '@emotion/styled';
import { ErrorMesage } from '../../../styled/styledComponents';

interface SwitchProps {
  refNone: React.Ref<HTMLInputElement>;
  refTrue: React.Ref<HTMLInputElement>;

  name: string;
  label?: string;
  value?: number;

  ErrorMessage?: string;
}

const FormSwitcher = (props: SwitchProps) => {
  const { refNone, refTrue, name, ErrorMessage } = props;
  return (
    <SwitchBlock>
      <p>25% discount</p>

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
        <label htmlFor="yes">
          yes
          {ErrorMessage && <ErrorMesage>{ErrorMessage}</ErrorMesage>}
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
    border-radius: 6px;
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
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.2s;

    color: inherit;
    background-color: #10181f;
  }

  input:checked + label {
    background-color: #1e3a8a;
  }
`;

export default FormSwitcher;
