import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { About, Home, NotFoundPage } from './pages';
import SharedLayout from './pages/SharedLayout/SharedLayout';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
