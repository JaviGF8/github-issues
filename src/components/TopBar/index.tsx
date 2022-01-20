import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import useAppContext from 'hooks/useAppContext';

import './index.scss';

const TopBar: FC = () => {
  const { repository, user } = useAppContext();
  const { t } = useTranslation();

  return repository && user ? (
    <div id="topbar">
      <div>
        <span>{t('common.user')}:</span> {user}
      </div>
      <div>
        <span>{t('common.repository')}:</span> {repository}
      </div>
    </div>
  ) : (
    <div />
  );
};

export default TopBar;
