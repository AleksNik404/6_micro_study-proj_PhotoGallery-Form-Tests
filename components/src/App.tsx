import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { About, ErrorPage, Home } from './pages';
import SharedLayout from './pages/SharedLayout/SharedLayout';

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;