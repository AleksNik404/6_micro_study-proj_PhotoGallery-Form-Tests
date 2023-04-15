import { Route, Routes } from 'react-router-dom';

import { About, FormPage, Home, NotFoundPage } from './pages';

export const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
