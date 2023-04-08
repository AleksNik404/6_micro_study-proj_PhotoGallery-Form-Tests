import { useEffect, useReducer } from 'react';

import Header from '../../components/Header';

import { Main } from '../../styled/styledComponents';

import SearchForm from './components/SearchForm';
import { getSearchValueFromLocalStorage } from '../../utils/localStorage';
import { reducer } from './HomeReducer';
import { getRandomPhoto, getSearchPhoto } from './HomeFeature';
import HomeCardsContainer from './components/HomeCardsContainer';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Grid } from '../../styled/Grid';

import { GridItem } from '../../components/Card';

const Home = () => {
  const [{ data, submitValue, loading }, dispatch] = useReducer(reducer, {
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
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Header namePage="Home Page" />
        <Main>
          <section className="container">
            <SearchForm dispatch={dispatch} submitValue={submitValue} />
            {loading ? <Ha /> : <HomeCardsContainer cards={data} />}
          </section>
        </Main>
      </SkeletonTheme>
    </>
  );
};

const Ha = ({ size = 14 }: { size?: number }) => {
  const skeletItems = Array.from({ length: size });
  return (
    <Grid type="flex">
      {skeletItems.map((_, i) => (
        <GridItem key={i}>
          <Skeleton style={{ paddingBottom: 'calc(2 / 2.2 * 100%)', lineHeight: 2 }} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Home;
