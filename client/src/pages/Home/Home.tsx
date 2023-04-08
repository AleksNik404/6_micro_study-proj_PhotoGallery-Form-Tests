import { useEffect, useReducer } from 'react';

import Header from '../../components/Header';

import { Main } from '../../styled/styledComponents';

import SearchForm from './components/SearchForm';
import { getSearchValueFromLocalStorage } from '../../utils/localStorage';
import { reducer } from './HomeReducer';
import { getRandomPhoto, getSearchPhoto } from './HomeFeature';
import HomeCardsContainer from './components/HomeCardsContainer';

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
          <HomeCardsContainer
            cards={data}
            // modal={true}
          />
        </section>
      </Main>
    </>
  );
};

export default Home;
