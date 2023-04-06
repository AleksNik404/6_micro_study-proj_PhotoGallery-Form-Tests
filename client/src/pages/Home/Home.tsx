/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Header from '../../components/Header';
import { CardsContainer, InputSearch } from './components';
import { Main } from '../../styled/styledComponents';

import { useSearchValueStorage } from '../../utils/hooks';
import { api } from '../../utils/Api';

const Home = () => {
  const [searchValue, setSearchValue] = useSearchValueStorage();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await api.photos.random({ count: 14 });
      const photos = result.map(api.mappingData.random);

      setCards(photos);
    };

    getData();
  }, []);

  const search = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    if (!searchValue) return;

    const results = await api.photos.search({ query: searchValue });
    const photos = results.map(api.mappingData.search);
    setCards(photos);
  };

  return (
    <>
      <Header namePage="Home Page" />
      <Main>
        <section className="container">
          <InputContainer>
            <InputSearch
              searchValue={searchValue}
              handlerSearchValue={setSearchValue}
              onClick={search}
            />
          </InputContainer>
          <CardsContainer cards={cards} />
        </section>
      </Main>
    </>
  );
};

const InputContainer = styled.div`
  max-width: 25rem;
  height: 2.8rem;
  margin: 1rem auto 2rem;
`;

export default Home;
