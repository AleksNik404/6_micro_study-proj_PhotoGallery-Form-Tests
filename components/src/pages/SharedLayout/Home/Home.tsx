import React, { Component } from 'react';
import styled from '@emotion/styled';

import CardsContainer from './components/CardsContainer';
import InputSearch from './components/InputSearch';

import Header from '../common/Header';
import { Main } from '../../../styled/Main';
import {
  addSearchValueToLocalStorage,
  getNamePageFromHistory,
  getSearchValueFromLocalStorage,
} from '../../../utils/utils';
import { data } from '../../../assets/data';

type State = {
  searchValue: string;
};

type Props = unknown;

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchValue: getSearchValueFromLocalStorage(),
    };
  }

  componentDidMount() {
    window.onunload = () => addSearchValueToLocalStorage(this.state.searchValue);
  }

  componentWillUnmount() {
    addSearchValueToLocalStorage(this.state.searchValue);
  }

  handlerSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <>
        <Header />
        <Main>
          <Heading>{getNamePageFromHistory()}</Heading>
          <section className="container">
            <InputContainer>
              <InputSearch
                searchValue={this.state.searchValue}
                handlerSearchValue={this.handlerSearchValue}
              />
            </InputContainer>
            <CardsContainer data={data} />
          </section>
        </Main>
      </>
    );
  }
}

const Heading = styled.h1`
  text-align: center;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px 0;
  max-width: 20em;
`;

export default Home;
