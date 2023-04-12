import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About, FormPage, Home, NotFoundPage } from './pages';
import { Provider } from 'react-redux';
import { store } from './app/store';

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

export const AppWrapper = () => {
  console.log(store);

  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};
