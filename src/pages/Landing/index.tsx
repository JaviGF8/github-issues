import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Page from 'components/base/Page';

import IssueCard from 'components/issue/Card';
import PullRequestCard from 'components/pullRequest/Card';

import useAppContext from 'hooks/useAppContext';

import './index.scss';

const LandingPage: FC = () => {
  const { issues, loading, pullRequests, repository, user } = useAppContext();
  const { t } = useTranslation();

  return (
    <Page id="landing-page">
      {loading && <div>LOADING...</div>}
      {repository && user && !loading && (
        <div className="columns">
          <div>
            <div>
              <span>{t('common.user')}:</span> {user}
            </div>
            <div>
              <span>{t('common.repository')}:</span> {repository}
            </div>
          </div>
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
    </Page>
  );
};

export default LandingPage;
