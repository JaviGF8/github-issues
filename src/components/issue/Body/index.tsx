import React, { FC } from 'react';

import { IssueBodyProps } from './types.d';

import './index.scss';

const IssueBody: FC<IssueBodyProps> = ({ issue }) => (
  <div className="issue-body">
    <code>{issue.body}</code>
  </div>
);

export default IssueBody;
