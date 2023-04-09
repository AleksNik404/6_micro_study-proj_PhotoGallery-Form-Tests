import styled from '@emotion/styled';

export const Main = styled.main`
  flex: 1 1 auto;
  margin-bottom: 10rem;
`;

export const ErrorMessage = styled.span`
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

export const Popup = styled.div<{ notDisplay: boolean }>`
  display: ${({ notDisplay }) => (notDisplay ? 'none' : 'grid')};
  grid-template-rows: 1fr max-content;
  flex-direction: column;
  gap: 10px;

  padding: 10px 20px;
  max-width: 800px;
  max-height: 90vh;
  position: relative;

  .modal-close {
    position: absolute;
    top: -2rem;
    right: -2rem;

    font-size: 3rem;
    cursor: pointer;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  place-content: center;
  place-items: center;

  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.25);
`;
