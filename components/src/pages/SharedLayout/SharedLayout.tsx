import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class SharedLayout extends Component {
  render() {
    return <Outlet />;
  }
}

export default SharedLayout;
