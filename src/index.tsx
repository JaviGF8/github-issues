import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'App';
import AppProvider from 'context/AppProvider';

import 'i18n';
import 'assets/styles/_layout.scss';

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </StrictMode>,
  document.getElementById('root'),
);
