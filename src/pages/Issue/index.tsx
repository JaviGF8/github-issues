import config from 'config';
import React, { FC } from 'react';

import IssueType from 'models/types/issue';

import ElementPage from 'components/base/ElementPage';

import IssueBody from 'components/issue/Body';

const getBody = (issue) => <IssueBody issue={issue} />;

const IssuePage: FC = () => (
  <ElementPage<IssueType>
    apiCall={config.api.searchIssueByNumber}
    apiCommentsCall={config.api.searchIssueComments}
    getBody={getBody}
    getTitle={(elem) => elem.title}
  />
);

export default IssuePage;
