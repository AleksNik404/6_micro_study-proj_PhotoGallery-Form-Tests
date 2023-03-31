import styled from '@emotion/styled';

export const Main = styled.main`
  flex: 1 1 auto;
  margin-bottom: 10rem;
`;

export const ErrorMesage = styled.span`
  position: absolute;
  bottom: 0;
  left: 20px;

  white-space: nowrap;
  color: #e11d48;
  animation: toBottom 0.2s forwards;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  position: relative;
`;

export const SubmitButton = styled.button`
  height: 40px;
  width: 100%;
  max-width: 300px;
  padding: 0 10px;
  margin-top: 30px;

  font-weight: 400;
  letter-spacing: 2px;
  color: inherit;

  background: linear-gradient(
    90deg,
    rgba(135, 17, 43, 0.5) 0%,
    rgba(225, 29, 71, 0.5) 37%,
    rgba(180, 23, 58, 0.5) 65%,
    rgba(135, 17, 43, 0.5) 100%
  );

  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 20px;

    background: linear-gradient(
      90deg,
      rgba(135, 17, 43, 0.6) 0%,
      rgba(225, 29, 71, 0.6) 37%,
      rgba(180, 23, 58, 0.6) 65%,
      rgba(135, 17, 43, 0.6) 100%
    );
  }
  &:active {
    transform: translateY(0);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 7px 10px;
  }

  justify-self: center;
  grid-column: 1 / -1;
  cursor: pointer;
`;
