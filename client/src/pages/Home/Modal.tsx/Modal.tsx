import styled from '@emotion/styled';

import Loader from '../../../components/Loader';
import { MdVisibility, MdPerson2, MdClose } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { formatDate } from '../../../utils/utils';
import { ModalPhotoState } from '../components/HomeCardsContainer';
import Portal from '../../../components/Portal';
import { Popup } from '../../../styled/smallComponents';

type Props = {
  modalState: ModalPhotoState;
  onClose: (e: React.MouseEvent<HTMLDivElement | SVGElement>) => void;
  onLoadImage: () => void;
};

const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation();

export const Modal = ({ modalState, onClose, onLoadImage }: Props) => {
  if (!modalState.isOpen) return null;

  if (!modalState.data)
    return (
      <Portal onClose={onClose}>
        <Loader />
      </Portal>
    );

  const { created_at, alt_description, likes, urls, user, views } = modalState.data;

  return (
    <Portal onClose={onClose}>
      {modalState.loading && <Loader />}

      <Popup notDisplay={modalState.loading} onClick={stopPropagation}>
        <ImageBox>
          <MdClose className="modal-close" onClick={onClose} />
          <Img src={urls.regular} alt={alt_description} onLoad={onLoadImage} />
        </ImageBox>

        <Body>
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
      </Popup>
    </Portal>
  );
};

const Body = styled.div`
  padding: 10px 20px;
  background-color: #0a0a0ae1;
  display: grid;
  justify-items: space-between;
  align-items: center;
  column-gap: 1rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

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
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.35);

  border-radius: var(--border-radius-sm);
`;

const Img = styled.img`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 100%;
  max-width: 100%;

  -webkit-user-drag: none;
`;
