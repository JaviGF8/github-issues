import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import utils from 'utils';

import { PullRequestCardProps } from './types.d';

import './index.scss';

const PullRequestCard: FC<PullRequestCardProps> = ({ pullRequest }) => {
  const { t } = useTranslation();
  return (
    <div className="pull-request-card">
      <h4>{pullRequest.title}</h4>
      <div>
        <span>{t('common.user')}:</span> {pullRequest.user.login}
      </div>
      <div>
        <span>{t('common.createdAt')}:</span>{' '}
        {utils.dateManager.dateToString(new Date(pullRequest.created_at))}
      </div>
      {pullRequest.labels?.length > 0 && (
        <div className="pull-request-labels">
          {pullRequest.labels.map((label) => (
            <span
              key={label.id}
              style={
                label.color ? { backgroundColor: `#${label.color}`, color: 'black' } : undefined
              }
            >
              {label.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PullRequestCard;
