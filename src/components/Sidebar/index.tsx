import config from 'config';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import Button from 'components/base/Button';
import Input from 'components/base/Input';

import useAppContext from 'hooks/useAppContext';

import './index.scss';

const Sidebar: FC = () => {
  const { loading, repository, search, user } = useAppContext();
  const [disableSearch, setDisableSearch] = useState<boolean>(false);
  const [searchRepo, setSearchRepo] = useState<string>('');
  const [searchUser, setSearchUser] = useState<string>('');
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const onSearch = async () => {
    if (searchUser && searchRepo) {
      search(searchUser, searchRepo);
      setSearchRepo('');
      setSearchUser('');
    }
  };

  useEffect(() => {
    setDisableSearch(
      !searchRepo || !searchUser || (searchUser === user && searchRepo === repository),
    );
  }, [repository, searchRepo, searchUser, user]);

  return (
    <div id="sidebar">
      <h1>
        <Button color="transparent" text="Github Issues" to={config.url.landing} />
      </h1>
      {config.url.landing === pathname && (
        <Input
          name="username"
          onChange={(val: string) => setSearchUser(val)}
          placeholder={t('common.user')}
          value={searchUser}
        />
      )}
      {config.url.landing === pathname && (
        <Input
          name="repository"
          onChange={(val: string) => setSearchRepo(val)}
          placeholder={t('common.repository')}
          value={searchRepo}
        />
      )}
      {config.url.landing === pathname && (
        <Button
          color="secondary"
          disabled={disableSearch || loading}
          onClick={onSearch}
          text={t('common.search')}
        />
      )}
    </div>
  );
};

export default Sidebar;
