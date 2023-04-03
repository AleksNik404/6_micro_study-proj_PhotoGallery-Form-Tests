import styled from '@emotion/styled';
import { useState } from 'react';

import Header from '../../components/Header';
import Toast from '../../components/Toast';
import { Main } from '../../styled/styledComponents';
import { CardItem } from '../Home/components/Card';
import CardsContainer, { Cards } from '../Home/components/CardsContainer';

import Form from './components/Form';

const FormPage = () => {
  const [cards, setCards] = useState<Cards['cards']>([]);
  const [toastMessage, setToastMessage] = useState('');

  const addOneCard = (cardData: CardItem) => {
    setCards((prev) => [...prev, cardData]);
    setToastMessage('Card successfully created');
  };

  const deleteToast = () => {
    setToastMessage('');
  };

  return (
    <>
      <Header namePage="Form Page" />
      <Main>
        <section className="container">
          <FormBlock>
            <Form addOneCard={addOneCard} />
            {toastMessage && <Toast message={toastMessage} deleteToast={deleteToast} />}
          </FormBlock>
          <CardsContainer cards={cards} />
        </section>
      </Main>
    </>
  );
};

const FormBlock = styled.div`
  margin-bottom: 5rem;
  position: relative;
`;

export default FormPage;
