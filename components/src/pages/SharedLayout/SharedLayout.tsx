import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './common/Nav';

type Props = {};

type State = {};

class SharedLayout extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Nav />
        <Outlet />
      </>
    );
  }
}

export default SharedLayout;
