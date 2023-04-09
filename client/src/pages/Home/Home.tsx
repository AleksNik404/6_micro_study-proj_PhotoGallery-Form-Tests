import { useEffect, useReducer } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import Header from '../../components/Header';
import SearchForm from './components/SearchForm';
import HomeCardsContainer from './components/HomeCardsContainer';
import { SkeletonContainer } from './components/SkeletonContainer';

import { Main } from '../../styled/smallComponents';
import { reducer } from './HomeReducer';
import { getRandomPhoto, getSearchPhoto } from './HomeFeature';
import { getSearchValueFromLocalStorage } from '../../utils/localStorage';

const Home = () => {
  const [{ data, submitValue, loading, error }, dispatch] = useReducer(reducer, {
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
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Header namePage="Home Page" />
      <Main>
        <section className="container">
          <SearchForm dispatch={dispatch} submitValue={submitValue} />
          {loading ? <SkeletonContainer /> : <HomeCardsContainer cards={data} error={error} />}
        </section>
      </Main>
    </SkeletonTheme>
  );
};

export default Home;
