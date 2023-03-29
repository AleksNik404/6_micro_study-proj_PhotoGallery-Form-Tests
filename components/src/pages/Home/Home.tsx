import React, { Component, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import Header from '../../components/Header';
import { CardsContainer, InputSearch } from './components';

import { addSearchValueToLocalStorage, getSearchValueFromLocalStorage } from '../../utils/utils';
import { data } from '../../data/data';
import { Main } from '../../styled/styledComponents';

const Home = () => {
  const [searchValue, setSearchValue] = useState(getSearchValueFromLocalStorage());
  const value = useRef(searchValue);

  useEffect(() => {
    window.onunload = () => addSearchValueToLocalStorage(value.current);

    return () => addSearchValueToLocalStorage(value.current);
  }, []);

  const handlerSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    value.current = e.target.value;
  };

  return (
    <>
      <Header namePage="Home Page" />
      <Main>
        <section className="container">
          <InputContainer>
            <InputSearch searchValue={searchValue} handlerSearchValue={handlerSearchValue} />
          </InputContainer>
          <CardsContainer cards={data.slice(0, 11)} />
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
