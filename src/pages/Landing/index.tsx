import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Loader from 'components/base/Loader';
import Page from 'components/base/Page';

import IssueCard from 'components/issue/Card';
import PullRequestCard from 'components/pullRequest/Card';

import useAppContext from 'hooks/useAppContext';

import './index.scss';

const LandingPage: FC = () => {
  const { error, issues, loading, pullRequests, repository, user } = useAppContext();
  const { t } = useTranslation();

  return (
    <Page id="landing-page">
      {loading && <Loader />}
      {repository && user && !loading && !error && (
        <div className="columns">
          <div className="column">
            <h3>{t('common.pullRequests')}</h3>
            <div>
              {pullRequests?.length > 0 ? (
                pullRequests.map((pr) => <PullRequestCard key={pr.id} pullRequest={pr} />)
              ) : (
                <div className="no-elements">{t('common.noPullRequests')}</div>
              )}
            </div>
          </div>
          <div className="column">
            <h3>{t('common.issues')}</h3>
            <div>
              {pullRequests?.length > 0 ? (
                issues.map((issue) => <IssueCard key={issue.id} issue={issue} />)
              ) : (
                <div className="no-elements">{t('common.noIssues')}</div>
              )}
            </div>
          </div>
        </div>
      )}
      {(!repository || !user) && !loading && <div>{t('common.noRepository')}</div>}
      {!loading && error && <div>{error}</div>}
    </Page>
  );
};

export default LandingPage;
