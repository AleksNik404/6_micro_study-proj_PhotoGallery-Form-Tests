import styled from '@emotion/styled';

import Header from '../../components/Header';
import { CardsContainer, InputSearch } from './components';

import { data } from '../../data/data';
import { Main } from '../../styled/styledComponents';
import { useSearchValueStorage } from '../../utils/hooks';

const Home = () => {
  const [searchValue, setSearchValue] = useSearchValueStorage();

  return (
    <>
      <Header namePage="Home Page" />
      <Main>
        <section className="container">
          <InputContainer>
            <InputSearch searchValue={searchValue} handlerSearchValue={setSearchValue} />
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
