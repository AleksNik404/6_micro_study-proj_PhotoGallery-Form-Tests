import styled from '@emotion/styled';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './common/Header';

type Props = {};

type State = {};

class SharedLayout extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </>
    );
  }
}

const Main = styled.main`
  flex: 1 1 auto;
`;

export default SharedLayout;
