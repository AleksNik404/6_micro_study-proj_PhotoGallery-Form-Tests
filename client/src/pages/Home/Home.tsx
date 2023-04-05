/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import Header from '../../components/Header';
import { CardsContainer, InputSearch } from './components';

import { Main } from '../../styled/styledComponents';
import { useSearchValueStorage } from '../../utils/hooks';
import { PRICE_OPTIONS } from '../../utils/constants';
import {
  generateStableDiscountById as generateStableDiscountById,
  generateStablePriceById as generateStablePriceById,
} from '../../utils/priceUtils';
import { replaceApiImageToLowSize } from '../../utils/generalUtils';

import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
dayjs.extend(calendar);

const mappingGameAPi = ({ id, name, released: releaseDate, background_image }: any) => {
  return {
    id,
    name,
    image: replaceApiImageToLowSize(background_image),
    price: generateStablePriceById(id, PRICE_OPTIONS),
    discountPercentage: generateStableDiscountById(id),
    releaseDate,
  };
};

const mappingPhotoAPi = ({ id, urls, created_at, user }: any) => {
  // console.log(created_at);

  return {
    id,
    name: user.location,
    image: urls.regular,
    price: 55,
    discountPercentage: 22,
    releaseDate: dayjs(created_at).calendar(null, {
      sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
      nextDay: '[Tomorrow at] h:mm A', // The next day ( Tomorrow at 2:30 AM )
      nextWeek: 'dddd [at] h:mm A', // The next week ( Sunday at 2:30 AM )
      lastDay: '[Yesterday at] h:mm A', // The day before ( Yesterday at 2:30 AM )
      lastWeek: '[Last] dddd [at] h:mm A', // Last week ( Last Monday at 2:30 AM )
      sameElse: 'MMMM D | YYYY', // Everything else ( 17/10/2011 )
    }),
  };
};

const Home = () => {
  const [searchValue, setSearchValue] = useSearchValueStorage();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const accessKey = 'anstdRlwHV1L-833veOEO1InojYv1xIvYqxsqjpjetQ';
      const headers = {
        Authorization: `Client-ID ${accessKey}`,
      };

      const page = `page=1&`;
      const count = `count=30&`;
      const order_by = `order_by=popular&`;
      // const querys = `page=1&orientation=squarish`;
      // const querys = `page=1&orientation=squarish`;

      const urlRandom = `https://api.unsplash.com/photos/random?${count}${page}${order_by}`;
      const { data } = await axios(urlRandom, { headers });

      setCards(data.map(mappingPhotoAPi));
    };

    getData();
  }, []);

  const seatching = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();

    const accessKey = 'anstdRlwHV1L-833veOEO1InojYv1xIvYqxsqjpjetQ';
    const headers = {
      Authorization: `Client-ID ${accessKey}`,
    };

    const page = `page=1&`;
    const count = `per_page=30&`;
    const order_by = `order_by=relevant&`;

    const urlRandom = `https://api.unsplash.com/search/photos?${count}${order_by}${page}query=${searchValue}`;
    const { data } = await axios(urlRandom, { headers });
    console.log(data.results);

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
              onClick={seatching}
            />
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
