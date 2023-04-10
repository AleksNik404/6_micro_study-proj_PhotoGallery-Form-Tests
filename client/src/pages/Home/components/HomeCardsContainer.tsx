import { useState } from 'react';

import Card, { CardItem } from '../../../components/Card';
import { api } from '../../../utils/Api/Api';
import { Grid } from '../../../styled/Grid';
import { Modal } from '../Modal.tsx/Modal';
import { OnePhotoResponse } from '../../../utils/Api/types';

export interface Cards {
  cards: CardItem[];
}

export type ModalPhotoState = {
  data: OnePhotoResponse | null;
  isOpen: boolean;
  loading: boolean;
  modalError: boolean;
};

const initialState = {
  data: null,
  isOpen: false,
  loading: false,
  modalError: false,
};

const HomeCardsContainer = ({ cards }: Cards) => {
  const [modalState, setModalState] = useState<ModalPhotoState>(initialState);

  const fetch = async (id: string) => {
    try {
      setModalState({ ...initialState, isOpen: true, loading: true });
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
    setModalState(initialState);
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
