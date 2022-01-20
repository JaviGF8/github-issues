import config from 'config';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/base/Button';

import utils from 'utils';

import { IssueCardProps } from './types.d';

import './index.scss';

const IssueCard: FC<IssueCardProps> = ({ issue }) => {
  const { t } = useTranslation();
  return (
    <div className="issue-card">
      <div className="issue-title">
        <h4>
          <Button
            color="transparent"
            text={issue.title}
            to={`${issue.pull_request ? config.url.pr : config.url.issue}/${issue.number}`}
          />
        </h4>
        {issue.pull_request && <span>(PR)</span>}
      </div>
      <div>
        <span>{t('common.user')}:</span> {issue.user.login}
      </div>
      <div className="issue-date">{utils.dateManager.dateToString(new Date(issue.created_at))}</div>
      <div>
        <span>{t('common.comments')}:</span> {issue.comments}
      </div>
      {issue.labels?.length > 0 && (
        <div className="issue-labels">
          {issue.labels.map((label) => (
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

export default IssueCard;
