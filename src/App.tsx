import config from 'config';
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from 'components/Sidebar';

import LandingPage from 'pages/Landing';
import NotFoundPage from 'pages/NotFound';

const App: FC = () => (
  <main className="app">
    <Sidebar />
    <Routes>
      <Route path={config.url.landing} element={<LandingPage />} />
      <Route path={config.url.default} element={<NotFoundPage />} />
    </Routes>
  </main>
);

export default App;
