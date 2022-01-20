import React, { FC } from 'react';

import { PullRequestBodyProps } from './types.d';

import './index.scss';

const PullRequestBody: FC<PullRequestBodyProps> = ({ pullRequest }) => (
  <div className="pull-request-body">
    <code>{pullRequest.body}</code>
  </div>
);

export default PullRequestBody;
