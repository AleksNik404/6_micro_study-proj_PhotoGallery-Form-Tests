import Card, { CardItem } from '../../../components/Card';
import { useState } from 'react';
import { unsplashApi } from '../../../utils/Api/Api';
import { Grid } from '../../../styled/Grid';
import { Modal } from '../../../components/Modal.tsx/Modal';

import 'react-loading-skeleton/dist/skeleton.css';
import { OnePhotoResponse } from '../../../utils/Api/types';

export interface Cards {
  cards: CardItem[];
}

export type ModalPhotoState = {
  data: OnePhotoResponse | null;
  isOpen: boolean;
  loading: boolean;
  error: boolean;
};

const HomeCardsContainer = ({ cards }: Cards) => {
  const [modalState, setModalState] = useState<ModalPhotoState>({
    data: null,
    isOpen: false,
    loading: false,
    error: false,
  });

  const fetch = async (id: string) => {
    try {
      setModalState((prev) => ({ ...prev, isOpen: true, loading: true }));
      const { data } = await unsplashApi(`/photos/${id}`);
      setModalState((prev) => ({ ...prev, isOpen: true, data }));
    } catch (error) {
      setModalState((prev) => ({ ...prev, isOpen: true, loading: false, data: null, error: true }));
    }
  };

  const onClose = () => {
    setModalState({
      data: null,
      isOpen: false,
      loading: false,
      error: false,
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
