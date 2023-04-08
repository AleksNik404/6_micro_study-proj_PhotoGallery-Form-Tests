/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import ReactDOM from 'react-dom';
import { GrFormView, GrView } from 'react-icons/gr';
import { FcLike } from 'react-icons/fc';
import { RiUserShared2Fill } from 'react-icons/ri';
import { MdVisibility, MdPerson2 } from 'react-icons/md';

import { formatDate } from '../utils/utils';

type Props = {
  content: any;
  id: string;
  show: boolean;
  onClose: () => void;
};

export const Modal = ({ content, onClose, show }: Props) => {
  if (!show) return null;

  const { created_at, alt_description, likes, urls, user, views, color } = content;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Popup>
        <ImageBox onClick={(e) => e.stopPropagation()}>
          <Img src={urls.regular} alt="" />
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

  border-radius: var(--border-radius-sm);

  grid-template-areas:
    'date       description'
    'userName   description'
    'icons          icons';

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
  overflow: hidden;
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
