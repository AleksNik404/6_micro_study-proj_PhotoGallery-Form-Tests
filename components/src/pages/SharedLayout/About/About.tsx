import styled from '@emotion/styled';
import React, { Component } from 'react';
import { Main } from '../../../styled/Main';
import Header from '../common/Header';

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <Heading className="container">{window.history.state.usr}</Heading>
        </Main>
      </>
    );
  }
}

const Heading = styled.h1`
  text-align: center;
`;

export default About;
