import { useState } from 'react';
import styled from '@emotion/styled';
import { RiEmotionSadFill } from 'react-icons/ri';

import Card, { CardItem } from '../../../components/Card';
import { api } from '../../../utils/Api/Api';
import { Grid } from '../../../styled/Grid';
import { Modal } from '../Modal.tsx/Modal';
import { OnePhotoResponse } from '../../../utils/Api/types';
import { BiCommentError } from 'react-icons/bi';

export interface Cards {
  cards: CardItem[];
  error?: boolean;
}

export type ModalPhotoState = {
  data: OnePhotoResponse | null;
  isOpen: boolean;
  loading: boolean;
  modalError: boolean;
};

const HomeCardsContainer = ({ cards, error }: Cards) => {
  const [modalState, setModalState] = useState<ModalPhotoState>({
    data: null,
    isOpen: false,
    loading: false,
    modalError: false,
  });

  if (error)
    return (
      <ErrorMessage>
        Oops, something went wrong. Please try again later or reach out to the developer for help
        <BiCommentError size={'2rem'} />
      </ErrorMessage>
    );

  if (!cards.length)
    return (
      <NoDataMessage>
        Oops, it looks like we couldn`t find any photos that match your search query{' '}
        <RiEmotionSadFill size={'2rem'} />
      </NoDataMessage>
    );

  const fetch = async (id: string) => {
    try {
      setModalState((prev) => ({ ...prev, isOpen: true, loading: true }));
      const data = await api.getPhotoByID(id);
      setModalState((prev) => ({ ...prev, isOpen: true, data }));
    } catch (error) {
      setModalState((prev) => ({
        ...prev,
        isOpen: true,
        loading: false,
        data: null,
        modalError: true,
      }));
    }
  };

  const onClose = () => {
    setModalState({
      data: null,
      isOpen: false,
      loading: false,
      modalError: false,
    });
  };

  const onLoadImage = () => {
    setModalState((prev) => ({ ...prev, loading: false }));
  };

  return (
    <Grid type="flex">
      {cards.map((oneCardData) => (
        <div key={oneCardData.id} onClick={() => fetch(oneCardData.id)}>
          <Card cardData={oneCardData} />
        </div>
      ))}

      <Modal onClose={onClose} modalState={modalState} onLoadImage={onLoadImage} />
    </Grid>
  );
};

export default HomeCardsContainer;

const NoDataMessage = styled.p`
  height: 200px;
  text-align: center;

  display: flex;
  gap: 1rem;
  place-content: center;
  place-items: center;
`;

const ErrorMessage = styled.p`
  height: 200px;
  text-align: center;

  display: flex;
  gap: 1rem;
  place-content: center;
  place-items: center;
`;
