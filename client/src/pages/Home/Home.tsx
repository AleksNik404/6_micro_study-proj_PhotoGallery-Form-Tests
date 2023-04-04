import styled from '@emotion/styled';

import Header from '../../components/Header';
import { CardsContainer, InputSearch } from './components';

import { data } from '../../data/data';
import { Main } from '../../styled/styledComponents';
import { useSearchValueStorage } from '../../utils/hooks';
import { useEffect, useState } from 'react';

const Home = () => {
  const [searchValue, setSearchValue] = useSearchValueStorage();

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getadata = async () => {
      const res = await fetch('http://localhost:3000/api/game');
      const data = await res.json();

      setTimeout(() => {
        setCards(data);
      }, 500);
    };

    getadata();
  }, []);

  return (
    <>
      <Header namePage="Home Page" />
      <Main>
        <section className="container">
          <InputContainer>
            <InputSearch searchValue={searchValue} handlerSearchValue={setSearchValue} />
          </InputContainer>
          <CardsContainer cards={cards} />
        </section>
      </Main>
    </>
  );
};

const InputContainer = styled.div`
  padding: 20px 0;
  max-width: 20em;
`;

export default Home;
