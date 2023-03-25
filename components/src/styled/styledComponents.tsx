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
