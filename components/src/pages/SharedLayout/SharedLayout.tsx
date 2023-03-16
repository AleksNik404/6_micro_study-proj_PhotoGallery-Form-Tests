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
        <Outlet />
      </>
    );
  }
}

export default SharedLayout;
