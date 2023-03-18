import styled from '@emotion/styled';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './common/Header';

class SharedLayout extends Component {
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
