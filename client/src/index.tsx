import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';
import './index.css';

import { AppWrapper } from './App';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = await import('./test/Api/browser');
//   worker.start();
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <AppWrapper />
  // {/* </React.StrictMode> */}
);
