import React, { Component } from 'react';
import styled from '@emotion/styled';
import { GiDeathNote } from 'react-icons/gi';

import Header from '../common/Header';
import { Main } from '../../styled/Main';

class About extends Component {
  render() {
    return (
      <>
        <Header namePage="About us Page" />
        <Main>
          <TextBlock className="container">
            <Heading>
              <GiDeathNote />
            </Heading>
            <p>This page is empty</p>
          </TextBlock>
        </Main>
      </>
    );
  }
}

const TextBlock = styled.section`
  display: flex;
  flex-direction: column;

  place-items: center;
  place-content: center;

  min-height: var(--min-height-block);
`;

const Heading = styled.h1`
  text-align: center;
`;

export default About;
