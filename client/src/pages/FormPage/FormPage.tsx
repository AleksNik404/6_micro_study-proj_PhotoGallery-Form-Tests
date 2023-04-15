import styled from '@emotion/styled';

import Header from '../../components/Header';
import Toast from '../../components/Toast';
import { Main } from '../../styled/smallComponents';

import Form from './components/Form';
import { CardItem } from '../../components/Card';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addFormCard, setToastCardMessage } from '../../features/photoAppSlice';
import FormCardsContainer from './components/FormCardsContainer';

const FormPage = () => {
  const { formCards, toastMessage } = useAppSelector((state) => state.photoApp);

  const dispatch = useAppDispatch();

  const addOneCard = (cardData: CardItem) => {
    dispatch(addFormCard(cardData));
    dispatch(setToastCardMessage('Card successfully created'));
  };

  const deleteToast = () => {
    dispatch(setToastCardMessage(''));
  };

  return (
    <>
      <Header namePage="Form Page" />
      <Main>
        <section className="container">
          <FormBlock>
            <Form addOneCard={addOneCard} />
            <Toast message={toastMessage} deleteToast={deleteToast} />
          </FormBlock>
          <FormCardsContainer cards={formCards} />
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
