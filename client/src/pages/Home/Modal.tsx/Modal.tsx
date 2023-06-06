import styled from '@emotion/styled';

import Loader from '../../../components/Loader';
import Portal from '../../../components/Portal';
import { Popup } from '../../../styled/smallComponents';
import { Body } from '../../../styled/ModalBody';

import { MdVisibility, MdPerson2, MdClose } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { formatDate } from '../../../utils/utils';
import { OnePhotoResponse } from '../../../utils/types';
import { useAppSelector } from '../../../app/hooks';

type Props = {
  data: OnePhotoResponse | undefined;
  loading: boolean;
  onClose: () => void;
  onLoad: () => void;
};

const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation();

export const Modal = ({ data, loading, onClose, onLoad }: Props) => {
  const { isOpen, ImageIsLoading } = useAppSelector((state) => state.photoApp.modal);

  if (!isOpen) return null;
  if (!data || loading)
    return (
      <Portal onClose={onClose}>
        <Loader />
      </Portal>
    );

  const { created_at, alt_description, likes, urls, user, views } = data;

  return (
    <Portal onClose={onClose}>
      {ImageIsLoading && <Loader />}

      <Popup notDisplay={ImageIsLoading} onClick={stopPropagation}>
        <ImageBox>
          <MdClose className="modal-close" onClick={onClose} />
          <Img src={urls.regular} alt={alt_description} onLoad={onLoad} />
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
