import { useEffect, useReducer } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import Header from '../../components/Header';
import SearchForm from './components/SearchForm';
import HomeCardsContainer from './components/HomeCardsContainer';

import { Main } from '../../styled/smallComponents';
import { reducer } from './HomeReducer';
import { getRandomPhoto, getSearchPhoto } from './HomeFeature';
import { getSearchValueFromLocalStorage } from '../../utils/localStorage';

import MessageWrapper from './components/MessageWrapper';

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

          <MessageWrapper error={error} loading={loading} notEmpty={data.length}>
            <HomeCardsContainer cards={data} />
          </MessageWrapper>
        </section>
      </Main>
    </SkeletonTheme>
  );
};

export default Home;
