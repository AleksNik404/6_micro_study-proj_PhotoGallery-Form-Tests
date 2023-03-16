import React, { Component } from 'react';

import CardsContainer from './components/CardsContainer';
import InputSearch from './components/InputSearch';
import { data } from '../../../assets/data';
import styled from '@emotion/styled';
// import { css } from '@emotion/react';
import { css } from '@emotion/react';

const AppStyles = css`
  background-color: red;
`;

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return (
      <main>
        <section className="container">
          <InputContainer>
            <InputSearch />
          </InputContainer>
          <CardsContainer data={data} />
        </section>
      </main>
    );
  }
}

const InputContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px 0;
  max-width: 20em;
`;

export default Home;
