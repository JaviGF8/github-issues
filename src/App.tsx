import config from 'config';
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import TopBar from 'components/TopBar';

import IssuePage from 'pages/Issue';
import LandingPage from 'pages/Landing';
import NotFoundPage from 'pages/NotFound';
import PullRequestPage from 'pages/PullRequest';

const App: FC = () => (
  <main className="app">
    <TopBar />
    <Sidebar />
    <Routes>
      <Route path={`${config.url.issue}/:number`} element={<IssuePage />} />
      <Route path={`${config.url.pr}/:number`} element={<PullRequestPage />} />
      <Route path={config.url.landing} element={<LandingPage />} />
      <Route path={config.url.default} element={<NotFoundPage />} />
    </Routes>
  </main>
);

export default App;
