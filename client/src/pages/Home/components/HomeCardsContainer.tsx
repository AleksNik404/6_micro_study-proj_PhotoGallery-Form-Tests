/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Card, { CardItem } from '../../../components/Card';
import { ReactNode, useEffect, useState } from 'react';
import { api, unsplashApi } from '../../../utils/Api/Api';
import { Modal } from '../../../components/Modal';
import { Grid } from '../../../styled/Grid';

const data = {};

export interface Cards {
  cards: CardItem[];
}

const HomeCardsContainer = ({ cards }: Cards) => {
  const [modalData, setModalData] = useState<any>({});
  const [modalIsShow, setModalIsShow] = useState(false);

  const fetch = async (id: string) => {
    const { data } = await unsplashApi(`/photos/${id}`);
    console.log(data);

    setModalIsShow(true);
    setModalData(data);
  };

  return (
    <Grid type="flex">
      {cards.map((oneCardData) => (
        <div key={oneCardData.id} onClick={() => fetch(oneCardData.id)}>
          <Card cardData={oneCardData} />
        </div>
      ))}

      {modalIsShow && (
        <Modal
          show={modalIsShow}
          onClose={() => setModalIsShow(false)}
          content={modalData}
          id={''}
        />
      )}
    </Grid>
  );
};

export default HomeCardsContainer;
