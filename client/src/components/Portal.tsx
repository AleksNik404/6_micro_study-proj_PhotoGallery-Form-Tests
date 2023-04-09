import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay } from '../styled/smallComponents';
import { TEST_DATA_MODAL } from '../test/Api/handlers';

type Props = {
  onClose: (e: React.MouseEvent<HTMLDivElement | SVGElement>) => void;
  children: React.ReactNode;
};

const Portal = ({ children, onClose }: Props) => {
  return ReactDOM.createPortal(
    <Overlay onClick={onClose} data-testid={TEST_DATA_MODAL}>
      {children}
    </Overlay>,
    document.body
  );
};

export default Portal;
