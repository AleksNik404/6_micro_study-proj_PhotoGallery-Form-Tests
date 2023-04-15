import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import 'normalize.css';
import './index.css';

import App from './App';
import { setupStore } from './app/store';
import { BrowserRouter as Router } from 'react-router-dom';

const store = setupStore({});
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
