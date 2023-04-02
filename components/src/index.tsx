import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';
import './index.css';

import { AppWrapper } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
