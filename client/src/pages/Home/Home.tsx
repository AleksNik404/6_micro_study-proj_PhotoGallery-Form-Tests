/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Header from '../../components/Header';
import { CardsContainer, InputSearch } from './components';
import { Main } from '../../styled/styledComponents';

import { useSearchValueStorage } from '../../utils/hooks';
import { getLocationWhenEmpty } from '../../utils/utils';
import { unsplashApi } from '../../utils/Api';

const mappingPhotoAPi = ({ id, urls, created_at, user, links, location }: any) => {
  return {
    id,
    name: location.name || getLocationWhenEmpty(),
    image: urls.regular,
    price: 22,
    discountPercentage: 0,
    releaseDate: created_at,
  };
};

const Home = () => {
  const [searchValue, setSearchValue] = useSearchValueStorage();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const params = {
        page: 1,
        count: 14,
        order_by: 'popular',
      };

      const urlRandom = `photos/random`;
      const result = await unsplashApi(urlRandom, { params });

      console.log(result);

      setCards(result.data.map(mappingPhotoAPi));
    };

    getData();
  }, []);

  const search = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    if (!searchValue) return;

    const params = {
      page: 1,
      per_page: 20,
      order_by: 'relevant',
      query: searchValue,
    };

    const urlRandom = `search/photos?`;
    const { data } = await unsplashApi(urlRandom, { params });
    console.log(data);

    setCards(data.results.map(mappingPhotoAPi));
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
