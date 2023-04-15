import { SkeletonTheme } from 'react-loading-skeleton';

import Header from '../../components/Header';
import SearchForm from './components/SearchForm';
import HomeCardsContainer from './components/HomeCardsContainer';
import MessageWrapper from './components/MessageWrapper';
import { Main } from '../../styled/smallComponents';
import { useGetRandomPhotosQuery } from '../../features/apiSlice';
import { useAppSelector } from '../../app/hooks';

const Home = () => {
  const { params } = useAppSelector((state) => state.photoApp);
  const { data = [], isLoading, isError } = useGetRandomPhotosQuery(params);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Header namePage="Home Page" />
      <Main>
        <section className="container">
          <SearchForm submitValue={params.query} />

          <MessageWrapper error={isError} loading={isLoading} isEmpty={!data.length}>
            <HomeCardsContainer cards={data} />
          </MessageWrapper>
        </section>
      </Main>
    </SkeletonTheme>
  );
};

export default Home;
