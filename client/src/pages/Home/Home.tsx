import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import Header from '../../components/Header';
import { CardsContainer, InputSearch } from './components';

import { Main } from '../../styled/styledComponents';
import { useSearchValueStorage } from '../../utils/hooks';
import { PRICE_OPTIONS } from '../../utils/constants';
import { getStableDiscountById, getStablePriceById } from '../../utils/priceUtils';

const Home = () => {
  const [searchValue, setSearchValue] = useSearchValueStorage();

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { results },
      } = await axios(
        'https://api.rawg.io/api/games?key=0c22339f3bcb472597b845804d0dd870&search_exact=true&page=1&page_size=27'
      );
      console.log(results.length);

      const games = results.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ({ id, name, released: releaseDate, background_image: image }: any) => {
          image = image.replace(
            'https://media.rawg.io/media/',
            'https://media.rawg.io/media/crop/600/400/'
          );

          return {
            id,
            name,
            image,
            price: getStablePriceById(id, PRICE_OPTIONS),
            discountPercentage: getStableDiscountById(id),
            releaseDate,
          };
        }
      );

      setTimeout(() => {
        setCards(games);
      }, 500);
    };

    getData();
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
  /* padding: 20px 0; */
  max-width: 25em;

  margin: 1rem auto 2rem;
`;

export default Home;
