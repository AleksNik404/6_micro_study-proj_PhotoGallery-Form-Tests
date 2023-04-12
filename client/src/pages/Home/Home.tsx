import { SkeletonTheme } from 'react-loading-skeleton';

import Header from '../../components/Header';
import SearchForm from './components/SearchForm';
import HomeCardsContainer from './components/HomeCardsContainer';

import { Main } from '../../styled/smallComponents';

import MessageWrapper from './components/MessageWrapper';
import { useGetRandomPhotosQuery } from '../../features/apiSlice';

import { useAppSelector } from '../../app/hooks';

const Home = () => {
  const { params } = useAppSelector((state) => state.homeSearch);
  const { data = [], isLoading, isError } = useGetRandomPhotosQuery(params);
  console.log(data);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Header namePage="Home Page" />
      <Main>
        <section className="container">
          <SearchForm submitValue={params.query} />

          <MessageWrapper error={isError} loading={isLoading} notEmpty={data.length}>
            <HomeCardsContainer cards={data} />
          </MessageWrapper>
        </section>
      </Main>
    </SkeletonTheme>
  );
};

export default Home;
