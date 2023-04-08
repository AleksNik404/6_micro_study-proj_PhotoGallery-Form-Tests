import styled from '@emotion/styled';
import ReactDOM from 'react-dom';

import Loader from '../Loader';
import { MdVisibility, MdPerson2, MdClose } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { formatDate } from '../../utils/utils';
import { ModalPhotoState } from '../../pages/Home/components/HomeCardsContainer';

type Props = {
  modalState: ModalPhotoState;
  onClose: () => void;
  onLoadImage: () => void;
};

export const Modal = ({ modalState, onClose, onLoadImage }: Props) => {
  if (!modalState.isOpen) return null;

  if (!modalState.data)
    return ReactDOM.createPortal(
      <Overlay onClick={onClose}>
        <Loader />
      </Overlay>,
      document.body
    );

  const { created_at, alt_description, likes, urls, user, views } = modalState.data;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      {modalState.loading && <Loader />}
      <Popup style={{ display: modalState.loading ? 'none' : undefined }}>
        <ImageBox onClick={(e) => e.stopPropagation()}>
          <MdClose className="modal-close" onClick={onClose} />
          <Img src={urls.regular} alt={alt_description} onLoad={onLoadImage} />
        </ImageBox>

        {!modalState.loading && (
          <Body hidden={modalState.loading}>
            <span className="body__date">{formatDate(created_at)}</span>

            <div className="body__name">
              <MdPerson2 size={'1.5rem'} />
              <h2>{user.name}</h2>
            </div>

            <p className="body__description">{alt_description}</p>

            <div className="body__icons">
              <span className="body__icon">
                <MdVisibility className="icon icon-views" />
                {views}
              </span>

              <span className="body__icon">
                <FcLike className="icon icon-like" />
                {likes}
              </span>
            </div>
          </Body>
        )}
      </Popup>
    </Overlay>,
    document.body
  );
};

const Body = styled.div`
  padding: 10px 20px;
  background-color: #0a0a0ae1;
  display: grid;
  justify-items: space-between;
  align-items: center;
  column-gap: 1rem;

  border-radius: var(--border-radius-sm);

  grid-template-areas:
    'date       description'
    'userName   description'
    '.          description'
    '.          icons';

  .body__date {
    opacity: 0.7;
    font-size: calc(0.6rem + 0.25vw);
  }

  .body__name {
    display: flex;
    align-items: center;
    gap: 5px;

    grid-area: userName;
    font-size: calc(0.6rem + 0.25vw);
  }

  .body__description {
    grid-area: description;
    justify-self: center;
    font-style: italic;
    text-transform: capitalize;

    &::before {
      content: open-quote;
    }
    &::after {
      content: close-quote;
    }
  }

  .body__icons {
    margin-top: 20px;
    grid-area: icons;
    justify-self: end;

    display: flex;

    gap: 1.5rem;
    font-size: 1.2rem;
  }

  .body__icon {
    display: flex;
    gap: 4px;
    place-items: center;
  }

  .icon-views {
    color: var(--secondary-color-800);
  }
`;

const ImageBox = styled.div`
  text-align: center;
  overflow: hidden;

  background-color: #0a0a0aba;

  border-radius: var(--border-radius-sm);
`;

const Img = styled.img`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 100%;
  max-width: 100%;
`;

const Popup = styled.div`
  display: grid;
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

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  place-content: center;
  place-items: center;

  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.25);
`;
