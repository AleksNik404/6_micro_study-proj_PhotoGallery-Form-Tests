import styled from '@emotion/styled';

type NewType = {
  message: string;
  deleteToast: () => void;
};

const Toast = ({ deleteToast, message }: NewType) => {
  if (!message) return null;

  return <ToastBox onAnimationEnd={() => deleteToast()}>{message}</ToastBox>;
};

export default Toast;

const ToastBox = styled.aside`
  display: flex;
  place-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;

  position: absolute;
  z-index: -1;
  left: 50%;
  transform: translate(-50%, -200%);

  background-color: #15803d;
  animation: xdd 4s;

  @keyframes xdd {
    0% {
      transform: translate(-50%, -200%);
    }

    20% {
      transform: translate(-50%, 0);
    }

    80% {
      transform: translate(-50%, 0);
      opacity: 0.9;
    }

    100% {
      transform: translate(-50%, 0) scale(0);
      opacity: 0;
    }
  }
`;
