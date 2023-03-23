import React, { Component } from 'react';
import styled from '@emotion/styled';

import Header from '../../components/Header';
import { CardsContainer, InputSearch } from './components';

import { addSearchValueToLocalStorage, getSearchValueFromLocalStorage } from '../../utils/utils';
import { data } from '../../data/data';
import { Main } from '../../styled/Main';

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
        <Header namePage="Home Page" />
        <Main>
          <section className="container">
            <InputContainer>
              <InputSearch
                searchValue={this.state.searchValue}
                handlerSearchValue={this.handlerSearchValue}
              />
            </InputContainer>
            <CardsContainer cards={data} />
          </section>
        </Main>
      </>
    );
  }
}

const InputContainer = styled.div`
  padding: 20px 0;
  max-width: 20em;
`;

export default Home;
