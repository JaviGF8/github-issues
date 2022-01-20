import config from 'config';
import React, { FC } from 'react';

import PullRequestType from 'models/types/pullRequest';

import ElementPage from 'components/base/ElementPage';

import PullRequestBody from 'components/pullRequest/Body';

const getBody = (pullRequest) => <PullRequestBody pullRequest={pullRequest} />;

const IssuePage: FC = () => (
  <ElementPage<PullRequestType>
    apiCall={config.api.searchPullRequestByNumber}
    apiCommentsCall={config.api.searchIssueComments}
    getBody={getBody}
    getTitle={(elem) => elem.title}
  />
);

export default IssuePage;
