import { useEffect, useReducer } from 'react';

import Header from '../../components/Header';
import { CardsContainer } from './components';
import { Main } from '../../styled/styledComponents';

import SearchForm from './components/SearchForm';
import { getSearchValueFromLocalStorage } from '../../utils/localStorage';
import { reducer } from './HomeReducer';
import { getRandomPhoto, getSearchPhoto } from './HomeFeature';

const Home = () => {
  const [{ data, submitValue }, dispatch] = useReducer(reducer, {
    data: [],
    loading: false,
    error: false,

    submitValue: getSearchValueFromLocalStorage(),
  });

  useEffect(() => {
    if (submitValue) {
      getSearchPhoto(dispatch, submitValue);
      return;
    }

    getRandomPhoto(dispatch);
  }, [submitValue]);

  return (
    <>
      <Header namePage="Home Page" />
      <Main>
        <section className="container">
          <SearchForm dispatch={dispatch} submitValue={submitValue} />
          <CardsContainer cards={data} />
        </section>
      </Main>
    </>
  );
};

export default Home;
